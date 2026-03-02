import fs from 'fs/promises';
import path from 'path';

// We use dynamic imports because notion.js may export variables that require environment vars
const migrate = async () => {
    const { getBlogPosts, getProjects, getDigitalProducts, getSystemStyles, getLandingBlocks, getItemDetails } = await import('../src/lib/notion.js');

    // Setup paths
    const dbPaths = {
        blog: path.join(process.cwd(), 'src/content/blog'),
        projects: path.join(process.cwd(), 'src/content/projects'),
        products: path.join(process.cwd(), 'src/content/products'),
        blocks: path.join(process.cwd(), 'src/content/blocks'),
        settings: path.join(process.cwd(), 'src/content/settings')
    };

    // Ensure directories exist
    for (const dir of Object.values(dbPaths)) {
        await fs.mkdir(dir, { recursive: true });
    }

    // Helper to format Frontmatter
    const generateMarkdown = (frontmatter, content) => {
        let f = `---\n`;
        for (const [k, v] of Object.entries(frontmatter)) {
            if (v === undefined || v === null) continue;
            if (Array.isArray(v)) {
                f += `${k}:\n`;
                v.forEach(i => { f += `  - ${i}\n`; });
            } else if (typeof v === 'boolean' || typeof v === 'number') {
                f += `${k}: ${v}\n`;
            } else if (typeof v === 'string') {
                // Escape quotes
                f += `${k}: "${v.replace(/"/g, '\\"')}"\n`;
            } else if (typeof v === 'object') {
                // For 'cover' if it's not a primitive string (but here we'll map cover to a string src)
                if (v.src !== undefined) {
                    f += `${k}: "${v.src.replace(/"/g, '\\"')}"\n`;
                }
            }
        }
        f += `---\n\n`;
        // Insert markdown content
        f += content || '';
        return f;
    };

    console.log("Starting Migration from Notion to Keystatic...");

    // 1. System Styles (Singleton JSON)
    console.log("Fetching System Styles...");
    const stylesMap = await getSystemStyles();
    // Convert object { key: { value, type } } to array of { key, value, type }
    const stylesArray = [];
    for (const [key, data] of Object.entries(stylesMap)) {
        stylesArray.push({ key, value: data.value, type: data.type });
    }
    await fs.writeFile(path.join(dbPaths.settings, 'system-styles.json'), JSON.stringify({ properties: stylesArray }, null, 2));
    console.log(`✅ System Styles migrated`);

    // 2. Landing Page Blocks (Collection JSON)
    console.log("Fetching Landing Page Blocks...");
    const blocks = await getLandingBlocks();
    for (const block of blocks) {
        if (!block.name) continue;
        const slug = block.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        // Remove 'id' as it's not in schema
        const blockData = {
            name: slug,
            componentName: block.componentName || '',
            orderId: block.orderId || 0,
            title: block.title || '',
            subtitle: block.subtitle || '',
            media: block.media || '',
            ctaText: block.ctaText || '',
            ctaLink: block.ctaLink || '',
            secondaryCtaText: block.secondaryCtaText || '',
            secondaryCtaLink: block.secondaryCtaLink || '',
            checklists: block.checklists || '',
        };
        await fs.writeFile(path.join(dbPaths.blocks, `${slug}.json`), JSON.stringify(blockData, null, 2));
    }
    console.log(`✅ ${blocks.length} Landing Blocks migrated`);

    // 3. Blog Posts (Markdown)
    console.log("Fetching Blog Posts...");
    const blogRes = await getBlogPosts();
    for (const item of blogRes.items) {
        if (!item.slug) continue;
        const details = await getItemDetails(item.slug, process.env.NOTION_BLOG_DATABASE_ID);
        const frontmatter = {
            title: item.title || '',
            date: item.date || '',
            category: item.category || 'Technology',
            tags: item.tags || [],
            excerpt: item.excerpt || '',
            featured: item.featured || false,
            cover: item.cover || ''
        };
        const mdContent = details?.content || '';
        await fs.writeFile(path.join(dbPaths.blog, `${item.slug}.md`), generateMarkdown(frontmatter, mdContent));
        console.log(`   - Blog: ${item.title}`);
    }

    // 4. Projects (Markdown)
    console.log("Fetching Projects...");
    const projRes = await getProjects();
    for (const item of projRes.items) {
        if (!item.slug) continue;
        const details = await getItemDetails(item.slug, process.env.NOTION_PROJECT_DATABASE_ID);
        const frontmatter = {
            title: item.title || '',
            date: item.date || '',
            industry: item.industry || '',
            techStack: item.techStack || [],
            liveUrl: item.liveUrl || '',
            description: item.description || '',
            cover: item.cover || ''
        };
        const mdContent = details?.content || '';
        await fs.writeFile(path.join(dbPaths.projects, `${item.slug}.md`), generateMarkdown(frontmatter, mdContent));
        console.log(`   - Project: ${item.title}`);
    }

    // 5. Products (Markdown)
    console.log("Fetching Products...");
    const prodRes = await getDigitalProducts();
    for (const item of prodRes.items) {
        if (!item.slug) continue;
        const details = await getItemDetails(item.slug, process.env.NOTION_PRODUCT_DATABASE_ID);
        const frontmatter = {
            title: item.title || '',
            price: item.price || 0,
            discountPrice: item.discountPrice || 0,
            productType: item.productType || 'Template',
            description: item.description || '',
            features: item.features || [],
            checkoutUrl: item.checkoutUrl || '',
            isFreebie: item.isFreebie || false,
            cover: item.cover || ''
        };
        const mdContent = details?.content || '';
        await fs.writeFile(path.join(dbPaths.products, `${item.slug}.md`), generateMarkdown(frontmatter, mdContent));
        console.log(`   - Product: ${item.title}`);
    }

    console.log("🎉 All data successfully migrated to local files!");
};

migrate().catch(console.error);

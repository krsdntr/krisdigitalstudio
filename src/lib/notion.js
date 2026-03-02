import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
    auth: import.meta.env.NOTION_SECRET,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// Helper to safely extract Notion properties
const getPlainText = (property) => property?.rich_text?.[0]?.plain_text || property?.title?.[0]?.plain_text || '';
const getSelectName = (property) => property?.select?.name || '';
const getMultiSelectNames = (property) => property?.multi_select?.map(item => item.name) || [];
const getDateStr = (property) => property?.date?.start || '';
const getUrl = (property) => {
    let url = property?.url || '';
    if (url && !url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
        url = 'https://' + url;
    }
    return url;
};
const getNumber = (property) => property?.number || 0;
const getCheckbox = (property) => property?.checkbox || false;
const getCoverUrl = (item) => item.cover?.external?.url || item.cover?.file?.url || '';
const getFileUrl = (property) => property?.files?.[0]?.file?.url || property?.files?.[0]?.external?.url || '';

// 1. Fetch System Styles
export const getSystemStyles = async () => {
    const databaseId = import.meta.env.NOTION_STYLES_DATABASE_ID;
    if (!databaseId) return {};

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done',
                },
            },
        });

        const styles = {};
        response.results.forEach((item) => {
            const key = getPlainText(item.properties.Key);
            const value = getPlainText(item.properties.Value);
            const type = getSelectName(item.properties.Type);

            if (key) {
                styles[key] = { value, type };
            }
        });

        return styles;
    } catch (error) {
        console.error(`Error fetching System Styles:`, error.message || error, error.cause || '');
        return {};
    }
};

// 2. Fetch Landing Page Blocks
export const getLandingBlocks = async () => {
    const databaseId = import.meta.env.NOTION_LANDING_DATABASE_ID;
    if (!databaseId) return [];

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done',
                },
            },
            sorts: [
                {
                    property: 'Order ID',
                    direction: 'ascending',
                },
            ],
        });

        return response.results.map((item) => ({
            id: item.id,
            name: getPlainText(item.properties.Name),
            componentName: getPlainText(item.properties['Component Name']) || getSelectName(item.properties['Component Name']),
            orderId: getNumber(item.properties['Order ID']),
            title: getPlainText(item.properties.Title),
            subtitle: getPlainText(item.properties['Subtitle/Content']),
            media: getFileUrl(item.properties['Media/Image']),
            ctaText: getPlainText(item.properties['Call to Action Text']),
            ctaLink: getUrl(item.properties['Call to Action Link']),
            secondaryCtaText: getPlainText(item.properties['Secondary CTA Text']),
            secondaryCtaLink: getUrl(item.properties['Secondary CTA Link']),
            checklists: getPlainText(item.properties['Checklist Items'])
        }));
    } catch (error) {
        console.error(`Error fetching Landing Page Blocks:`, error.message || error, error.cause || '');
        return [];
    }
};

// 3/4/5. Generic Fetch Content Items (Blog, Project, Products)
export const getPublishedItems = async (databaseId, customMapper = null, options = {}) => {
    if (!databaseId) return { items: [], nextCursor: null, hasMore: false };

    const { startCursor = undefined, pageSize = 100 } = options;

    try {
        const queryArgs = {
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done',
                },
            },
            sorts: [
                {
                    timestamp: 'created_time',
                    direction: 'descending',
                },
            ],
            page_size: pageSize,
        };

        if (startCursor) {
            queryArgs.start_cursor = startCursor;
        }

        const response = await notion.databases.query(queryArgs);

        const items = response.results.map((item) => {
            // Base mapper
            const baseObj = {
                id: item.id,
                title: getPlainText(item.properties.Name || item.properties.Title || item.properties['Project Name'] || item.properties['Product Name']),
                slug: getPlainText(item.properties.Slug),
                cover: getCoverUrl(item) || getFileUrl(item.properties.Thumbnail),
            };

            // Apply custom mapping if provided, otherwise return base
            return customMapper ? { ...baseObj, ...customMapper(item) } : baseObj;
        });

        return {
            items,
            nextCursor: response.next_cursor,
            hasMore: response.has_more
        };
    } catch (error) {
        console.error(`Error fetching from database ${databaseId}:`, error);
        return { items: [], nextCursor: null, hasMore: false };
    }
};

// Specific Mappers for the 3 Content Types
export const getBlogPosts = async (options = {}) => {
    return getPublishedItems(import.meta.env.NOTION_BLOG_DATABASE_ID, (item) => ({
        date: getDateStr(item.properties['Published Date']),
        category: getSelectName(item.properties.Category),
        tags: getMultiSelectNames(item.properties.Tags),
        excerpt: getPlainText(item.properties.Excerpt),
        featured: getCheckbox(item.properties.Featured),
    }), options);
};

export const getProjects = async (options = {}) => {
    return getPublishedItems(import.meta.env.NOTION_PROJECT_DATABASE_ID, (item) => ({
        date: getDateStr(item.properties['Completion Date']),
        industry: getSelectName(item.properties.Industry),
        techStack: getMultiSelectNames(item.properties['Tech Stack']),
        liveUrl: getUrl(item.properties['Live URL']),
        description: getPlainText(item.properties['Short Description']),
    }), options);
};

export const getDigitalProducts = async (options = {}) => {
    return getPublishedItems(import.meta.env.NOTION_PRODUCT_DATABASE_ID, (item) => ({
        price: getNumber(item.properties.Price),
        discountPrice: getNumber(item.properties['Discount Price']),
        productType: getSelectName(item.properties['Product Type']),
        description: getPlainText(item.properties['Short Desc']),
        features: getMultiSelectNames(item.properties.Features),
        checkoutUrl: getUrl(item.properties['Checkout URL']),
        isFreebie: getCheckbox(item.properties['Is Freebie?']),
    }), options);
};

// Generic Fetch Single Item Details (for dynamic routes)
export const getItemDetails = async (slug, databaseId) => {
    if (!databaseId) return null;
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Slug',
                rich_text: {
                    equals: slug,
                },
            },
        });

        const item = response.results[0];
        if (!item) return null;

        const title = getPlainText(item.properties.Name || item.properties.Title || item.properties['Project Name'] || item.properties['Product Name']);
        const mdBlocks = await n2m.pageToMarkdown(item.id);
        const content = n2m.toMarkdownString(mdBlocks);

        // Provide a generic object that pages can interpret
        return {
            rawItem: item, // In case page needs specific properties
            id: item.id,
            title,
            content: typeof content === 'string' ? content : (content?.parent || ''),
            cover: getCoverUrl(item) || getFileUrl(item.properties.Thumbnail),
            slug
        };
    } catch (error) {
        console.error(`Error fetching details for slug ${slug}:`, error);
        return null;
    }
};

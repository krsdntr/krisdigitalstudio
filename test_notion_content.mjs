import { getItemDetails } from './src/lib/notion.js';

async function test() {
    process.env.NOTION_BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID; // already loaded by node --env-file
    // The slug is "5-strategi-digital-marketing-untuk-pemula-di-tahun-2026" based on the image
    const content = await getItemDetails("5-strategi-digital-marketing-untuk-pemula-di-tahun-2026", process.env.NOTION_BLOG_DATABASE_ID);
    console.log("Returned content type:", typeof content?.content);
    console.log("Returned content snippet:", String(content?.content).substring(0, 100));
    console.log("Full Object:", Object.keys(content || {}));
}

test();

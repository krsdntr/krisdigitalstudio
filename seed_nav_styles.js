import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const stylesDbMatch = env.match(/NOTION_STYLES_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const dbId = stylesDbMatch[1].trim();

const extraNavStyles = [
    { name: "Nav Link 1 Text", key: "nav_link_1_text", value: "Tentang", type: "text" },
    { name: "Nav Link 1 URL", key: "nav_link_1_url", value: "/#about", type: "text" },
    { name: "Nav Link 2 Text", key: "nav_link_2_text", value: "Projects", type: "text" },
    { name: "Nav Link 2 URL", key: "nav_link_2_url", value: "/projects", type: "text" },
    { name: "Nav Link 3 Text", key: "nav_link_3_text", value: "Produk", type: "text" },
    { name: "Nav Link 3 URL", key: "nav_link_3_url", value: "/products", type: "text" },
    { name: "Nav Link 4 Text", key: "nav_link_4_text", value: "Artikel", type: "text" },
    { name: "Nav Link 4 URL", key: "nav_link_4_url", value: "/blog", type: "text" },
    { name: "Nav Link 5 Text", key: "nav_link_5_text", value: "Harga", type: "text" },
    { name: "Nav Link 5 URL", key: "nav_link_5_url", value: "/#pricing", type: "text" },
    { name: "Nav Link 6 Text", key: "nav_link_6_text", value: "FAQ", type: "text" },
    { name: "Nav Link 6 URL", key: "nav_link_6_url", value: "/#faq", type: "text" },
    { name: "Header CTA Text", key: "header_cta_text", value: "Hubungi Saya", type: "text" },
];

async function seedNavStyles() {
    try {
        for (const style of extraNavStyles) {
            await notion.pages.create({
                parent: { database_id: dbId },
                properties: {
                    "Name": { title: [{ text: { content: style.name } }] },
                    "Key": { rich_text: [{ text: { content: style.key } }] },
                    "Value": { rich_text: [{ text: { content: style.value } }] },
                    "Type": { select: { name: style.type } },
                    "Status": { status: { name: "Done" } }
                }
            });
            console.log(`Created style: ${style.name}`);
        }
        console.log("Nav Styles populated successfully!");
    } catch (e) {
        console.error("Error creating styles:", e.body || e);
    }
}
seedNavStyles();

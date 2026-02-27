import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const stylesDbMatch = env.match(/NOTION_STYLES_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const dbId = stylesDbMatch[1].trim();

const brandStyles = [
    { name: "Brand Name", key: "brand_name", value: "KrisDigital Studio", type: "text" },
    { name: "Brand Tagline", key: "brand_tagline", value: "Bikin Bisnis Lebih Laris dengan Website Otomatis", type: "text" },
    { name: "Brand Instagram", key: "brand_instagram", value: "krisdntro", type: "text" },
    { name: "Brand WhatsApp", key: "brand_whatsapp", value: "6285186816062", type: "text" },
    { name: "Footer Copyright", key: "footer_copyright", value: "© 2026 All rights reserved.", type: "text" },
];

async function seedBrandStyles() {
    try {
        for (const style of brandStyles) {
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
        console.log("Brand Styles populated successfully!");
    } catch (e) {
        console.error("Error creating styles:", e.body || e);
    }
}
seedBrandStyles();

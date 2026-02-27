import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const stylesDbMatch = env.match(/NOTION_STYLES_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const dbId = stylesDbMatch[1].trim();

const defaultStyles = [
    { name: "Primary Color", key: "primary_color", value: "#2563EB", type: "color" },
    { name: "Dark Mode Color", key: "dark_mode_color", value: "#0F172A", type: "color" },
    { name: "Site Name", key: "site_name", value: "KrisDigital Studio", type: "text" },
    { name: "Site Description", key: "site_description", value: "Bikin Bisnis Lebih Laris dengan Website Otomatis", type: "text" },
];

async function seedStyles() {
    try {
        for (const style of defaultStyles) {
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
        console.log("System Styles populated successfully!");
    } catch (e) {
        console.error("Error creating styles:", e.body || e);
    }
}
seedStyles();

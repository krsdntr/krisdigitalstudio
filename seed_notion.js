import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const dbMatch = env.match(/NOTION_LANDING_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const dbId = dbMatch[1].trim();

async function seed() {
    try {
        await notion.pages.create({
            parent: { database_id: dbId },
            properties: {
                "Name": { title: [{ text: { content: "Main Hero Section" } }] },
                "Component Name": { rich_text: [{ text: { content: "Hero" } }] },
                "Order ID": { number: 1 },
                "Title": { rich_text: [{ text: { content: "Bikin Bisnis Lebih Laris dengan Website Otomatis" } }] },
                "Subtitle/Content": { rich_text: [{ text: { content: "Jangan biarkan pelanggan kabur karena ribet tanya harga manual. Tampilkan produk dan portfolio 24/7." } }] },
                "Status": { status: { name: "Done" } }
            }
        });

        await notion.pages.create({
            parent: { database_id: dbId },
            properties: {
                "Name": { title: [{ text: { content: "Problem Section" } }] },
                "Component Name": { rich_text: [{ text: { content: "Problem" } }] },
                "Order ID": { number: 2 },
                "Title": { rich_text: [{ text: { content: "Sering Dibalas Pas Lagi Sibuk?" } }] },
                "Subtitle/Content": { rich_text: [{ text: { content: "Pelanggan sering kabur karena respon lama. Tingkatkan closing rate dengan website profesional." } }] },
                "Status": { status: { name: "Done" } }
            }
        });
        console.log("Pages created successfully in Notion!");
    } catch (e) {
        console.error(e.body || e);
    }
}
seed();

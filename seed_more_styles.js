import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const stylesDbMatch = env.match(/NOTION_STYLES_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const dbId = stylesDbMatch[1].trim();

const extraStyles = [
    { name: "Secondary Color", key: "secondary_color", value: "#1E293B", type: "color" },
    { name: "Accent Color", key: "accent_color", value: "#38BDF8", type: "color" },
    { name: "Background Color", key: "background_color", value: "#F8FAFC", type: "color" },
    { name: "Text Color", key: "text_color", value: "#334155", type: "color" },
    { name: "Heading Font", key: "font_family_heading", value: "Inter, sans-serif", type: "text" },
    { name: "Body Font", key: "font_family_body", value: "Inter, sans-serif", type: "text" },
    { name: "WhatsApp Number", key: "whatsapp_number", value: "6281234567890", type: "text" },
    { name: "Instagram Username", key: "instagram_username", value: "krisdigitalstudio", type: "text" },
    { name: "Email Address", key: "email_address", value: "hello@krisdigital.com", type: "text" },
    { name: "Footer Text", key: "footer_text", value: "© 2026 Kris. All rights reserved.", type: "text" },
    { name: "Hero Image URL", key: "hero_image_url", value: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", type: "url" },
    { name: "Logo URL", key: "logo_url", value: "", type: "url" },
    { name: "Meta Image URL", key: "meta_image_url", value: "", type: "url" }
];

async function seedStyles() {
    try {
        for (const style of extraStyles) {
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
        console.log("Extra System Styles populated successfully!");
    } catch (e) {
        console.error("Error creating styles:", e.body || e);
    }
}
seedStyles();

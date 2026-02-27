import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);

const DBs = {
    Styles: env.match(/NOTION_STYLES_DATABASE_ID=(.*)/)[1].trim(),
    Landing: env.match(/NOTION_LANDING_DATABASE_ID=(.*)/)[1].trim(),
    Blog: env.match(/NOTION_BLOG_DATABASE_ID=(.*)/)[1].trim(),
    Project: env.match(/NOTION_PROJECT_DATABASE_ID=(.*)/)[1].trim(),
    Product: env.match(/NOTION_PRODUCT_DATABASE_ID=(.*)/)[1].trim(),
};

const notion = new Client({ auth: secretMatch[1].trim() });

async function checkAll() {
    for (const [name, id] of Object.entries(DBs)) {
        try {
            const db = await notion.databases.retrieve({ database_id: id });
            console.log(`\n\n--- ${name} Database ---`);
            const statusProperty = db.properties['Status'];
            if (statusProperty) {
                console.log(`Status type: ${statusProperty.type}`);
                if (statusProperty.type === 'status') {
                    console.log(`Status options: ${statusProperty.status.options.map(o => o.name).join(', ')}`);
                } else if (statusProperty.type === 'select') {
                    console.log(`Status options: ${statusProperty.select.options.map(o => o.name).join(', ')}`);
                }
            } else {
                console.log("No Status property found");
            }
        } catch (e) {
            console.error(`Error with ${name}: ${e.message}`);
        }
    }
}

checkAll();

import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const stylesDbMatch = env.match(/NOTION_STYLES_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });

async function checkSchema() {
    try {
        const db = await notion.databases.retrieve({ database_id: stylesDbMatch[1].trim() });
        console.log(JSON.stringify(db.properties, null, 2));
    } catch (e) {
        console.error(e);
    }
}

checkSchema();

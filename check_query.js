import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const dbMatch = env.match(/NOTION_LANDING_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });

async function checkQuery() {
    try {
        const response = await notion.databases.query({
            database_id: dbMatch[1].trim(),
            filter: {
                property: 'Status',
                status: {
                    equals: 'Published',
                },
            },
        });
        console.log(response);
    } catch (e) {
        console.error(e.message);
    }
}

checkQuery();

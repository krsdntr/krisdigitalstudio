import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const dbMatch = env.match(/NOTION_PROJECT_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });

async function testNotion() {
    try {
        console.log("Database ID:", dbMatch[1].trim());
        const response = await notion.databases.query({
            database_id: dbMatch[1].trim(),
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done',
                },
            },
        });
        console.log("Success! Found", response.results.length, "items.");
        response.results.forEach(r => {
            console.log("Item:", r.properties.Name?.title?.[0]?.plain_text || r.properties['Project Name']?.title?.[0]?.plain_text, r.properties.Status?.status?.name);
        });
    } catch (e) {
        console.error("Error:", e.message);
    }
}

testNotion();

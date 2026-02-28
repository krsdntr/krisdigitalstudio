import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const dbMatch = env.match(/NOTION_PROJECT_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });

async function testNotion() {
    try {
        const response = await notion.databases.query({
            database_id: dbMatch[1].trim(),
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done',
                },
            },
        });
        const properties = response.results[0].properties;
        console.log(Object.keys(properties));

        const getPlainText = (property) => property?.rich_text?.[0]?.plain_text || property?.title?.[0]?.plain_text || '';
        const title = getPlainText(properties.Name || properties.Title || properties['Project Name'] || properties['Product Name']);
        console.log("Extracted title:", title);

    } catch (e) {
        console.error("Error:", e.message);
    }
}

testNotion();

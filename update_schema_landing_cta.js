import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const landingDbMatch = env.match(/NOTION_LANDING_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const landingDbId = landingDbMatch[1].trim();

async function updateLandingSchema() {
    try {
        await notion.databases.update({
            database_id: landingDbId,
            properties: {
                "Secondary CTA Text": {
                    rich_text: {}
                },
                "Secondary CTA Link": {
                    url: {}
                },
                "Checklist Items": {
                    rich_text: {}
                }
            }
        });
        console.log("Landing Database updated with Secondary CTA and Checklists!");
    } catch (e) {
        console.error("Error updating schema:", e.body || e);
    }
}
updateLandingSchema();

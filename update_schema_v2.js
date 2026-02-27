import fs from 'fs';
import { Client } from '@notionhq/client';

const env = fs.readFileSync('.env.local', 'utf-8');
const secretMatch = env.match(/NOTION_SECRET=(.*)/);
const landingDbMatch = env.match(/NOTION_LANDING_DATABASE_ID=(.*)/);

const notion = new Client({ auth: secretMatch[1].trim() });
const landingDbId = landingDbMatch[1].trim();

async function updateSchema() {
    try {
        await notion.databases.update({
            database_id: landingDbId,
            properties: {
                "Component Name": {
                    select: {
                        options: [
                            { name: "Hero" },
                            { name: "Problem" },
                            { name: "Process" },
                            { name: "Projects" },
                            { name: "Urgency" },
                            { name: "Pricing" },
                            { name: "FAQ" },
                            { name: "Profile" },
                            { name: "CallToAction" },
                            { name: "Products" },
                            { name: "Articles" },
                            { name: "TextMedia" }
                        ]
                    }
                }
            }
        });
        console.log("Database Dropdown options updated successfully!");
    } catch (e) {
        console.error("Error setting dropdown:", e.body || e);
    }
}
updateSchema();

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
                            { name: "Hero", color: "blue" },
                            { name: "Problem", color: "red" },
                            { name: "Process", color: "yellow" },
                            { name: "Portfolio", color: "green" },
                            { name: "Urgency", color: "orange" },
                            { name: "Pricing", color: "purple" },
                            { name: "FAQ", color: "gray" },
                            { name: "Profile", color: "pink" },
                            { name: "CallToAction", color: "default" }
                        ]
                    }
                }
            }
        });
        console.log("Landing Database 'Component Name' Select Options updated successfully!");
    } catch (e) {
        console.error("Error updating Component Name options:", e.body || e);
    }
}
updateSchema();

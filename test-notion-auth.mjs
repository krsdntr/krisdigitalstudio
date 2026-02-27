import { Client } from '@notionhq/client';

console.log("Secret:", process.env.NOTION_SECRET?.substring(0, 10) + "...");

const notion = new Client({ auth: process.env.NOTION_SECRET });

const ids = [
  { name: 'Styles', id: '313cf171aba6804296ace4641df4406f' },
  { name: 'Landing', id: process.env.NOTION_LANDING_DATABASE_ID },
  { name: 'Blog', id: process.env.NOTION_BLOG_DATABASE_ID },
  { name: 'Portfolio', id: process.env.NOTION_PORTFOLIO_DATABASE_ID },
  { name: 'Product', id: process.env.NOTION_PRODUCT_DATABASE_ID }
];

async function test() {
  for (const { name, id } of ids) {
    try {
      console.log(`Testing ${name} (${id})...`);
      const response = await notion.databases.retrieve({ database_id: id });
      console.log(`SUCCESS [${name}]:`, response.title?.[0]?.plain_text);
    } catch (e) {
      console.error(`ERROR [${name}]:`, e.message);
    }
  }
}

test();

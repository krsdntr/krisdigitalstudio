import { Client } from '@notionhq/client';
console.log(Object.keys(Client.prototype || {}));
const notion = new Client({ auth: 'secret' });
console.log(Object.keys(notion));
console.log(Object.keys(notion.databases || {}));

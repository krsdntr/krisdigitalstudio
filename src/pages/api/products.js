import { getDigitalProducts } from '../../lib/notion.js';

export const prerender = false;

export async function GET({ request }) {
    const url = new URL(request.url);
    const cursor = url.searchParams.get('cursor');

    if (!cursor) {
        return new Response(JSON.stringify({ items: [], hasMore: false, nextCursor: null }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const data = await getDigitalProducts({ startCursor: cursor, pageSize: 12 });
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

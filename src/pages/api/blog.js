import { getCollection } from 'astro:content';

export const prerender = false;

export async function GET({ request }) {
    const url = new URL(request.url);
    const cursorStr = url.searchParams.get('cursor') || '0';
    const cursor = parseInt(cursorStr, 10);
    const PAGE_SIZE = 12;

    try {
        const allItems = await getCollection('blog');
        allItems.sort((a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime());

        const sliced = allItems.slice(cursor, cursor + PAGE_SIZE);
        const mapped = sliced.map(p => ({ id: p.id, slug: p.id, ...p.data, cover: p.data.cover?.src || p.data.cover, coverUrl: p.data.coverUrl }));

        const nextCursor = cursor + PAGE_SIZE;
        const hasMore = nextCursor < allItems.length;

        return new Response(JSON.stringify({
            items: mapped,
            hasMore,
            nextCursor: hasMore ? nextCursor.toString() : null
        }), {
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

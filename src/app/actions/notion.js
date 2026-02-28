"use server";

import { getBlogPosts, getProjects, getDigitalProducts } from "../../lib/notion";

export async function fetchMorePosts(cursor) {
    if (!cursor) return { items: [], hasMore: false, nextCursor: null };
    return await getBlogPosts({ startCursor: cursor, pageSize: 12 });
}

export async function fetchMoreProjects(cursor) {
    if (!cursor) return { items: [], hasMore: false, nextCursor: null };
    return await getProjects({ startCursor: cursor, pageSize: 12 });
}

export async function fetchMoreProducts(cursor) {
    if (!cursor) return { items: [], hasMore: false, nextCursor: null };
    return await getDigitalProducts({ startCursor: cursor, pageSize: 12 });
}

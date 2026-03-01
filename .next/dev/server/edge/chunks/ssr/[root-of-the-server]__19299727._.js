(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/ssr/[root-of-the-server]__19299727._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-edge-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[project]/src/lib/notion.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogPosts",
    ()=>getBlogPosts,
    "getDigitalProducts",
    ()=>getDigitalProducts,
    "getItemDetails",
    ()=>getItemDetails,
    "getLandingBlocks",
    ()=>getLandingBlocks,
    "getProjects",
    ()=>getProjects,
    "getPublishedItems",
    ()=>getPublishedItems,
    "getSystemStyles",
    ()=>getSystemStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@notionhq/client/build/src/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notion$2d$to$2d$md$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/notion-to-md/build/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/react.react-server.js [app-edge-rsc] (ecmascript)");
;
;
;
const notion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["Client"]({
    auth: process.env.NOTION_SECRET
});
const n2m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notion$2d$to$2d$md$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["NotionToMarkdown"]({
    notionClient: notion
});
// Helper to safely extract Notion properties
const getPlainText = (property)=>property?.rich_text?.[0]?.plain_text || property?.title?.[0]?.plain_text || '';
const getSelectName = (property)=>property?.select?.name || '';
const getMultiSelectNames = (property)=>property?.multi_select?.map((item)=>item.name) || [];
const getDateStr = (property)=>property?.date?.start || '';
const getUrl = (property)=>{
    let url = property?.url || '';
    if (url && !url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
        url = 'https://' + url;
    }
    return url;
};
const getNumber = (property)=>property?.number || 0;
const getCheckbox = (property)=>property?.checkbox || false;
const getCoverUrl = (item)=>item.cover?.external?.url || item.cover?.file?.url || '';
const getFileUrl = (property)=>property?.files?.[0]?.file?.url || property?.files?.[0]?.external?.url || '';
const getSystemStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const databaseId = process.env.NOTION_STYLES_DATABASE_ID;
    if (!databaseId) return {};
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done'
                }
            }
        });
        const styles = {};
        response.results.forEach((item)=>{
            const key = getPlainText(item.properties.Key);
            const value = getPlainText(item.properties.Value);
            const type = getSelectName(item.properties.Type);
            if (key) {
                styles[key] = {
                    value,
                    type
                };
            }
        });
        return styles;
    } catch (error) {
        console.error(`Error fetching System Styles:`, error.message || error, error.cause || '');
        return {};
    }
});
const getLandingBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const databaseId = process.env.NOTION_LANDING_DATABASE_ID;
    if (!databaseId) return [];
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done'
                }
            },
            sorts: [
                {
                    property: 'Order ID',
                    direction: 'ascending'
                }
            ]
        });
        return response.results.map((item)=>({
                id: item.id,
                name: getPlainText(item.properties.Name),
                componentName: getPlainText(item.properties['Component Name']) || getSelectName(item.properties['Component Name']),
                orderId: getNumber(item.properties['Order ID']),
                title: getPlainText(item.properties.Title),
                subtitle: getPlainText(item.properties['Subtitle/Content']),
                media: getFileUrl(item.properties['Media/Image']),
                ctaText: getPlainText(item.properties['Call to Action Text']),
                ctaLink: getUrl(item.properties['Call to Action Link']),
                secondaryCtaText: getPlainText(item.properties['Secondary CTA Text']),
                secondaryCtaLink: getUrl(item.properties['Secondary CTA Link']),
                checklists: getPlainText(item.properties['Checklist Items'])
            }));
    } catch (error) {
        console.error(`Error fetching Landing Page Blocks:`, error.message || error, error.cause || '');
        return [];
    }
});
const getPublishedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async (databaseId, customMapper = null, options = {})=>{
    if (!databaseId) return {
        items: [],
        nextCursor: null,
        hasMore: false
    };
    const { startCursor = undefined, pageSize = 100 } = options;
    try {
        const queryArgs = {
            database_id: databaseId,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done'
                }
            },
            sorts: [
                {
                    timestamp: 'created_time',
                    direction: 'descending'
                }
            ],
            page_size: pageSize
        };
        if (startCursor) {
            queryArgs.start_cursor = startCursor;
        }
        const response = await notion.databases.query(queryArgs);
        const items = response.results.map((item)=>{
            // Base mapper
            const baseObj = {
                id: item.id,
                title: getPlainText(item.properties.Name || item.properties.Title || item.properties['Project Name'] || item.properties['Product Name']),
                slug: getPlainText(item.properties.Slug),
                cover: getCoverUrl(item) || getFileUrl(item.properties.Thumbnail)
            };
            // Apply custom mapping if provided, otherwise return base
            return customMapper ? {
                ...baseObj,
                ...customMapper(item)
            } : baseObj;
        });
        return {
            items,
            nextCursor: response.next_cursor,
            hasMore: response.has_more
        };
    } catch (error) {
        console.error(`Error fetching from database ${databaseId}:`, error);
        return {
            items: [],
            nextCursor: null,
            hasMore: false
        };
    }
});
const getBlogPosts = async (options = {})=>{
    return getPublishedItems(process.env.NOTION_BLOG_DATABASE_ID, (item)=>({
            date: getDateStr(item.properties['Published Date']),
            category: getSelectName(item.properties.Category),
            tags: getMultiSelectNames(item.properties.Tags),
            excerpt: getPlainText(item.properties.Excerpt),
            featured: getCheckbox(item.properties.Featured)
        }), options);
};
const getProjects = async (options = {})=>{
    return getPublishedItems(process.env.NOTION_PROJECT_DATABASE_ID, (item)=>({
            date: getDateStr(item.properties['Completion Date']),
            industry: getSelectName(item.properties.Industry),
            techStack: getMultiSelectNames(item.properties['Tech Stack']),
            liveUrl: getUrl(item.properties['Live URL']),
            description: getPlainText(item.properties['Short Description'])
        }), options);
};
const getDigitalProducts = async (options = {})=>{
    return getPublishedItems(process.env.NOTION_PRODUCT_DATABASE_ID, (item)=>({
            price: getNumber(item.properties.Price),
            discountPrice: getNumber(item.properties['Discount Price']),
            productType: getSelectName(item.properties['Product Type']),
            description: getPlainText(item.properties['Short Desc']),
            features: getMultiSelectNames(item.properties.Features),
            checkoutUrl: getUrl(item.properties['Checkout URL']),
            isFreebie: getCheckbox(item.properties['Is Freebie?'])
        }), options);
};
const getItemDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async (slug, databaseId)=>{
    if (!databaseId) return null;
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Slug',
                rich_text: {
                    equals: slug
                }
            }
        });
        const item = response.results[0];
        if (!item) return null;
        const title = getPlainText(item.properties.Name || item.properties.Title || item.properties['Project Name'] || item.properties['Product Name']);
        const mdBlocks = await n2m.pageToMarkdown(item.id);
        const content = n2m.toMarkdownString(mdBlocks);
        // Provide a generic object that pages can interpret
        return {
            rawItem: item,
            id: item.id,
            title,
            content: typeof content === 'string' ? content : content?.parent || '',
            cover: getCoverUrl(item) || getFileUrl(item.properties.Thumbnail),
            slug
        };
    } catch (error) {
        console.error(`Error fetching details for slug ${slug}:`, error);
        return null;
    }
});
}),
"[project]/src/app/layout.jsx [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-edge-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'Kris',
    description: 'Bikin Bisnis Lebih Laris dengan Website Otomatis'
};
const revalidate = 3600; // Cache system styles for 1 hour
async function RootLayout({ children }) {
    const styles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getSystemStyles"])();
    // Create inline CSS variables based on Notion configuration
    const cssVars = {
        '--color-primary': styles.primary_color?.value || '#2563EB',
        '--color-dark': styles.dark_mode_color?.value || '#0F172A'
    };
    // Override metadata if strictly defined in Notion
    if (styles.site_name) metadata.title = styles.site_name.value;
    if (styles.site_description) metadata.description = styles.site_description.value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "id",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            style: cssVars,
            className: "relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-[20%] -right-[10%] w-[70%] h-[70vh] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[20%] -left-[10%] w-[60%] h-[60vh] bg-indigo-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "relative z-10",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.jsx [app-edge-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-edge-rsc] (ecmascript)"));
}),
"[project]/src/components/HeaderClient.jsx [app-edge-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/HeaderClient.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/HeaderClient.jsx <module evaluation>", "default");
}),
"[project]/src/components/HeaderClient.jsx [app-edge-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$server$2e$edge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/HeaderClient.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/HeaderClient.jsx", "default");
}),
"[project]/src/components/HeaderClient.jsx [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderClient$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/HeaderClient.jsx [app-edge-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderClient$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/HeaderClient.jsx [app-edge-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderClient$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Header.jsx [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderClient$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderClient.jsx [app-edge-rsc] (ecmascript)");
;
;
;
async function Header() {
    const styles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getSystemStyles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderClient$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        styles: styles
    }, void 0, false, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/data/agencyConfig.js [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agencyConfig",
    ()=>agencyConfig
]);
const agencyConfig = {
    brand: {
        name: "Kris",
        tagline: "Bikin Bisnis Lebih Laris dengan Website Otomatis",
        whatsappNumber: "6285186816062",
        instagram: "krisdntro"
    },
    profile: {
        name: "Krisdiantoro",
        role: "Web Developer",
        location: "Desa Babakan, Kec. Dramaga, Kab. Bogor, Jawa Barat 16680",
        bio: "Kepercayaan adalah modal utama bisnis online. Saya berdedikasi membantu pemilik bisnis lokal meningkatkan kehadiran digital mereka dengan solusi yang transparan, hemat, dan efektif.",
        photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQHc_UAZZVrmTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695268091355?e=1773273600&v=beta&t=wtmqEHMaa4afVXvsDtIFJitlk2wIC24-TA32NuAMWq8"
    },
    problem: {
        title: "Masih Pakai Cara Lama? Awas Bisnis Jalan di Tempat!",
        items: [
            {
                icon: "Clock",
                title: "Habis Waktu Balas Chat",
                desc: "Capek jelasin menu & harga berulang-ulang ke setiap calon pembeli."
            },
            {
                icon: "TrendingDown",
                title: "Kalah Saing",
                desc: "Kompetitor sudah punya website keren, Anda masih modal broadcast WA manual."
            },
            {
                icon: "XCircle",
                title: "Kredibilitas Dipertanyakan",
                desc: "Pembeli ragu transfer karena tidak ada 'wajah' bisnis yang resmi di Google."
            }
        ]
    },
    urgency: {
        title: "Khusus 5 Orang Tercepat Bulan Ini",
        subtitle: "Dapatkan Website Premium dengan Harga Kaki Lima. Slot Terbatas!",
        deadline: "Promo berakhir minggu ini",
        slotsLeft: 3
    },
    portfolio: [
        {
            title: "Palem Merah Catering",
            category: "Catering System",
            description: "Website catering dengan fitur kalkulator harga otomatis dan integrasi WhatsApp.",
            link: "https://krsdntr.github.io/palemmerah/index.html",
            image: "https://i.ibb.co.com/607MpWmM/Screenshot-23.png" // Kosongkan untuk melihat fitur 'Smart Fallback' (ilustrasi otomatis)
        }
    ],
    process: [
        {
            step: 1,
            title: "Konsultasi Gratis",
            description: "Diskusikan kebutuhan bisnis Anda via WhatsApp. Tanpa komitmen."
        },
        {
            step: 2,
            title: "Deal & Materi",
            description: "Sepakati harga, lalu kirim foto/teks untuk website Anda."
        },
        {
            step: 3,
            title: "Pengerjaan Cepat",
            description: "Website mulai dikerjakan. Estimasi 3-5 hari kerja."
        },
        {
            step: 4,
            title: "Review & Revisi",
            description: "Cek hasil website. Ada kouta revisi minor jika perlu perbaikan."
        },
        {
            step: 5,
            title: "Online & Serah Terima",
            description: "Website aktif! Anda terima akses penuh dan cara pakainya."
        }
    ],
    pricing: [
        {
            id: "hemat",
            title: "Hemat Selamanya",
            price: "Rp 500.000",
            period: "/ Sekali Bayar",
            description: "Cocok untuk usaha pemula yang ingin online tanpa biaya tahunan.",
            isPopular: false,
            features: [
                "Domain: namausaha.pages.dev",
                "Biaya Tahunan: Rp 0 (GRATIS)",
                "Hosting Server Gratis (Cloudflare)",
                "SSL (Gembok Hijau) Termasuk",
                "Integrasi Tombol WhatsApp"
            ],
            buttonText: "Pilih Paket Hemat"
        },
        {
            id: "pro",
            title: "Professional Branding",
            price: "Rp 500.000",
            period: "+ Harga Domain",
            description: "Untuk bisnis yang ingin terlihat lebih bonafide dan profesional.",
            isPopular: true,
            features: [
                "Domain: .com / .id / .co.id",
                "Biaya Tahunan: Sesuai harga domain + 100rb Admin",
                "Hosting Server Gratis (Cloudflare)",
                "SSL (Gembok Hijau) Termasuk",
                "Integrasi Tombol WhatsApp"
            ],
            buttonText: "Pilih Paket Professional"
        }
    ],
    benefits: [
        {
            title: "Cepat & Ringan",
            desc: "Website loading di bawah 3 detik."
        },
        {
            title: "Terima Beres",
            desc: "Anda fokus bisnis, teknis saya yang urus."
        },
        {
            title: "Garansi Support",
            desc: "Bantuan jika ada kendala teknis."
        }
    ],
    faq: [
        {
            question: "Apakah ada biaya bulanan tersembunyi?",
            answer: "TIDAK ADA. Untuk paket Hemat, Anda bayar sekali seumur hidup. Untuk paket Professional, Anda hanya bayar perpanjangan domain setahun sekali (langsung ke penyedia domain)."
        },
        {
            question: "Berapa lama website selesai?",
            answer: "Rata-rata 3-5 hari kerja setelah data (teks & foto) Anda kirimkan lengkap."
        },
        {
            question: "Saya gaptek, apakah bisa kelola sendiri?",
            answer: "Tentu! Sistem kami buat sangat simpel. Jika Anda tidak mau repot, kami juga sediakan jasa maintenance murah meriah."
        },
        {
            question: "Apa bedanya domain .pages.dev dan .com?",
            answer: ".pages.dev adalah subdomain gratis dari Cloudflare. Fiturnya sama canggihnya, hanya namanyasaja yang menempel. .com terlihat lebih eksklusif dan 'niat' untuk branding jangka panjang."
        }
    ],
    cta: {
        title: "Siap Bikin Bisnis Laris Manis?",
        subtitle: "Konsultasi dulu aja, gratis kok. Gak jadi bikin juga gapapa, nambah teman nambah rezeki.",
        buttonText: "Konsultasi Gratis via WA"
    }
};
}),
"[project]/src/components/Footer.jsx [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-edge-rsc] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-edge-rsc] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/agencyConfig.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-edge-rsc] (ecmascript)");
;
;
;
;
async function Footer() {
    const styles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getSystemStyles"])();
    const brandName = styles['brand_name']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["agencyConfig"].brand.name;
    const tagline = styles['brand_tagline']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["agencyConfig"].brand.tagline;
    const instagram = styles['brand_instagram']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["agencyConfig"].brand.instagram;
    const whatsapp = styles['brand_whatsapp']?.value || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$agencyConfig$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["agencyConfig"].brand.whatsappNumber;
    const copyright = styles['footer_copyright']?.value || `© ${new Date().getFullYear()} All rights reserved.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-slate-400 py-12 border-t border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold text-xl mb-1",
                                children: brandName
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: tagline
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://instagram.com/${instagram}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-white transition-colors flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: [
                                            "@",
                                            instagram
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 30,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://wa.me/${whatsapp}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-white transition-colors flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: copyright
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.jsx [app-edge-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPost,
    "dynamic",
    ()=>dynamic,
    "generateMetadata",
    ()=>generateMetadata,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-edge-rsc] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/navigation.react-server.js [app-edge-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/navigation.react-server.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/app-dir/link.react-server.js [app-edge-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const runtime = 'edge';
async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getItemDetails"])(slug, process.env.NOTION_BLOG_DATABASE_ID);
    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }
    return {
        title: `${post.title} - Kris`,
        description: post.description || `Artikel tentang ${post.title}`
    };
}
const dynamic = 'force-dynamic';
async function BlogPost({ params }) {
    const { slug } = await params;
    const allPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])();
    const postMeta = allPosts.items.find((p)=>p.slug === slug);
    const postContent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getItemDetails"])(slug, process.env.NOTION_BLOG_DATABASE_ID);
    if (!postMeta || !postContent) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const post = {
        ...postMeta,
        content: postContent.content
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-28 pb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            href: "/blog",
                            className: "inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                "Kembali ke Blog"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12",
                            children: [
                                post.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-slate-100 border-b border-slate-100 p-4 md:p-8 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl overflow-hidden shadow-lg border border-black/5 w-full max-w-4xl max-h-[600px] flex items-center justify-center bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: post.cover,
                                            alt: post.title,
                                            className: "w-full h-auto object-contain max-h-[600px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                            lineNumber: 55,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 md:p-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-1.5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                            lineNumber: 64,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                        lineNumber: 63,
                                                        columnNumber: 37
                                                    }, this),
                                                    post.date ? new Date(post.date).toLocaleDateString('id-ID', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    }) : 'Tidak ada tanggal'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                            lineNumber: 61,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prose prose-slate prose-lg max-w-none    prose-headings:text-slate-900 prose-headings:font-bold   prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100   prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4   prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6   prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline   prose-img:rounded-2xl prose-img:shadow-sm prose-img:my-10   prose-strong:text-slate-900 prose-strong:font-semibold   prose-ul:text-slate-600 prose-ul:my-6 prose-li:my-2   prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-slate-700 prose-blockquote:font-medium prose-blockquote:rounded-r-lg prose-blockquote:my-8   prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none   prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-lg prose-pre:overflow-x-auto   prose-table:w-full prose-table:text-left prose-table:border-collapse prose-table:my-8   prose-th:bg-slate-100 prose-th:p-4 prose-th:font-semibold prose-th:text-slate-900 prose-th:border prose-th:border-slate-200   prose-td:p-4 prose-td:border prose-td:border-slate-200 prose-td:text-slate-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                remarkPlugins: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]
                                                ],
                                                components: {
                                                    table: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "overflow-x-auto w-full relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                ...props,
                                                                className: "w-full min-w-[600px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                                lineNumber: 94,
                                                                columnNumber: 49
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 45
                                                        }, void 0)
                                                },
                                                children: post.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                                lineNumber: 89,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/[slug]/page.jsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.jsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/page.jsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$react$2d$server$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.jsx",
                lineNumber: 106,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[slug]/page.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.jsx [app-edge-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.jsx [app-edge-rsc] (ecmascript)"));
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__19299727._.js.map
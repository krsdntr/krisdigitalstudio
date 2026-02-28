module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/lib/notion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@notionhq/client/build/src/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notion$2d$to$2d$md$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/notion-to-md/build/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
const notion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notionhq$2f$client$2f$build$2f$src$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Client"]({
    auth: process.env.NOTION_SECRET
});
const n2m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$notion$2d$to$2d$md$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotionToMarkdown"]({
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
const getSystemStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
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
const getLandingBlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
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
const getPublishedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async (databaseId, customMapper = null)=>{
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
                    timestamp: 'created_time',
                    direction: 'descending'
                }
            ]
        });
        return response.results.map((item)=>{
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
    } catch (error) {
        console.error(`Error fetching from database ${databaseId}:`, error);
        return [];
    }
});
const getBlogPosts = async ()=>{
    return getPublishedItems(process.env.NOTION_BLOG_DATABASE_ID, (item)=>({
            date: getDateStr(item.properties['Published Date']),
            category: getSelectName(item.properties.Category),
            tags: getMultiSelectNames(item.properties.Tags),
            excerpt: getPlainText(item.properties.Excerpt),
            featured: getCheckbox(item.properties.Featured)
        }));
};
const getProjects = async ()=>{
    return getPublishedItems(process.env.NOTION_PROJECT_DATABASE_ID, (item)=>({
            date: getDateStr(item.properties['Completion Date']),
            industry: getSelectName(item.properties.Industry),
            techStack: getMultiSelectNames(item.properties['Tech Stack']),
            liveUrl: getUrl(item.properties['Live URL']),
            description: getPlainText(item.properties['Short Description'])
        }));
};
const getDigitalProducts = async ()=>{
    return getPublishedItems(process.env.NOTION_PRODUCT_DATABASE_ID, (item)=>({
            price: getNumber(item.properties.Price),
            discountPrice: getNumber(item.properties['Discount Price']),
            productType: getSelectName(item.properties['Product Type']),
            description: getPlainText(item.properties['Short Desc']),
            features: getMultiSelectNames(item.properties.Features),
            checkoutUrl: getUrl(item.properties['Checkout URL']),
            isFreebie: getCheckbox(item.properties['Is Freebie?'])
        }));
};
const getItemDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async (slug, databaseId)=>{
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
"[project]/src/app/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'Kris',
    description: 'Bikin Bisnis Lebih Laris dengan Website Otomatis'
};
const revalidate = 3600; // Cache system styles for 1 hour
async function RootLayout({ children }) {
    const styles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSystemStyles"])();
    // Create inline CSS variables based on Notion configuration
    const cssVars = {
        '--color-primary': styles.primary_color?.value || '#2563EB',
        '--color-dark': styles.dark_mode_color?.value || '#0F172A'
    };
    // Override metadata if strictly defined in Notion
    if (styles.site_name) metadata.title = styles.site_name.value;
    if (styles.site_description) metadata.description = styles.site_description.value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "id",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            style: cssVars,
            className: "relative min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-[20%] -right-[10%] w-[70%] h-[70vh] bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__83d9a6ad._.js.map
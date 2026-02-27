module.exports = [
"[project]/src/lib/notion.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/lib/notion.js'\n\nExpected a semicolon");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: 'KrisDigital Studio',
    description: 'Bikin Bisnis Lebih Laris dengan Website Otomatis'
};
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
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_f759ed15._.js.map
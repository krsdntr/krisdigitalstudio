module.exports = [
"[project]/src/app/actions/notion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400a21644c99ec8cb1a5accff390f29741d91d7906":"fetchMoreProjects","4067e5895db260060a33c385d3ed8c06b7bc38e50d":"fetchMorePosts","40b0fae24058c65f88a7929c53fe52c8e1ef9c7b8d":"fetchMoreProducts"},"",""] */ __turbopack_context__.s([
    "fetchMorePosts",
    ()=>fetchMorePosts,
    "fetchMoreProducts",
    ()=>fetchMoreProducts,
    "fetchMoreProjects",
    ()=>fetchMoreProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function fetchMorePosts(cursor) {
    if (!cursor) return {
        items: [],
        hasMore: false,
        nextCursor: null
    };
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])({
        startCursor: cursor,
        pageSize: 12
    });
}
async function fetchMoreProjects(cursor) {
    if (!cursor) return {
        items: [],
        hasMore: false,
        nextCursor: null
    };
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"])({
        startCursor: cursor,
        pageSize: 12
    });
}
async function fetchMoreProducts(cursor) {
    if (!cursor) return {
        items: [],
        hasMore: false,
        nextCursor: null
    };
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDigitalProducts"])({
        startCursor: cursor,
        pageSize: 12
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    fetchMorePosts,
    fetchMoreProjects,
    fetchMoreProducts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchMorePosts, "4067e5895db260060a33c385d3ed8c06b7bc38e50d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchMoreProjects, "400a21644c99ec8cb1a5accff390f29741d91d7906", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchMoreProducts, "40b0fae24058c65f88a7929c53fe52c8e1ef9c7b8d", null);
}),
"[project]/.next-internal/server/app/projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/notion.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/notion.js [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/projects/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/notion.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "400a21644c99ec8cb1a5accff390f29741d91d7906",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMoreProjects"],
    "4067e5895db260060a33c385d3ed8c06b7bc38e50d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMorePosts"],
    "40b0fae24058c65f88a7929c53fe52c8e1ef9c7b8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchMoreProducts"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$projects$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/projects/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/notion.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$notion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/notion.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_4c112660._.js.map
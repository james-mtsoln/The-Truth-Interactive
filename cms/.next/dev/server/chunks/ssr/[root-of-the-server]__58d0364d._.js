module.exports = [
"[externals]/@payloadcms/db-mongodb [external] (@payloadcms/db-mongodb, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@payloadcms/db-mongodb");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/payload [external] (payload, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("payload");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/payload/shared [external] (payload/shared, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("payload/shared");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/sharp [external] (sharp, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("sharp", () => require("sharp"));

module.exports = mod;
}),
"[project]/cms/src/collections/Users.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>Users
]);
const Users = {
    slug: 'users',
    admin: {
        useAsTitle: 'email'
    },
    auth: true,
    fields: []
};
}),
"[project]/cms/src/collections/Media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Media",
    ()=>Media
]);
const Media = {
    slug: 'media',
    access: {
        read: ()=>true
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        }
    ],
    upload: true
};
}),
"[project]/cms/src/collections/Topics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Topics",
    ()=>Topics
]);
const Topics = {
    slug: 'topics',
    access: {
        read: ()=>true
    },
    admin: {
        useAsTitle: 'slug'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            localized: true,
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true
        },
        {
            name: 'summary',
            type: 'textarea',
            localized: true
        },
        {
            name: 'type',
            type: 'select',
            options: [
                {
                    label: 'Environment',
                    value: 'environment'
                },
                {
                    label: 'Technology',
                    value: 'technology'
                },
                {
                    label: 'Economy',
                    value: 'economy'
                },
                {
                    label: 'Health',
                    value: 'health'
                },
                {
                    label: 'Conflict',
                    value: 'conflict'
                },
                {
                    label: 'Science',
                    value: 'science'
                }
            ],
            required: true
        },
        {
            name: 'location',
            type: 'group',
            fields: [
                {
                    name: 'lat',
                    type: 'number',
                    required: true
                },
                {
                    name: 'lon',
                    type: 'number',
                    required: true
                }
            ]
        }
    ]
};
}),
"[project]/cms/src/collections/TimelineEvents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineEvents",
    ()=>TimelineEvents
]);
const TimelineEvents = {
    slug: 'timeline-events',
    access: {
        read: ()=>true
    },
    admin: {
        useAsTitle: 'id'
    },
    fields: [
        {
            name: 'topic',
            type: 'relationship',
            relationTo: 'topics',
            required: true
        },
        {
            name: 'title',
            type: 'text',
            localized: true,
            required: true
        },
        {
            name: 'cardTitle',
            type: 'text',
            localized: true
        },
        {
            name: 'cardSubtitle',
            type: 'text',
            localized: true
        },
        {
            name: 'cardDetailedText',
            type: 'textarea',
            localized: true
        },
        {
            name: 'date',
            type: 'text',
            required: true
        },
        {
            name: 'mediaSource',
            type: 'text'
        },
        {
            name: 'newsPerspective',
            type: 'text',
            localized: true
        },
        {
            name: 'mediaBias',
            type: 'text',
            localized: true
        },
        {
            name: 'diverseViewpoint',
            type: 'textarea',
            localized: true
        },
        {
            name: 'order',
            type: 'number',
            required: true
        }
    ]
};
}),
"[project]/cms/src/payload.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$mongodb__$5b$external$5d$__$2840$payloadcms$2f$db$2d$mongodb$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@payloadcms/db-mongodb [external] (@payloadcms/db-mongodb, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/richtext-lexical/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/collections/Users.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/collections/Media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/collections/Topics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$TimelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/collections/TimelineEvents.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$mongodb__$5b$external$5d$__$2840$payloadcms$2f$db$2d$mongodb$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$mongodb__$5b$external$5d$__$2840$payloadcms$2f$db$2d$mongodb$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("cms/src/payload.config.ts")}`;
    }
};
;
;
;
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["buildConfig"])({
    admin: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"].slug,
        importMap: {
            baseDir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname)
        }
    },
    collections: [
        __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Users$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Users"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Media"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$Topics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Topics"],
        __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$collections$2f$TimelineEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TimelineEvents"]
    ],
    editor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$richtext$2d$lexical$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lexicalEditor"])(),
    secret: process.env.PAYLOAD_SECRET || 'super-secret-key-please-change',
    typescript: {
        outputFile: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, 'payload-types.ts')
    },
    db: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$payloadcms$2f$db$2d$mongodb__$5b$external$5d$__$2840$payloadcms$2f$db$2d$mongodb$2c$__esm_import$29$__["mongooseAdapter"])({
        url: process.env.DATABASE_URI || ''
    }),
    localization: {
        locales: [
            'en',
            'es',
            'ja',
            'ko',
            'zh'
        ],
        defaultLocale: 'en',
        fallback: true
    },
    sharp: __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$29$__["default"],
    plugins: [],
    cors: [
        'http://localhost:5173',
        'http://localhost:3000'
    ],
    csrf: [
        'http://localhost:5173',
        'http://localhost:3000'
    ]
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/src/importMap.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importMap",
    ()=>importMap
]);
const importMap = {};
}),
"[project]/cms/src/app/(payload)/server-functions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"7f73b8832a2e1fac39833c231a685adcd0ee8d3223":"serverFunction"},"",""] */ __turbopack_context__.s([
    "serverFunction",
    ()=>serverFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const serverFunction = async (args)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleServerFunctions"])(args);
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    serverFunction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(serverFunction, "7f73b8832a2e1fac39833c231a685adcd0ee8d3223", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/src/app/(payload)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* THIS FILE IS USED FOR PAYLOAD ADMIN UI */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/payload.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$importMap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/importMap.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$app$2f28$payload$292f$server$2d$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/src/app/(payload)/server-functions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$app$2f28$payload$292f$server$2d$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$app$2f28$payload$292f$server$2d$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const Layout = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayout"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$payload$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        importMap: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$importMap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importMap"],
        serverFunction: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$src$2f$app$2f28$payload$292f$server$2d$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverFunction"],
        children: children
    }, void 0, false, {
        fileName: "[project]/cms/src/app/(payload)/layout.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58d0364d._.js.map
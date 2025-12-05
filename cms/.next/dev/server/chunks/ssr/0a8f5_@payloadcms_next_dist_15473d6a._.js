module.exports = [
"[project]/cms/node_modules/@payloadcms/next/dist/templates/Minimal/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinimalTemplate",
    ()=>MinimalTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const baseClass = 'template-minimal';
const MinimalTemplate = (props)=>{
    const { children, className, style = {}, width = 'normal' } = props;
    const classes = [
        className,
        baseClass,
        `${baseClass}--width-${width}`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("section", {
        className: classes,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: `${baseClass}__wrap`,
            children: children
        })
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/utilities/handleAuthRedirect.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "handleAuthRedirect",
    ()=>handleAuthRedirect
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/parse.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const handleAuthRedirect = ({ config, route, searchParams, user })=>{
    const { admin: { routes: { login: loginRouteFromConfig, unauthorized: unauthorizedRoute } }, routes: { admin: adminRoute } } = config;
    if (searchParams && 'redirect' in searchParams) {
        delete searchParams.redirect;
    }
    const redirectRoute = (route !== adminRoute ? route : '') + (Object.keys(searchParams ?? {}).length > 0 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"](searchParams, {
        addQueryPrefix: true
    })}` : '');
    const redirectTo = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
        adminRoute,
        path: user ? unauthorizedRoute : loginRouteFromConfig
    });
    const parsedLoginRouteSearchParams = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](redirectTo.split('?')[1] ?? '');
    const searchParamsWithRedirect = `${__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"]({
        ...parsedLoginRouteSearchParams,
        ...redirectRoute ? {
            redirect: redirectRoute
        } : {}
    }, {
        addQueryPrefix: true
    })}`;
    return `${redirectTo.split('?', 1)[0]}${searchParamsWithRedirect}`;
}; //# sourceMappingURL=handleAuthRedirect.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/utilities/getRouteWithoutAdmin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteWithoutAdmin",
    ()=>getRouteWithoutAdmin
]);
const getRouteWithoutAdmin = ({ adminRoute, route })=>{
    return adminRoute && adminRoute !== '/' ? route.replace(adminRoute, '') : route;
}; //# sourceMappingURL=getRouteWithoutAdmin.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/utilities/isCustomAdminView.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCustomAdminView",
    ()=>isCustomAdminView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRouteWithoutAdmin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/getRouteWithoutAdmin.js [app-rsc] (ecmascript)");
;
const isCustomAdminView = ({ adminRoute, config, route })=>{
    if (config.admin?.components?.views) {
        const isPublicAdminRoute = Object.entries(config.admin.components.views).some(([_, view])=>{
            const routeWithoutAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRouteWithoutAdmin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteWithoutAdmin"])({
                adminRoute,
                route
            });
            if (view.exact) {
                if (routeWithoutAdmin === view.path) {
                    return true;
                }
            } else {
                if (routeWithoutAdmin.startsWith(view.path)) {
                    return true;
                }
            }
            return false;
        });
        return isPublicAdminRoute;
    }
    return false;
}; //# sourceMappingURL=isCustomAdminView.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/utilities/isPublicAdminRoute.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPublicAdminRoute",
    ()=>isPublicAdminRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRouteWithoutAdmin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/getRouteWithoutAdmin.js [app-rsc] (ecmascript)");
;
// Routes that require admin authentication
const publicAdminRoutes = [
    'createFirstUser',
    'forgot',
    'login',
    'logout',
    'forgot',
    'inactivity',
    'unauthorized',
    'reset'
];
const isPublicAdminRoute = ({ adminRoute, config, route })=>{
    const isPublicAdminRoute = publicAdminRoutes.some((routeSegment)=>{
        const segment = config.admin?.routes?.[routeSegment] || routeSegment;
        const routeWithoutAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRouteWithoutAdmin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteWithoutAdmin"])({
            adminRoute,
            route
        });
        if (routeWithoutAdmin.startsWith(segment)) {
            return true;
        } else if (routeWithoutAdmin.includes('/verify/')) {
            return true;
        } else {
            return false;
        }
    });
    return isPublicAdminRoute;
}; //# sourceMappingURL=isPublicAdminRoute.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByRoute.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomViewByRoute",
    ()=>getCustomViewByRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/isPathMatchingRoute.js [app-rsc] (ecmascript)");
;
const getCustomViewByRoute = ({ config, currentRoute: currentRouteWithAdmin })=>{
    const { admin: { components: { views } }, routes: { admin: adminRoute } } = config;
    let viewKey;
    const currentRoute = adminRoute === '/' ? currentRouteWithAdmin : currentRouteWithAdmin.replace(adminRoute, '');
    const foundViewConfig = views && typeof views === 'object' && Object.entries(views).find(([key, view])=>{
        const isMatching = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPathMatchingRoute"])({
            currentRoute,
            exact: view.exact,
            path: view.path,
            sensitive: view.sensitive,
            strict: view.strict
        });
        if (isMatching) {
            viewKey = key;
        }
        return isMatching;
    })?.[1] || undefined;
    if (!foundViewConfig) {
        return {
            view: {
                Component: null
            },
            viewConfig: null,
            viewKey: null
        };
    }
    return {
        view: {
            payloadComponent: foundViewConfig.Component
        },
        viewConfig: foundViewConfig,
        viewKey
    };
}; //# sourceMappingURL=getCustomViewByRoute.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AccountClient",
    ()=>AccountClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AccountClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccountClient() from the server but AccountClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js <module evaluation>", "AccountClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AccountClient",
    ()=>AccountClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AccountClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccountClient() from the server but AccountClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js", "AccountClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ResetPreferences",
    ()=>ResetPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ResetPreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResetPreferences() from the server but ResetPreferences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js <module evaluation>", "ResetPreferences");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ResetPreferences",
    ()=>ResetPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ResetPreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResetPreferences() from the server but ResetPreferences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js", "ResetPreferences");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ResetPreferences$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ResetPreferences$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ResetPreferences$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ToggleTheme",
    ()=>ToggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ToggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToggleTheme() from the server but ToggleTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js <module evaluation>", "ToggleTheme");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ToggleTheme",
    ()=>ToggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ToggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToggleTheme() from the server but ToggleTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js", "ToggleTheme");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ToggleTheme$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ToggleTheme$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ToggleTheme$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LanguageSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageSelector() from the server but LanguageSelector is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js <module evaluation>", "LanguageSelector");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LanguageSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageSelector() from the server but LanguageSelector is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js", "LanguageSelector");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$LanguageSelector$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$LanguageSelector$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$LanguageSelector$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ResetPreferences$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ToggleTheme$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$LanguageSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const baseClass = 'payload-settings';
const Settings = (props)=>{
    const { className, i18n, languageOptions, payload, theme, user } = props;
    const apiRoute = payload.config.routes.api;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                children: i18n.t('general:payloadSettings')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}__language`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldLabel"], {
                        htmlFor: "language-select",
                        label: i18n.t('general:language')
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$LanguageSelector$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LanguageSelector"], {
                        languageOptions: languageOptions
                    })
                ]
            }),
            theme === 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ToggleTheme$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ToggleTheme"], {}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$ResetPreferences$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResetPreferences"], {
                apiRoute: apiRoute,
                user: user
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AccountView",
    ()=>AccountView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/DocumentHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getDocPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getDocumentData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getDocumentPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getIsLocked.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Edit/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
async function AccountView({ initPageResult, params, searchParams }) {
    const { languageOptions, locale, permissions, req, req: { i18n, payload, payload: { config }, user } } = initPageResult;
    const { admin: { theme, user: userSlug }, routes: { api }, serverURL } = config;
    const collectionConfig = payload?.collections?.[userSlug]?.config;
    if (collectionConfig && user?.id) {
        // Fetch the data required for the view
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentData"])({
            id: user.id,
            collectionSlug: collectionConfig.slug,
            locale,
            payload,
            req,
            user
        });
        if (!data) {
            throw new Error('not-found');
        }
        // Get document preferences
        const docPreferences = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocPreferences"])({
            id: user.id,
            collectionSlug: collectionConfig.slug,
            payload,
            user
        });
        // Get permissions
        const { docPermissions, hasPublishPermission, hasSavePermission } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentPermissions"])({
            id: user.id,
            collectionConfig,
            data,
            req
        });
        // Build initial form state from data
        const { state: formState } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormState"])({
            id: user.id,
            collectionSlug: collectionConfig.slug,
            data,
            docPermissions,
            docPreferences,
            locale: locale?.code,
            operation: 'update',
            renderAllFields: true,
            req,
            schemaPath: collectionConfig.slug,
            skipValidation: true
        });
        // Fetch document lock state
        const { currentEditor, isLocked, lastUpdateTime } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsLocked"])({
            id: user.id,
            collectionConfig,
            isEditing: true,
            req
        });
        // Get all versions required for UI
        const { hasPublishedDoc, mostRecentVersionIsAutosaved, unpublishedVersionCount, versionCount } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVersions"])({
            id: user.id,
            collectionConfig,
            doc: data,
            docPermissions,
            locale: locale?.code,
            payload,
            user
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentInfoProvider"], {
            AfterFields: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$Settings$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Settings"], {
                i18n: i18n,
                languageOptions: languageOptions,
                payload: payload,
                theme: theme,
                user: user
            }),
            apiURL: `${serverURL}${api}/${userSlug}${user?.id ? `/${user.id}` : ''}`,
            collectionSlug: userSlug,
            currentEditor: currentEditor,
            docPermissions: docPermissions,
            hasPublishedDoc: hasPublishedDoc,
            hasPublishPermission: hasPublishPermission,
            hasSavePermission: hasSavePermission,
            id: user?.id,
            initialData: data,
            initialState: formState,
            isEditing: true,
            isLocked: isLocked,
            lastUpdateTime: lastUpdateTime,
            mostRecentVersionIsAutosaved: mostRecentVersionIsAutosaved,
            unpublishedVersionCount: unpublishedVersionCount,
            versionCount: versionCount,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditDepthProvider"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentHeader"], {
                        collectionConfig: collectionConfig,
                        hideTabs: true,
                        permissions: permissions,
                        req: req
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                        permissions: permissions
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        Component: config.admin?.components?.views?.account?.Component,
                        Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditView"],
                        importMap: payload.importMap,
                        serverProps: {
                            doc: data,
                            hasPublishedDoc,
                            i18n,
                            initPageResult,
                            locale,
                            params,
                            payload,
                            permissions,
                            routeSegments: [],
                            searchParams,
                            user
                        }
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountClient"], {})
                ]
            })
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/buildView.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildBrowseByFolderView",
    ()=>buildBrowseByFolderView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getFolderResultsComponentAndData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$upsertPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/upsertPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const buildBrowseByFolderView = async (args)=>{
    const { browseByFolderSlugs: browseByFolderSlugsFromArgs = [], disableBulkDelete, disableBulkEdit, enableRowSelections, folderID, initPageResult, isInDrawer, params, query: queryFromArgs, searchParams } = args;
    const { locale: fullLocale, permissions, req: { i18n, payload, payload: { config }, query: queryFromReq, user }, visibleEntities } = initPageResult;
    if (config.folders === false || config.folders.browseByFolder === false) {
        throw new Error('not-found');
    }
    const foldersSlug = config.folders.slug;
    /**
  * All visiible folder enabled collection slugs that the user has read permissions for.
  */ const allowReadCollectionSlugs = browseByFolderSlugsFromArgs.filter((collectionSlug)=>permissions?.collections?.[collectionSlug]?.read && visibleEntities.collections.includes(collectionSlug));
    const query = queryFromArgs || (queryFromReq ? {
        ...queryFromReq,
        relationTo: typeof queryFromReq?.relationTo === 'string' ? JSON.parse(queryFromReq.relationTo) : undefined
    } : {});
    /**
  * If a folderID is provided and the relationTo query param exists,
  * we filter the collection slugs to only those that are allowed to be read.
  *
  * If no folderID is provided, only folders should be active and displayed (the root view).
  */ let collectionsToDisplay = [];
    if (folderID && Array.isArray(query?.relationTo)) {
        collectionsToDisplay = query.relationTo.filter((slug)=>allowReadCollectionSlugs.includes(slug) || slug === foldersSlug);
    } else if (folderID) {
        collectionsToDisplay = [
            ...allowReadCollectionSlugs,
            foldersSlug
        ];
    } else {
        collectionsToDisplay = [
            foldersSlug
        ];
    }
    const { routes: { admin: adminRoute } } = config;
    /**
  * @todo: find a pattern to avoid setting preferences on hard navigation, i.e. direct links, page refresh, etc.
  * This will ensure that prefs are only updated when explicitly set by the user
  * This could potentially be done by injecting a `sessionID` into the params and comparing it against a session cookie
  */ const browseByFolderPreferences = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$upsertPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertPreferences"])({
        key: 'browse-by-folder',
        req: initPageResult.req,
        value: {
            sort: query?.sort
        }
    });
    const sortPreference = browseByFolderPreferences?.sort || 'name';
    const viewPreference = browseByFolderPreferences?.viewPreference || 'grid';
    const { breadcrumbs, documents, folderAssignedCollections, FolderResultsComponent, subfolders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFolderResultsComponentAndData"])({
        browseByFolder: true,
        collectionsToDisplay,
        displayAs: viewPreference,
        folderAssignedCollections: collectionsToDisplay.filter((slug)=>slug !== foldersSlug) || [],
        folderID,
        req: initPageResult.req,
        sort: sortPreference
    });
    const resolvedFolderID = breadcrumbs[breadcrumbs.length - 1]?.id;
    if (!isInDrawer && (resolvedFolderID && folderID && folderID !== resolvedFolderID || folderID && !resolvedFolderID)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
            adminRoute,
            path: config.admin.routes.browseByFolder,
            serverURL: config.serverURL
        }));
    }
    const serverProps = {
        documents,
        i18n,
        locale: fullLocale,
        params,
        payload,
        permissions,
        searchParams,
        subfolders,
        user
    };
    // const folderViewSlots = renderFolderViewSlots({
    //   clientProps: {
    //   },
    //   description: staticDescription,
    //   payload,
    //   serverProps,
    // })
    // Filter down allCollectionFolderSlugs by the ones the current folder is assingned to
    const allAvailableCollectionSlugs = folderID && Array.isArray(folderAssignedCollections) && folderAssignedCollections.length ? allowReadCollectionSlugs.filter((slug)=>folderAssignedCollections.includes(slug)) : allowReadCollectionSlugs;
    // Filter down activeCollectionFolderSlugs by the ones the current folder is assingned to
    const availableActiveCollectionFolderSlugs = collectionsToDisplay.filter((slug)=>{
        if (slug === foldersSlug) {
            return permissions?.collections?.[foldersSlug]?.read;
        } else {
            return !folderAssignedCollections || folderAssignedCollections.includes(slug);
        }
    });
    // Documents cannot be created without a parent folder in this view
    const allowCreateCollectionSlugs = (resolvedFolderID ? [
        foldersSlug,
        ...allAvailableCollectionSlugs
    ] : [
        foldersSlug
    ]).filter((collectionSlug)=>{
        if (collectionSlug === foldersSlug) {
            return permissions?.collections?.[foldersSlug]?.create;
        }
        return permissions?.collections?.[collectionSlug]?.create && visibleEntities.collections.includes(collectionSlug);
    });
    return {
        View: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                    permissions: permissions
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps: {
                        // ...folderViewSlots,
                        activeCollectionFolderSlugs: availableActiveCollectionFolderSlugs,
                        allCollectionFolderSlugs: allAvailableCollectionSlugs,
                        allowCreateCollectionSlugs,
                        baseFolderPath: `/browse-by-folder`,
                        breadcrumbs,
                        disableBulkDelete,
                        disableBulkEdit,
                        documents,
                        enableRowSelections,
                        folderAssignedCollections,
                        folderFieldName: config.folders.fieldName,
                        folderID: resolvedFolderID || null,
                        FolderResultsComponent,
                        sort: sortPreference,
                        subfolders,
                        viewPreference
                    },
                    // Component:config.folders?.components?.views?.BrowseByFolders?.Component,
                    Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultBrowseByFolderView"],
                    importMap: payload.importMap,
                    serverProps
                })
            ]
        })
    };
}; //# sourceMappingURL=buildView.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BrowseByFolder",
    ()=>BrowseByFolder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/buildView.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const BrowseByFolder = async (args)=>{
    try {
        const { View } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBrowseByFolderView"])(args);
        return View;
    } catch (error) {
        if (error?.message === 'NEXT_REDIRECT') {
            throw error;
        }
        if (error.message === 'not-found') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        } else {
            console.error(error) // eslint-disable-line no-console
            ;
        }
    }
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/buildView.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildCollectionFolderView",
    ()=>buildCollectionFolderView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getFolderResultsComponentAndData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$upsertPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/upsertPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const buildCollectionFolderView = async (args)=>{
    const { disableBulkDelete, disableBulkEdit, enableRowSelections, folderID, initPageResult, isInDrawer, overrideEntityVisibility, params, query: queryFromArgs, searchParams } = args;
    const { collectionConfig, collectionConfig: { slug: collectionSlug }, locale: fullLocale, permissions, req: { i18n, payload, payload: { config }, query: queryFromReq, user }, visibleEntities } = initPageResult;
    if (!config.folders) {
        throw new Error('not-found');
    }
    if (!permissions?.collections?.[collectionSlug]?.read || !permissions?.collections?.[config.folders.slug].read) {
        throw new Error('not-found');
    }
    if (collectionConfig) {
        if (!visibleEntities.collections.includes(collectionSlug) && !overrideEntityVisibility || !config.folders) {
            throw new Error('not-found');
        }
        const query = queryFromArgs || queryFromReq;
        /**
    * @todo: find a pattern to avoid setting preferences on hard navigation, i.e. direct links, page refresh, etc.
    * This will ensure that prefs are only updated when explicitly set by the user
    * This could potentially be done by injecting a `sessionID` into the params and comparing it against a session cookie
    */ const collectionFolderPreferences = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$upsertPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertPreferences"])({
            key: `${collectionSlug}-collection-folder`,
            req: initPageResult.req,
            value: {
                sort: query?.sort
            }
        });
        const sortPreference = collectionFolderPreferences?.sort || 'name';
        const viewPreference = collectionFolderPreferences?.viewPreference || 'grid';
        const { routes: { admin: adminRoute } } = config;
        const { breadcrumbs, documents, folderAssignedCollections, FolderResultsComponent, subfolders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getFolderResultsComponentAndData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFolderResultsComponentAndData"])({
            browseByFolder: false,
            collectionsToDisplay: [
                config.folders.slug,
                collectionSlug
            ],
            displayAs: viewPreference,
            folderAssignedCollections: [
                collectionSlug
            ],
            folderID,
            req: initPageResult.req,
            sort: sortPreference
        });
        const resolvedFolderID = breadcrumbs[breadcrumbs.length - 1]?.id;
        if (!isInDrawer && (resolvedFolderID && folderID && folderID !== resolvedFolderID || folderID && !resolvedFolderID)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: `/collections/${collectionSlug}/${config.folders.slug}`,
                serverURL: config.serverURL
            }));
        }
        const serverProps = {
            collectionConfig,
            documents,
            i18n,
            locale: fullLocale,
            params,
            payload,
            permissions,
            searchParams,
            subfolders,
            user
        };
        // We could support slots in the folder view in the future
        // const folderViewSlots = renderFolderViewSlots({
        //   clientProps: {
        //     collectionSlug,
        //     hasCreatePermission,
        //     newDocumentURL,
        //   },
        //   collectionConfig,
        //   description: typeof collectionConfig.admin.description === 'function'
        //   ? collectionConfig.admin.description({ t: i18n.t })
        //   : collectionConfig.admin.description,
        //   payload,
        //   serverProps,
        // })
        const search = query?.search;
        return {
            View: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                        permissions: permissions
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps: {
                            // ...folderViewSlots,
                            allCollectionFolderSlugs: [
                                config.folders.slug,
                                collectionSlug
                            ],
                            allowCreateCollectionSlugs: [
                                permissions?.collections?.[config.folders.slug]?.create ? config.folders.slug : null,
                                resolvedFolderID && permissions?.collections?.[collectionSlug]?.create ? collectionSlug : null
                            ].filter(Boolean),
                            baseFolderPath: `/collections/${collectionSlug}/${config.folders.slug}`,
                            breadcrumbs,
                            collectionSlug,
                            disableBulkDelete,
                            disableBulkEdit,
                            documents,
                            enableRowSelections,
                            folderAssignedCollections,
                            folderFieldName: config.folders.fieldName,
                            folderID: resolvedFolderID || null,
                            FolderResultsComponent,
                            search,
                            sort: sortPreference,
                            subfolders,
                            viewPreference
                        },
                        // Component: collectionConfig?.admin?.components?.views?.Folders?.Component,
                        Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultCollectionFolderView"],
                        importMap: payload.importMap,
                        serverProps
                    })
                ]
            })
        };
    }
    throw new Error('not-found');
}; //# sourceMappingURL=buildView.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CollectionFolderView",
    ()=>CollectionFolderView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/buildView.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const CollectionFolderView = async (args)=>{
    try {
        const { View } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$buildView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCollectionFolderView"])(args);
        return View;
    } catch (error) {
        if (error?.message === 'NEXT_REDIRECT') {
            throw error;
        }
        if (error.message === 'not-found') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        } else {
            console.error(error) // eslint-disable-line no-console
            ;
        }
    }
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionTrash/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TrashView",
    ()=>TrashView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const TrashView = async (args)=>{
    try {
        const { List: TrashList } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderListView"])({
            ...args,
            enableRowSelections: true,
            trash: true,
            viewType: 'trash'
        });
        return TrashList;
    } catch (error) {
        if (error.message === 'not-found') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
        console.error(error) // eslint-disable-line no-console
        ;
    }
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CreateFirstUserClient",
    ()=>CreateFirstUserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CreateFirstUserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CreateFirstUserClient() from the server but CreateFirstUserClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js <module evaluation>", "CreateFirstUserClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CreateFirstUserClient",
    ()=>CreateFirstUserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CreateFirstUserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CreateFirstUserClient() from the server but CreateFirstUserClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js", "CreateFirstUserClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CreateFirstUserView",
    ()=>CreateFirstUserView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getDocPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getDocumentData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function CreateFirstUserView({ initPageResult }) {
    const { locale, req, req: { payload: { collections, config: { admin: { user: userSlug } } } } } = initPageResult;
    const collectionConfig = collections?.[userSlug]?.config;
    const { auth: authOptions } = collectionConfig;
    const loginWithUsername = authOptions.loginWithUsername;
    // Fetch the data required for the view
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentData"])({
        collectionSlug: collectionConfig.slug,
        locale,
        payload: req.payload,
        req,
        user: req.user
    });
    // Get document preferences
    const docPreferences = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocPreferences"])({
        collectionSlug: collectionConfig.slug,
        payload: req.payload,
        user: req.user
    });
    const baseFields = Object.fromEntries(collectionConfig.fields.filter((f)=>'name' in f && typeof f.name === 'string').map((f)=>[
            f.name,
            {
                create: true,
                read: true,
                update: true
            }
        ]));
    // In create-first-user we should always allow all fields
    const docPermissionsForForm = {
        create: true,
        delete: true,
        fields: baseFields,
        read: true,
        readVersions: true,
        update: true
    };
    // Build initial form state from data
    const { state: formState } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormState"])({
        collectionSlug: collectionConfig.slug,
        data,
        docPermissions: docPermissionsForForm,
        docPreferences,
        locale: locale?.code,
        operation: 'create',
        renderAllFields: true,
        req,
        schemaPath: collectionConfig.slug,
        skipClientConfigAuth: true,
        skipValidation: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "create-first-user",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                children: req.t('general:welcome')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                children: req.t('authentication:beginCreateFirstUser')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateFirstUserClient"], {
                docPermissions: docPermissionsForForm,
                docPreferences: docPreferences,
                initialState: formState,
                loginWithUsername: loginWithUsername,
                userSlug: userSlug
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/Default/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DefaultDashboard",
    ()=>DefaultDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const baseClass = 'dashboard';
function DefaultDashboard(props) {
    const { globalData, i18n, i18n: { t }, locale, navGroups, params, payload: { config: { admin: { components: { afterDashboard, beforeDashboard } }, routes: { admin: adminRoute } } }, payload, permissions, searchParams, user } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: baseClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Gutter"], {
            className: `${baseClass}__wrap`,
            children: [
                beforeDashboard && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    Component: beforeDashboard,
                    importMap: payload.importMap,
                    serverProps: {
                        i18n,
                        locale,
                        params,
                        payload,
                        permissions,
                        searchParams,
                        user
                    }
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: !navGroups || navGroups?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        children: "no nav groups...."
                    }) : navGroups.map(({ entities, label }, groupIndex)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__group`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                                    className: `${baseClass}__label`,
                                    children: label
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                                    className: `${baseClass}__card-list`,
                                    children: entities.map(({ slug, type, label }, entityIndex)=>{
                                        let title;
                                        let buttonAriaLabel;
                                        let createHREF;
                                        let href;
                                        let hasCreatePermission;
                                        let isLocked = null;
                                        let userEditing = null;
                                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].collection) {
                                            title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n);
                                            buttonAriaLabel = t('general:showAllLabel', {
                                                label: title
                                            });
                                            href = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                                adminRoute,
                                                path: `/collections/${slug}`
                                            });
                                            createHREF = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                                adminRoute,
                                                path: `/collections/${slug}/create`
                                            });
                                            hasCreatePermission = permissions?.collections?.[slug]?.create;
                                        }
                                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].global) {
                                            title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n);
                                            buttonAriaLabel = t('general:editLabel', {
                                                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n)
                                            });
                                            href = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                                adminRoute,
                                                path: `/globals/${slug}`
                                            });
                                            // Find the lock status for the global
                                            const globalLockData = globalData.find((global)=>global.slug === slug);
                                            if (globalLockData) {
                                                isLocked = globalLockData.data._isLocked;
                                                userEditing = globalLockData.data._userEditing;
                                                // Check if the lock is expired
                                                const lockDuration = globalLockData?.lockDuration;
                                                const lastEditedAt = new Date(globalLockData.data?._lastEditedAt).getTime();
                                                const lockDurationInMilliseconds = lockDuration * 1000;
                                                const lockExpirationTime = lastEditedAt + lockDurationInMilliseconds;
                                                if (new Date().getTime() > lockExpirationTime) {
                                                    isLocked = false;
                                                    userEditing = null;
                                                }
                                            }
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                                actions: isLocked && user?.id !== userEditing?.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Locked"], {
                                                    className: `${baseClass}__locked`,
                                                    user: userEditing
                                                }) : hasCreatePermission && type === __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].collection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                    "aria-label": t('general:createNewLabel', {
                                                        label
                                                    }),
                                                    buttonStyle: "icon-label",
                                                    el: "link",
                                                    icon: "plus",
                                                    iconStyle: "with-border",
                                                    round: true,
                                                    to: createHREF
                                                }) : undefined,
                                                buttonAriaLabel: buttonAriaLabel,
                                                href: href,
                                                id: `card-${slug}`,
                                                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n),
                                                titleAs: "h3"
                                            })
                                        }, entityIndex);
                                    })
                                })
                            ]
                        }, groupIndex);
                    })
                }),
                afterDashboard && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    Component: afterDashboard,
                    importMap: payload.importMap,
                    serverProps: {
                        i18n,
                        locale,
                        params,
                        payload,
                        permissions,
                        searchParams,
                        user
                    }
                })
            ]
        })
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DashboardView",
    ()=>DashboardView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/Default/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const globalLockDurationDefault = 300;
async function DashboardView(props) {
    const { locale, permissions, req: { i18n, payload: { config }, payload, user }, req, visibleEntities } = props.initPageResult;
    const collections = config.collections.filter((collection)=>permissions?.collections?.[collection.slug]?.read && visibleEntities.collections.includes(collection.slug));
    const globals = config.globals.filter((global)=>permissions?.globals?.[global.slug]?.read && visibleEntities.globals.includes(global.slug));
    // Query locked global documents only if there are globals in the config
    let globalData = [];
    if (config.globals.length > 0) {
        const lockedDocuments = await payload.find({
            collection: 'payload-locked-documents',
            depth: 1,
            overrideAccess: false,
            pagination: false,
            req,
            select: {
                globalSlug: true,
                updatedAt: true,
                user: true
            },
            where: {
                globalSlug: {
                    exists: true
                }
            }
        });
        // Map over globals to include `lockDuration` and lock data for each global slug
        globalData = config.globals.map((global)=>{
            const lockDuration = typeof global.lockDocuments === 'object' ? global.lockDocuments.duration : globalLockDurationDefault;
            const lockedDoc = lockedDocuments.docs.find((doc)=>doc.globalSlug === global.slug);
            return {
                slug: global.slug,
                data: {
                    _isLocked: !!lockedDoc,
                    _lastEditedAt: lockedDoc?.updatedAt ?? null,
                    _userEditing: lockedDoc?.user?.value ?? null
                },
                lockDuration
            };
        });
    }
    const navGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["groupNavItems"])([
        ...collections.map((collection)=>{
            const entityToGroup = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].collection,
                entity: collection
            };
            return entityToGroup;
        }) ?? [],
        ...globals.map((global)=>{
            const entityToGroup = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].global,
                entity: global
            };
            return entityToGroup;
        }) ?? []
    ], permissions, i18n);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                permissions: permissions
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SetStepNav"], {
                nav: []
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                clientProps: {
                    locale
                },
                Component: config.admin?.components?.views?.dashboard?.Component,
                Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultDashboard"],
                importMap: payload.importMap,
                serverProps: {
                    ...props,
                    globalData,
                    i18n,
                    locale,
                    navGroups,
                    payload,
                    permissions,
                    user,
                    visibleEntities
                }
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ForgotPasswordForm",
    ()=>ForgotPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ForgotPasswordForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ForgotPasswordForm() from the server but ForgotPasswordForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js <module evaluation>", "ForgotPasswordForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ForgotPasswordForm",
    ()=>ForgotPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ForgotPasswordForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ForgotPasswordForm() from the server but ForgotPasswordForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js", "ForgotPasswordForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$ForgotPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$ForgotPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$ForgotPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ForgotPasswordView",
    ()=>ForgotPasswordView,
    "forgotPasswordBaseClass",
    ()=>forgotPasswordBaseClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$ForgotPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const forgotPasswordBaseClass = 'forgot-password';
function ForgotPasswordView({ initPageResult }) {
    const { req: { i18n, payload: { config }, user } } = initPageResult;
    const { admin: { routes: { account: accountRoute, login: loginRoute } }, routes: { admin: adminRoute } } = config;
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormHeader"], {
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Translation"], {
                        elements: {
                            '0': ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                    href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                        adminRoute,
                                        path: accountRoute
                                    }),
                                    prefetch: false,
                                    children: children
                                })
                        },
                        i18nKey: "authentication:loggedInChangePassword",
                        t: i18n.t
                    }),
                    heading: i18n.t('authentication:alreadyLoggedIn')
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    buttonStyle: "secondary",
                    el: "link",
                    size: "large",
                    to: adminRoute,
                    children: i18n.t('general:backToDashboard')
                })
            ]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$ForgotPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ForgotPasswordForm"], {}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                    adminRoute,
                    path: loginRoute
                }),
                prefetch: false,
                children: i18n.t('authentication:backToLogin')
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/Logo/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const Logo = (props)=>{
    const { i18n, locale, params, payload, permissions, searchParams, user } = props;
    const { admin: { components: { graphics: { Logo: CustomLogo } = {
        Logo: undefined
    } } = {} } = {} } = payload.config;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
        Component: CustomLogo,
        Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PayloadLogo"],
        importMap: payload.importMap,
        serverProps: {
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams,
            user
        }
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LoginForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoginForm() from the server but LoginForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js <module evaluation>", "LoginForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LoginForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoginForm() from the server but LoginForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js", "LoginForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LoginView",
    ()=>LoginView,
    "loginBaseClass",
    ()=>loginBaseClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/Logo/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const loginBaseClass = 'login';
function LoginView({ initPageResult, params, searchParams }) {
    const { locale, permissions, req } = initPageResult;
    const { i18n, payload: { config }, payload, user } = req;
    const { admin: { components: { afterLogin, beforeLogin } = {}, user: userSlug }, routes: { admin } } = config;
    const redirectUrl = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getSafeRedirect"])({
        fallbackTo: admin,
        redirectTo: searchParams.redirect
    });
    if (user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(redirectUrl);
    }
    const collectionConfig = payload?.collections?.[userSlug]?.config;
    const prefillAutoLogin = typeof config.admin?.autoLogin === 'object' && config.admin?.autoLogin.prefillOnly;
    const prefillUsername = prefillAutoLogin && typeof config.admin?.autoLogin === 'object' ? config.admin?.autoLogin.username : undefined;
    const prefillEmail = prefillAutoLogin && typeof config.admin?.autoLogin === 'object' ? config.admin?.autoLogin.email : undefined;
    const prefillPassword = prefillAutoLogin && typeof config.admin?.autoLogin === 'object' ? config.admin?.autoLogin.password : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${loginBaseClass}__brand`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logo"], {
                    i18n: i18n,
                    locale: locale,
                    params: params,
                    payload: payload,
                    permissions: permissions,
                    searchParams: searchParams,
                    user: user
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                Component: beforeLogin,
                importMap: payload.importMap,
                serverProps: {
                    i18n,
                    locale,
                    params,
                    payload,
                    permissions,
                    searchParams,
                    user
                }
            }),
            !collectionConfig?.auth?.disableLocalStrategy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoginForm"], {
                prefillEmail: prefillEmail,
                prefillPassword: prefillPassword,
                prefillUsername: prefillUsername,
                searchParams: searchParams
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                Component: afterLogin,
                importMap: payload.importMap,
                serverProps: {
                    i18n,
                    locale,
                    params,
                    payload,
                    permissions,
                    searchParams,
                    user
                }
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LogoutClient",
    ()=>LogoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LogoutClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LogoutClient() from the server but LogoutClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js <module evaluation>", "LogoutClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LogoutClient",
    ()=>LogoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LogoutClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LogoutClient() from the server but LogoutClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js", "LogoutClient");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$LogoutClient$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$LogoutClient$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$LogoutClient$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutInactivity",
    ()=>LogoutInactivity,
    "LogoutView",
    ()=>LogoutView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$LogoutClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-rsc] (ecmascript)");
;
;
;
const baseClass = 'logout';
const LogoutView = ({ inactivity, initPageResult, searchParams })=>{
    const { req: { payload: { config: { routes: { admin: adminRoute } } } } } = initPageResult;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: `${baseClass}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$LogoutClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogoutClient"], {
            adminRoute: adminRoute,
            inactivity: inactivity,
            redirect: searchParams.redirect
        })
    });
};
function LogoutInactivity(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(LogoutView, {
        inactivity: true,
        ...props
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ResetPasswordForm",
    ()=>ResetPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ResetPasswordForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResetPasswordForm() from the server but ResetPasswordForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js <module evaluation>", "ResetPasswordForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ResetPasswordForm",
    ()=>ResetPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ResetPasswordForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ResetPasswordForm() from the server but ResetPasswordForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js", "ResetPasswordForm");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$ResetPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$ResetPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$ResetPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ResetPassword",
    ()=>ResetPassword,
    "resetPasswordBaseClass",
    ()=>resetPasswordBaseClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$ResetPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const resetPasswordBaseClass = 'reset-password';
function ResetPassword({ initPageResult, params }) {
    const { req } = initPageResult;
    const { segments: [_, token] } = params;
    const { i18n, payload: { config }, user } = req;
    const { admin: { routes: { account: accountRoute, login: loginRoute } }, routes: { admin: adminRoute } } = config;
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: `${resetPasswordBaseClass}__wrap`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormHeader"], {
                    description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Translation"], {
                        elements: {
                            '0': ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                    href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                        adminRoute,
                                        path: accountRoute
                                    }),
                                    prefetch: false,
                                    children: children
                                })
                        },
                        i18nKey: "authentication:loggedInChangePassword",
                        t: i18n.t
                    }),
                    heading: i18n.t('authentication:alreadyLoggedIn')
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    buttonStyle: "secondary",
                    el: "link",
                    size: "large",
                    to: adminRoute,
                    children: i18n.t('general:backToDashboard')
                })
            ]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${resetPasswordBaseClass}__wrap`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormHeader"], {
                heading: i18n.t('authentication:resetPassword')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$ResetPasswordForm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResetPasswordForm"], {
                token: token
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                    adminRoute,
                    path: loginRoute
                }),
                prefetch: false,
                children: i18n.t('authentication:backToLogin')
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ToastAndRedirect",
    ()=>ToastAndRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ToastAndRedirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToastAndRedirect() from the server but ToastAndRedirect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js <module evaluation>", "ToastAndRedirect");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ToastAndRedirect",
    ()=>ToastAndRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ToastAndRedirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ToastAndRedirect() from the server but ToastAndRedirect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js", "ToastAndRedirect");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Verify",
    ()=>Verify,
    "verifyBaseClass",
    ()=>verifyBaseClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/Logo/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const verifyBaseClass = 'verify';
async function Verify({ initPageResult, params, searchParams }) {
    // /:collectionSlug/verify/:token
    const [collectionSlug, verify, token] = params.segments;
    const { locale, permissions, req } = initPageResult;
    const { i18n, payload: { config }, payload, user } = req;
    const { routes: { admin: adminRoute } } = config;
    let textToRender;
    let isVerified = false;
    try {
        await req.payload.verifyEmail({
            collection: collectionSlug,
            token
        });
        isVerified = true;
        textToRender = req.t('authentication:emailVerified');
    } catch (e) {
        textToRender = req.t('authentication:unableToVerify');
    }
    if (isVerified) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ToastAndRedirect"], {
            message: req.t('authentication:emailVerified'),
            redirectTo: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: '/login'
            })
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${verifyBaseClass}__brand`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Logo$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logo"], {
                    i18n: i18n,
                    locale: locale,
                    params: params,
                    payload: payload,
                    permissions: permissions,
                    searchParams: searchParams,
                    user: user
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                children: textToRender
            })
        ]
    });
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/attachViewActions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSubViewActions",
    ()=>getSubViewActions,
    "getViewActions",
    ()=>getViewActions
]);
function getViewActions({ editConfig, viewKey }) {
    if (editConfig && viewKey in editConfig && 'actions' in editConfig[viewKey]) {
        return editConfig[viewKey].actions ?? [];
    }
    return [];
}
function getSubViewActions({ collectionOrGlobal, viewKeyArg }) {
    if (collectionOrGlobal?.admin?.components?.views?.edit) {
        let viewKey = viewKeyArg || 'default';
        if ('root' in collectionOrGlobal.admin.components.views.edit) {
            viewKey = 'root';
        }
        const actions = getViewActions({
            editConfig: collectionOrGlobal.admin?.components?.views?.edit,
            viewKey
        });
        return actions;
    }
    return [];
} //# sourceMappingURL=attachViewActions.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByKey.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomViewByKey",
    ()=>getCustomViewByKey
]);
const getCustomViewByKey = ({ config, viewKey })=>{
    const customViewComponent = config.admin.components?.views?.[viewKey];
    if (!customViewComponent) {
        return null;
    }
    return {
        view: {
            payloadComponent: customViewComponent.Component
        },
        viewKey
    };
}; //# sourceMappingURL=getCustomViewByKey.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getDocumentViewInfo.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDocumentViewInfo",
    ()=>getDocumentViewInfo
]);
function getDocumentViewInfo(segments) {
    const [tabSegment, versionSegment] = segments;
    if (versionSegment) {
        if (tabSegment === 'versions') {
            return {
                documentSubViewType: 'version',
                viewType: 'version'
            };
        }
    } else {
        if (tabSegment === 'versions') {
            return {
                documentSubViewType: 'versions',
                viewType: 'document'
            };
        } else if (tabSegment === 'api') {
            return {
                documentSubViewType: 'api',
                viewType: 'document'
            };
        }
    }
    return {
        documentSubViewType: 'default',
        viewType: 'document'
    };
} //# sourceMappingURL=getDocumentViewInfo.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getRouteData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getRouteData",
    ()=>getRouteData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionTrash/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$attachViewActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/attachViewActions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByRoute.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getDocumentViewInfo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getDocumentViewInfo.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/isPathMatchingRoute.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
const baseClasses = {
    account: 'account',
    folders: 'folders',
    forgot: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forgotPasswordBaseClass"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginBaseClass"],
    reset: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetPasswordBaseClass"],
    verify: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyBaseClass"]
};
const oneSegmentViews = {
    account: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountView"],
    browseByFolder: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrowseByFolder"],
    createFirstUser: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateFirstUserView"],
    forgot: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ForgotPasswordView"],
    inactivity: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogoutInactivity"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoginView"],
    logout: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Logout$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogoutView"],
    unauthorized: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnauthorizedView"]
};
const getRouteData = ({ adminRoute, collectionConfig, collectionPreferences = undefined, currentRoute, globalConfig, payload, segments })=>{
    const { config } = payload;
    let ViewToRender = null;
    let templateClassName;
    let templateType;
    let documentSubViewType;
    let viewType;
    const routeParams = {};
    const [segmentOne, segmentTwo, segmentThree, segmentFour, segmentFive, segmentSix] = segments;
    const isBrowseByFolderEnabled = config.folders && config.folders.browseByFolder;
    const browseByFolderSlugs = isBrowseByFolderEnabled && config.collections.reduce((acc, { slug, folders })=>{
        if (folders && folders.browseByFolder) {
            return [
                ...acc,
                slug
            ];
        }
        return acc;
    }, []) || [];
    const viewActions = [
        ...config?.admin?.components?.actions || []
    ];
    switch(segments.length){
        case 0:
            {
                if (currentRoute === adminRoute) {
                    ViewToRender = {
                        Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardView"]
                    };
                    templateClassName = 'dashboard';
                    templateType = 'default';
                    viewType = 'dashboard';
                }
                break;
            }
        case 1:
            {
                // users can override the default routes via `admin.routes` config
                // i.e.{ admin: { routes: { logout: '/sign-out', inactivity: '/idle' }}}
                let viewKey;
                if (config.admin.routes) {
                    const matchedRoute = Object.entries(config.admin.routes).find(([, route])=>{
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPathMatchingRoute"])({
                            currentRoute,
                            exact: true,
                            path: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                adminRoute,
                                path: route
                            })
                        });
                    });
                    if (matchedRoute) {
                        viewKey = matchedRoute[0];
                    }
                }
                // Check if a custom view is configured for this viewKey
                // First try to get custom view by the known viewKey, then fallback to route matching
                const customView = viewKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])({
                    config,
                    viewKey
                }) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                    config,
                    currentRoute
                });
                if (customView?.view?.payloadComponent || customView?.view?.Component) {
                    // User has configured a custom view (either overriding a built-in or a new custom view)
                    ViewToRender = customView.view;
                    // If this custom view is overriding a built-in view (viewKey matches a built-in),
                    // use the built-in's template settings and viewType
                    if (viewKey && oneSegmentViews[viewKey]) {
                        viewType = viewKey;
                        templateClassName = baseClasses[viewKey] || viewKey;
                        templateType = 'minimal';
                        if (viewKey === 'account') {
                            templateType = 'default';
                        }
                        if (isBrowseByFolderEnabled && viewKey === 'browseByFolder') {
                            templateType = 'default';
                            viewType = 'folders';
                        }
                    }
                } else if (oneSegmentViews[viewKey]) {
                    // --> /account
                    // --> /create-first-user
                    // --> /browse-by-folder
                    // --> /forgot
                    // --> /login
                    // --> /logout
                    // --> /logout-inactivity
                    // --> /unauthorized
                    ViewToRender = {
                        Component: oneSegmentViews[viewKey]
                    };
                    viewType = viewKey;
                    templateClassName = baseClasses[viewKey];
                    templateType = 'minimal';
                    if (viewKey === 'account') {
                        templateType = 'default';
                    }
                    if (isBrowseByFolderEnabled && viewKey === 'browseByFolder') {
                        templateType = 'default';
                        viewType = 'folders';
                    }
                }
                break;
            }
        case 2:
            {
                if (`/${segmentOne}` === config.admin.routes.reset) {
                    // --> /reset/:token
                    ViewToRender = {
                        Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResetPassword"]
                    };
                    templateClassName = baseClasses[segmentTwo];
                    templateType = 'minimal';
                    viewType = 'reset';
                } else if (isBrowseByFolderEnabled && `/${segmentOne}` === config.admin.routes.browseByFolder) {
                    // --> /browse-by-folder/:folderID
                    routeParams.folderID = segmentTwo;
                    ViewToRender = {
                        Component: oneSegmentViews.browseByFolder
                    };
                    templateClassName = baseClasses.folders;
                    templateType = 'default';
                    viewType = 'folders';
                } else if (collectionConfig) {
                    // --> /collections/:collectionSlug'
                    routeParams.collection = collectionConfig.slug;
                    if (collectionPreferences?.listViewType && collectionPreferences.listViewType === 'folders') {
                        // Render folder view by default if set in preferences
                        ViewToRender = {
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionFolderView"]
                        };
                        templateClassName = `collection-folders`;
                        templateType = 'default';
                        viewType = 'collection-folders';
                    } else {
                        ViewToRender = {
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListView"]
                        };
                        templateClassName = `${segmentTwo}-list`;
                        templateType = 'default';
                        viewType = 'list';
                    }
                    viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
                } else if (globalConfig) {
                    // --> /globals/:globalSlug
                    routeParams.global = globalConfig.slug;
                    ViewToRender = {
                        Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentView"]
                    };
                    templateClassName = 'global-edit';
                    templateType = 'default';
                    viewType = 'document';
                    // add default view actions
                    viewActions.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$attachViewActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getViewActions"])({
                        editConfig: globalConfig.admin?.components?.views?.edit,
                        viewKey: 'default'
                    }));
                }
                break;
            }
        default:
            if (segmentTwo === 'verify') {
                // --> /:collectionSlug/verify/:token
                routeParams.collection = segmentOne;
                routeParams.token = segmentThree;
                ViewToRender = {
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Verify"]
                };
                templateClassName = 'verify';
                templateType = 'minimal';
                viewType = 'verify';
            } else if (collectionConfig) {
                routeParams.collection = collectionConfig.slug;
                if (segmentThree === 'trash' && typeof segmentFour === 'string') {
                    // --> /collections/:collectionSlug/trash/:id (read-only)
                    // --> /collections/:collectionSlug/trash/:id/api
                    // --> /collections/:collectionSlug/trash/:id/preview
                    // --> /collections/:collectionSlug/trash/:id/versions
                    // --> /collections/:collectionSlug/trash/:id/versions/:versionID
                    routeParams.id = segmentFour;
                    routeParams.versionID = segmentSix;
                    ViewToRender = {
                        Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentView"]
                    };
                    templateClassName = `collection-default-edit`;
                    templateType = 'default';
                    const viewInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getDocumentViewInfo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentViewInfo"])([
                        segmentFive,
                        segmentSix
                    ]);
                    viewType = viewInfo.viewType;
                    documentSubViewType = viewInfo.documentSubViewType;
                    viewActions.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$attachViewActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubViewActions"])({
                        collectionOrGlobal: collectionConfig,
                        viewKeyArg: documentSubViewType
                    }));
                } else if (segmentThree === 'trash') {
                    // --> /collections/:collectionSlug/trash
                    ViewToRender = {
                        Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrashView"]
                    };
                    templateClassName = `${segmentTwo}-trash`;
                    templateType = 'default';
                    viewType = 'trash';
                    viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
                } else {
                    if (config.folders && segmentThree === config.folders.slug && collectionConfig.folders) {
                        // Collection Folder Views
                        // --> /collections/:collectionSlug/:folderCollectionSlug
                        // --> /collections/:collectionSlug/:folderCollectionSlug/:folderID
                        routeParams.folderCollection = segmentThree;
                        routeParams.folderID = segmentFour;
                        ViewToRender = {
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionFolderView"]
                        };
                        templateClassName = `collection-folders`;
                        templateType = 'default';
                        viewType = 'collection-folders';
                        viewActions.push(...collectionConfig.admin.components?.views?.list?.actions || []);
                    } else {
                        // Collection Edit Views
                        // --> /collections/:collectionSlug/create
                        // --> /collections/:collectionSlug/:id
                        // --> /collections/:collectionSlug/:id/api
                        // --> /collections/:collectionSlug/:id/versions
                        // --> /collections/:collectionSlug/:id/versions/:versionID
                        routeParams.id = segmentThree === 'create' ? undefined : segmentThree;
                        routeParams.versionID = segmentFive;
                        ViewToRender = {
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentView"]
                        };
                        templateClassName = `collection-default-edit`;
                        templateType = 'default';
                        const viewInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getDocumentViewInfo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentViewInfo"])([
                            segmentFour,
                            segmentFive
                        ]);
                        viewType = viewInfo.viewType;
                        documentSubViewType = viewInfo.documentSubViewType;
                        viewActions.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$attachViewActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubViewActions"])({
                            collectionOrGlobal: collectionConfig,
                            viewKeyArg: documentSubViewType
                        }));
                    }
                }
            } else if (globalConfig) {
                // Global Edit Views
                // --> /globals/:globalSlug/versions
                // --> /globals/:globalSlug/versions/:versionID
                // --> /globals/:globalSlug/api
                routeParams.global = globalConfig.slug;
                routeParams.versionID = segmentFour;
                ViewToRender = {
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentView"]
                };
                templateClassName = `global-edit`;
                templateType = 'default';
                const viewInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getDocumentViewInfo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentViewInfo"])([
                    segmentThree,
                    segmentFour
                ]);
                viewType = viewInfo.viewType;
                documentSubViewType = viewInfo.documentSubViewType;
                viewActions.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$attachViewActions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubViewActions"])({
                    collectionOrGlobal: globalConfig,
                    viewKeyArg: documentSubViewType
                }));
            }
            break;
    }
    if (!ViewToRender) {
        ViewToRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
            config,
            currentRoute
        })?.view;
    }
    if (collectionConfig) {
        if (routeParams.id) {
            routeParams.id = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["parseDocumentID"])({
                id: routeParams.id,
                collectionSlug: collectionConfig.slug,
                payload
            });
        }
        if (routeParams.versionID) {
            routeParams.versionID = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["parseDocumentID"])({
                id: routeParams.versionID,
                collectionSlug: collectionConfig.slug,
                payload
            });
        }
    }
    if (config.folders && routeParams.folderID) {
        routeParams.folderID = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["parseDocumentID"])({
            id: routeParams.folderID,
            collectionSlug: config.folders.slug,
            payload
        });
    }
    if (globalConfig && routeParams.versionID) {
        routeParams.versionID = payload.db.defaultIDType === 'number' && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["isNumber"])(routeParams.versionID) ? Number(routeParams.versionID) : routeParams.versionID;
    }
    if (viewActions.length) {
        viewActions.reverse();
    }
    return {
        browseByFolderSlugs,
        collectionConfig,
        DefaultView: ViewToRender,
        documentSubViewType,
        globalConfig,
        routeParams,
        templateClassName,
        templateType,
        viewActions: viewActions.length ? viewActions : undefined,
        viewType
    };
}; //# sourceMappingURL=getRouteData.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RootPage",
    ()=>RootPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/templates/Default/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Minimal$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/templates/Minimal/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/getPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getVisibleEntities$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/getVisibleEntities.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/handleAuthRedirect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/initReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$isCustomAdminView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/isCustomAdminView.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$isPublicAdminRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/isPublicAdminRoute.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByRoute.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getRouteData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getRouteData.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getVisibleEntities$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getRouteData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getVisibleEntities$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getRouteData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
;
;
;
const RootPage = async ({ config: configPromise, importMap, params: paramsPromise, searchParams: searchParamsPromise })=>{
    const config = await configPromise;
    const { admin: { routes: { createFirstUser: _createFirstUserRoute }, user: userSlug }, routes: { admin: adminRoute } } = config;
    const params = await paramsPromise;
    const currentRoute = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
        adminRoute,
        path: Array.isArray(params.segments) ? `/${params.segments.join('/')}` : null
    });
    const segments = Array.isArray(params.segments) ? params.segments : [];
    const isCollectionRoute = segments[0] === 'collections';
    const isGlobalRoute = segments[0] === 'globals';
    let collectionConfig = undefined;
    let globalConfig = undefined;
    const searchParams = await searchParamsPromise;
    // Redirect `${adminRoute}/collections` to `${adminRoute}`
    if (isCollectionRoute) {
        if (segments.length === 1) {
            const { viewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                config,
                currentRoute: '/collections'
            });
            // Only redirect if there's NO custom view configured for /collections
            if (!viewKey) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
            }
        }
        if (segments[1]) {
            collectionConfig = config.collections.find(({ slug })=>slug === segments[1]);
        }
    }
    // Redirect `${adminRoute}/globals` to `${adminRoute}`
    if (isGlobalRoute) {
        if (segments.length === 1) {
            const { viewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                config,
                currentRoute: '/globals'
            });
            // Only redirect if there's NO custom view configured for /globals
            if (!viewKey) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
            }
        }
        if (segments[1]) {
            globalConfig = config.globals.find(({ slug })=>slug === segments[1]);
        }
    }
    if (isCollectionRoute && !collectionConfig || isGlobalRoute && !globalConfig) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const queryString = `${__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"](searchParams ?? {}, {
        addQueryPrefix: true
    })}`;
    const { cookies, locale, permissions, req, req: { payload } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initReq"])({
        configPromise: config,
        importMap,
        key: 'initPage',
        overrides: {
            fallbackLocale: false,
            req: {
                query: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"](queryString, {
                    depth: 10,
                    ignoreQueryPrefix: true
                })
            },
            urlSuffix: `${currentRoute}${searchParams ? queryString : ''}`
        }
    });
    if (!permissions.canAccessAdmin && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$isPublicAdminRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPublicAdminRoute"])({
        adminRoute,
        config: payload.config,
        route: currentRoute
    }) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$isCustomAdminView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCustomAdminView"])({
        adminRoute,
        config: payload.config,
        route: currentRoute
    })) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleAuthRedirect"])({
            config: payload.config,
            route: currentRoute,
            searchParams,
            user: req.user
        }));
    }
    let collectionPreferences = undefined;
    if (collectionConfig && segments.length === 2) {
        if (config.folders && collectionConfig.folders && segments[1] !== config.folders.slug) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPreferences"])(`collection-${collectionConfig.slug}`, req.payload, req.user.id, config.admin.user).then((res)=>{
                if (res && res.value) {
                    collectionPreferences = res.value;
                }
            });
        }
    }
    const { browseByFolderSlugs, DefaultView, documentSubViewType, routeParams, templateClassName, templateType, viewActions, viewType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getRouteData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteData"])({
        adminRoute,
        collectionConfig,
        collectionPreferences,
        currentRoute,
        globalConfig,
        payload,
        searchParams,
        segments
    });
    req.routeParams = routeParams;
    const dbHasUser = req.user || await req.payload.db.findOne({
        collection: userSlug,
        req
    })?.then((doc)=>!!doc);
    /**
  * This function is responsible for handling the case where the view is not found.
  * The current route did not match any default views or custom route views.
  */ if (!DefaultView?.Component && !DefaultView?.payloadComponent) {
        if (req?.user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
        if (dbHasUser) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
        }
    }
    const createFirstUserRoute = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
        adminRoute,
        path: _createFirstUserRoute
    });
    const usersCollection = config.collections.find(({ slug })=>slug === userSlug);
    const disableLocalStrategy = usersCollection?.auth?.disableLocalStrategy;
    if (disableLocalStrategy && currentRoute === createFirstUserRoute) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
    }
    if (!dbHasUser && currentRoute !== createFirstUserRoute && !disableLocalStrategy) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(createFirstUserRoute);
    }
    if (dbHasUser && currentRoute === createFirstUserRoute) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
    }
    if (!DefaultView?.Component && !DefaultView?.payloadComponent && !dbHasUser) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(adminRoute);
    }
    const clientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
        config,
        i18n: req.i18n,
        importMap,
        user: viewType === 'createFirstUser' ? true : req.user
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["applyLocaleFiltering"])({
        clientConfig,
        config,
        req
    });
    // Ensure locale on req is still valid after filtering locales
    if (clientConfig.localization && req.locale && !clientConfig.localization.localeCodes.includes(req.locale)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`${currentRoute}${__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"]({
            ...searchParams,
            locale: clientConfig.localization.localeCodes.includes(clientConfig.localization.defaultLocale) ? clientConfig.localization.defaultLocale : clientConfig.localization.localeCodes[0]
        }, {
            addQueryPrefix: true
        })}`);
    }
    const visibleEntities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getVisibleEntities$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVisibleEntities"])({
        req
    });
    const folderID = routeParams.folderID;
    const RenderedView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
        clientProps: {
            browseByFolderSlugs,
            clientConfig,
            documentSubViewType,
            viewType
        },
        Component: DefaultView.payloadComponent,
        Fallback: DefaultView.Component,
        importMap,
        serverProps: {
            clientConfig,
            collectionConfig,
            docID: routeParams.id,
            folderID,
            globalConfig,
            i18n: req.i18n,
            importMap,
            initPageResult: {
                collectionConfig,
                cookies,
                docID: routeParams.id,
                globalConfig,
                languageOptions: Object.entries(req.payload.config.i18n.supportedLanguages || {}).reduce((acc, [language, languageConfig])=>{
                    if (Object.keys(req.payload.config.i18n.supportedLanguages).includes(language)) {
                        acc.push({
                            label: languageConfig.translations.general.thisLanguage,
                            value: language
                        });
                    }
                    return acc;
                }, []),
                locale,
                permissions,
                req,
                translations: req.i18n.translations,
                visibleEntities
            },
            params,
            payload: req.payload,
            searchParams,
            viewActions
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageConfigProvider"], {
        config: clientConfig,
        children: [
            !templateType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: RenderedView
            }),
            templateType === 'minimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Minimal$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MinimalTemplate"], {
                className: templateClassName,
                children: RenderedView
            }),
            templateType === 'default' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultTemplate"], {
                collectionSlug: collectionConfig?.slug,
                docID: routeParams.id,
                documentSubViewType: documentSubViewType,
                globalSlug: globalConfig?.slug,
                i18n: req.i18n,
                locale: locale,
                params: params,
                payload: req.payload,
                permissions: permissions,
                req: req,
                searchParams: searchParams,
                user: req.user,
                viewActions: viewActions,
                viewType: viewType,
                visibleEntities: {
                    // The reason we are not passing in initPageResult.visibleEntities directly is due to a "Cannot assign to read only property of object '#<Object>" error introduced in React 19
                    // which this caused as soon as initPageResult.visibleEntities is passed in
                    collections: visibleEntities?.collections,
                    globals: visibleEntities?.globals
                },
                children: RenderedView
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateAccountViewMetadata",
    ()=>generateAccountViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateAccountViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: `${t('authentication:accountOfCurrentUser')}`,
        keywords: `${t('authentication:account')}`,
        serverURL: config.serverURL,
        title: t('authentication:account'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBrowseByFolderMetadata",
    ()=>generateBrowseByFolderMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateBrowseByFolderMetadata = async (args)=>{
    const { config, i18n } = args;
    const title = i18n.t('folder:browseByFolder');
    const description = '';
    const keywords = '';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        ...config.admin.meta || {},
        description,
        keywords,
        serverURL: config.serverURL,
        title
    });
}; //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCollectionFolderMetadata",
    ()=>generateCollectionFolderMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
;
const generateCollectionFolderMetadata = async (args)=>{
    const { collectionConfig, config, i18n } = args;
    let title = '';
    const description = '';
    const keywords = '';
    if (collectionConfig) {
        title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.singular, i18n);
    }
    title = `${title ? `${title} ` : title}${i18n.t('folder:folders')}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        ...config.admin.meta || {},
        description,
        keywords,
        serverURL: config.serverURL,
        title,
        ...collectionConfig?.admin?.meta || {}
    });
}; //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionTrash/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCollectionTrashMetadata",
    ()=>generateCollectionTrashMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
;
const generateCollectionTrashMetadata = async (args)=>{
    const { collectionConfig, config, i18n } = args;
    let title = '';
    const description = '';
    const keywords = '';
    if (collectionConfig) {
        title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.plural, i18n);
    }
    title = `${title ? `${title} ` : title}${i18n.t('general:trash')}`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        ...config.admin.meta || {},
        description,
        keywords,
        serverURL: config.serverURL,
        title,
        ...collectionConfig?.admin?.meta || {}
    });
}; //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCreateFirstUserViewMetadata",
    ()=>generateCreateFirstUserViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateCreateFirstUserViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: t('authentication:createFirstUser'),
        keywords: t('general:create'),
        serverURL: config.serverURL,
        title: t('authentication:createFirstUser'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateDashboardViewMetadata",
    ()=>generateDashboardViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateDashboardViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        serverURL: config.serverURL,
        title: t('general:dashboard'),
        ...config.admin.meta,
        openGraph: {
            title: t('general:dashboard'),
            ...config.admin.meta?.openGraph || {}
        }
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Document/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "generateDocumentViewMetadata",
    ()=>generateDocumentViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/getMetaBySegment.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const generateDocumentViewMetadata = async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMetaBySegment"])(args); //# sourceMappingURL=metadata.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateForgotPasswordViewMetadata",
    ()=>generateForgotPasswordViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateForgotPasswordViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: t('authentication:forgotPassword'),
        keywords: t('authentication:forgotPassword'),
        title: t('authentication:forgotPassword'),
        ...config.admin.meta || {},
        serverURL: config.serverURL
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/List/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateListViewMetadata",
    ()=>generateListViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
;
const generateListViewMetadata = async (args)=>{
    const { collectionConfig, config, i18n } = args;
    let title = '';
    const description = '';
    const keywords = '';
    if (collectionConfig) {
        title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.plural, i18n);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        ...config.admin.meta || {},
        description,
        keywords,
        serverURL: config.serverURL,
        title,
        ...collectionConfig?.admin?.meta || {}
    });
}; //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLoginViewMetadata",
    ()=>generateLoginViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateLoginViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: `${t('authentication:login')}`,
        keywords: `${t('authentication:login')}`,
        serverURL: config.serverURL,
        title: t('authentication:login'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateResetPasswordViewMetadata",
    ()=>generateResetPasswordViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateResetPasswordViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: t('authentication:resetPassword'),
        keywords: t('authentication:resetPassword'),
        serverURL: config.serverURL,
        title: t('authentication:resetPassword'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Unauthorized/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUnauthorizedViewMetadata",
    ()=>generateUnauthorizedViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateUnauthorizedViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: t('error:unauthorized'),
        keywords: t('error:unauthorized'),
        serverURL: config.serverURL,
        title: t('error:unauthorized'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateVerifyViewMetadata",
    ()=>generateVerifyViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateVerifyViewMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: t('authentication:verifyUser'),
        keywords: t('authentication:verify'),
        serverURL: config.serverURL,
        title: t('authentication:verify'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=metadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/generateCustomViewMetadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateCustomViewMetadata",
    ()=>generateCustomViewMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateCustomViewMetadata = async (args)=>{
    const { config, // i18n: { t },
    viewConfig } = args;
    if (!viewConfig) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        description: `Payload`,
        keywords: `Payload`,
        serverURL: config.serverURL,
        title: 'Payload',
        ...config.admin.meta || {},
        ...viewConfig.meta || {},
        openGraph: {
            title: 'Payload',
            ...config.admin.meta?.openGraph || {},
            ...viewConfig.meta?.openGraph || {}
        }
    });
}; //# sourceMappingURL=generateCustomViewMetadata.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Root/metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "generatePageMetadata",
    ()=>generatePageMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/utilities/getNextRequestI18n.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Account/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/BrowseByFolder/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionFolders/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CollectionTrash/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Dashboard/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Document/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/List/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/NotFound/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Unauthorized/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$generateCustomViewMetadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/generateCustomViewMetadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Root/getCustomViewByRoute.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
;
;
;
const oneSegmentMeta = {
    'create-first-user': __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CreateFirstUser$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCreateFirstUserViewMetadata"],
    folders: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBrowseByFolderMetadata"],
    forgot: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ForgotPassword$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateForgotPasswordViewMetadata"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateLoginViewMetadata"],
    logout: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateUnauthorizedViewMetadata"],
    'logout-inactivity': __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateUnauthorizedViewMetadata"],
    unauthorized: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateUnauthorizedViewMetadata"]
};
const generatePageMetadata = async ({ config: configPromise, params: paramsPromise })=>{
    const config = await configPromise;
    const params = await paramsPromise;
    const folderCollectionSlugs = config.collections.reduce((acc, { slug, folders })=>{
        if (folders) {
            return [
                ...acc,
                slug
            ];
        }
        return acc;
    }, []);
    const segments = Array.isArray(params.segments) ? params.segments : [];
    const currentRoute = `/${segments.join('/')}`;
    const [segmentOne, segmentTwo, segmentThree] = segments;
    const isGlobal = segmentOne === 'globals';
    const isCollection = segmentOne === 'collections';
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextRequestI18n"])({
        config
    });
    let meta;
    // TODO: handle custom routes
    const collectionConfig = isCollection && segments.length > 1 && config?.collections?.find((collection)=>collection.slug === segmentTwo);
    const globalConfig = isGlobal && segments.length > 1 && config?.globals?.find((global)=>global.slug === segmentTwo);
    switch(segments.length){
        case 0:
            {
                meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Dashboard$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDashboardViewMetadata"])({
                    config,
                    i18n
                });
                break;
            }
        case 1:
            {
                if (folderCollectionSlugs.length && `/${segmentOne}` === config.admin.routes.browseByFolder) {
                    // --> /:folderCollectionSlug
                    meta = await oneSegmentMeta.folders({
                        config,
                        i18n
                    });
                } else if (segmentOne === 'account') {
                    // --> /account
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Account$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateAccountViewMetadata"])({
                        config,
                        i18n
                    });
                    break;
                } else if (oneSegmentMeta[segmentOne]) {
                    // --> /create-first-user
                    // --> /forgot
                    // --> /login
                    // --> /logout
                    // --> /logout-inactivity
                    // --> /unauthorized
                    meta = await oneSegmentMeta[segmentOne]({
                        config,
                        i18n
                    });
                    break;
                }
                break;
            }
        case 2:
            {
                if (`/${segmentOne}` === config.admin.routes.reset) {
                    // --> /reset/:token
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$ResetPassword$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateResetPasswordViewMetadata"])({
                        config,
                        i18n
                    });
                } else if (folderCollectionSlugs.length && `/${segmentOne}` === config.admin.routes.browseByFolder) {
                    // --> /browse-by-folder/:folderID
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$BrowseByFolder$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBrowseByFolderMetadata"])({
                        config,
                        i18n
                    });
                } else if (isCollection) {
                    // --> /collections/:collectionSlug
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateListViewMetadata"])({
                        collectionConfig,
                        config,
                        i18n
                    });
                } else if (isGlobal) {
                    // --> /globals/:globalSlug
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDocumentViewMetadata"])({
                        config,
                        globalConfig,
                        i18n,
                        params
                    });
                }
                break;
            }
        default:
            {
                if (segmentTwo === 'verify') {
                    // --> /:collectionSlug/verify/:token
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Verify$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateVerifyViewMetadata"])({
                        config,
                        i18n
                    });
                } else if (isCollection) {
                    if (segmentThree === 'trash' && segments.length === 3 && collectionConfig) {
                        // Collection Trash Views
                        // --> /collections/:collectionSlug/trash
                        meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionTrash$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCollectionTrashMetadata"])({
                            collectionConfig,
                            config,
                            i18n,
                            params
                        });
                    } else if (config.folders && segmentThree === config.folders.slug) {
                        if (folderCollectionSlugs.includes(collectionConfig.slug)) {
                            // Collection Folder Views
                            // --> /collections/:collectionSlug/:folderCollectionSlug
                            // --> /collections/:collectionSlug/:folderCollectionSlug/:id
                            meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$CollectionFolders$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCollectionFolderMetadata"])({
                                collectionConfig,
                                config,
                                i18n,
                                params
                            });
                        }
                    } else {
                        // Collection Document Views
                        // --> /collections/:collectionSlug/:id
                        // --> /collections/:collectionSlug/:id/versions
                        // --> /collections/:collectionSlug/:id/versions/:version
                        // --> /collections/:collectionSlug/:id/api
                        // --> /collections/:collectionSlug/trash/:id
                        meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDocumentViewMetadata"])({
                            collectionConfig,
                            config,
                            i18n,
                            params
                        });
                    }
                } else if (isGlobal) {
                    // Global Document Views
                    // --> /globals/:globalSlug/versions
                    // --> /globals/:globalSlug/versions/:version
                    // --> /globals/:globalSlug/api
                    meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateDocumentViewMetadata"])({
                        config,
                        globalConfig,
                        i18n,
                        params
                    });
                }
                break;
            }
    }
    if (!meta) {
        const { viewConfig, viewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
            config,
            currentRoute
        });
        if (viewKey) {
            // Custom Views
            // --> /:path
            meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$generateCustomViewMetadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateCustomViewMetadata"])({
                config,
                i18n,
                viewConfig
            });
        } else {
            meta = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNotFoundViewMetadata"])({
                config,
                i18n
            });
        }
    }
    return meta;
}; //# sourceMappingURL=metadata.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=0a8f5_%40payloadcms_next_dist_15473d6a._.js.map
module.exports = [
"[project]/cms/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NavHamburger",
    ()=>NavHamburger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const NavHamburger = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6);
    const { baseClass } = t0;
    const { navOpen, setNavOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNav"])();
    const t1 = `${baseClass}__mobile-close`;
    let t2;
    if ($[0] !== setNavOpen) {
        t2 = ()=>{
            setNavOpen(false);
        };
        $[0] = setNavOpen;
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const t3 = !navOpen ? -1 : undefined;
    let t4;
    if ($[2] !== t1 || $[3] !== t2 || $[4] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
            className: t1,
            onClick: t2,
            tabIndex: t3,
            type: "button",
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Hamburger"], {
                isActive: true
            })
        });
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NavWrapper",
    ()=>NavWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const NavWrapper = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(11);
    const { baseClass, children } = props;
    const { hydrated, navOpen, navRef, shouldAnimate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNav"])();
    const t0 = navOpen && `${baseClass}--nav-open`;
    const t1 = shouldAnimate && `${baseClass}--nav-animate`;
    const t2 = hydrated && `${baseClass}--nav-hydrated`;
    let t3;
    if ($[0] !== baseClass || $[1] !== t0 || $[2] !== t1 || $[3] !== t2) {
        t3 = [
            baseClass,
            t0,
            t1,
            t2
        ].filter(Boolean);
        $[0] = baseClass;
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = t3.join(" ");
    const t5 = !navOpen ? true : undefined;
    const t6 = `${baseClass}__scroll`;
    let t7;
    if ($[5] !== children || $[6] !== navRef || $[7] !== t4 || $[8] !== t5 || $[9] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("aside", {
            className: t4,
            inert: t5,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: t6,
                ref: navRef,
                children
            })
        });
        $[5] = children;
        $[6] = navRef;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript)");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/Nav/SettingsMenuButton/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SettingsMenuButton",
    ()=>SettingsMenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'settings-menu-button';
const SettingsMenuButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3);
    const { settingsMenu } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    if (!settingsMenu || settingsMenu.length === 0) {
        return null;
    }
    let t1;
    if ($[0] !== settingsMenu || $[1] !== t) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Popup"], {
            button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GearIcon"], {
                ariaLabel: t("general:menu")
            }),
            className: baseClass,
            horizontalAlign: "left",
            id: "settings-menu",
            size: "small",
            verticalAlign: "bottom",
            children: settingsMenu.map(_temp)
        });
        $[0] = settingsMenu;
        $[1] = t;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
function _temp(item, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: item
    }, `settings-menu-item-${i}`);
} //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript)");
}),
"[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/cms/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/cms/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/cms/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/cms/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/cms/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/cms/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/cms/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/cms/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
}),
"[project]/cms/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/cms/node_modules/date-fns/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/cms/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/cms/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/cms/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/cms/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/normalizeDates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfDay.js [app-ssr] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/cms/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/cms/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/differenceInCalendarDays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/cms/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/cms/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/cms/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/cms/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/cms/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/cms/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/cms/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/cms/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/startOfWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/cms/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/cms/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/cms/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getDayOfYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getISOWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getISOWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getWeek.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/getWeekYear.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/addLeadingZeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/format/lightFormatters.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/cms/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/cms/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/cms/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/cms/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/isDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/cms/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/defaultOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/format/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/format/longFormatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/_lib/protectedTokens.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/isValid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/toDate.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/cms/node_modules/date-fns/transpose.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "transpose",
    ()=>transpose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/constructFrom.js [app-ssr] (ecmascript)");
;
function transpose(date, constructor) {
    const date_ = isConstructor(constructor) ? new constructor(0) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructFrom"])(constructor, 0);
    date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    date_.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return date_;
}
function isConstructor(constructor) {
    return typeof constructor === "function" && constructor.prototype?.constructor === constructor;
}
const __TURBOPACK__default__export__ = transpose;
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "EntityType",
    ()=>ue,
    "PayloadIcon",
    ()=>J,
    "PayloadLogo",
    ()=>G,
    "Translation",
    ()=>I,
    "WithServerSideProps",
    ()=>V,
    "abortAndIgnore",
    ()=>oe,
    "filterFields",
    ()=>D,
    "findLocaleFromCode",
    ()=>ie,
    "formatDate",
    ()=>v,
    "formatDocTitle",
    ()=>me,
    "getInitialColumns",
    ()=>re,
    "groupNavItems",
    ()=>de,
    "handleAbortRef",
    ()=>ne,
    "handleBackToDashboard",
    ()=>xe,
    "handleGoBack",
    ()=>Te,
    "handleTakeOver",
    ()=>De,
    "hasSavePermission",
    ()=>Ce,
    "isClientUserObject",
    ()=>we,
    "isEditing",
    ()=>ve,
    "mergeFieldStyles",
    ()=>_,
    "reduceToSerializableFields",
    ()=>Y,
    "requests",
    ()=>se,
    "sanitizeID",
    ()=>Me,
    "withMergedProps",
    ()=>H
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$transpose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/date-fns/transpose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
var L = ({ elements: e, translationString: t })=>{
    let r = /(<[^>]+>.*?<\/[^>]+>)/g, o = t.split(r);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        children: o.map((n, s)=>{
            if (e && n.startsWith("<") && n.endsWith(">")) {
                let i = n[1], a = e[i];
                if (a) {
                    let l = new RegExp(`<${i}>(.*?)</${i}>`, "g"), h = n.replace(l, (c, f)=>f);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(a, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(L, {
                            translationString: h
                        })
                    }, s);
                }
            }
            return n;
        })
    });
}, I = ({ elements: e, i18nKey: t, t: r, variables: o })=>{
    let n = r(t, o || {});
    return e ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(L, {
        elements: e,
        translationString: n
    }) : n;
};
;
;
;
function H({ Component: e, sanitizeServerOnlyProps: t, toMergeIntoProps: r }) {
    return t === void 0 && (t = !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["isReactServerComponentOrFunction"])(e)), (n)=>{
        let s = W(n, r);
        return t && __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["serverProps"].forEach((i)=>{
            delete s[i];
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(e, {
            ...s
        });
    };
}
function W(e, t) {
    return {
        ...e,
        ...t
    };
}
;
;
;
var V = ({ Component: e, serverOnlyProps: t, ...r })=>e ? ((n)=>{
        let s = {
            ...n,
            ...(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["isReactServerComponentOrFunction"])(e) ? t ?? {} : {}
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(e, {
            ...s
        });
    })(r) : null;
var _ = (e)=>({
        ...e?.admin?.style || {},
        ...e?.admin?.width ? {
            "--field-width": e.admin.width
        } : {
            flex: "1 1 auto"
        },
        ...e?.admin?.style?.flex ? {
            flex: e.admin.style.flex
        } : {}
    });
var q = [
    "validate",
    "customComponents"
], K = (e)=>{
    let t = {
        ...e
    };
    for (let r of q)delete t[r];
    return t;
}, Y = (e)=>{
    let t = {};
    for(let r in e)t[r] = K(e[r]);
    return t;
};
;
;
var J = ({ fill: e })=>{
    let t = e || "var(--theme-elevation-1000)";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        className: "graphic-icon",
        height: "100%",
        viewBox: "0 0 25 25",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M11.8673 21.2336L4.40922 16.9845C4.31871 16.9309 4.25837 16.8355 4.25837 16.7282V10.1609C4.25837 10.0477 4.38508 9.97616 4.48162 10.0298L13.1404 14.9642C13.2611 15.0358 13.412 14.9464 13.412 14.8093V11.6091C13.412 11.4839 13.3456 11.3647 13.2309 11.2992L2.81624 5.36353C2.72573 5.30989 2.60505 5.30989 2.51454 5.36353L1.15085 6.14422C1.06034 6.19786 1 6.29321 1 6.40048V18.5995C1 18.7068 1.06034 18.8021 1.15085 18.8558L11.8491 24.9583C11.9397 25.0119 12.0603 25.0119 12.1509 24.9583L21.1355 19.8331C21.2562 19.7616 21.2562 19.5948 21.1355 19.5232L18.3357 17.9261C18.2211 17.8605 18.0883 17.8605 17.9737 17.9261L12.175 21.2336C12.0845 21.2872 11.9638 21.2872 11.8733 21.2336H11.8673Z",
                fill: t
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M22.8491 6.13827L12.1508 0.0417218C12.0603 -0.0119135 11.9397 -0.0119135 11.8491 0.0417218L6.19528 3.2658C6.0746 3.33731 6.0746 3.50418 6.19528 3.57569L8.97092 5.16091C9.08557 5.22647 9.21832 5.22647 9.33296 5.16091L11.8672 3.71872C11.9578 3.66508 12.0784 3.66508 12.1689 3.71872L19.627 7.96782C19.7175 8.02146 19.7778 8.11681 19.7778 8.22408V14.8212C19.7778 14.9464 19.8442 15.0656 19.9589 15.1311L22.7345 16.7104C22.8552 16.7819 23.006 16.6925 23.006 16.5554V6.40048C23.006 6.29321 22.9457 6.19786 22.8552 6.14423L22.8491 6.13827Z",
                fill: t
            })
        ]
    });
};
;
;
var X = `
  .graphic-logo path {
    fill: var(--theme-elevation-1000);
  }
`, G = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        className: "graphic-logo",
        fill: "none",
        height: "43.5",
        id: "b",
        viewBox: "0 0 193.38 43.5",
        width: "193.38",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                children: X
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("g", {
                id: "c",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        d: "M18.01,35.63l-12.36-7.13c-.15-.09-.25-.25-.25-.43v-11.02c0-.19.21-.31.37-.22l14.35,8.28c.2.12.45-.03.45-.26v-5.37c0-.21-.11-.41-.3-.52L3.01,9c-.15-.09-.35-.09-.5,0l-2.26,1.31c-.15.09-.25.25-.25.43v20.47c0,.18.1.34.25.43l17.73,10.24c.15.09.35.09.5,0l14.89-8.6c.2-.12.2-.4,0-.52l-4.64-2.68c-.19-.11-.41-.11-.6,0l-9.61,5.55c-.15.09-.35.09-.5,0Z"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        d: "M36.21,10.3L18.48.07c-.15-.09-.35-.09-.5,0l-9.37,5.41c-.2.12-.2.4,0,.52l4.6,2.66c.19.11.41.11.6,0l4.2-2.42c.15-.09.35-.09.5,0l12.36,7.13c.15.09.25.25.25.43v11.07c0,.21.11.41.3.52l4.6,2.65c.2.12.45-.03.45-.26V10.74c0-.18-.1-.34-.25-.43Z"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("g", {
                        id: "d",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M193.38,9.47c0,1.94-1.48,3.32-3.3,3.32s-3.31-1.39-3.31-3.32,1.49-3.31,3.31-3.31,3.3,1.39,3.3,3.31ZM192.92,9.47c0-1.68-1.26-2.88-2.84-2.88s-2.84,1.2-2.84,2.88,1.26,2.89,2.84,2.89,2.84-1.2,2.84-2.89ZM188.69,11.17v-3.51h1.61c.85,0,1.35.39,1.35,1.15,0,.53-.3.86-.67,1.02l.79,1.35h-.89l-.72-1.22h-.64v1.22h-.82ZM190.18,9.31c.46,0,.64-.16.64-.5s-.19-.49-.64-.49h-.67v.99h.67Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M54.72,24.84v10.93h-5.4V6.1h12.26c7.02,0,11.1,3.2,11.1,9.39s-4.07,9.35-11.06,9.35h-6.9,0ZM61.12,20.52c4.07,0,6.11-1.66,6.11-5.03s-2.04-5.03-6.11-5.03h-6.4v10.06h6.4Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M85.94,32.45c-1,2.41-3.66,3.78-7.02,3.78-4.11,0-7.11-2.29-7.11-6.11,0-4.24,3.32-5.98,7.61-6.48l6.32-.71v-1c0-2.58-1.58-3.82-3.99-3.82s-3.74,1.29-3.91,3.24h-5.11c.46-4.53,3.99-7.19,9.18-7.19,5.74,0,9.02,2.7,9.02,8.19v8.15c0,1.95.08,3.58.42,5.28h-5.11c-.21-1.16-.29-2.29-.29-3.32h0ZM85.73,27.58v-1.29l-4.7.54c-2.24.29-3.95.79-3.95,2.99,0,1.66,1.16,2.7,3.28,2.7,2.74,0,5.36-1.62,5.36-4.95h0Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M90.39,14.66h5.4l5.86,15.92h.08l5.57-15.92h5.28l-8.23,21.49c-2,5.28-4.45,7.32-8.89,7.36-.71,0-1.7-.08-2.45-.21v-4.03c.62.13.96.13,1.41.13,2.16,0,3.07-.75,4.2-3.66l-8.23-21.07h0Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M113.46,35.77V6.1h5.32v29.67h-5.32Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M130.79,36.27c-6.23,0-10.68-4.2-10.68-11.05s4.45-11.05,10.68-11.05,10.68,4.24,10.68,11.05-4.45,11.05-10.68,11.05ZM130.79,32.32c3.41,0,5.36-2.66,5.36-7.11s-1.95-7.11-5.36-7.11-5.36,2.7-5.36,7.11,1.91,7.11,5.36,7.11Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M156.19,32.45c-1,2.41-3.66,3.78-7.02,3.78-4.11,0-7.11-2.29-7.11-6.11,0-4.24,3.32-5.98,7.61-6.48l6.32-.71v-1c0-2.58-1.58-3.82-3.99-3.82s-3.74,1.29-3.91,3.24h-5.11c.46-4.53,3.99-7.19,9.19-7.19,5.74,0,9.02,2.7,9.02,8.19v8.15c0,1.95.08,3.58.42,5.28h-5.11c-.21-1.16-.29-2.29-.29-3.32h0ZM155.98,27.58v-1.29l-4.7.54c-2.24.29-3.95.79-3.95,2.99,0,1.66,1.16,2.7,3.28,2.7,2.74,0,5.36-1.62,5.36-4.95h0Z"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                                d: "M178.5,32.41c-1.04,2.12-3.58,3.87-6.78,3.87-5.53,0-9.31-4.49-9.31-11.05s3.78-11.05,9.31-11.05c3.28,0,5.69,1.83,6.69,3.95V6.1h5.32v29.67h-5.24v-3.37h0ZM178.55,24.84c0-4.11-1.95-6.78-5.32-6.78s-5.45,2.83-5.45,7.15,2,7.15,5.45,7.15,5.32-2.66,5.32-6.78v-.75h0Z"
                            })
                        ]
                    })
                ]
            })
        ]
    });
;
var D = (e)=>{
    let t = (r)=>r.type !== "ui" && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsHiddenOrDisabled"])(r) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsID"])(r) || r?.admin?.disableListColumn === !0;
    return (e ?? []).reduce((r, o)=>{
        if (t(o)) return r;
        if (o.type === "tabs" && "tabs" in o) {
            let n = {
                ...o,
                tabs: o.tabs.map((s)=>({
                        ...s,
                        fields: D(s.fields)
                    }))
            };
            return r.push(n), r;
        }
        if ("fields" in o && Array.isArray(o.fields)) {
            let n = {
                ...o,
                fields: D(o.fields)
            };
            return r.push(n), r;
        }
        return r.push(o), r;
    }, []);
};
;
var C = (e, t)=>e?.reduce((r, o)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(o) && o.name === t ? r : !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(o) && "fields" in o ? [
            ...r,
            ...C(o.fields, t)
        ] : o.type === "tabs" && "tabs" in o ? [
            ...r,
            ...o.tabs.reduce((n, s)=>[
                    ...n,
                    ..."name" in s ? [
                        s.name
                    ] : C(s.fields, t)
                ], [])
        ] : [
            ...r,
            o.name
        ], []), re = (e, t, r)=>{
    let o = [];
    if (Array.isArray(r) && r.length >= 1) o = r;
    else {
        t && o.push(t);
        let n = C(e, t);
        o = o.concat(n), o = o.slice(0, 4);
    }
    return o.map((n)=>({
            accessor: n,
            active: !0
        }));
};
function oe(e) {
    if (e) try {
        e.abort();
    } catch  {}
}
function ne(e) {
    let t = new AbortController;
    if (e.current) try {
        e.current.abort();
    } catch  {}
    return e.current = t, t;
}
;
var se = {
    delete: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "delete"
        };
        return fetch(e, o);
    },
    get: (e, t = {
        headers: {}
    })=>{
        let r = "";
        return t.params && (r = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"](t.params, {
            addQueryPrefix: !0
        })), fetch(`${e}${r}`, {
            credentials: "include",
            ...t
        });
    },
    patch: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "PATCH"
        };
        return fetch(e, o);
    },
    post: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "post"
        };
        return fetch(`${e}`, o);
    },
    put: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "put"
        };
        return fetch(e, o);
    }
};
var ie = (e, t)=>!e?.locales || e.locales.length === 0 ? null : e.locales.find((r)=>r?.code === t);
;
var le = {}, d = {};
function u(e, t) {
    try {
        let o = (le[e] ||= new Intl.DateTimeFormat("en-GB", {
            timeZone: e,
            hour: "numeric",
            timeZoneName: "longOffset"
        }).format)(t).split("GMT")[1] || "";
        return o in d ? d[o] : Z(o, o.split(":"));
    } catch  {
        if (e in d) return d[e];
        let r = e?.match(ce);
        return r ? Z(e, r.slice(1)) : NaN;
    }
}
var ce = /([+-]\d\d):?(\d\d)?/;
function Z(e, t) {
    let r = +t[0], o = +(t[1] || 0);
    return d[e] = r > 0 ? r * 60 + o : r * 60 - o;
}
var m = class e extends Date {
    constructor(...t){
        super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = new Date, isNaN(u(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), N(this, NaN), w(this)) : this.setTime(Date.now());
    }
    static tz(t, ...r) {
        return r.length ? new e(...r, t) : new e(Date.now(), t);
    }
    withTimeZone(t) {
        return new e(+this, t);
    }
    getTimezoneOffset() {
        return -u(this.timeZone, this);
    }
    setTime(t) {
        return Date.prototype.setTime.apply(this, arguments), w(this), +this;
    }
    [Symbol.for("constructDateFrom")](t) {
        return new e(+new Date(t), this.timeZone);
    }
}, j = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e)=>{
    if (!j.test(e)) return;
    let t = e.replace(j, "$1UTC");
    m.prototype[t] && (e.startsWith("get") ? m.prototype[e] = function() {
        return this.internal[t]();
    } : (m.prototype[e] = function() {
        return Date.prototype[t].apply(this.internal, arguments), fe(this), +this;
    }, m.prototype[t] = function() {
        return Date.prototype[t].apply(this, arguments), w(this), +this;
    }));
});
function w(e) {
    e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function fe(e) {
    Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), N(e);
}
function N(e) {
    let t = u(e.timeZone, e), r = new Date(+e);
    r.setUTCHours(r.getUTCHours() - 1);
    let o = -new Date(+e).getTimezoneOffset(), n = -new Date(+r).getTimezoneOffset(), s = o - n, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
    s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
    let a = o - t;
    a && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + a);
    let l = u(e.timeZone, e), c = -new Date(+e).getTimezoneOffset() - l, f = l !== t, b = c - a;
    if (f && b) {
        Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + b);
        let A = u(e.timeZone, e), y = l - A;
        y && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + y), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y));
    }
}
;
var v = ({ date: e, i18n: t, pattern: r, timezone: o })=>{
    let n = new m(new Date(e));
    if (o) {
        let s = m.tz(o), i = n.withTimeZone(o), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$transpose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transpose"])(i, s);
        return t.dateFNS ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(a, r, {
            locale: t.dateFNS
        }) : `${t.t("general:loading")}...`;
    }
    return t.dateFNS ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(n, r, {
        locale: t.dateFNS
    }) : `${t.t("general:loading")}...`;
};
;
function M(e) {
    return typeof e == "object" && "root" in e;
}
function x(e, t) {
    for (let r of e)"text" in r && r.text ? t += r.text : "children" in r || (t += `[${r.type}]`), "children" in r && r.children && (t += x(r.children, t));
    return t;
}
var R = (e)=>Array.isArray(e) ? e.map((t)=>typeof t == "object" && t !== null ? t.id : String(t)).filter(Boolean).join(", ") : typeof e == "object" && e !== null ? e.id || "" : String(e);
var me = ({ collectionConfig: e, data: t, dateFormat: r, fallback: o, globalConfig: n, i18n: s })=>{
    let i;
    if (e) {
        let a = e?.admin?.useAsTitle;
        if (a && (i = t?.[a], i)) {
            let l = e.fields.find((f)=>"name" in f && f.name === a), h = l?.type === "date", c = l?.type === "relationship";
            if (h) {
                let f = "date" in l.admin && l?.admin?.date?.displayFormat || r;
                i = v({
                    date: i,
                    i18n: s,
                    pattern: f
                }) || i;
            }
            c && (i = R(t[a]));
        }
    }
    return n && (i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(n?.label, s) || n?.slug), i && M(i) && (i = x(i.root.children?.[0]?.children || [], "")), !i && M(o) && (i = x(o.root.children?.[0]?.children || [], "")), i || (i = typeof o == "string" ? o : `[${s.t("general:untitled")}]`), i;
};
;
var ue = function(e) {
    return e.collection = "collections", e.global = "globals", e;
}({});
function de(e, t, r) {
    return e.reduce((n, s)=>{
        if (s.entity?.admin?.group === !1) return n;
        if (t?.[s.type.toLowerCase()]?.[s.entity.slug]?.read) {
            let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(s.entity.admin.group, r), a = "labels" in s.entity ? s.entity.labels.plural : s.entity.label, l = typeof a == "function" ? a({
                i18n: r,
                t: r.t
            }) : a;
            if (s.entity.admin.group) {
                let h = n.find((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(f.label, r) === i), c = h;
                h || (c = {
                    entities: [],
                    label: i
                }, n.push(c)), c.entities.push({
                    slug: s.entity.slug,
                    type: s.type,
                    label: l
                });
            } else n.find((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(c.label, r) === r.t(`general:${s.type}`)).entities.push({
                slug: s.entity.slug,
                type: s.type,
                label: l
            });
        }
        return n;
    }, [
        {
            entities: [],
            label: r.t("general:collections")
        },
        {
            entities: [],
            label: r.t("general:globals")
        }
    ]).filter((n)=>n.entities.length > 0);
}
;
var xe = ({ adminRoute: e, router: t })=>{
    let r = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
        adminRoute: e,
        path: "/"
    });
    t.push(r);
};
;
var Te = ({ adminRoute: e, collectionSlug: t, router: r })=>{
    let o = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
        adminRoute: e,
        path: t ? `/collections/${t}` : "/"
    });
    r.push(o);
};
var De = async ({ id: e, clearRouteCache: t, collectionSlug: r, documentLockStateRef: o, globalSlug: n, isLockingEnabled: s, isWithinDoc: i, setCurrentEditor: a, setIsReadOnlyForIncomingUser: l, updateDocumentEditor: h, user: c })=>{
    if (s) try {
        await h(e, r ?? n, c), i || (o.current.hasShownLockedModal = !0), o.current = {
            hasShownLockedModal: o.current?.hasShownLockedModal,
            isLocked: !0,
            user: c
        }, a(c), i && l && l(!1), t && t();
    } catch (f) {
        console.error("Error during document takeover:", f);
    }
};
var Ce = (e)=>{
    let { collectionSlug: t, docPermissions: r, globalSlug: o, isEditing: n } = e;
    return t ? !!(n && r?.update || !n && r?.create) : o ? !!r?.update : !1;
};
var we = (e)=>e && typeof e == "object";
var ve = ({ id: e, collectionSlug: t, globalSlug: r })=>!!(r || t && e);
function Me(e) {
    return e === void 0 || typeof e == "number" ? e : decodeURIComponent(e);
}
;
;
 //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DefaultNavClient",
    ()=>DefaultNavClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const baseClass = 'nav';
const DefaultNavClient = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13);
    const { groups, navPreferences } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { config: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t2, folders, routes: t3 } = t1;
    const { routes: t4 } = t2;
    const { browseByFolder: foldersRoute } = t4;
    const { admin: adminRoute } = t3;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t5;
    if ($[0] !== adminRoute || $[1] !== folders || $[2] !== foldersRoute || $[3] !== groups || $[4] !== i18n || $[5] !== navPreferences?.groups || $[6] !== pathname) {
        const folderURL = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
            adminRoute,
            path: foldersRoute
        });
        const viewingRootFolderView = pathname.startsWith(folderURL);
        let t6;
        if ($[8] !== adminRoute || $[9] !== i18n || $[10] !== navPreferences?.groups || $[11] !== pathname) {
            t6 = (t7, key)=>{
                const { entities, label } = t7;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NavGroup"], {
                    isOpen: navPreferences?.groups?.[label]?.open,
                    label,
                    children: entities.map((t8, i)=>{
                        const { slug, type, label: label_0 } = t8;
                        let href;
                        let id;
                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].collection) {
                            href = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                adminRoute,
                                path: `/collections/${slug}`
                            });
                            id = `nav-${slug}`;
                        }
                        if (type === __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityType"].global) {
                            href = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                                adminRoute,
                                path: `/globals/${slug}`
                            });
                            id = `nav-global-${slug}`;
                        }
                        const isActive = pathname.startsWith(href) && [
                            "/",
                            undefined
                        ].includes(pathname[href.length]);
                        const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                isActive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: `${baseClass}__link-indicator`
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    className: `${baseClass}__link-label`,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(label_0, i18n)
                                })
                            ]
                        });
                        if (pathname === href) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: `${baseClass}__link`,
                                id,
                                children: Label
                            }, i);
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                            className: `${baseClass}__link`,
                            href,
                            id,
                            prefetch: false,
                            children: Label
                        }, i);
                    })
                }, key);
            };
            $[8] = adminRoute;
            $[9] = i18n;
            $[10] = navPreferences?.groups;
            $[11] = pathname;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                folders && folders.browseByFolder && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BrowseByFolderButton"], {
                    active: viewingRootFolderView
                }),
                groups.map(t6)
            ]
        });
        $[0] = adminRoute;
        $[1] = folders;
        $[2] = foldersRoute;
        $[3] = groups;
        $[4] = i18n;
        $[5] = navPreferences?.groups;
        $[6] = pathname;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NavHamburger",
    ()=>NavHamburger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const NavHamburger = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2);
    const { navOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNav"])();
    let t0;
    if ($[0] !== navOpen) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Hamburger"], {
            closeIcon: "collapse",
            isActive: navOpen
        });
        $[0] = navOpen;
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const Wrapper = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9);
    const { baseClass, children, className } = props;
    const { hydrated, navOpen, shouldAnimate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNav"])();
    const t0 = navOpen && `${baseClass}--nav-open`;
    const t1 = shouldAnimate && `${baseClass}--nav-animate`;
    const t2 = hydrated && `${baseClass}--nav-hydrated`;
    let t3;
    if ($[0] !== baseClass || $[1] !== className || $[2] !== t0 || $[3] !== t1 || $[4] !== t2) {
        t3 = [
            baseClass,
            className,
            t0,
            t1,
            t2
        ].filter(Boolean);
        $[0] = baseClass;
        $[1] = className;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = t3.join(" ");
    let t5;
    if ($[6] !== children || $[7] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: t4,
            children
        });
        $[6] = children;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ShouldRenderTabs",
    ()=>ShouldRenderTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
const ShouldRenderTabs = (t0)=>{
    const { children } = t0;
    const { id: idFromContext, collectionSlug, globalSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentInfo"])();
    const id = idFromContext !== "create" ? idFromContext : null;
    if (collectionSlug && id || globalSlug) {
        return children;
    }
    return null;
}; //# sourceMappingURL=ShouldRenderTabs.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DocumentTabLink",
    ()=>DocumentTabLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const DocumentTabLink = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13);
    const { adminRoute, ariaLabel, baseClass, children, href: hrefFromProps, isActive: isActiveFromProps, newTab } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const locale = searchParams.get("locale");
    const [entityType, entitySlug, segmentThree, segmentFour] = params.segments || [];
    const isCollection = entityType === "collections";
    const t1 = `/${isCollection ? "collections" : "globals"}/${entitySlug}`;
    let t2;
    if ($[0] !== adminRoute || $[1] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
            adminRoute,
            path: t1
        });
        $[0] = adminRoute;
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let docPath = t2;
    if (isCollection) {
        if (segmentThree === "trash" && segmentFour) {
            docPath = docPath + `/trash/${segmentFour}`;
        } else {
            if (segmentThree) {
                docPath = docPath + `/${segmentThree}`;
            }
        }
    }
    const href = `${docPath}${hrefFromProps}`;
    const hrefWithLocale = `${href}${locale ? `?locale=${locale}` : ""}`;
    let t3;
    if ($[3] !== ariaLabel || $[4] !== baseClass || $[5] !== children || $[6] !== docPath || $[7] !== href || $[8] !== hrefWithLocale || $[9] !== isActiveFromProps || $[10] !== newTab || $[11] !== pathname) {
        const isActive = href === docPath && pathname === docPath || href !== docPath && pathname.startsWith(href) || isActiveFromProps;
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
            "aria-label": ariaLabel,
            buttonStyle: "tab",
            className: [
                baseClass,
                isActive && `${baseClass}--active`
            ].filter(Boolean).join(" "),
            disabled: isActive,
            el: !isActive || href !== pathname ? "link" : "div",
            margin: false,
            newTab,
            size: "medium",
            to: !isActive || href !== pathname ? hrefWithLocale : undefined,
            children
        });
        $[3] = ariaLabel;
        $[4] = baseClass;
        $[5] = children;
        $[6] = docPath;
        $[7] = href;
        $[8] = hrefWithLocale;
        $[9] = isActiveFromProps;
        $[10] = newTab;
        $[11] = pathname;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}; //# sourceMappingURL=TabLink.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VersionsPill",
    ()=>VersionsPill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'pill-version-count';
const VersionsPill = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2);
    const { versionCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentInfo"])();
    if (!versionCount) {
        return null;
    }
    let t0;
    if ($[0] !== versionCount) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
            className: baseClass,
            children: versionCount
        });
        $[0] = versionCount;
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Edit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "EditView",
    ()=>EditView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const EditView = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DefaultEditView"], {
        ...props
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AccountClient",
    ()=>AccountClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const AccountClient = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4);
    const { setStepNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStepNav"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t0;
    let t1;
    if ($[0] !== setStepNav || $[1] !== t) {
        t0 = ()=>{
            const nav = [];
            nav.push({
                label: t("authentication:account"),
                url: "/account"
            });
            setStepNav(nav);
        };
        t1 = [
            setStepNav,
            t
        ];
        $[0] = setStepNav;
        $[1] = t;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(t0, t1);
    return null;
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ResetPreferences/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ResetPreferences",
    ()=>ResetPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/qs-esm/lib/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const confirmResetModalSlug = 'confirm-reset-modal';
const ResetPreferences = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9);
    const { apiRoute, user } = t0;
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t1;
    if ($[0] !== apiRoute || $[1] !== user) {
        t1 = async ()=>{
            if (!user) {
                return;
            }
            const stringifiedQuery = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"]({
                depth: 0,
                where: {
                    user: {
                        id: {
                            equals: user.id
                        }
                    }
                }
            }, {
                addQueryPrefix: true
            });
            ;
            try {
                const res = await fetch(`${apiRoute}/payload-preferences${stringifiedQuery}`, {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "DELETE"
                });
                const json = await res.json();
                const message = json.message;
                if (res.ok) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].success(message);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].error(message);
                }
            } catch (t2) {
                const _err = t2;
            }
        };
        $[0] = apiRoute;
        $[1] = user;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleResetPreferences = t1;
    let t2;
    if ($[3] !== openModal) {
        t2 = ()=>openModal(confirmResetModalSlug);
        $[3] = openModal;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== handleResetPreferences || $[6] !== t || $[7] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                        buttonStyle: "secondary",
                        onClick: t2,
                        children: t("general:resetPreferences")
                    })
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmationModal"], {
                    body: t("general:resetPreferencesDescription"),
                    confirmingLabel: t("general:resettingPreferences"),
                    heading: t("general:resetPreferences"),
                    modalSlug: confirmResetModalSlug,
                    onConfirm: handleResetPreferences
                })
            ]
        });
        $[5] = handleResetPreferences;
        $[6] = t;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export j as useTheme>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript)");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/ToggleTheme/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ToggleTheme",
    ()=>ToggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__j__as__useTheme$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export j as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const ToggleTheme = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(7);
    const { autoMode, setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__j__as__useTheme$3e$__["useTheme"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t0;
    if ($[0] !== setTheme) {
        t0 = (newTheme)=>{
            setTheme(newTheme);
        };
        $[0] = setTheme;
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const onChange = t0;
    let t1;
    if ($[2] !== autoMode || $[3] !== onChange || $[4] !== t || $[5] !== theme) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RadioGroupField"], {
            disableModifyingForm: true,
            field: {
                name: "theme",
                label: t("general:adminTheme"),
                options: [
                    {
                        label: t("general:automatic"),
                        value: "auto"
                    },
                    {
                        label: t("general:light"),
                        value: "light"
                    },
                    {
                        label: t("general:dark"),
                        value: "dark"
                    }
                ]
            },
            onChange,
            path: "theme",
            value: autoMode ? "auto" : theme
        });
        $[2] = autoMode;
        $[3] = onChange;
        $[4] = t;
        $[5] = theme;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Account/Settings/LanguageSelector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LanguageSelector",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const LanguageSelector = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8);
    const { languageOptions } = props;
    const { i18n, switchLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t0;
    if ($[0] !== switchLanguage) {
        t0 = async (option)=>{
            await switchLanguage(option.value);
        };
        $[0] = switchLanguage;
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== i18n || $[3] !== languageOptions || $[4] !== t0) {
        let t2;
        if ($[6] !== i18n) {
            t2 = (language)=>language.value === i18n.language;
            $[6] = i18n;
            $[7] = t2;
        } else {
            t2 = $[7];
        }
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactSelect"], {
            inputId: "language-select",
            isClearable: false,
            onChange: t0,
            options: languageOptions,
            value: languageOptions.find(t2)
        });
        $[2] = i18n;
        $[3] = languageOptions;
        $[4] = t0;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    return t1;
}; //# sourceMappingURL=LanguageSelector.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/RouteTransition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteTransitionProvider",
    ()=>RouteTransitionProvider,
    "useRouteTransition",
    ()=>useRouteTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const RouteTransitionProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(11);
    const { children } = t0;
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptimistic"])(false);
    const [transitionProgress, setTransitionProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const transitionProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(transitionProgress);
    const timerID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            timerID.current = setInterval(()=>{
                const newProgress = transitionProgressRef.current + (0.93 - transitionProgressRef.current) * Math.random() * 0.2 * Math.pow(Math.log(1 + (1 - transitionProgressRef.current) * 0.75), 0.75);
                setTransitionProgress(newProgress);
                transitionProgressRef.current = newProgress;
            }, 250);
        };
        $[0] = t1;
    } else {
        t1 = $[0];
    }
    const initiateProgress = t1;
    let t2;
    let t3;
    if ($[1] !== isTransitioning) {
        t2 = ()=>{
            setTransitionProgress(0);
            transitionProgressRef.current = 0;
            if (isTransitioning) {
                initiateProgress();
            } else {
                if (timerID.current) {
                    clearInterval(timerID.current);
                }
            }
        };
        t3 = [
            isTransitioning,
            initiateProgress
        ];
        $[1] = isTransitioning;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== setIsTransitioning) {
        t4 = (callback)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setIsTransitioning(true);
                if (typeof callback === "function") {
                    callback();
                }
            });
        };
        $[4] = setIsTransitioning;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const startRouteTransition = t4;
    let t5;
    if ($[6] !== children || $[7] !== isTransitioning || $[8] !== startRouteTransition || $[9] !== transitionProgress) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RouteTransitionContext, {
            value: {
                isTransitioning,
                startRouteTransition,
                transitionProgress
            },
            children
        });
        $[6] = children;
        $[7] = isTransitioning;
        $[8] = startRouteTransition;
        $[9] = transitionProgress;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
};
const RouteTransitionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({
    isTransitioning: false,
    startRouteTransition: ()=>undefined,
    transitionProgress: 0
});
const useRouteTransition = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(RouteTransitionContext); //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Link/formatUrl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
__turbopack_context__.s([
    "formatUrl",
    ()=>formatUrl,
    "urlQueryToSearchParams",
    ()=>urlQueryToSearchParams
]);
const slashedProtocols = /https?|ftp|gopher|file/;
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach(([key, value])=>{
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function formatUrl(urlObj) {
    let { auth } = urlObj;
    const { hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) {
        protocol += ':';
    }
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') {
            pathname = '/' + pathname;
        }
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') {
        hash = '#' + hash;
    }
    if (search && search[0] !== '?') {
        search = '?' + search;
    }
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
} //# sourceMappingURL=formatUrl.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Link/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$RouteTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/RouteTransition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$formatUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/Link/formatUrl.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const NextLink = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
// Copied from  https://github.com/vercel/next.js/blob/canary/packages/next/src/client/link.tsx#L180-L191
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
const Link = ({ children, href, onClick, preventDefault = true, ref, replace, scroll, ...rest })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$RouteTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouteTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NextLink, {
        href: href,
        onClick: (e)=>{
            if (isModifiedEvent(e)) {
                return;
            }
            if (onClick) {
                onClick(e);
            }
            // We need a preventDefault here so that a clicked link doesn't trigger twice,
            // once for default browser navigation and once for startRouteTransition
            if (preventDefault) {
                e.preventDefault();
            }
            startRouteTransition(()=>{
                const url = typeof href === 'string' ? href : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$formatUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUrl"])(href);
                if (replace) {
                    void router.replace(url, {
                        scroll
                    });
                } else {
                    void router.push(url, {
                        scroll
                    });
                }
            });
        },
        ref: ref,
        ...rest,
        children: children
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Banner",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/Link/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const baseClass = 'banner';
const Banner = ({ type = 'default', alignIcon = 'right', children, className, icon, onClick, to })=>{
    const classes = [
        baseClass,
        `${baseClass}--type-${type}`,
        className && className,
        to && `${baseClass}--has-link`,
        (to || onClick) && `${baseClass}--has-action`,
        icon && `${baseClass}--has-icon`,
        icon && `${baseClass}--align-icon-${alignIcon}`
    ].filter(Boolean).join(' ');
    let RenderedType = 'div';
    if (onClick && !to) {
        RenderedType = 'button';
    }
    if (to) {
        RenderedType = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(RenderedType, {
        className: classes,
        href: to || null,
        onClick: onClick,
        children: [
            icon && alignIcon === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: icon
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${baseClass}__content`,
                children: children
            }),
            icon && alignIcon === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: icon
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/CreateFirstUser/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CreateFirstUserClient",
    ()=>CreateFirstUserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const CreateFirstUserClient = ({ docPermissions, docPreferences, initialState, loginWithUsername, userSlug })=>{
    const { config: { routes: { admin, api: apiRoute }, serverURL }, getEntityConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { getFormState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useServerFunctions"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])();
    const abortOnChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const collectionConfig = getEntityConfig({
        collectionSlug: userSlug
    });
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(async ({ formState: prevFormState, submitted })=>{
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handleAbortRef"])(abortOnChangeRef);
        const response = await getFormState({
            collectionSlug: userSlug,
            docPermissions,
            docPreferences,
            formState: prevFormState,
            operation: 'create',
            schemaPath: userSlug,
            signal: controller.signal,
            skipValidation: !submitted
        });
        abortOnChangeRef.current = null;
        if (response && response.state) {
            return response.state;
        }
    }, [
        userSlug,
        getFormState,
        docPermissions,
        docPreferences
    ]);
    const handleFirstRegister = (data)=>{
        setUser(data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const abortOnChange = abortOnChangeRef.current;
        return ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["abortAndIgnore"])(abortOnChange);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Form"], {
        action: `${serverURL}${apiRoute}/${userSlug}/first-register`,
        initialState: {
            ...initialState,
            'confirm-password': {
                ...initialState['confirm-password'],
                valid: initialState['confirm-password']['valid'] || false,
                value: initialState['confirm-password']['value'] || ''
            }
        },
        method: "POST",
        onChange: [
            onChange
        ],
        onSuccess: handleFirstRegister,
        redirect: admin,
        validationOperation: "create",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EmailAndUsernameFields"], {
                className: "emailAndUsername",
                loginWithUsername: loginWithUsername,
                operation: "create",
                readOnly: false,
                t: t
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PasswordField"], {
                autoComplete: "off",
                field: {
                    name: 'password',
                    label: t('authentication:newPassword'),
                    required: true
                },
                path: "password"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmPasswordField"], {}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RenderFields"], {
                fields: collectionConfig.fields,
                forceRender: true,
                parentIndexPath: "",
                parentPath: "",
                parentSchemaPath: userSlug,
                permissions: true,
                readOnly: false
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FormSubmit"], {
                size: "large",
                children: t('general:create')
            })
        ]
    });
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "NotFoundClient",
    ()=>NotFoundClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'not-found';
const NotFoundClient = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(10);
    const { marginTop: t0 } = props;
    const marginTop = t0 === undefined ? "large" : t0;
    const { setStepNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStepNav"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { config: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { routes: t2 } = t1;
    const { admin: adminRoute } = t2;
    let t3;
    let t4;
    if ($[0] !== setStepNav || $[1] !== t) {
        t3 = ()=>{
            setStepNav([
                {
                    label: t("general:notFound")
                }
            ]);
        };
        t4 = [
            setStepNav,
            t
        ];
        $[0] = setStepNav;
        $[1] = t;
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = marginTop && `${baseClass}--margin-top-${marginTop}`;
    let t6;
    if ($[4] !== t5) {
        t6 = [
            baseClass,
            t5
        ].filter(Boolean);
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const t7 = t6.join(" ");
    let t8;
    if ($[6] !== adminRoute || $[7] !== t || $[8] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: t7,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Gutter"], {
                className: `${baseClass}__wrap`,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: `${baseClass}__content`,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                                children: t("general:nothingFound")
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                children: t("general:sorryNotFound")
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                        className: `${baseClass}__button`,
                        el: "link",
                        size: "large",
                        to: adminRoute,
                        children: t("general:backToDashboard")
                    })
                ]
            })
        });
        $[6] = adminRoute;
        $[7] = t;
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/API/LocaleSelector/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LocaleSelector",
    ()=>LocaleSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const LocaleSelector = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6);
    const { localeOptions, onChange } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t1;
    if ($[0] !== localeOptions || $[1] !== onChange || $[2] !== t) {
        let t2;
        if ($[4] !== onChange) {
            t2 = (value)=>onChange(value);
            $[4] = onChange;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SelectField"], {
            field: {
                name: "locale",
                label: t("general:locale"),
                options: localeOptions
            },
            onChange: t2,
            path: "locale"
        });
        $[0] = localeOptions;
        $[1] = onChange;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/API/RenderJSON/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "RenderJSON",
    ()=>RenderJSON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const chars = {
    leftCurlyBracket: '\u007B',
    leftSquareBracket: '\u005B',
    rightCurlyBracket: '\u007D',
    rightSquareBracket: '\u005D'
};
const baseClass = 'query-inspector';
const Bracket = ({ type, comma = false, position })=>{
    const rightBracket = type === 'object' ? chars.rightCurlyBracket : chars.rightSquareBracket;
    const leftBracket = type === 'object' ? chars.leftCurlyBracket : chars.leftSquareBracket;
    const bracketToRender = position === 'end' ? rightBracket : leftBracket;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        className: `${baseClass}__bracket ${baseClass}__bracket--position-${position}`,
        children: [
            bracketToRender,
            position === 'end' && comma ? ',' : null
        ]
    });
};
const RenderJSON = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(2);
    const { isEmpty: t1, object, objectKey, parentType: t2, trailingComma: t3 } = t0;
    const isEmpty = t1 === undefined ? false : t1;
    const parentType = t2 === undefined ? "object" : t2;
    const trailingComma = t3 === undefined ? false : t3;
    const objectKeys = object ? Object.keys(object) : [];
    const objectLength = objectKeys.length;
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const isNested = parentType === "object" || parentType === "array";
    let t4;
    if ($[0] !== isOpen) {
        t4 = ()=>setIsOpen(!isOpen);
        $[0] = isOpen;
        $[1] = t4;
    } else {
        t4 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("li", {
        className: isNested ? `${baseClass}__row-line--nested` : "",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                "aria-label": "toggle",
                className: `${baseClass}__list-toggle ${isEmpty ? `${baseClass}__list-toggle--empty` : ""}`,
                onClick: t4,
                type: "button",
                children: [
                    isEmpty ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChevronIcon"], {
                        className: `${baseClass}__toggle-row-icon ${baseClass}__toggle-row-icon--${isOpen ? "open" : "closed"}`
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                        children: [
                            objectKey && `"${objectKey}": `,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bracket, {
                                position: "start",
                                type: parentType
                            }),
                            isEmpty ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bracket, {
                                comma: trailingComma,
                                position: "end",
                                type: parentType
                            }) : null
                        ]
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                className: `${baseClass}__json-children ${isNested ? `${baseClass}__json-children--nested` : ""}`,
                children: isOpen && objectKeys.map((key, keyIndex)=>{
                    let value = object[key];
                    let type;
                    const isLastKey = keyIndex === objectLength - 1;
                    if (value === null) {
                        type = "null";
                    } else {
                        if (value instanceof Date) {
                            type = "date";
                            value = value.toISOString();
                        } else {
                            if (Array.isArray(value)) {
                                type = "array";
                            } else {
                                if (typeof value === "object") {
                                    type = "object";
                                } else {
                                    if (typeof value === "number") {
                                        type = "number";
                                    } else {
                                        if (typeof value === "boolean") {
                                            type = "boolean";
                                        } else {
                                            type = "string";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (type === "object" || type === "array") {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RenderJSON, {
                            isEmpty: value.length === 0 || Object.keys(value).length === 0,
                            object: value,
                            objectKey: parentType === "object" ? key : undefined,
                            parentType: type,
                            trailingComma: !isLastKey
                        }, `${key}-${keyIndex}`);
                    }
                    if (type === "date" || type === "string" || type === "null" || type === "number" || type === "boolean") {
                        const parentHasKey = Boolean(parentType === "object" && key);
                        const rowClasses = [
                            `${baseClass}__row-line`,
                            `${baseClass}__value-type--${type}`,
                            `${baseClass}__row-line--${objectKey ? "nested" : "top"}`
                        ].filter(Boolean).join(" ");
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                            className: rowClasses,
                            children: [
                                parentHasKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    children: `"${key}": `
                                }) : null,
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    className: `${baseClass}__value`,
                                    children: JSON.stringify(value)
                                }),
                                isLastKey ? "" : ","
                            ]
                        }, `${key}-${keyIndex}`);
                    }
                })
            }),
            !isEmpty && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: isNested ? `${baseClass}__bracket--nested` : "",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bracket, {
                    comma: trailingComma,
                    position: "end",
                    type: parentType
                })
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/API/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "APIViewClient",
    ()=>APIViewClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$LocaleSelector$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/API/LocaleSelector/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$RenderJSON$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/API/RenderJSON/index.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$LocaleSelector$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$RenderJSON$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$LocaleSelector$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$RenderJSON$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const baseClass = 'query-inspector';
const APIViewClient = ()=>{
    const { id, collectionSlug, globalSlug, initialData, isTrashed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentInfo"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { code } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocale"])();
    const { config: { defaultDepth, localization, routes: { api: apiRoute }, serverURL }, getEntityConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const collectionConfig = getEntityConfig({
        collectionSlug
    });
    const globalConfig = getEntityConfig({
        globalSlug
    });
    const localeOptions = localization && localization.locales.map((locale)=>({
            label: locale.label,
            value: locale.code
        }));
    let draftsEnabled = false;
    let docEndpoint = '';
    if (collectionConfig) {
        draftsEnabled = Boolean(collectionConfig.versions?.drafts);
        docEndpoint = `/${collectionSlug}/${id}`;
    }
    if (globalConfig) {
        draftsEnabled = Boolean(globalConfig.versions?.drafts);
        docEndpoint = `/globals/${globalSlug}`;
    }
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](initialData);
    const [draft, setDraft] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](searchParams.get('draft') === 'true');
    const [locale_0, setLocale] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](searchParams?.get('locale') || code);
    const [depth, setDepth] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](searchParams.get('depth') || defaultDepth.toString());
    const [authenticated, setAuthenticated] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const [fullscreen, setFullscreen] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const trashParam = typeof initialData?.deletedAt === 'string';
    const params = new URLSearchParams({
        depth,
        draft: String(draft),
        locale: locale_0,
        trash: trashParam ? 'true' : 'false'
    }).toString();
    const fetchURL = `${serverURL}${apiRoute}${docEndpoint}?${params}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch(fetchURL, {
                    credentials: authenticated ? 'include' : 'omit',
                    headers: {
                        'Accept-Language': i18n.language
                    },
                    method: 'GET'
                });
                try {
                    const json = await res.json();
                    setData(json);
                } catch (error_0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].error('Error parsing response');
                    console.error(error_0) // eslint-disable-line no-console
                    ;
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].error('Error making request');
                console.error(error) // eslint-disable-line no-console
                ;
            }
        };
        void fetchData();
    }, [
        i18n.language,
        fetchURL,
        authenticated
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Gutter"], {
        className: [
            baseClass,
            fullscreen && `${baseClass}--fullscreen`
        ].filter(Boolean).join(' '),
        right: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SetDocumentStepNav"], {
                collectionSlug: collectionSlug,
                globalLabel: globalConfig?.label,
                globalSlug: globalSlug,
                id: id,
                isTrashed: isTrashed,
                pluralLabel: collectionConfig ? collectionConfig?.labels?.plural : undefined,
                useAsTitle: collectionConfig ? collectionConfig?.admin?.useAsTitle : undefined,
                view: "API"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}__configuration`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: `${baseClass}__api-url`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: `${baseClass}__label`,
                                children: [
                                    "API URL ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CopyToClipboard"], {
                                        value: fetchURL
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                href: fetchURL,
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: fetchURL
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Form"], {
                        initialState: {
                            authenticated: {
                                initialValue: authenticated || false,
                                valid: true,
                                value: authenticated || false
                            },
                            depth: {
                                initialValue: Number(depth || 0),
                                valid: true,
                                value: Number(depth || 0)
                            },
                            draft: {
                                initialValue: draft || false,
                                valid: true,
                                value: draft || false
                            },
                            locale: {
                                initialValue: locale_0,
                                valid: true,
                                value: locale_0
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__form-fields`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: `${baseClass}__filter-query-checkboxes`,
                                    children: [
                                        draftsEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CheckboxField"], {
                                            field: {
                                                name: 'draft',
                                                label: t('version:draft')
                                            },
                                            onChange: ()=>setDraft(!draft),
                                            path: "draft"
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CheckboxField"], {
                                            field: {
                                                name: 'authenticated',
                                                label: t('authentication:authenticated')
                                            },
                                            onChange: ()=>setAuthenticated(!authenticated),
                                            path: "authenticated"
                                        })
                                    ]
                                }),
                                localeOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$LocaleSelector$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocaleSelector"], {
                                    localeOptions: localeOptions,
                                    onChange: setLocale
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NumberField"], {
                                    field: {
                                        name: 'depth',
                                        admin: {
                                            step: 1
                                        },
                                        label: t('general:depth'),
                                        max: 10,
                                        min: 0
                                    },
                                    onChange: (value)=>setDepth(value?.toString()),
                                    path: "depth"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}__results-wrapper`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__toggle-fullscreen-button-container`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            "aria-label": "toggle fullscreen",
                            className: `${baseClass}__toggle-fullscreen-button`,
                            onClick: ()=>setFullscreen(!fullscreen),
                            type: "button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MinimizeMaximizeIcon"], {
                                isMinimized: !fullscreen
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__results`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$RenderJSON$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderJSON"], {
                            object: data
                        })
                    })
                ]
            })
        ]
    });
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Restore/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Restore",
    ()=>Restore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
const baseClass = 'restore-version';
const modalSlug = 'restore-version';
const Restore = ({ className, collectionConfig, globalConfig, label, originalDocID, status, versionDateFormatted, versionID })=>{
    const { config: { routes: { admin: adminRoute, api: apiRoute }, serverURL } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { toggleModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRouteTransition"])();
    const restoreMessage = t('version:aboutToRestoreGlobal', {
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(label, i18n),
        versionDate: versionDateFormatted
    });
    const canRestoreAsDraft = status !== 'draft' && collectionConfig?.versions?.drafts;
    const handleRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        let fetchURL = `${serverURL}${apiRoute}`;
        let redirectURL;
        if (collectionConfig) {
            fetchURL = `${fetchURL}/${collectionConfig.slug}/versions/${versionID}?draft=${draft}`;
            redirectURL = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: `/collections/${collectionConfig.slug}/${originalDocID}`
            });
        }
        if (globalConfig) {
            fetchURL = `${fetchURL}/globals/${globalConfig.slug}/versions/${versionID}?draft=${draft}`;
            redirectURL = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: `/globals/${globalConfig.slug}`
            });
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["requests"].post(fetchURL, {
            headers: {
                'Accept-Language': i18n.language
            }
        });
        if (res.status === 200) {
            const json = await res.json();
            __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].success(json.message);
            return startRouteTransition(()=>router.push(redirectURL));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].error(t('version:problemRestoringVersion'));
        }
    }, [
        serverURL,
        apiRoute,
        collectionConfig,
        globalConfig,
        i18n.language,
        versionID,
        draft,
        adminRoute,
        originalDocID,
        startRouteTransition,
        router,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: [
                    baseClass,
                    className
                ].filter(Boolean).join(' '),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                    buttonStyle: "primary",
                    className: [
                        canRestoreAsDraft && `${baseClass}__restore-as-draft-button`
                    ].filter(Boolean).join(' '),
                    onClick: ()=>toggleModal(modalSlug),
                    size: "xsmall",
                    SubMenuPopupContent: canRestoreAsDraft ? ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PopupList"].ButtonGroup, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PopupList"].Button, {
                                onClick: ()=>[
                                        setDraft(true),
                                        toggleModal(modalSlug)
                                    ],
                                children: t('version:restoreAsDraft')
                            })
                        }) : null,
                    children: t('version:restoreThisVersion')
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmationModal"], {
                body: restoreMessage,
                confirmingLabel: t('version:restoring'),
                heading: t('version:confirmVersionRestoration'),
                modalSlug: modalSlug,
                onConfirm: handleRestore
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectComparison/VersionDrawer/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VersionDrawer",
    ()=>VersionDrawer,
    "VersionDrawerContent",
    ()=>VersionDrawerContent,
    "baseClass",
    ()=>baseClass,
    "formatVersionDrawerSlug",
    ()=>formatVersionDrawerSlug,
    "useVersionDrawer",
    ()=>useVersionDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const baseClass = 'version-drawer';
const formatVersionDrawerSlug = ({ depth, uuid })=>`version-drawer_${depth}_${uuid}`;
const VersionDrawerContent = (props)=>{
    const { collectionSlug, docID, drawerSlug, globalSlug } = props;
    const { isTrashed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentInfo"])();
    const { closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const prevSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(searchParams);
    const { renderDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useServerFunctions"])();
    const [DocumentView, setDocumentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const hasRenderedDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const getDocumentView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((docID_0)=>{
        const fetchDocumentView = async ()=>{
            setIsLoading(true);
            try {
                const isGlobal = Boolean(globalSlug);
                const entitySlug = collectionSlug ?? globalSlug;
                const result = await renderDocument({
                    collectionSlug: entitySlug,
                    docID: docID_0,
                    drawerSlug,
                    paramsOverride: {
                        segments: [
                            isGlobal ? 'globals' : 'collections',
                            entitySlug,
                            ...isTrashed ? [
                                'trash'
                            ] : [],
                            isGlobal ? undefined : String(docID_0),
                            'versions'
                        ].filter(Boolean)
                    },
                    redirectAfterDelete: false,
                    redirectAfterDuplicate: false,
                    searchParams: Object.fromEntries(searchParams.entries()),
                    versions: {
                        disableGutter: true,
                        useVersionDrawerCreatedAtCell: true
                    }
                });
                if (result?.Document) {
                    setDocumentView(result.Document);
                    setIsLoading(false);
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].error(error?.message || t('error:unspecific'));
                closeModal(drawerSlug);
            // toast.error(data?.errors?.[0].message || t('error:unspecific'))
            }
        };
        void fetchDocumentView();
    }, [
        closeModal,
        collectionSlug,
        drawerSlug,
        globalSlug,
        isTrashed,
        renderDocument,
        searchParams,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasRenderedDocument.current || prevSearchParams.current !== searchParams) {
            prevSearchParams.current = searchParams;
            getDocumentView(docID);
            hasRenderedDocument.current = true;
        }
    }, [
        docID,
        getDocumentView,
        searchParams
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LoadingOverlay"], {});
    }
    return DocumentView;
};
const VersionDrawer = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6);
    const { collectionSlug, docID, drawerSlug, globalSlug } = props;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t0;
    if ($[0] !== collectionSlug || $[1] !== docID || $[2] !== drawerSlug || $[3] !== globalSlug || $[4] !== t) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Drawer"], {
            className: baseClass,
            gutter: true,
            slug: drawerSlug,
            title: t("version:selectVersionToCompare"),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(VersionDrawerContent, {
                collectionSlug,
                docID,
                drawerSlug,
                globalSlug
            })
        });
        $[0] = collectionSlug;
        $[1] = docID;
        $[2] = drawerSlug;
        $[3] = globalSlug;
        $[4] = t;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    return t0;
};
const useVersionDrawer = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(29);
    const { collectionSlug, docID, globalSlug } = t0;
    const drawerDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditDepth"])();
    const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const { closeModal, modalState, openModal, toggleModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[0] !== drawerDepth || $[1] !== uuid) {
        t1 = formatVersionDrawerSlug({
            depth: drawerDepth,
            uuid
        });
        $[0] = drawerDepth;
        $[1] = uuid;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const drawerSlug = t1;
    let t2;
    let t3;
    if ($[3] !== drawerSlug || $[4] !== modalState) {
        t2 = ()=>{
            setIsOpen(Boolean(modalState[drawerSlug]?.isOpen));
        };
        t3 = [
            modalState,
            drawerSlug
        ];
        $[3] = drawerSlug;
        $[4] = modalState;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] !== drawerSlug || $[8] !== toggleModal) {
        t4 = ()=>{
            toggleModal(drawerSlug);
        };
        $[7] = drawerSlug;
        $[8] = toggleModal;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const toggleDrawer = t4;
    let t5;
    if ($[10] !== closeModal || $[11] !== drawerSlug) {
        t5 = ()=>{
            closeModal(drawerSlug);
        };
        $[10] = closeModal;
        $[11] = drawerSlug;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const closeDrawer = t5;
    let t6;
    if ($[13] !== drawerSlug || $[14] !== openModal) {
        t6 = ()=>{
            openModal(drawerSlug);
        };
        $[13] = drawerSlug;
        $[14] = openModal;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const openDrawer = t6;
    let t7;
    if ($[16] !== collectionSlug || $[17] !== docID || $[18] !== drawerSlug || $[19] !== globalSlug) {
        t7 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(VersionDrawer, {
                collectionSlug,
                docID,
                drawerSlug,
                globalSlug
            });
        $[16] = collectionSlug;
        $[17] = docID;
        $[18] = drawerSlug;
        $[19] = globalSlug;
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const MemoizedDrawer = t7;
    let t8;
    if ($[21] !== MemoizedDrawer || $[22] !== closeDrawer || $[23] !== drawerDepth || $[24] !== drawerSlug || $[25] !== isOpen || $[26] !== openDrawer || $[27] !== toggleDrawer) {
        t8 = {
            closeDrawer,
            Drawer: MemoizedDrawer,
            drawerDepth,
            drawerSlug,
            isDrawerOpen: isOpen,
            openDrawer,
            toggleDrawer
        };
        $[21] = MemoizedDrawer;
        $[22] = closeDrawer;
        $[23] = drawerDepth;
        $[24] = drawerSlug;
        $[25] = isOpen;
        $[26] = openDrawer;
        $[27] = toggleDrawer;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    return t8;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectComparison/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SelectComparison",
    ()=>SelectComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$VersionDrawer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectComparison/VersionDrawer/index.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$VersionDrawer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$VersionDrawer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'compare-version';
const SelectComparison = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((props)=>{
    const { collectionSlug, docID, globalSlug, onChange: onChangeFromProps, versionFromID, versionFromOptions } = props;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { Drawer, openDrawer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$VersionDrawer$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVersionDrawer"])({
        collectionSlug,
        docID,
        globalSlug
    });
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...versionFromOptions,
            {
                label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    className: `${baseClass}-moreVersions`,
                    children: t('version:moreVersions')
                }),
                value: 'more'
            }
        ];
    }, [
        t,
        versionFromOptions
    ]);
    const currentOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>versionFromOptions.find((option)=>option.value === versionFromID), [
        versionFromOptions,
        versionFromID
    ]);
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        if (val.value === 'more') {
            openDrawer();
            return;
        }
        onChangeFromProps(val);
    }, [
        onChangeFromProps,
        openDrawer
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldBaseClass"],
            baseClass
        ].filter(Boolean).join(' '),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactSelect"], {
                isClearable: false,
                isSearchable: false,
                onChange: onChange,
                options: options,
                placeholder: t('version:selectVersionToCompare'),
                value: currentOption
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Drawer, {})
        ]
    });
}); //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectLocales/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SelectLocales",
    ()=>SelectLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'select-version-locales';
const SelectLocales = ({ locales, localeSelectorOpen, onChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnimateHeight"], {
        className: baseClass,
        height: localeSelectorOpen ? 'auto' : 0,
        id: `${baseClass}-locales`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PillSelector"], {
            onClick: ({ pill })=>{
                const newLocales = locales.map((locale)=>{
                    if (locale.name === pill.name) {
                        return {
                            ...locale,
                            selected: !pill.selected
                        };
                    } else {
                        return locale;
                    }
                });
                onChange({
                    locales: newLocales
                });
            },
            pills: locales
        })
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectedLocalesContext",
    ()=>SelectedLocalesContext,
    "useSelectedLocales",
    ()=>useSelectedLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const SelectedLocalesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    selectedLocales: []
});
const useSelectedLocales = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(SelectedLocalesContext); //# sourceMappingURL=SelectedLocalesContext.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SetStepNav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SetStepNav",
    ()=>SetStepNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const SetStepNav = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(24);
    const { id, collectionConfig, globalConfig, isTrashed, versionToCreatedAtFormatted, versionToID } = t0;
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { setStepNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStepNav"])();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocale"])();
    const { title } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentTitle"])();
    let t1;
    if ($[0] !== collectionConfig || $[1] !== config || $[2] !== globalConfig || $[3] !== i18n || $[4] !== id || $[5] !== isTrashed || $[6] !== setStepNav || $[7] !== t || $[8] !== title || $[9] !== versionToCreatedAtFormatted) {
        t1 = ()=>{
            const { routes: t2 } = config;
            const { admin: adminRoute } = t2;
            if (collectionConfig) {
                const collectionSlug = collectionConfig.slug;
                const pluralLabel = collectionConfig.labels?.plural;
                const docBasePath = isTrashed ? `/collections/${collectionSlug}/trash/${id}` : `/collections/${collectionSlug}/${id}`;
                const nav = [
                    {
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(pluralLabel, i18n),
                        url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                            adminRoute,
                            path: `/collections/${collectionSlug}`
                        })
                    }
                ];
                if (isTrashed) {
                    nav.push({
                        label: t("general:trash"),
                        url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                            adminRoute,
                            path: `/collections/${collectionSlug}/trash`
                        })
                    });
                }
                nav.push({
                    label: title,
                    url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                        adminRoute,
                        path: docBasePath
                    })
                }, {
                    label: t("version:versions"),
                    url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                        adminRoute,
                        path: `${docBasePath}/versions`
                    })
                }, {
                    label: versionToCreatedAtFormatted,
                    url: undefined
                });
                setStepNav(nav);
                return;
            }
            if (globalConfig) {
                const globalSlug = globalConfig.slug;
                setStepNav([
                    {
                        label: globalConfig.label,
                        url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                            adminRoute,
                            path: `/globals/${globalSlug}`
                        })
                    },
                    {
                        label: t("version:versions"),
                        url: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                            adminRoute,
                            path: `/globals/${globalSlug}/versions`
                        })
                    },
                    {
                        label: versionToCreatedAtFormatted
                    }
                ]);
            }
        };
        $[0] = collectionConfig;
        $[1] = config;
        $[2] = globalConfig;
        $[3] = i18n;
        $[4] = id;
        $[5] = isTrashed;
        $[6] = setStepNav;
        $[7] = t;
        $[8] = title;
        $[9] = versionToCreatedAtFormatted;
        $[10] = t1;
    } else {
        t1 = $[10];
    }
    let t2;
    if ($[11] !== collectionConfig || $[12] !== config || $[13] !== globalConfig || $[14] !== i18n || $[15] !== id || $[16] !== isTrashed || $[17] !== locale || $[18] !== setStepNav || $[19] !== t || $[20] !== title || $[21] !== versionToCreatedAtFormatted || $[22] !== versionToID) {
        t2 = [
            config,
            setStepNav,
            id,
            isTrashed,
            locale,
            t,
            i18n,
            collectionConfig,
            globalConfig,
            title,
            versionToCreatedAtFormatted,
            versionToID
        ];
        $[11] = collectionConfig;
        $[12] = config;
        $[13] = globalConfig;
        $[14] = i18n;
        $[15] = id;
        $[16] = isTrashed;
        $[17] = locale;
        $[18] = setStepNav;
        $[19] = t;
        $[20] = title;
        $[21] = versionToCreatedAtFormatted;
        $[22] = versionToID;
        $[23] = t2;
    } else {
        t2 = $[23];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return null;
}; //# sourceMappingURL=SetStepNav.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DefaultVersionView",
    ()=>DefaultVersionView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Restore$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Restore/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectComparison/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectLocales$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectLocales/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SetStepNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SetStepNav.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Restore$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectLocales$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SetStepNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Restore$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectLocales$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SetStepNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
;
const baseClass = 'view-version';
const DefaultVersionView = ({ canUpdate, modifiedOnly: modifiedOnlyProp, RenderedDiff, selectedLocales: selectedLocalesFromProps, versionFromCreatedAt, versionFromID, versionFromOptions, versionToCreatedAt, versionToCreatedAtFormatted, VersionToCreatedAtLabel, versionToID, versionToStatus })=>{
    const { config, getEntityConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { code } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocale"])();
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const [locales, setLocales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [localeSelectorOpen, setLocaleSelectorOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (config.localization) {
            const updatedLocales = config.localization.locales.map((locale)=>{
                let label = locale.label;
                if (typeof locale.label !== 'string' && locale.label[code]) {
                    label = locale.label[code];
                }
                return {
                    name: locale.code,
                    Label: label,
                    selected: selectedLocalesFromProps.includes(locale.code)
                };
            });
            setLocales(updatedLocales);
        }
    }, [
        code,
        config.localization,
        selectedLocalesFromProps
    ]);
    const { id: originalDocID, collectionSlug, globalSlug, isTrashed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDocumentInfo"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRouteTransition"])();
    const { collectionConfig, globalConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            collectionConfig: getEntityConfig({
                collectionSlug
            }),
            globalConfig: getEntityConfig({
                globalSlug
            })
        };
    }, [
        collectionSlug,
        globalSlug,
        getEntityConfig
    ]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [modifiedOnly, setModifiedOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(modifiedOnlyProp);
    const updateSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((args)=>{
        // If the selected comparison doc or locales change, update URL params so that version page
        // This is so that RSC can update the version comparison state
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (args?.versionFromID) {
            current.set('versionFrom', args?.versionFromID);
        }
        if (args?.selectedLocales) {
            if (!args.selectedLocales.length) {
                current.delete('localeCodes');
            } else {
                const selectedLocaleCodes = [];
                for (const locale_0 of args.selectedLocales){
                    if (locale_0.selected) {
                        selectedLocaleCodes.push(locale_0.name);
                    }
                }
                current.set('localeCodes', JSON.stringify(selectedLocaleCodes));
            }
        }
        if (args?.modifiedOnly === false) {
            current.set('modifiedOnly', 'false');
        } else if (args?.modifiedOnly === true) {
            current.delete('modifiedOnly');
        }
        const search = current.toString();
        const query = search ? `?${search}` : '';
        startRouteTransition(()=>router.push(`${pathname}${query}`));
    }, [
        pathname,
        router,
        searchParams,
        startRouteTransition
    ]);
    const onToggleModifiedOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const newModified = event.target.checked;
        setModifiedOnly(newModified);
        updateSearchParams({
            modifiedOnly: newModified
        });
    }, [
        updateSearchParams
    ]);
    const onChangeSelectedLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ locales: locales_0 })=>{
        setLocales(locales_0);
        updateSearchParams({
            selectedLocales: locales_0
        });
    }, [
        updateSearchParams
    ]);
    const onChangeVersionFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        updateSearchParams({
            versionFromID: val.value
        });
    }, [
        updateSearchParams
    ]);
    const { localization } = config;
    const versionToTimeAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>t('version:versionAgo', {
            distance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTimeToNow"])({
                date: versionToCreatedAt,
                i18n
            })
        }), [
        versionToCreatedAt,
        i18n,
        t
    ]);
    const versionFromTimeAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>versionFromCreatedAt ? t('version:versionAgo', {
            distance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTimeToNow"])({
                date: versionFromCreatedAt,
                i18n
            })
        }) : undefined, [
        versionFromCreatedAt,
        i18n,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("main", {
        className: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Gutter"], {
                className: `${baseClass}-controls-top`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: `${baseClass}-controls-top__wrapper`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                                children: i18n.t('version:compareVersions')
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: `${baseClass}-controls-top__wrapper-actions`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                        className: `${baseClass}__modifiedCheckBox`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CheckboxInput"], {
                                            checked: modifiedOnly,
                                            id: 'modifiedOnly',
                                            label: i18n.t('version:modifiedOnly'),
                                            onToggle: onToggleModifiedOnly
                                        })
                                    }),
                                    localization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Pill"], {
                                        "aria-controls": `${baseClass}-locales`,
                                        "aria-expanded": localeSelectorOpen,
                                        className: `${baseClass}__toggle-locales`,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChevronIcon"], {
                                            direction: localeSelectorOpen ? 'up' : 'down'
                                        }),
                                        onClick: ()=>setLocaleSelectorOpen((localeSelectorOpen_0)=>!localeSelectorOpen_0),
                                        pillStyle: "light",
                                        size: "small",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                                className: `${baseClass}__toggle-locales-label`,
                                                children: [
                                                    t('general:locales'),
                                                    ":",
                                                    ' '
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                className: `${baseClass}__toggle-locales-list`,
                                                children: locales.filter((locale_1)=>locale_1.selected).map((locale_2)=>locale_2.name).join(', ')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    localization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectLocales$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLocales"], {
                        locales: locales,
                        localeSelectorOpen: localeSelectorOpen,
                        onChange: onChangeSelectedLocales
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Gutter"], {
                className: `${baseClass}-controls-bottom`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: `${baseClass}-controls-bottom__wrapper`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__version-from`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: `${baseClass}__version-from-labels`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            children: t('version:comparingAgainst')
                                        }),
                                        versionFromTimeAgo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            className: `${baseClass}__time-elapsed`,
                                            children: versionFromTimeAgo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$SelectComparison$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectComparison"], {
                                    collectionSlug: collectionSlug,
                                    docID: originalDocID,
                                    globalSlug: globalSlug,
                                    onChange: onChangeVersionFrom,
                                    versionFromID: versionFromID,
                                    versionFromOptions: versionFromOptions
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__version-to`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: `${baseClass}__version-to-labels`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            children: t('version:currentlyViewing')
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            className: `${baseClass}__time-elapsed`,
                                            children: versionToTimeAgo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: `${baseClass}__version-to-version`,
                                    children: [
                                        VersionToCreatedAtLabel,
                                        canUpdate && !isTrashed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Restore$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Restore"], {
                                            className: `${baseClass}__restore`,
                                            collectionConfig: collectionConfig,
                                            globalConfig: globalConfig,
                                            label: collectionConfig?.labels.singular || globalConfig?.label,
                                            originalDocID: originalDocID,
                                            status: versionToStatus,
                                            versionDateFormatted: versionToCreatedAtFormatted,
                                            versionID: versionToID
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SetStepNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetStepNav"], {
                collectionConfig: collectionConfig,
                globalConfig: globalConfig,
                id: originalDocID,
                isTrashed: isTrashed,
                versionToCreatedAtFormatted: versionToCreatedAtFormatted,
                versionToID: versionToID
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Gutter"], {
                className: `${baseClass}__diff-wrap`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectedLocalesContext"], {
                    value: {
                        selectedLocales: locales.map((locale_3)=>locale_3.name)
                    },
                    children: versionToCreatedAt && RenderedDiff
                })
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/fieldHasChanges.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fieldHasChanges",
    ()=>fieldHasChanges
]);
function fieldHasChanges(a, b) {
    return JSON.stringify(a) !== JSON.stringify(b);
} //# sourceMappingURL=fieldHasChanges.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/getFieldsForRowComparison.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getFieldsForRowComparison",
    ()=>getFieldsForRowComparison
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function getFieldsForRowComparison({ baseVersionField, config, field, row, valueFromRow, valueToRow }) {
    let fields = [];
    let versionFields = [];
    if (field.type === 'array' && 'fields' in field) {
        fields = field.fields;
        versionFields = baseVersionField.rows?.length ? baseVersionField.rows[row] : baseVersionField.fields;
    } else if (field.type === 'blocks') {
        if (valueToRow?.blockType === valueFromRow?.blockType) {
            const matchedBlock = config?.blocksMap?.[valueToRow?.blockType] ?? (('blocks' in field || 'blockReferences' in field) && (field.blockReferences ?? field.blocks)?.find((block)=>typeof block !== 'string' && block.slug === valueToRow?.blockType) || {
                fields: []
            });
            fields = matchedBlock.fields;
            versionFields = baseVersionField.rows?.length ? baseVersionField.rows[row] : baseVersionField.fields;
        } else {
            const matchedVersionBlock = config?.blocksMap?.[valueToRow?.blockType] ?? (('blocks' in field || 'blockReferences' in field) && (field.blockReferences ?? field.blocks)?.find((block)=>typeof block !== 'string' && block.slug === valueToRow?.blockType) || {
                fields: []
            });
            const matchedComparisonBlock = config?.blocksMap?.[valueFromRow?.blockType] ?? (('blocks' in field || 'blockReferences' in field) && (field.blockReferences ?? field.blocks)?.find((block)=>typeof block !== 'string' && block.slug === valueFromRow?.blockType) || {
                fields: []
            });
            fields = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getUniqueListBy"])([
                ...matchedVersionBlock.fields,
                ...matchedComparisonBlock.fields
            ], 'name');
            // buildVersionFields already merged the fields of the version and comparison rows together
            versionFields = baseVersionField.rows?.length ? baseVersionField.rows[row] : baseVersionField.fields;
        }
    }
    return {
        fields,
        versionFields
    };
} //# sourceMappingURL=getFieldsForRowComparison.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/countChangedFields.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "countChangedFields",
    ()=>countChangedFields,
    "countChangedFieldsInRows",
    ()=>countChangedFieldsInRows
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$fieldHasChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/fieldHasChanges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/getFieldsForRowComparison.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function countChangedFields({ config, fields, locales, parentIsLocalized, valueFrom, valueTo }) {
    let count = 0;
    fields.forEach((field)=>{
        // Don't count the id field since it is not displayed in the UI
        if ('name' in field && field.name === 'id') {
            return;
        }
        const fieldType = field.type;
        switch(fieldType){
            // Iterable fields are arrays and blocks fields. We iterate over each row and
            // count the number of changed fields in each.
            case 'array':
            case 'blocks':
                {
                    if (locales && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldShouldBeLocalized"])({
                        field,
                        parentIsLocalized
                    })) {
                        locales.forEach((locale)=>{
                            const valueFromRows = valueFrom?.[field.name]?.[locale] ?? [];
                            const valueToRows = valueTo?.[field.name]?.[locale] ?? [];
                            count += countChangedFieldsInRows({
                                config,
                                field,
                                locales,
                                parentIsLocalized: parentIsLocalized || field.localized,
                                valueFromRows,
                                valueToRows
                            });
                        });
                    } else {
                        const valueFromRows = valueFrom?.[field.name] ?? [];
                        const valueToRows = valueTo?.[field.name] ?? [];
                        count += countChangedFieldsInRows({
                            config,
                            field,
                            locales,
                            parentIsLocalized: parentIsLocalized || field.localized,
                            valueFromRows,
                            valueToRows
                        });
                    }
                    break;
                }
            // Regular fields without nested fields.
            case 'checkbox':
            case 'code':
            case 'date':
            case 'email':
            case 'join':
            case 'json':
            case 'number':
            case 'point':
            case 'radio':
            case 'relationship':
            case 'richText':
            case 'select':
            case 'text':
            case 'textarea':
            case 'upload':
                {
                    // Fields that have a name and contain data. We can just check if the data has changed.
                    if (locales && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldShouldBeLocalized"])({
                        field,
                        parentIsLocalized
                    })) {
                        locales.forEach((locale)=>{
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$fieldHasChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldHasChanges"])(valueTo?.[field.name]?.[locale], valueFrom?.[field.name]?.[locale])) {
                                count++;
                            }
                        });
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$fieldHasChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldHasChanges"])(valueTo?.[field.name], valueFrom?.[field.name])) {
                        count++;
                    }
                    break;
                }
            // Fields that have nested fields, but don't nest their fields' data.
            case 'collapsible':
            case 'row':
                {
                    count += countChangedFields({
                        config,
                        fields: field.fields,
                        locales,
                        parentIsLocalized: parentIsLocalized || field.localized,
                        valueFrom,
                        valueTo
                    });
                    break;
                }
            // Fields that have nested fields and nest their fields' data.
            case 'group':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["groupHasName"])(field)) {
                        if (locales && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldShouldBeLocalized"])({
                            field,
                            parentIsLocalized
                        })) {
                            locales.forEach((locale)=>{
                                count += countChangedFields({
                                    config,
                                    fields: field.fields,
                                    locales,
                                    parentIsLocalized: parentIsLocalized || field.localized,
                                    valueFrom: valueFrom?.[field.name]?.[locale],
                                    valueTo: valueTo?.[field.name]?.[locale]
                                });
                            });
                        } else {
                            count += countChangedFields({
                                config,
                                fields: field.fields,
                                locales,
                                parentIsLocalized: parentIsLocalized || field.localized,
                                valueFrom: valueFrom?.[field.name],
                                valueTo: valueTo?.[field.name]
                            });
                        }
                    } else {
                        // Unnamed group field: data is NOT nested under `field.name`
                        count += countChangedFields({
                            config,
                            fields: field.fields,
                            locales,
                            parentIsLocalized: parentIsLocalized || field.localized,
                            valueFrom,
                            valueTo
                        });
                    }
                    break;
                }
            // Each tab in a tabs field has nested fields. The fields data may be
            // nested or not depending on the existence of a name property.
            case 'tabs':
                {
                    field.tabs.forEach((tab)=>{
                        if ('name' in tab && locales && tab.localized) {
                            // Named localized tab
                            locales.forEach((locale)=>{
                                count += countChangedFields({
                                    config,
                                    fields: tab.fields,
                                    locales,
                                    parentIsLocalized: parentIsLocalized || tab.localized,
                                    valueFrom: valueFrom?.[tab.name]?.[locale],
                                    valueTo: valueTo?.[tab.name]?.[locale]
                                });
                            });
                        } else if ('name' in tab) {
                            // Named tab
                            count += countChangedFields({
                                config,
                                fields: tab.fields,
                                locales,
                                parentIsLocalized: parentIsLocalized || tab.localized,
                                valueFrom: valueFrom?.[tab.name],
                                valueTo: valueTo?.[tab.name]
                            });
                        } else {
                            // Unnamed tab
                            count += countChangedFields({
                                config,
                                fields: tab.fields,
                                locales,
                                parentIsLocalized: parentIsLocalized || tab.localized,
                                valueFrom,
                                valueTo
                            });
                        }
                    });
                    break;
                }
            // UI fields don't have data and are not displayed in the version view
            // so we can ignore them.
            case 'ui':
                {
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = fieldType;
                    throw new Error(`Unexpected field.type in countChangedFields : ${String(fieldType)}`);
                }
        }
    });
    return count;
}
function countChangedFieldsInRows({ config, field, locales, parentIsLocalized, valueFromRows = [], valueToRows = [] }) {
    let count = 0;
    let i = 0;
    while(valueFromRows[i] || valueToRows[i]){
        const valueFromRow = valueFromRows?.[i] || {};
        const valueToRow = valueToRows?.[i] || {};
        const { fields: rowFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFieldsForRowComparison"])({
            baseVersionField: {
                type: 'text',
                fields: [],
                path: '',
                schemaPath: ''
            },
            config,
            field,
            row: i,
            valueFromRow,
            valueToRow
        });
        count += countChangedFields({
            config,
            fields: rowFields,
            locales,
            parentIsLocalized: parentIsLocalized || field.localized,
            valueFrom: valueFromRow,
            valueTo: valueToRow
        });
        i++;
    }
    return count;
} //# sourceMappingURL=countChangedFields.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/DiffCollapser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DiffCollapser",
    ()=>DiffCollapser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$countChangedFields$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/countChangedFields.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$countChangedFields$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$countChangedFields$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const baseClass = 'diff-collapser';
const DiffCollapser = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(19);
    const { children, field, fields, hideGutter: t1, initCollapsed: t2, isIterable: t3, Label, locales, parentIsLocalized, valueFrom, valueTo } = t0;
    const hideGutter = t1 === undefined ? false : t1;
    const initCollapsed = t2 === undefined ? false : t2;
    const isIterable = t3 === undefined ? false : t3;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initCollapsed);
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    let t4;
    if ($[0] !== Label || $[1] !== children || $[2] !== config || $[3] !== field || $[4] !== fields || $[5] !== hideGutter || $[6] !== isCollapsed || $[7] !== isIterable || $[8] !== locales || $[9] !== parentIsLocalized || $[10] !== t || $[11] !== valueFrom || $[12] !== valueTo) {
        let changeCount;
        if (isIterable) {
            if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsArrayType"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsBlockType"])(field)) {
                throw new Error("DiffCollapser: field must be an array or blocks field when isIterable is true");
            }
            const valueFromRows = valueFrom ?? [];
            const valueToRows = valueTo ?? [];
            if (!Array.isArray(valueFromRows) || !Array.isArray(valueToRows)) {
                throw new Error("DiffCollapser: valueFrom and valueTro must be arrays when isIterable is true");
            }
            changeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$countChangedFields$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countChangedFieldsInRows"])({
                config,
                field,
                locales,
                parentIsLocalized,
                valueFromRows,
                valueToRows
            });
        } else {
            changeCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$countChangedFields$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countChangedFields"])({
                config,
                fields,
                locales,
                parentIsLocalized,
                valueFrom,
                valueTo
            });
        }
        const t5 = isCollapsed && `${baseClass}__content--is-collapsed`;
        const t6 = hideGutter && `${baseClass}__content--hide-gutter`;
        let t7;
        if ($[14] !== t5 || $[15] !== t6) {
            t7 = [
                `${baseClass}__content`,
                t5,
                t6
            ].filter(Boolean);
            $[14] = t5;
            $[15] = t6;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        const contentClassNames = t7.join(" ");
        let t8;
        if ($[17] !== isCollapsed) {
            t8 = ()=>setIsCollapsed(!isCollapsed);
            $[17] = isCollapsed;
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: baseClass,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldDiffLabel"], {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                            "aria-label": isCollapsed ? "Expand" : "Collapse",
                            className: `${baseClass}__toggle-button`,
                            onClick: t8,
                            type: "button",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: `${baseClass}__label`,
                                    children: Label
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChevronIcon"], {
                                    direction: isCollapsed ? "right" : "down",
                                    size: "small"
                                })
                            ]
                        }),
                        changeCount > 0 && isCollapsed && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}__field-change-count`,
                            children: t("version:changedFieldsCount", {
                                count: changeCount
                            })
                        })
                    ]
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: contentClassNames,
                    children
                })
            ]
        });
        $[0] = Label;
        $[1] = children;
        $[2] = config;
        $[3] = field;
        $[4] = fields;
        $[5] = hideGutter;
        $[6] = isCollapsed;
        $[7] = isIterable;
        $[8] = locales;
        $[9] = parentIsLocalized;
        $[10] = t;
        $[11] = valueFrom;
        $[12] = valueTo;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export f as ShimmerEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript)");
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderVersionFieldsToDiff",
    ()=>RenderVersionFieldsToDiff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__ShimmerEffect$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export f as ShimmerEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const baseClass = 'render-field-diffs';
;
;
const RenderVersionFieldsToDiff = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6);
    const { parent: t1, versionFields } = t0;
    const parent = t1 === undefined ? false : t1;
    const [hasMounted, setHasMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    let t2;
    let t3;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            setHasMounted(true);
        };
        t3 = [];
        $[0] = t2;
        $[1] = t3;
    } else {
        t2 = $[0];
        t3 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `${baseClass}${parent ? ` ${baseClass}--parent` : ""}`;
    let t5;
    if ($[2] !== hasMounted || $[3] !== t4 || $[4] !== versionFields) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: t4,
            children: !hasMounted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__f__as__ShimmerEffect$3e$__["ShimmerEffect"], {
                    height: "8rem",
                    width: "100%"
                })
            }) : versionFields?.map(_temp)
        });
        $[2] = hasMounted;
        $[3] = t4;
        $[4] = versionFields;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    return t5;
};
function _temp(field, fieldIndex) {
    if (field.fieldByLocale) {
        const LocaleComponents = [];
        for (const [locale, baseField] of Object.entries(field.fieldByLocale)){
            LocaleComponents.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}__locale`,
                "data-field-path": baseField.path,
                "data-locale": locale,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: `${baseClass}__locale-value`,
                    children: baseField.CustomComponent
                })
            }, [
                locale,
                fieldIndex
            ].join("-")));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: `${baseClass}__field`,
            children: LocaleComponents
        }, fieldIndex);
    } else {
        if (field.field) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}__field field__${field.field.type}`,
                "data-field-path": field.field.path,
                children: field.field.CustomComponent
            }, fieldIndex);
        }
    }
    return null;
} //# sourceMappingURL=RenderVersionFieldsToDiff.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Collapsible/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/DiffCollapser/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const baseClass = 'collapsible-diff';
const Collapsible = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8);
    const { baseVersionField, comparisonValue: valueFrom, field, parentIsLocalized, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { selectedLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedLocales"])();
    if (!baseVersionField.fields?.length) {
        return null;
    }
    let t1;
    if ($[0] !== baseVersionField.fields || $[1] !== field || $[2] !== i18n || $[3] !== parentIsLocalized || $[4] !== selectedLocales || $[5] !== valueFrom || $[6] !== valueTo) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: baseClass,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffCollapser"], {
                fields: field.fields,
                Label: "label" in field && field.label && typeof field.label !== "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(field.label, i18n)
                }),
                locales: selectedLocales,
                parentIsLocalized: parentIsLocalized || field.localized,
                valueFrom,
                valueTo,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderVersionFieldsToDiff"], {
                    versionFields: baseVersionField.fields
                })
            })
        });
        $[0] = baseVersionField.fields;
        $[1] = field;
        $[2] = i18n;
        $[3] = parentIsLocalized;
        $[4] = selectedLocales;
        $[5] = valueFrom;
        $[6] = valueTo;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Date/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DateDiffComponent",
    ()=>DateDiffComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const baseClass = 'date-diff';
const DateDiffComponent = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(7);
    const { comparisonValue: valueFrom, field, locale, nestingLevel, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { config: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t2 } = t1;
    const { dateFormat } = t2;
    const formattedFromDate = valueFrom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"])({
        date: typeof valueFrom === "string" ? new Date(valueFrom) : valueFrom,
        i18n,
        pattern: dateFormat
    }) : "";
    const formattedToDate = valueTo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"])({
        date: typeof valueTo === "string" ? new Date(valueTo) : valueTo,
        i18n,
        pattern: dateFormat
    }) : "";
    const t3 = `<div class="${baseClass}" data-enable-match="true" data-date="${formattedFromDate}"><p>` + formattedFromDate + "</p></div>";
    const t4 = `<div class="${baseClass}" data-enable-match="true" data-date="${formattedToDate}"><p>` + formattedToDate + "</p></div>";
    let t5;
    if ($[0] !== field.label || $[1] !== i18n || $[2] !== locale || $[3] !== nestingLevel || $[4] !== t3 || $[5] !== t4) {
        const { From, To } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getHTMLDiffComponents"])({
            fromHTML: t3,
            toHTML: t4,
            tokenizeByCharacter: false
        });
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldDiffContainer"], {
            className: baseClass,
            From,
            i18n,
            label: {
                label: field.label,
                locale
            },
            nestingLevel,
            To
        });
        $[0] = field.label;
        $[1] = i18n;
        $[2] = locale;
        $[3] = nestingLevel;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Group/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Group",
    ()=>Group
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/DiffCollapser/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const baseClass = 'group-diff';
const Group = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(9);
    const { baseVersionField, comparisonValue: valueFrom, field, locale, parentIsLocalized, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { selectedLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedLocales"])();
    let t1;
    if ($[0] !== baseVersionField.fields || $[1] !== field || $[2] !== i18n || $[3] !== locale || $[4] !== parentIsLocalized || $[5] !== selectedLocales || $[6] !== valueFrom || $[7] !== valueTo) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: baseClass,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffCollapser"], {
                fields: field.fields,
                Label: "label" in field && field.label && typeof field.label !== "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                    children: [
                        locale && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}__locale-label`,
                            children: locale
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(field.label, i18n)
                    ]
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                    className: `${baseClass}__locale-label ${baseClass}__locale-label--no-label`,
                    children: [
                        "<",
                        i18n.t("version:noLabelGroup"),
                        ">"
                    ]
                }),
                locales: selectedLocales,
                parentIsLocalized: parentIsLocalized || field.localized,
                valueFrom,
                valueTo,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderVersionFieldsToDiff"], {
                    versionFields: baseVersionField.fields
                })
            })
        });
        $[0] = baseVersionField.fields;
        $[1] = field;
        $[2] = i18n;
        $[3] = locale;
        $[4] = parentIsLocalized;
        $[5] = selectedLocales;
        $[6] = valueFrom;
        $[7] = valueTo;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Iterable/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Iterable",
    ()=>Iterable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/DiffCollapser/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/utilities/getFieldsForRowComparison.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
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
const baseClass = 'iterable-diff';
const Iterable = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12);
    const { baseVersionField, comparisonValue: valueFrom, field, locale, parentIsLocalized, versionValue: valueTo } = t0;
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { selectedLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedLocales"])();
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsArrayType"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsBlockType"])(field)) {
        throw new Error(`Expected field to be an array or blocks type but got: ${field.type}`);
    }
    const valueToRowCount = Array.isArray(valueTo) ? valueTo.length : 0;
    const valueFromRowCount = Array.isArray(valueFrom) ? valueFrom.length : 0;
    const maxRows = Math.max(valueToRowCount, valueFromRowCount);
    let t1;
    if ($[0] !== baseVersionField || $[1] !== config || $[2] !== field || $[3] !== i18n || $[4] !== locale || $[5] !== maxRows || $[6] !== parentIsLocalized || $[7] !== selectedLocales || $[8] !== t || $[9] !== valueFrom || $[10] !== valueTo) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: baseClass,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffCollapser"], {
                field,
                isIterable: true,
                Label: "label" in field && field.label && typeof field.label !== "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                    children: [
                        locale && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}__locale-label`,
                            children: locale
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(field.label, i18n)
                    ]
                }),
                locales: selectedLocales,
                parentIsLocalized,
                valueFrom,
                valueTo,
                children: [
                    maxRows > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__rows`,
                        children: Array.from({
                            length: maxRows
                        }, (_, i)=>{
                            const valueToRow = valueTo?.[i] || {};
                            const valueFromRow = valueFrom?.[i] || {};
                            const { fields, versionFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$utilities$2f$getFieldsForRowComparison$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFieldsForRowComparison"])({
                                baseVersionField,
                                config,
                                field,
                                row: i,
                                valueFromRow,
                                valueToRow
                            });
                            if (!versionFields?.length) {
                                return null;
                            }
                            const rowNumber = String(i + 1).padStart(2, "0");
                            const rowLabel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsArrayType"])(field) ? `${t("general:item")} ${rowNumber}` : `${t("fields:block")} ${rowNumber}`;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: `${baseClass}__row`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffCollapser"], {
                                    fields,
                                    hideGutter: true,
                                    Label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: `${baseClass}-label-container`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                className: `${baseClass}-label-prefix`
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                className: `${baseClass}__label`,
                                                children: rowLabel
                                            })
                                        ]
                                    }),
                                    locales: selectedLocales,
                                    parentIsLocalized: parentIsLocalized || field.localized,
                                    valueFrom: valueFromRow,
                                    valueTo: valueToRow,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderVersionFieldsToDiff"], {
                                        versionFields
                                    })
                                })
                            }, i);
                        })
                    }),
                    maxRows === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__no-rows`,
                        children: i18n.t("version:noRowsFound", {
                            label: "labels" in field && field.labels?.plural ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(field.labels.plural, i18n) : i18n.t("general:rows")
                        })
                    })
                ]
            })
        });
        $[0] = baseVersionField;
        $[1] = config;
        $[2] = field;
        $[3] = i18n;
        $[4] = locale;
        $[5] = maxRows;
        $[6] = parentIsLocalized;
        $[7] = selectedLocales;
        $[8] = t;
        $[9] = valueFrom;
        $[10] = valueTo;
        $[11] = t1;
    } else {
        t1 = $[11];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Row/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>Row
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const baseClass = 'row-diff';
const Row = ({ baseVersionField })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: baseClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderVersionFieldsToDiff"], {
            versionFields: baseVersionField.fields
        })
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Select/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const baseClass = 'select-diff';
const getOptionsToRender = (value, options, hasMany)=>{
    if (hasMany && Array.isArray(value)) {
        return value.map((val)=>options.find((option)=>(typeof option === 'string' ? option : option.value) === val) || String(val));
    }
    return options.find((option)=>(typeof option === 'string' ? option : option.value) === value) || String(value);
};
/**
 * Translates option labels while ensuring they are strings.
 * If `options.label` is a JSX element, it falls back to `options.value` because `DiffViewer`
 * expects all values to be strings.
 */ const getTranslatedOptions = (options, i18n)=>{
    if (Array.isArray(options)) {
        return options.map((option)=>{
            if (typeof option === 'string') {
                return option;
            }
            const translatedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(option.label, i18n);
            // Ensure the result is a string, otherwise use option.value
            return typeof translatedLabel === 'string' ? translatedLabel : option.value;
        }).join(', ');
    }
    if (typeof options === 'string') {
        return options;
    }
    const translatedLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(options.label, i18n);
    return typeof translatedLabel === 'string' ? translatedLabel : options.value;
};
const Select = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(7);
    const { comparisonValue: valueFrom, field, locale, nestingLevel, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const options = "options" in field && field.options;
    const renderedValueFrom = typeof valueFrom !== "undefined" ? getTranslatedOptions(getOptionsToRender(typeof valueFrom === "string" ? valueFrom : JSON.stringify(valueFrom), options, field.hasMany), i18n) : "";
    const renderedValueTo = typeof valueTo !== "undefined" ? getTranslatedOptions(getOptionsToRender(typeof valueTo === "string" ? valueTo : JSON.stringify(valueTo), options, field.hasMany), i18n) : "";
    const t1 = "<p>" + renderedValueFrom + "</p>";
    const t2 = "<p>" + renderedValueTo + "</p>";
    let t3;
    if ($[0] !== field.label || $[1] !== i18n || $[2] !== locale || $[3] !== nestingLevel || $[4] !== t1 || $[5] !== t2) {
        const { From, To } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getHTMLDiffComponents"])({
            fromHTML: t1,
            toHTML: t2,
            tokenizeByCharacter: true
        });
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldDiffContainer"], {
            className: baseClass,
            From,
            i18n,
            label: {
                label: field.label,
                locale
            },
            nestingLevel,
            To
        });
        $[0] = field.label;
        $[1] = i18n;
        $[2] = locale;
        $[3] = nestingLevel;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Tabs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/Default/SelectedLocalesContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/DiffCollapser/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/RenderVersionFieldsToDiff.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
const baseClass = 'tabs-diff';
const Tabs = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13);
    const { baseVersionField, comparisonValue: valueFrom, field, versionValue: valueTo } = props;
    const { selectedLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedLocales"])();
    let t0;
    if ($[0] !== baseVersionField.tabs || $[1] !== field || $[2] !== props || $[3] !== selectedLocales || $[4] !== valueFrom || $[5] !== valueTo) {
        let t1;
        if ($[7] !== field || $[8] !== props || $[9] !== selectedLocales || $[10] !== valueFrom || $[11] !== valueTo) {
            t1 = (tab, i)=>{
                if (!tab?.fields?.length) {
                    return null;
                }
                const fieldTab = field.tabs?.[i];
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: `${baseClass}__tab`,
                    children: (()=>{
                        if ("name" in fieldTab && selectedLocales && fieldTab.localized) {
                            return selectedLocales.map((locale, index)=>{
                                const localizedTabProps = {
                                    ...props,
                                    comparisonValue: valueFrom?.[tab.name]?.[locale],
                                    fieldTab,
                                    locale,
                                    tab,
                                    versionValue: valueTo?.[tab.name]?.[locale]
                                };
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: `${baseClass}__tab-locale`,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: `${baseClass}__tab-locale-value`,
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Tab, {
                                            ...localizedTabProps
                                        }, locale)
                                    })
                                }, [
                                    locale,
                                    index
                                ].join("-"));
                            });
                        } else {
                            if ("name" in tab && tab.name) {
                                const namedTabProps = {
                                    ...props,
                                    comparisonValue: valueFrom?.[tab.name],
                                    fieldTab,
                                    tab,
                                    versionValue: valueTo?.[tab.name]
                                };
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Tab, {
                                    ...namedTabProps
                                }, i);
                            } else {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Tab, {
                                    fieldTab,
                                    ...props,
                                    tab
                                }, i);
                            }
                        }
                    })()
                }, i);
            };
            $[7] = field;
            $[8] = props;
            $[9] = selectedLocales;
            $[10] = valueFrom;
            $[11] = valueTo;
            $[12] = t1;
        } else {
            t1 = $[12];
        }
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: baseClass,
            children: baseVersionField.tabs.map(t1)
        });
        $[0] = baseVersionField.tabs;
        $[1] = field;
        $[2] = props;
        $[3] = selectedLocales;
        $[4] = valueFrom;
        $[5] = valueTo;
        $[6] = t0;
    } else {
        t0 = $[6];
    }
    return t0;
};
const Tab = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(10);
    const { comparisonValue: valueFrom, fieldTab, locale, parentIsLocalized, tab, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { selectedLocales } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$SelectedLocalesContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedLocales"])();
    if (!tab.fields?.length) {
        return null;
    }
    let t1;
    if ($[0] !== fieldTab.fields || $[1] !== fieldTab.localized || $[2] !== i18n || $[3] !== locale || $[4] !== parentIsLocalized || $[5] !== selectedLocales || $[6] !== tab || $[7] !== valueFrom || $[8] !== valueTo) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$DiffCollapser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiffCollapser"], {
            fields: fieldTab.fields,
            Label: "label" in tab && tab.label && typeof tab.label !== "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                children: [
                    locale && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${baseClass}__locale-label`,
                        children: locale
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTranslation"])(tab.label, i18n)
                ]
            }),
            locales: selectedLocales,
            parentIsLocalized: parentIsLocalized || fieldTab.localized,
            valueFrom,
            valueTo,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$RenderFieldsToDiff$2f$RenderVersionFieldsToDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderVersionFieldsToDiff"], {
                versionFields: tab.fields
            })
        });
        $[0] = fieldTab.fields;
        $[1] = fieldTab.localized;
        $[2] = i18n;
        $[3] = locale;
        $[4] = parentIsLocalized;
        $[5] = selectedLocales;
        $[6] = tab;
        $[7] = valueFrom;
        $[8] = valueTo;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/RenderFieldsToDiff/fields/Text/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const baseClass = 'text-diff';
function formatValue(value) {
    if (typeof value === 'string') {
        return {
            tokenizeByCharacter: true,
            value
        };
    }
    if (typeof value === 'number') {
        return {
            tokenizeByCharacter: true,
            value: String(value)
        };
    }
    if (typeof value === 'boolean') {
        return {
            tokenizeByCharacter: false,
            value: String(value)
        };
    }
    if (value && typeof value === 'object') {
        return {
            tokenizeByCharacter: false,
            value: `<pre>${JSON.stringify(value, null, 2)}</pre>`
        };
    }
    return {
        tokenizeByCharacter: true,
        value: undefined
    };
}
const Text = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(8);
    const { comparisonValue: valueFrom, field, locale, nestingLevel, versionValue: valueTo } = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let placeholder = "";
    if (valueTo == valueFrom) {
        placeholder = "<span class=\"html-diff-no-value\"><span>";
    }
    let t1;
    if ($[0] !== field.label || $[1] !== i18n || $[2] !== locale || $[3] !== nestingLevel || $[4] !== placeholder || $[5] !== valueFrom || $[6] !== valueTo) {
        const formattedValueFrom = formatValue(valueFrom);
        const formattedValueTo = formatValue(valueTo);
        let tokenizeByCharacter = true;
        if (formattedValueFrom.value?.length) {
            tokenizeByCharacter = formattedValueFrom.tokenizeByCharacter;
        } else {
            if (formattedValueTo.value?.length) {
                tokenizeByCharacter = formattedValueTo.tokenizeByCharacter;
            }
        }
        const renderedValueFrom = formattedValueFrom.value ?? placeholder;
        const renderedValueTo = formattedValueTo.value ?? placeholder;
        const { From, To } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getHTMLDiffComponents"])({
            fromHTML: "<p>" + renderedValueFrom + "</p>",
            toHTML: "<p>" + renderedValueTo + "</p>",
            tokenizeByCharacter
        });
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FieldDiffContainer"], {
            className: baseClass,
            From,
            i18n,
            label: {
                label: field.label,
                locale
            },
            nestingLevel,
            To
        });
        $[0] = field.label;
        $[1] = i18n;
        $[2] = locale;
        $[3] = nestingLevel;
        $[4] = placeholder;
        $[5] = valueFrom;
        $[6] = valueTo;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/VersionPillLabel/getVersionLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Gets the appropriate version label and version pill styling
 * given existing versions and the current version status.
 */ __turbopack_context__.s([
    "getVersionLabel",
    ()=>getVersionLabel
]);
function getVersionLabel({ currentlyPublishedVersion, latestDraftVersion, t, version }) {
    const publishedNewerThanDraft = currentlyPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt;
    if (version.version._status === 'draft') {
        if (publishedNewerThanDraft) {
            return {
                name: 'draft',
                label: t('version:draft'),
                pillStyle: 'light'
            };
        } else {
            return {
                name: version.id === latestDraftVersion?.id ? 'currentDraft' : 'draft',
                label: version.id === latestDraftVersion?.id ? t('version:currentDraft') : t('version:draft'),
                pillStyle: 'light'
            };
        }
    } else {
        const isCurrentlyPublished = version.id === currentlyPublishedVersion?.id;
        return {
            name: isCurrentlyPublished ? 'currentlyPublished' : 'previouslyPublished',
            label: isCurrentlyPublished ? t('version:currentlyPublished') : t('version:previouslyPublished'),
            pillStyle: isCurrentlyPublished ? 'success' : 'light'
        };
    }
} //# sourceMappingURL=getVersionLabel.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/VersionPillLabel/VersionPillLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VersionPillLabel",
    ()=>VersionPillLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$getVersionLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/VersionPillLabel/getVersionLabel.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const baseClass = 'version-pill-label';
const renderPill = (label, pillStyle)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Pill"], {
        pillStyle: pillStyle,
        size: "small",
        children: label
    });
};
const VersionPillLabel = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13);
    const { currentlyPublishedVersion, disableDate: t1, doc, labelFirst: t2, labelOverride, labelStyle: t3, labelSuffix, latestDraftVersion } = t0;
    const disableDate = t1 === undefined ? false : t1;
    const labelFirst = t2 === undefined ? false : t2;
    const labelStyle = t3 === undefined ? "pill" : t3;
    const { config: t4 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t5, localization } = t4;
    const { dateFormat } = t5;
    const { i18n, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t6;
    if ($[0] !== currentlyPublishedVersion || $[1] !== dateFormat || $[2] !== disableDate || $[3] !== doc || $[4] !== i18n || $[5] !== labelFirst || $[6] !== labelOverride || $[7] !== labelStyle || $[8] !== labelSuffix || $[9] !== latestDraftVersion || $[10] !== localization || $[11] !== t) {
        const { label, pillStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$getVersionLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVersionLabel"])({
            currentlyPublishedVersion,
            latestDraftVersion,
            t,
            version: doc
        });
        const labelText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
            children: [
                labelOverride || label,
                labelSuffix
            ]
        });
        const showDate = !disableDate && doc.updatedAt;
        const formattedDate = showDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"])({
            date: doc.updatedAt,
            i18n,
            pattern: dateFormat
        }) : null;
        const localeCode = Array.isArray(doc.publishedLocale) ? doc.publishedLocale[0] : doc.publishedLocale;
        const locale = localization && localization?.locales ? localization.locales.find((loc)=>loc.code === localeCode) : null;
        const localeLabel = locale ? locale?.label?.[i18n?.language] || locale?.label : null;
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: baseClass,
            children: [
                labelFirst ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        labelStyle === "pill" ? renderPill(labelText, pillStyle) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}-text`,
                            children: labelText
                        }),
                        showDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}-date`,
                            children: formattedDate
                        })
                    ]
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        showDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}-date`,
                            children: formattedDate
                        }),
                        labelStyle === "pill" ? renderPill(labelText, pillStyle) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                            className: `${baseClass}-text`,
                            children: labelText
                        })
                    ]
                }),
                localeLabel && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Pill"], {
                    size: "small",
                    children: localeLabel
                })
            ]
        });
        $[0] = currentlyPublishedVersion;
        $[1] = dateFormat;
        $[2] = disableDate;
        $[3] = doc;
        $[4] = i18n;
        $[5] = labelFirst;
        $[6] = labelOverride;
        $[7] = labelStyle;
        $[8] = labelSuffix;
        $[9] = latestDraftVersion;
        $[10] = localization;
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}; //# sourceMappingURL=VersionPillLabel.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Version/SelectComparison/VersionDrawer/CreatedAtCell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VersionDrawerCreatedAtCell",
    ()=>VersionDrawerCreatedAtCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
const VersionDrawerCreatedAtCell = (t0)=>{
    const { rowData: t1 } = t0;
    const { id, updatedAt } = t1 === undefined ? {} : t1;
    const { config: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t3 } = t2;
    const { dateFormat } = t3;
    const { closeAllModals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRouteTransition"])();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        className: "created-at-cell",
        onClick: ()=>{
            closeAllModals();
            const current = new URLSearchParams(Array.from(searchParams.entries()));
            if (id) {
                current.set("versionFrom", String(id));
            }
            const search = current.toString();
            const query = search ? `?${search}` : "";
            startRouteTransition(()=>router.push(`${pathname}${query}`));
        },
        type: "button",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"])({
            date: updatedAt,
            i18n,
            pattern: dateFormat
        })
    });
}; //# sourceMappingURL=CreatedAtCell.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AutosaveCell",
    ()=>AutosaveCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$VersionPillLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Version/VersionPillLabel/VersionPillLabel.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$VersionPillLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$VersionPillLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const baseClass = 'autosave-cell';
const AutosaveCell = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(5);
    const { currentlyPublishedVersion, latestDraftVersion, rowData } = t0;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    let t1;
    if ($[0] !== currentlyPublishedVersion || $[1] !== latestDraftVersion || $[2] !== rowData || $[3] !== t) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: `${baseClass}__items`,
            children: [
                rowData?.autosave && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Pill"], {
                    size: "small",
                    children: t("version:autosave")
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$VersionPillLabel$2f$VersionPillLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VersionPillLabel"], {
                    currentlyPublishedVersion,
                    disableDate: true,
                    doc: rowData,
                    labelFirst: false,
                    labelStyle: "pill",
                    latestDraftVersion
                })
            ]
        });
        $[0] = currentlyPublishedVersion;
        $[1] = latestDraftVersion;
        $[2] = rowData;
        $[3] = t;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "CreatedAtCell",
    ()=>CreatedAtCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const CreatedAtCell = (t0)=>{
    const { collectionSlug, docID, globalSlug, isTrashed, rowData: t1 } = t0;
    const { id, updatedAt } = t1 === undefined ? {} : t1;
    const { config: t2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t3, routes: t4 } = t2;
    const { dateFormat } = t3;
    const { admin: adminRoute } = t4;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const trashedDocPrefix = isTrashed ? "trash/" : "";
    let to;
    if (collectionSlug) {
        to = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
            adminRoute,
            path: `/collections/${collectionSlug}/${trashedDocPrefix}${docID}/versions/${id}`
        });
    }
    if (globalSlug) {
        to = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
            adminRoute,
            path: `/globals/${globalSlug}/versions/${id}`
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
        href: to,
        prefetch: false,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatDate"])({
            date: updatedAt,
            i18n,
            pattern: dateFormat
        })
    });
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDCell",
    ()=>IDCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function IDCell({ id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: id
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Versions/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "VersionsViewClient",
    ()=>VersionsViewClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const VersionsViewClient = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(13);
    const { baseClass, columns, paginationLimits } = props;
    const { data, handlePageChange, handlePerPageChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useListQuery"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[0] !== searchParams) {
        t0 = searchParams.get("limit");
        $[0] = searchParams;
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const limit = t0;
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const versionCount = data?.totalDocs || 0;
    const t1 = !data;
    let t2;
    if ($[2] !== baseClass || $[3] !== columns || $[4] !== data || $[5] !== handlePageChange || $[6] !== handlePerPageChange || $[7] !== i18n || $[8] !== limit || $[9] !== paginationLimits || $[10] !== t1 || $[11] !== versionCount) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LoadingOverlayToggle"], {
                    name: "versions",
                    show: t1
                }),
                versionCount === 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: `${baseClass}__no-versions`,
                    children: i18n.t("version:noFurtherVersionsFound")
                }),
                versionCount > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Table"], {
                            columns,
                            data: data?.docs
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__page-controls`,
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Pagination"], {
                                    hasNextPage: data.hasNextPage,
                                    hasPrevPage: data.hasPrevPage,
                                    limit: data.limit,
                                    nextPage: data.nextPage,
                                    numberOfNeighbors: 1,
                                    onChange: handlePageChange,
                                    page: data.page,
                                    prevPage: data.prevPage,
                                    totalPages: data.totalPages
                                }),
                                data?.totalDocs > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: `${baseClass}__page-info`,
                                            children: [
                                                data.page * data.limit - (data.limit - 1),
                                                "-",
                                                data.totalPages > 1 && data.totalPages !== data.page ? data.limit * data.page : data.totalDocs,
                                                " ",
                                                i18n.t("general:of"),
                                                " ",
                                                data.totalDocs
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PerPage"], {
                                            handleChange: handlePerPageChange,
                                            limit: limit ? Number(limit) : 10,
                                            limits: paginationLimits
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
        $[2] = baseClass;
        $[3] = columns;
        $[4] = data;
        $[5] = handlePageChange;
        $[6] = handlePerPageChange;
        $[7] = i18n;
        $[8] = limit;
        $[9] = paginationLimits;
        $[10] = t1;
        $[11] = versionCount;
        $[12] = t2;
    } else {
        t2 = $[12];
    }
    return t2;
}; //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormHeader",
    ()=>FormHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const baseClass = 'form-header';
function FormHeader({ description, heading }) {
    if (!heading) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                children: heading
            }),
            Boolean(description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                children: description
            })
        ]
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ForgotPassword/ForgotPasswordForm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ForgotPasswordForm",
    ()=>ForgotPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const ForgotPasswordForm = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(17);
    const { config, getEntityConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t0, routes: t1 } = config;
    const { user: userSlug } = t0;
    const { api } = t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const [hasSubmitted, setHasSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[0] !== getEntityConfig || $[1] !== userSlug) {
        t2 = getEntityConfig({
            collectionSlug: userSlug
        });
        $[0] = getEntityConfig;
        $[1] = userSlug;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const collectionConfig = t2;
    const loginWithUsername = collectionConfig?.auth?.loginWithUsername;
    let t3;
    if ($[3] !== loginWithUsername || $[4] !== t) {
        t3 = (res, successToast, errorToast)=>{
            res.json().then(()=>{
                setHasSubmitted(true);
                successToast(t("general:submissionSuccessful"));
            }).catch(()=>{
                errorToast(loginWithUsername ? t("authentication:usernameNotValid") : t("authentication:emailNotValid"));
            });
        };
        $[3] = loginWithUsername;
        $[4] = t;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleResponse = t3;
    let t4;
    let t5;
    if ($[6] !== api || $[7] !== config || $[8] !== handleResponse || $[9] !== hasSubmitted || $[10] !== loginWithUsername || $[11] !== t || $[12] !== userSlug) {
        t5 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const initialState = loginWithUsername ? {
                username: {
                    initialValue: "",
                    valid: true,
                    value: undefined
                }
            } : {
                email: {
                    initialValue: "",
                    valid: true,
                    value: undefined
                }
            };
            if (hasSubmitted) {
                let t6;
                if ($[15] !== t) {
                    t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormHeader"], {
                        description: t("authentication:checkYourEmailForPasswordReset"),
                        heading: t("authentication:emailSent")
                    });
                    $[15] = t;
                    $[16] = t6;
                } else {
                    t6 = $[16];
                }
                t5 = t6;
                break bb0;
            }
            t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Form"], {
                action: `${api}/${userSlug}/forgot-password`,
                handleResponse,
                initialState,
                method: "POST",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormHeader"], {
                        description: loginWithUsername ? t("authentication:forgotPasswordUsernameInstructions") : t("authentication:forgotPasswordEmailInstructions"),
                        heading: t("authentication:forgotPassword")
                    }),
                    loginWithUsername ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextField"], {
                        field: {
                            name: "username",
                            label: t("authentication:username"),
                            required: true
                        },
                        path: "username",
                        validate: (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["text"])(value, {
                                name: "username",
                                type: "text",
                                blockData: {},
                                data: {},
                                event: "onChange",
                                path: [
                                    "username"
                                ],
                                preferences: {
                                    fields: {}
                                },
                                req: {
                                    payload: {
                                        config
                                    },
                                    t
                                },
                                required: true,
                                siblingData: {}
                            })
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EmailField"], {
                        field: {
                            name: "email",
                            admin: {
                                autoComplete: "email"
                            },
                            label: t("general:email"),
                            required: true
                        },
                        path: "email",
                        validate: (value_0)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["email"])(value_0, {
                                name: "email",
                                type: "email",
                                blockData: {},
                                data: {},
                                event: "onChange",
                                path: [
                                    "email"
                                ],
                                preferences: {
                                    fields: {}
                                },
                                req: {
                                    payload: {
                                        config
                                    },
                                    t
                                },
                                required: true,
                                siblingData: {}
                            })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FormSubmit"], {
                        size: "large",
                        children: t("general:submit")
                    })
                ]
            });
        }
        $[6] = api;
        $[7] = config;
        $[8] = handleResponse;
        $[9] = hasSubmitted;
        $[10] = loginWithUsername;
        $[11] = t;
        $[12] = userSlug;
        $[13] = t4;
        $[14] = t5;
    } else {
        t4 = $[13];
        t5 = $[14];
    }
    if (t5 !== Symbol.for("react.early_return_sentinel")) {
        return t5;
    }
    return t4;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginField/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LoginField",
    ()=>LoginField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
const LoginField = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(11);
    const { type, required: t1 } = t0;
    const required = t1 === undefined ? true : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    if (type === "email") {
        let t2;
        if ($[0] !== required || $[1] !== t) {
            t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EmailField"], {
                field: {
                    name: "email",
                    admin: {
                        autoComplete: "email"
                    },
                    label: t("general:email"),
                    required
                },
                path: "email",
                validate: __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["email"]
            });
            $[0] = required;
            $[1] = t;
            $[2] = t2;
        } else {
            t2 = $[2];
        }
        return t2;
    }
    if (type === "username") {
        let t2;
        if ($[3] !== required || $[4] !== t) {
            t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextField"], {
                field: {
                    name: "username",
                    label: t("authentication:username"),
                    required
                },
                path: "username",
                validate: __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["username"]
            });
            $[3] = required;
            $[4] = t;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        return t2;
    }
    if (type === "emailOrUsername") {
        let t2;
        if ($[6] !== required || $[7] !== t) {
            let t3;
            if ($[9] !== t) {
                t3 = (value, options)=>{
                    const passesUsername = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["username"])(value, options);
                    const passesEmail = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["email"])(value, options);
                    if (!passesEmail && !passesUsername) {
                        return `${t("general:email")}: ${passesEmail} ${t("general:username")}: ${passesUsername}`;
                    }
                    return true;
                };
                $[9] = t;
                $[10] = t3;
            } else {
                t3 = $[10];
            }
            t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextField"], {
                field: {
                    name: "username",
                    label: t("authentication:emailOrUsername"),
                    required
                },
                path: "username",
                validate: t3
            });
            $[6] = required;
            $[7] = t;
            $[8] = t2;
        } else {
            t2 = $[8];
        }
        return t2;
    }
    return null;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginForm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginField$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/next/dist/views/Login/LoginField/index.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginField$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginField$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
const baseClass = 'login__form';
;
;
;
const LoginForm = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(23);
    const { prefillEmail, prefillPassword, prefillUsername, searchParams } = t0;
    const { config, getEntityConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t1, routes: t2 } = config;
    const { routes: t3, user: userSlug } = t1;
    const { forgot: forgotRoute } = t3;
    const { admin: adminRoute, api: apiRoute } = t2;
    let loginWithUsername;
    let t4;
    if ($[0] !== getEntityConfig || $[1] !== userSlug) {
        const collectionConfig = getEntityConfig({
            collectionSlug: userSlug
        });
        const { auth: authOptions } = collectionConfig;
        loginWithUsername = authOptions.loginWithUsername;
        t4 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getLoginOptions"])(loginWithUsername);
        $[0] = getEntityConfig;
        $[1] = userSlug;
        $[2] = loginWithUsername;
        $[3] = t4;
    } else {
        loginWithUsername = $[2];
        t4 = $[3];
    }
    const { canLoginWithEmail, canLoginWithUsername } = t4;
    let t5;
    if ($[4] !== canLoginWithEmail || $[5] !== canLoginWithUsername) {
        t5 = ()=>{
            if (canLoginWithEmail && canLoginWithUsername) {
                return "emailOrUsername";
            }
            if (canLoginWithUsername) {
                return "username";
            }
            return "email";
        };
        $[4] = canLoginWithEmail;
        $[5] = canLoginWithUsername;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const [loginType] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(t5);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])();
    const t6 = prefillPassword ?? undefined;
    const t7 = prefillPassword ?? undefined;
    let t8;
    if ($[7] !== adminRoute || $[8] !== apiRoute || $[9] !== forgotRoute || $[10] !== loginType || $[11] !== loginWithUsername || $[12] !== prefillEmail || $[13] !== prefillUsername || $[14] !== searchParams?.redirect || $[15] !== setUser || $[16] !== t || $[17] !== t6 || $[18] !== t7 || $[19] !== userSlug) {
        const initialState = {
            password: {
                initialValue: t6,
                valid: true,
                value: t7
            }
        };
        if (loginWithUsername) {
            initialState.username = {
                initialValue: prefillUsername ?? undefined,
                valid: true,
                value: prefillUsername ?? undefined
            };
        } else {
            initialState.email = {
                initialValue: prefillEmail ?? undefined,
                valid: true,
                value: prefillEmail ?? undefined
            };
        }
        let t9;
        if ($[21] !== setUser) {
            t9 = (data)=>{
                setUser(data);
            };
            $[21] = setUser;
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        const handleLogin = t9;
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Form"], {
            action: `${apiRoute}/${userSlug}/login`,
            className: baseClass,
            disableSuccessStatus: true,
            initialState,
            method: "POST",
            onSuccess: handleLogin,
            redirect: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getSafeRedirect"])({
                fallbackTo: adminRoute,
                redirectTo: searchParams?.redirect
            }),
            waitForAutocomplete: true,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: `${baseClass}__inputWrap`,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Login$2f$LoginField$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginField"], {
                            type: loginType
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PasswordField"], {
                            field: {
                                name: "password",
                                label: t("general:password"),
                                required: true
                            },
                            path: "password"
                        })
                    ]
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                    href: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                        adminRoute,
                        path: forgotRoute
                    }),
                    prefetch: false,
                    children: t("authentication:forgotPasswordQuestion")
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FormSubmit"], {
                    size: "large",
                    children: t("authentication:login")
                })
            ]
        });
        $[7] = adminRoute;
        $[8] = apiRoute;
        $[9] = forgotRoute;
        $[10] = loginType;
        $[11] = loginWithUsername;
        $[12] = prefillEmail;
        $[13] = prefillUsername;
        $[14] = searchParams?.redirect;
        $[15] = setUser;
        $[16] = t;
        $[17] = t6;
        $[18] = t7;
        $[19] = userSlug;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Logout/LogoutClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "LogoutClient",
    ()=>LogoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const baseClass = 'logout';
const LogoutClient = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(23);
    const { adminRoute, inactivity, redirect } = props;
    const { logOut, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRouteTransition"])();
    user?.id;
    const isLoggedIn = Boolean(user?.id);
    const navigatingToLoginRef = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    let t0;
    if ($[0] !== adminRoute || $[1] !== inactivity || $[2] !== redirect) {
        t0 = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: `/login${inactivity && redirect && redirect.length > 0 ? `?redirect=${encodeURIComponent(redirect)}` : ""}`
            });
        $[0] = adminRoute;
        $[1] = inactivity;
        $[2] = redirect;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const [loginRoute] = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(t0);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[4] !== logOut || $[5] !== loginRoute || $[6] !== router || $[7] !== startRouteTransition || $[8] !== t) {
        t1 = async ()=>{
            if (!navigatingToLoginRef.current) {
                navigatingToLoginRef.current = true;
                await logOut();
                __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].success(t("authentication:loggedOutSuccessfully"));
                startRouteTransition(()=>router.push(loginRoute));
                return;
            }
        };
        $[4] = logOut;
        $[5] = loginRoute;
        $[6] = router;
        $[7] = startRouteTransition;
        $[8] = t;
        $[9] = t1;
    } else {
        t1 = $[9];
    }
    const handleLogOut = t1;
    let t2;
    let t3;
    if ($[10] !== handleLogOut || $[11] !== inactivity || $[12] !== isLoggedIn || $[13] !== loginRoute || $[14] !== router || $[15] !== startRouteTransition) {
        t2 = ()=>{
            if (isLoggedIn && !inactivity) {
                handleLogOut();
            } else {
                if (!navigatingToLoginRef.current) {
                    navigatingToLoginRef.current = true;
                    startRouteTransition(()=>router.push(loginRoute));
                }
            }
        };
        t3 = [
            handleLogOut,
            isLoggedIn,
            loginRoute,
            router,
            startRouteTransition,
            inactivity
        ];
        $[10] = handleLogOut;
        $[11] = inactivity;
        $[12] = isLoggedIn;
        $[13] = loginRoute;
        $[14] = router;
        $[15] = startRouteTransition;
        $[16] = t2;
        $[17] = t3;
    } else {
        t2 = $[16];
        t3 = $[17];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!isLoggedIn && inactivity) {
        let t4;
        if ($[18] !== loginRoute || $[19] !== t) {
            t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}__wrap`,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                        children: t("authentication:loggedOutInactivity")
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Button"], {
                        buttonStyle: "secondary",
                        el: "link",
                        size: "large",
                        url: loginRoute,
                        children: t("authentication:logBackIn")
                    })
                ]
            });
            $[18] = loginRoute;
            $[19] = t;
            $[20] = t4;
        } else {
            t4 = $[20];
        }
        return t4;
    }
    let t4;
    if ($[21] !== t) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LoadingOverlay"], {
            animationDuration: "0ms",
            loadingText: t("authentication:loggingOut")
        });
        $[21] = t;
        $[22] = t4;
    } else {
        t4 = $[22];
    }
    return t4;
}; //# sourceMappingURL=LogoutClient.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/ResetPassword/ResetPasswordForm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ResetPasswordForm",
    ()=>ResetPasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-53XJ3K67.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/chunk-7V3NHDV6.js [app-ssr] (ecmascript) <export d as useTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
const ResetPasswordForm = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(12);
    const { token } = t0;
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$7V3NHDV6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const { config: t1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$53XJ3K67$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { admin: t2, routes: t3, serverURL } = t1;
    const { routes: t4, user: userSlug } = t2;
    const { login: loginRoute } = t4;
    const { admin: adminRoute, api: apiRoute } = t3;
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { fetchFullUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])();
    let t5;
    if ($[0] !== adminRoute || $[1] !== fetchFullUser || $[2] !== history || $[3] !== loginRoute) {
        t5 = async ()=>{
            const user = await fetchFullUser();
            if (user) {
                history.push(adminRoute);
            } else {
                history.push((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                    adminRoute,
                    path: loginRoute
                }));
            }
        };
        $[0] = adminRoute;
        $[1] = fetchFullUser;
        $[2] = history;
        $[3] = loginRoute;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const onSuccess = t5;
    let t6;
    if ($[5] !== apiRoute || $[6] !== i18n || $[7] !== onSuccess || $[8] !== serverURL || $[9] !== token || $[10] !== userSlug) {
        const initialState = {
            "confirm-password": {
                initialValue: "",
                valid: false,
                value: ""
            },
            password: {
                initialValue: "",
                valid: false,
                value: ""
            },
            token: {
                initialValue: token,
                valid: true,
                value: token
            }
        };
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Form"], {
            action: `${serverURL}${apiRoute}/${userSlug}/reset-password`,
            initialState,
            method: "POST",
            onSuccess,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "inputWrap",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PasswordField"], {
                            field: {
                                name: "password",
                                label: i18n.t("authentication:newPassword"),
                                required: true
                            },
                            path: "password",
                            schemaPath: `${userSlug}.password`
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConfirmPasswordField"], {}),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HiddenField"], {
                            path: "token",
                            schemaPath: `${userSlug}.token`,
                            value: token
                        })
                    ]
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FormSubmit"], {
                    size: "large",
                    children: i18n.t("authentication:resetPassword")
                })
            ]
        });
        $[5] = apiRoute;
        $[6] = i18n;
        $[7] = onSuccess;
        $[8] = serverURL;
        $[9] = token;
        $[10] = userSlug;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/next/dist/views/Verify/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ToastAndRedirect",
    ()=>ToastAndRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
function ToastAndRedirect(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(6);
    const { message, redirectTo } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRouteTransition"])();
    const hasToastedRef = __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    let t1;
    let t2;
    if ($[0] !== message || $[1] !== redirectTo || $[2] !== router || $[3] !== startRouteTransition) {
        t1 = ()=>{
            let timeoutID;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"]) {
                timeoutID = setTimeout(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toast"].success(message);
                    hasToastedRef.current = true;
                    startRouteTransition(()=>router.push(redirectTo));
                }, 100);
            }
            return ()=>{
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
            };
        };
        t2 = [
            router,
            redirectTo,
            message,
            startRouteTransition
        ];
        $[0] = message;
        $[1] = redirectTo;
        $[2] = router;
        $[3] = startRouteTransition;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return null;
} //# sourceMappingURL=index.client.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=0a8f5_9841c722._.js.map
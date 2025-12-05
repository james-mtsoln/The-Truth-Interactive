module.exports = [
"[project]/cms/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "renderField",
    ()=>renderField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
// eslint-disable-next-line payload/no-imports-from-exports-dir -- MUST reference the exports dir: https://github.com/payloadcms/payload/issues/12002#issuecomment-2791493587
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const defaultUIFieldComponentKeys = [
    'Cell',
    'Description',
    'Field',
    'Filter'
];
const renderField = ({ id, clientFieldSchemaMap, collectionSlug, data, fieldConfig, fieldSchemaMap, fieldState, forceCreateClientField, formState, indexPath, lastRenderedPath, mockRSCs, operation, parentPath, parentSchemaPath, path, permissions, preferences, readOnly: readOnlyFromProps, renderAllFields, req, schemaPath, siblingData })=>{
    const requiresRender = renderAllFields || !lastRenderedPath || lastRenderedPath !== path;
    if (!requiresRender && fieldConfig.type !== 'array' && fieldConfig.type !== 'blocks') {
        return;
    }
    const clientField = clientFieldSchemaMap && !forceCreateClientField ? clientFieldSchemaMap.get(schemaPath) : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["createClientField"])({
        defaultIDType: req.payload.config.db.defaultIDType,
        field: fieldConfig,
        i18n: req.i18n,
        importMap: req.payload.importMap
    });
    const clientProps = {
        field: clientField,
        path,
        permissions,
        readOnly: readOnlyFromProps === true ? true : typeof permissions === 'boolean' ? !permissions : !permissions?.[operation],
        schemaPath
    };
    if (fieldState?.customComponents) {
        clientProps.customComponents = fieldState.customComponents;
    }
    // fields with subfields
    if ([
        'array',
        'blocks',
        'collapsible',
        'group',
        'row',
        'tabs'
    ].includes(fieldConfig.type)) {
        clientProps.indexPath = indexPath;
        clientProps.parentPath = parentPath;
        clientProps.parentSchemaPath = parentSchemaPath;
    }
    const serverProps = {
        id,
        clientField,
        clientFieldSchemaMap,
        data,
        field: fieldConfig,
        fieldSchemaMap,
        permissions,
        // TODO: Should we pass explicit values? initialValue, value, valid
        // value and initialValue should be typed
        collectionSlug,
        formState,
        i18n: req.i18n,
        operation,
        payload: req.payload,
        preferences,
        req,
        siblingData,
        user: req.user,
        value: 'name' in fieldConfig && data?.[fieldConfig.name]
    };
    switch(fieldConfig.type){
        case 'array':
            {
                fieldState?.rows?.forEach((row, rowIndex)=>{
                    const rowLastRenderedPath = row.lastRenderedPath;
                    const rowPath = `${path}.${rowIndex}`;
                    const rowRequiresRender = renderAllFields || !rowLastRenderedPath || rowLastRenderedPath !== rowPath;
                    if (!rowRequiresRender) {
                        return;
                    }
                    row.lastRenderedPath = rowPath;
                    if (fieldConfig.admin?.components && 'RowLabel' in fieldConfig.admin.components) {
                        if (!row.customComponents) {
                            row.customComponents = {};
                        }
                        row.customComponents.RowLabel = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component: fieldConfig.admin.components.RowLabel,
                            importMap: req.payload.importMap,
                            key: `${rowIndex}`,
                            serverProps: {
                                ...serverProps,
                                rowLabel: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(fieldConfig.labels.singular, req.i18n)} ${String(rowIndex + 1).padStart(2, '0')}`,
                                rowNumber: rowIndex + 1
                            }
                        }) : 'Mock';
                    }
                });
                break;
            }
        case 'blocks':
            {
                fieldState?.rows?.forEach((row, rowIndex)=>{
                    const rowLastRenderedPath = row.lastRenderedPath;
                    const rowPath = `${path}.${rowIndex}`;
                    const rowRequiresRender = renderAllFields || !rowLastRenderedPath || rowLastRenderedPath !== rowPath;
                    if (!rowRequiresRender) {
                        return;
                    }
                    row.lastRenderedPath = rowPath;
                    const blockTypeToMatch = row.blockType;
                    const blockConfig = req.payload.blocks[blockTypeToMatch] ?? (fieldConfig.blockReferences ?? fieldConfig.blocks).find((block)=>typeof block !== 'string' && block.slug === blockTypeToMatch);
                    if (blockConfig.admin?.components && 'Label' in blockConfig.admin.components) {
                        if (!fieldState.rows[rowIndex]?.customComponents) {
                            fieldState.rows[rowIndex].customComponents = {};
                        }
                        fieldState.rows[rowIndex].customComponents.RowLabel = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component: blockConfig.admin.components.Label,
                            importMap: req.payload.importMap,
                            key: `${rowIndex}`,
                            serverProps: {
                                ...serverProps,
                                blockType: row.blockType,
                                rowLabel: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(blockConfig.labels.singular, req.i18n)} ${String(rowIndex + 1).padStart(2, '0')}`,
                                rowNumber: rowIndex + 1
                            }
                        }) : 'Mock';
                    }
                });
                break;
            }
    }
    if (!requiresRender) {
        return;
    }
    /**
  * Set the `lastRenderedPath` equal to the new path of the field, this will prevent it from being rendered again
  */ fieldState.lastRenderedPath = path;
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsHiddenOrDisabled"])(clientField)) {
        return;
    }
    /**
  * Only create the `customComponents` object if needed.
  * This will prevent unnecessary data from being transferred to the client.
  */ if (fieldConfig.admin) {
        if ((Object.keys(fieldConfig.admin.components || {}).length > 0 || fieldConfig.type === 'richText' || 'description' in fieldConfig.admin && typeof fieldConfig.admin.description === 'function') && !fieldState?.customComponents) {
            fieldState.customComponents = {};
        }
    }
    switch(fieldConfig.type){
        case 'richText':
            {
                if (!fieldConfig?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["MissingEditorProp"](fieldConfig) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof fieldConfig?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                if (!fieldConfig.admin) {
                    fieldConfig.admin = {};
                }
                if (!fieldConfig.admin.components) {
                    fieldConfig.admin.components = {};
                }
                fieldState.customComponents.Field = !mockRSCs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WatchCondition"], {
                    path: path,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: fieldConfig.editor.FieldComponent,
                        importMap: req.payload.importMap,
                        serverProps: {
                            ...serverProps,
                            // Manually inject lexical-specific `sanitizedEditorConfig` server prop, in order to reduce the size of the field schema.
                            // Otherwise, the editorConfig would be included twice - once on the top-level, and once as part of the `FieldComponent` server props.
                            sanitizedEditorConfig: 'editorConfig' in fieldConfig.editor ? fieldConfig.editor.editorConfig : undefined
                        }
                    })
                }) : 'Mock';
                break;
            }
        case 'ui':
            {
                if (fieldConfig?.admin?.components) {
                    // Render any extra, untyped components
                    for(const key in fieldConfig.admin.components){
                        if (key in defaultUIFieldComponentKeys) {
                            continue;
                        }
                        const Component = fieldConfig.admin.components[key];
                        fieldState.customComponents[key] = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component,
                            importMap: req.payload.importMap,
                            key: `field.admin.components.${key}`,
                            serverProps
                        }) : 'Mock';
                    }
                }
                break;
            }
        default:
            {
                break;
            }
    }
    if (fieldConfig.admin) {
        if ('description' in fieldConfig.admin && typeof fieldConfig.admin?.description === 'function') {
            fieldState.customComponents.Description = !mockRSCs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldDescription"], {
                description: fieldConfig.admin?.description({
                    i18n: req.i18n,
                    t: req.i18n.t
                }),
                path: path
            }) : 'Mock';
        }
        if (fieldConfig.admin?.components) {
            if ('afterInput' in fieldConfig.admin.components) {
                fieldState.customComponents.AfterInput = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.afterInput,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.afterInput',
                    serverProps
                }) : 'Mock';
            }
            if ('beforeInput' in fieldConfig.admin.components) {
                fieldState.customComponents.BeforeInput = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.beforeInput,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.beforeInput',
                    serverProps
                }) : 'Mock';
            }
            if ('Description' in fieldConfig.admin.components) {
                fieldState.customComponents.Description = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Description,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Description',
                    serverProps
                }) : 'Mock';
            }
            if ('Error' in fieldConfig.admin.components) {
                fieldState.customComponents.Error = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Error,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Error',
                    serverProps
                }) : 'Mock';
            }
            if ('Label' in fieldConfig.admin.components) {
                fieldState.customComponents.Label = !mockRSCs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Label,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Label',
                    serverProps
                }) : 'Mock';
            }
            if ('Field' in fieldConfig.admin.components) {
                fieldState.customComponents.Field = !mockRSCs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WatchCondition"], {
                    path: path,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: fieldConfig.admin.components.Field,
                        importMap: req.payload.importMap,
                        key: 'field.admin.components.Field',
                        serverProps
                    })
                }) : 'Mock';
            }
        }
    }
}; //# sourceMappingURL=renderField.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "traverseFields",
    ()=>traverseFields
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const traverseFields = ({ clientSchemaMap, config, fields, i18n, parentIndexPath, parentSchemaPath, payload, schemaMap })=>{
    for (const [index, field] of fields.entries()){
        const { indexPath, schemaPath } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getFieldPaths"])({
            field,
            index,
            parentIndexPath: 'name' in field ? '' : parentIndexPath,
            parentPath: '',
            parentSchemaPath
        });
        clientSchemaMap.set(schemaPath, field);
        switch(field.type){
            case 'array':
                {
                    traverseFields({
                        clientSchemaMap,
                        config,
                        fields: field.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: schemaPath,
                        payload,
                        schemaMap
                    });
                    break;
                }
            case 'blocks':
                ;
                (field.blockReferences ?? field.blocks).map((_block)=>{
                    const block = typeof _block === 'string' ? config.blocksMap ? config.blocksMap[_block] : config.blocks.find((block)=>typeof block !== 'string' && block.slug === _block) : _block;
                    const blockSchemaPath = `${schemaPath}.${block.slug}`;
                    clientSchemaMap.set(blockSchemaPath, block);
                    traverseFields({
                        clientSchemaMap,
                        config,
                        fields: block.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: blockSchemaPath,
                        payload,
                        schemaMap
                    });
                });
                break;
            case 'collapsible':
            case 'row':
                traverseFields({
                    clientSchemaMap,
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: indexPath,
                    parentSchemaPath,
                    payload,
                    schemaMap
                });
                break;
            case 'group':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field)) {
                        traverseFields({
                            clientSchemaMap,
                            config,
                            fields: field.fields,
                            i18n,
                            parentIndexPath: '',
                            parentSchemaPath: schemaPath,
                            payload,
                            schemaMap
                        });
                    } else {
                        traverseFields({
                            clientSchemaMap,
                            config,
                            fields: field.fields,
                            i18n,
                            parentIndexPath: indexPath,
                            parentSchemaPath,
                            payload,
                            schemaMap
                        });
                    }
                    break;
                }
            case 'richText':
                {
                    // richText sub-fields are not part of the ClientConfig or the Config.
                    // They only exist in the field schema map.
                    // Thus, we need to
                    // 1. get them from the field schema map
                    // 2. convert them to client fields
                    // 3. add them to the client schema map
                    // So these would basically be all fields that are not part of the client config already
                    const richTextFieldSchemaMap = new Map();
                    for (const [path, subField] of schemaMap.entries()){
                        if (path.startsWith(`${schemaPath}.`)) {
                            richTextFieldSchemaMap.set(path, subField);
                        }
                    }
                    // Now loop through them, convert each entry to a client field and add it to the client schema map
                    for (const [path, subField] of richTextFieldSchemaMap.entries()){
                        // check if fields is the only key in the subField object
                        const isFieldsOnly = Object.keys(subField).length === 1 && 'fields' in subField;
                        const clientFields = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["createClientFields"])({
                            defaultIDType: payload.config.db.defaultIDType,
                            disableAddingID: true,
                            fields: isFieldsOnly ? subField.fields : [
                                subField
                            ],
                            i18n,
                            importMap: payload.importMap
                        });
                        clientSchemaMap.set(path, isFieldsOnly ? {
                            fields: clientFields
                        } : clientFields[0]);
                    }
                    break;
                }
            case 'tabs':
                field.tabs.map((tab, tabIndex)=>{
                    const isNamedTab = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["tabHasName"])(tab);
                    const { indexPath: tabIndexPath, schemaPath: tabSchemaPath } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getFieldPaths"])({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        index: tabIndex,
                        parentIndexPath: indexPath,
                        parentPath: '',
                        parentSchemaPath
                    });
                    clientSchemaMap.set(tabSchemaPath, tab);
                    traverseFields({
                        clientSchemaMap,
                        config,
                        fields: tab.fields,
                        i18n,
                        parentIndexPath: isNamedTab ? '' : tabIndexPath,
                        parentSchemaPath: isNamedTab ? tabSchemaPath : parentSchemaPath,
                        payload,
                        schemaMap
                    });
                });
                break;
        }
    }
}; //# sourceMappingURL=traverseFields.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildClientFieldSchemaMap",
    ()=>buildClientFieldSchemaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const baseAuthFields = [
    {
        name: 'password',
        type: 'text',
        required: true
    },
    {
        name: 'confirm-password',
        type: 'text',
        required: true
    }
];
const buildClientFieldSchemaMap = (args)=>{
    const { collectionSlug, config, globalSlug, i18n, payload, schemaMap } = args;
    const clientSchemaMap = new Map();
    if (collectionSlug) {
        const matchedCollection = config.collections.find((collection)=>collection.slug === collectionSlug);
        if (matchedCollection) {
            let fieldsToSet = matchedCollection?.fields || [];
            if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
                ;
                baseAuthFields[0].label = i18n.t('general:password');
                baseAuthFields[1].label = i18n.t('authentication:confirmPassword');
                // Place these fields _last_ to ensure they do not disrupt field paths in the field schema map
                fieldsToSet = fieldsToSet.concat(baseAuthFields);
            }
            clientSchemaMap.set(collectionSlug, {
                fields: fieldsToSet
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                clientSchemaMap,
                config,
                fields: fieldsToSet,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: collectionSlug,
                payload,
                schemaMap
            });
        }
    } else if (globalSlug) {
        const matchedGlobal = config.globals.find((global)=>global.slug === globalSlug);
        if (matchedGlobal) {
            clientSchemaMap.set(globalSlug, {
                fields: matchedGlobal.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                clientSchemaMap,
                config,
                fields: matchedGlobal.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: globalSlug,
                payload,
                schemaMap
            });
        }
    }
    return {
        clientFieldSchemaMap: clientSchemaMap
    };
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getClientSchemaMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getClientSchemaMap",
    ()=>getClientSchemaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let cachedClientSchemaMap = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientSchemaMap;
if (!cachedClientSchemaMap) {
    cachedClientSchemaMap = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientSchemaMap = null;
}
const getClientSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((args)=>{
    const { collectionSlug, config, globalSlug, i18n, payload, schemaMap } = args;
    if (!cachedClientSchemaMap || /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientSchemaMap) {
        cachedClientSchemaMap = new Map();
    }
    let cachedEntityClientFieldMap = cachedClientSchemaMap.get(collectionSlug || globalSlug);
    if (cachedEntityClientFieldMap) {
        return cachedEntityClientFieldMap;
    }
    cachedEntityClientFieldMap = new Map();
    const { clientFieldSchemaMap: entityClientFieldMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildClientFieldSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n: i18n,
        payload,
        schemaMap
    });
    cachedClientSchemaMap.set(collectionSlug || globalSlug, entityClientFieldMap);
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_clientSchemaMap = cachedClientSchemaMap;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheClientSchemaMap = false;
    return entityClientFieldMap;
}); //# sourceMappingURL=getClientSchemaMap.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildFieldSchemaMap",
    ()=>buildFieldSchemaMap
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const baseAuthFields = [
    {
        name: 'password',
        type: 'text',
        required: true,
        validate: __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["password"]
    },
    {
        name: 'confirm-password',
        type: 'text',
        required: true,
        validate: __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["confirmPassword"]
    }
];
const buildFieldSchemaMap = (args)=>{
    const { collectionSlug, config, globalSlug, i18n } = args;
    const schemaMap = new Map();
    if (collectionSlug) {
        const matchedCollection = config.collections.find((collection)=>collection.slug === collectionSlug);
        if (matchedCollection) {
            let fieldsToSet = matchedCollection?.fields || [];
            if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
                ;
                baseAuthFields[0].label = i18n.t('general:password');
                baseAuthFields[1].label = i18n.t('authentication:confirmPassword');
                // Place these fields _last_ to ensure they do not disrupt field paths in the field schema map
                fieldsToSet = fieldsToSet.concat(baseAuthFields);
            }
            schemaMap.set(collectionSlug, {
                fields: fieldsToSet
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                config,
                fields: fieldsToSet,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: collectionSlug,
                schemaMap
            });
        }
    } else if (globalSlug) {
        const matchedGlobal = config.globals.find((global)=>global.slug === globalSlug);
        if (matchedGlobal) {
            schemaMap.set(globalSlug, {
                fields: matchedGlobal.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                config,
                fields: matchedGlobal.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: globalSlug,
                schemaMap
            });
        }
    }
    return {
        fieldSchemaMap: schemaMap
    };
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getSchemaMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getSchemaMap",
    ()=>getSchemaMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let cachedSchemaMap = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_schemaMap;
if (!cachedSchemaMap) {
    cachedSchemaMap = /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_schemaMap = null;
}
const getSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((args)=>{
    const { collectionSlug, config, globalSlug, i18n } = args;
    if (!cachedSchemaMap || /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheSchemaMap) {
        cachedSchemaMap = new Map();
    }
    let cachedEntityFieldMap = cachedSchemaMap.get(collectionSlug || globalSlug);
    if (cachedEntityFieldMap) {
        return cachedEntityFieldMap;
    }
    cachedEntityFieldMap = new Map();
    const { fieldSchemaMap: entityFieldMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFieldSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n: i18n
    });
    cachedSchemaMap.set(collectionSlug || globalSlug, entityFieldMap);
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_schemaMap = cachedSchemaMap;
    /*TURBOPACK member replacement*/ __turbopack_context__.g._payload_doNotCacheSchemaMap = false;
    return entityFieldMap;
}); //# sourceMappingURL=getSchemaMap.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handleFormStateLocking.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleFormStateLocking",
    ()=>handleFormStateLocking
]);
const lockDurationDefault = 300 // Default 5 minutes in seconds
;
const handleFormStateLocking = async ({ id, collectionSlug, globalSlug, req, updateLastEdited })=>{
    let result;
    if (id || globalSlug) {
        let lockedDocumentQuery;
        if (collectionSlug) {
            lockedDocumentQuery = {
                and: [
                    {
                        'document.relationTo': {
                            equals: collectionSlug
                        }
                    },
                    {
                        'document.value': {
                            equals: id
                        }
                    }
                ]
            };
        } else if (globalSlug) {
            lockedDocumentQuery = {
                and: [
                    {
                        globalSlug: {
                            equals: globalSlug
                        }
                    }
                ]
            };
        }
        const lockDocumentsProp = collectionSlug ? req.payload.collections?.[collectionSlug]?.config.lockDocuments : req.payload.config.globals.find((g)=>g.slug === globalSlug)?.lockDocuments;
        const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
        const lockDurationInMilliseconds = lockDuration * 1000;
        const now = new Date().getTime();
        if (lockedDocumentQuery) {
            // Query where the lock is newer than the current time minus the lock duration
            lockedDocumentQuery.and.push({
                updatedAt: {
                    greater_than: new Date(now - lockDurationInMilliseconds).toISOString()
                }
            });
            const lockedDocument = await req.payload.find({
                collection: 'payload-locked-documents',
                depth: 1,
                limit: 1,
                overrideAccess: false,
                pagination: false,
                user: req.user,
                where: lockedDocumentQuery
            });
            if (lockedDocument.docs && lockedDocument.docs.length > 0) {
                result = {
                    isLocked: true,
                    lastEditedAt: lockedDocument.docs[0]?.updatedAt,
                    user: lockedDocument.docs[0]?.user?.value
                };
                const lockOwnerID = typeof lockedDocument.docs[0]?.user?.value === 'object' ? lockedDocument.docs[0]?.user?.value?.id : lockedDocument.docs[0]?.user?.value;
                // Should only update doc if the incoming / current user is also the owner of the locked doc
                if (updateLastEdited && req.user && lockOwnerID === req.user.id) {
                    await req.payload.db.updateOne({
                        id: lockedDocument.docs[0].id,
                        collection: 'payload-locked-documents',
                        data: {},
                        returning: false
                    });
                }
            } else {
                // If NO ACTIVE lock document exists, first delete any expired locks and then create a fresh lock
                // Where updatedAt is older than the duration that is specified in the config
                let deleteExpiredLocksQuery;
                if (collectionSlug) {
                    deleteExpiredLocksQuery = {
                        and: [
                            {
                                'document.relationTo': {
                                    equals: collectionSlug
                                }
                            },
                            {
                                updatedAt: {
                                    less_than: new Date(now - lockDurationInMilliseconds).toISOString()
                                }
                            }
                        ]
                    };
                } else if (globalSlug) {
                    deleteExpiredLocksQuery = {
                        and: [
                            {
                                globalSlug: {
                                    equals: globalSlug
                                }
                            },
                            {
                                updatedAt: {
                                    less_than: new Date(now - lockDurationInMilliseconds).toISOString()
                                }
                            }
                        ]
                    };
                }
                await req.payload.db.deleteMany({
                    collection: 'payload-locked-documents',
                    where: deleteExpiredLocksQuery
                });
                await req.payload.db.create({
                    collection: 'payload-locked-documents',
                    data: {
                        document: collectionSlug ? {
                            relationTo: collectionSlug,
                            value: id
                        } : undefined,
                        globalSlug: globalSlug ? globalSlug : undefined,
                        user: {
                            relationTo: req.user.collection,
                            value: req.user.id
                        }
                    },
                    returning: false
                });
                result = {
                    isLocked: true,
                    lastEditedAt: new Date().toISOString(),
                    user: req.user
                };
            }
        }
    }
    return result;
}; //# sourceMappingURL=handleFormStateLocking.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handleLivePreview.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLivePreviewConfig",
    ()=>getLivePreviewConfig,
    "handleLivePreview",
    ()=>handleLivePreview,
    "isLivePreviewEnabled",
    ()=>isLivePreviewEnabled
]);
const getLivePreviewConfig = ({ collectionConfig, config, globalConfig, isLivePreviewEnabled })=>({
        ...isLivePreviewEnabled ? config.admin.livePreview : {},
        ...collectionConfig?.admin?.livePreview || {},
        ...globalConfig?.admin?.livePreview || {}
    });
const isLivePreviewEnabled = ({ collectionConfig, config, globalConfig })=>{
    if (globalConfig) {
        return Boolean(config.admin?.livePreview?.globals?.includes(globalConfig.slug) || globalConfig.admin?.livePreview);
    }
    if (collectionConfig) {
        return Boolean(config.admin?.livePreview?.collections?.includes(collectionConfig.slug) || collectionConfig.admin?.livePreview);
    }
};
const handleLivePreview = async ({ collectionSlug, config, data, globalSlug, operation, req })=>{
    const collectionConfig = collectionSlug ? req.payload.collections[collectionSlug]?.config : undefined;
    const globalConfig = globalSlug ? config.globals.find((g)=>g.slug === globalSlug) : undefined;
    const enabled = isLivePreviewEnabled({
        collectionConfig,
        config,
        globalConfig
    });
    if (!enabled) {
        return {};
    }
    const livePreviewConfig = getLivePreviewConfig({
        collectionConfig,
        config,
        globalConfig,
        isLivePreviewEnabled: enabled
    });
    let livePreviewURL;
    if (typeof livePreviewConfig?.url === 'string') {
        livePreviewURL = livePreviewConfig.url;
    }
    if (typeof livePreviewConfig?.url === 'function' && operation !== 'create') {
        try {
            const result = await livePreviewConfig.url({
                collectionConfig,
                data,
                globalConfig,
                locale: {
                    code: req.locale,
                    label: ''
                },
                payload: req.payload,
                req
            });
            if (typeof result === 'string') {
                livePreviewURL = result;
            }
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: `There was an error executing the live preview URL function for ${collectionSlug || globalSlug}`
            });
        }
    }
    return {
        isLivePreviewEnabled: enabled,
        livePreviewConfig,
        livePreviewURL
    };
}; //# sourceMappingURL=handleLivePreview.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handlePreview.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "handlePreview",
    ()=>handlePreview,
    "isPreviewEnabled",
    ()=>isPreviewEnabled
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const isPreviewEnabled = ({ collectionConfig, globalConfig })=>{
    if (globalConfig) {
        return Boolean(globalConfig.admin?.preview);
    }
    if (collectionConfig) {
        return Boolean(collectionConfig.admin?.preview);
    }
};
const handlePreview = async ({ collectionSlug, config, data, globalSlug, operation, req })=>{
    const collectionConfig = collectionSlug ? req.payload.collections[collectionSlug]?.config : undefined;
    const globalConfig = globalSlug ? config.globals.find((g)=>g.slug === globalSlug) : undefined;
    const enabled = isPreviewEnabled({
        collectionConfig,
        globalConfig
    });
    if (!enabled) {
        return {};
    }
    const generatePreviewURL = collectionConfig?.admin?.preview || globalConfig?.admin?.preview;
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["extractJWT"])(req);
    let previewURL;
    if (typeof generatePreviewURL === 'function' && operation !== 'create') {
        try {
            const result = await generatePreviewURL(data, {
                locale: req.locale,
                req,
                token
            });
            if (typeof result === 'string') {
                previewURL = result;
            }
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: `There was an error executing the live preview URL function for ${collectionSlug || globalSlug}`
            });
        }
    }
    return {
        isPreviewEnabled: enabled,
        previewURL
    };
}; //# sourceMappingURL=handlePreview.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildFormState",
    ()=>buildFormState,
    "buildFormStateHandler",
    ()=>buildFormStateHandler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getClientSchemaMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getSchemaMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleFormStateLocking$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handleFormStateLocking.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleLivePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handleLivePreview.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handlePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/handlePreview.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handlePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handlePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const buildFormStateHandler = async (args)=>{
    const { req } = args;
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["canAccessAdmin"])({
            req
        });
        const res = await buildFormState(args);
        return res;
    } catch (err) {
        req.payload.logger.error({
            err,
            msg: `There was an error building form state`
        });
        if (err.message === 'Could not find field schema for given path') {
            return {
                message: err.message
            };
        }
        if (err.message === 'Unauthorized') {
            throw new Error('Unauthorized');
        }
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["formatErrors"])(err);
    }
};
const buildFormState = async (args)=>{
    const { id: idFromArgs, collectionSlug, data: incomingData, docPermissions, docPreferences, documentFormState, formState, globalSlug, initialBlockData, initialBlockFormState, mockRSCs, operation, readOnly, renderAllFields, req, req: { i18n, payload, payload: { config } }, returnLivePreviewURL, returnLockStatus, returnPreviewURL, schemaPath = collectionSlug || globalSlug, select, skipClientConfigAuth, skipValidation, updateLastEdited } = args;
    const selectMode = select ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["getSelectMode"])(select) : undefined;
    if (!collectionSlug && !globalSlug) {
        throw new Error('Either collectionSlug or globalSlug must be provided');
    }
    const schemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n
    });
    const clientSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientSchemaMap"])({
        collectionSlug,
        config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
            config,
            i18n,
            importMap: req.payload.importMap,
            user: skipClientConfigAuth ? true : req.user
        }),
        globalSlug,
        i18n,
        payload,
        schemaMap
    });
    const id = collectionSlug ? idFromArgs : undefined;
    const fieldOrEntityConfig = schemaMap.get(schemaPath);
    if (!fieldOrEntityConfig) {
        throw new Error(`Could not find "${schemaPath}" in the fieldSchemaMap`);
    }
    if ((!('fields' in fieldOrEntityConfig) || !fieldOrEntityConfig.fields || !fieldOrEntityConfig.fields.length) && 'type' in fieldOrEntityConfig && fieldOrEntityConfig.type !== 'blocks') {
        throw new Error(`The field found in fieldSchemaMap for "${schemaPath}" does not contain any subfields.`);
    }
    // If there is form state but no data, deduce data from that form state, e.g. on initial load
    // Otherwise, use the incoming data as the source of truth, e.g. on subsequent saves
    const data = incomingData || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["reduceFieldsToValues"])(formState, true);
    let documentData = undefined;
    if (documentFormState) {
        documentData = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["reduceFieldsToValues"])(documentFormState, true);
    }
    let blockData = initialBlockData;
    if (initialBlockFormState) {
        blockData = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["reduceFieldsToValues"])(initialBlockFormState, true);
    }
    /**
  * When building state for sub schemas we need to adjust:
  * - `fields`
  * - `parentSchemaPath`
  * - `parentPath`
  *
  * Type assertion is fine because we wrap sub schemas in an array
  * so we can safely map over them within `fieldSchemasToFormState`
  */ const fields = Array.isArray(fieldOrEntityConfig) ? fieldOrEntityConfig : 'fields' in fieldOrEntityConfig ? fieldOrEntityConfig.fields : [
        fieldOrEntityConfig
    ];
    // Ensure data.id is present during form state requests, where the data
    // is passed from the client as an argument, without the ID
    if (!data.id && id) {
        data.id = id;
    }
    const formStateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldSchemasToFormState"])({
        id,
        clientFieldSchemaMap: clientSchemaMap,
        collectionSlug,
        data,
        documentData,
        fields,
        fieldSchemaMap: schemaMap,
        initialBlockData: blockData,
        mockRSCs,
        operation,
        permissions: docPermissions?.fields || {},
        preferences: docPreferences || {
            fields: {}
        },
        previousFormState: formState,
        readOnly,
        renderAllFields,
        renderFieldFn: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderField"],
        req,
        schemaPath,
        select,
        selectMode,
        skipValidation
    });
    // Maintain form state of auth / upload fields
    if (collectionSlug && formState) {
        if (payload.collections[collectionSlug]?.config?.upload && formState.file) {
            formStateResult.file = formState.file;
        }
    }
    let lockedStateResult;
    if (returnLockStatus) {
        lockedStateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleFormStateLocking$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleFormStateLocking"])({
            id,
            collectionSlug,
            globalSlug,
            req,
            updateLastEdited
        });
    }
    const res = {
        lockedState: lockedStateResult,
        state: formStateResult
    };
    if (returnLivePreviewURL) {
        const { livePreviewURL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleLivePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleLivePreview"])({
            collectionSlug,
            config,
            data,
            globalSlug,
            req
        });
        // Important: only set this when not undefined,
        // Otherwise it will travel through the network as `$undefined`
        if (livePreviewURL) {
            res.livePreviewURL = livePreviewURL;
        }
    }
    if (returnPreviewURL) {
        const { previewURL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handlePreview$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handlePreview"])({
            collectionSlug,
            config,
            data,
            globalSlug,
            req
        });
        // Important: only set this when not undefined,
        // Otherwise it will travel through the network as `$undefined`
        if (previewURL) {
            res.previewURL = previewURL;
        }
    }
    return res;
}; //# sourceMappingURL=buildFormState.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getFolderResultsComponentAndData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getFolderResultsComponentAndData",
    ()=>getFolderResultsComponentAndData,
    "getFolderResultsComponentAndDataHandler",
    ()=>getFolderResultsComponentAndDataHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const getFolderResultsComponentAndDataHandler = async (args)=>{
    const { req } = args;
    try {
        const res = await getFolderResultsComponentAndData(args);
        return res;
    } catch (err) {
        req.payload.logger.error({
            err,
            msg: `There was an error getting the folder results component and data`
        });
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["formatErrors"])(err);
    }
};
const getFolderResultsComponentAndData = async ({ browseByFolder = false, collectionsToDisplay: activeCollectionSlugs, displayAs, folderAssignedCollections, folderID = undefined, req, sort })=>{
    const { payload } = req;
    if (!payload.config.folders) {
        throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["APIError"]('Folders are not enabled in the configuration.');
    }
    const emptyQuery = {
        id: {
            exists: false
        }
    };
    let collectionSlug = undefined;
    let documentWhere = Array.isArray(activeCollectionSlugs) && !activeCollectionSlugs.length ? emptyQuery : undefined;
    let folderWhere = Array.isArray(activeCollectionSlugs) && !activeCollectionSlugs.length ? emptyQuery : undefined;
    // todo(perf): - collect promises and resolve them in parallel
    for (const activeCollectionSlug of activeCollectionSlugs){
        if (activeCollectionSlug === payload.config.folders.slug) {
            const folderCollectionConstraints = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["buildFolderWhereConstraints"])({
                collectionConfig: payload.collections[activeCollectionSlug].config,
                folderID,
                localeCode: req?.locale,
                req,
                search: typeof req?.query?.search === 'string' ? req.query.search : undefined,
                sort
            });
            if (folderCollectionConstraints) {
                folderWhere = folderCollectionConstraints;
            }
            folderWhere = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["combineWhereConstraints"])([
                folderWhere,
                Array.isArray(folderAssignedCollections) && folderAssignedCollections.length && payload.config.folders.collectionSpecific ? {
                    or: [
                        {
                            folderType: {
                                in: folderAssignedCollections
                            }
                        },
                        // if the folderType is not set, it means it accepts all collections and should appear in the results
                        {
                            folderType: {
                                exists: false
                            }
                        }
                    ]
                } : undefined
            ]);
        } else if (browseByFolder && folderID || !browseByFolder) {
            if (!browseByFolder) {
                collectionSlug = activeCollectionSlug;
            }
            if (!documentWhere) {
                documentWhere = {
                    or: []
                };
            }
            const collectionConstraints = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["buildFolderWhereConstraints"])({
                collectionConfig: payload.collections[activeCollectionSlug].config,
                folderID,
                localeCode: req?.locale,
                req,
                search: typeof req?.query?.search === 'string' ? req.query.search : undefined,
                sort
            });
            if (collectionConstraints) {
                documentWhere.or.push(collectionConstraints);
            }
        }
    }
    const folderData = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["getFolderData"])({
        collectionSlug,
        documentWhere,
        folderID,
        folderWhere,
        req,
        sort
    });
    let FolderResultsComponent = null;
    if (displayAs === 'grid') {
        FolderResultsComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            children: [
                folderData.subfolders.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItemCardGrid"], {
                        items: folderData.subfolders,
                        title: 'Folders',
                        type: "folder"
                    })
                }) : null,
                folderData.documents.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItemCardGrid"], {
                        items: folderData.documents,
                        subfolderCount: folderData.subfolders.length,
                        title: 'Documents',
                        type: "file"
                    })
                }) : null
            ]
        });
    } else {
        FolderResultsComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FolderFileTable"], {
            showRelationCell: browseByFolder
        });
    }
    return {
        breadcrumbs: folderData.breadcrumbs,
        documents: folderData.documents,
        folderAssignedCollections: folderData.folderAssignedCollections,
        FolderResultsComponent,
        subfolders: folderData.subfolders
    };
}; //# sourceMappingURL=getFolderResultsComponentAndData.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/filterFieldsWithPermissions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "filterFieldsWithPermissions",
    ()=>filterFieldsWithPermissions
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const shouldSkipField = (field)=>field.type !== 'ui' && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsHiddenOrDisabled"])(field) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsID"])(field) || field?.admin?.disableListColumn === true;
const filterFieldsWithPermissions = ({ fieldPermissions, fields })=>{
    return (fields ?? []).reduce((acc, field)=>{
        if (shouldSkipField(field)) {
            return acc;
        }
        // handle tabs
        if (field.type === 'tabs' && 'tabs' in field) {
            const formattedField = {
                ...field,
                tabs: field.tabs.map((tab)=>({
                        ...tab,
                        fields: filterFieldsWithPermissions({
                            fieldPermissions: typeof fieldPermissions === 'boolean' ? fieldPermissions : 'name' in tab && tab.name ? fieldPermissions[tab.name]?.fields || fieldPermissions[tab.name] : fieldPermissions,
                            fields: tab.fields
                        })
                    }))
            };
            acc.push(formattedField);
            return acc;
        }
        // handle fields with subfields (row, group, collapsible, etc.)
        if ('fields' in field && Array.isArray(field.fields)) {
            const formattedField = {
                ...field,
                fields: filterFieldsWithPermissions({
                    fieldPermissions: typeof fieldPermissions === 'boolean' ? fieldPermissions : 'name' in field && field.name ? fieldPermissions?.[field.name]?.fields || fieldPermissions?.[field.name] : fieldPermissions,
                    fields: field.fields
                })
            };
            acc.push(formattedField);
            return acc;
        }
        if (fieldPermissions === true) {
            acc.push(field);
            return acc;
        }
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field)) {
            const fieldPermission = fieldPermissions?.[field.name];
            // Always allow ID fields, or if explicitly granted (true or { read: true })
            // undefined means field is not in permissions object = denied
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsID"])(field) || fieldPermission === true || fieldPermission?.read === true) {
                acc.push(field);
            }
            return acc;
        }
        // leaf
        acc.push(field);
        return acc;
    }, []);
}; //# sourceMappingURL=filterFieldsWithPermissions.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/getInitialColumns.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getInitialColumns",
    ()=>getInitialColumns
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const getRemainingColumns = (fields, useAsTitle)=>fields?.reduce((remaining, field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field) && field.name === useAsTitle) {
            return remaining;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field) && 'fields' in field) {
            return [
                ...remaining,
                ...getRemainingColumns(field.fields, useAsTitle)
            ];
        }
        if (field.type === 'tabs' && 'tabs' in field) {
            return [
                ...remaining,
                ...field.tabs.reduce((tabFieldColumns, tab)=>[
                        ...tabFieldColumns,
                        ...'name' in tab ? [
                            tab.name
                        ] : getRemainingColumns(tab.fields, useAsTitle)
                    ], [])
            ];
        }
        return [
            ...remaining,
            field.name
        ];
    }, []);
const getInitialColumns = (fields, useAsTitle, defaultColumns)=>{
    let initialColumns = [];
    if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) {
        initialColumns = defaultColumns;
    } else {
        if (useAsTitle) {
            initialColumns.push(useAsTitle);
        }
        const remainingColumns = getRemainingColumns(fields, useAsTitle);
        initialColumns = initialColumns.concat(remainingColumns);
        initialColumns = initialColumns.slice(0, 4);
    }
    return initialColumns.map((column)=>({
            accessor: column,
            active: true
        }));
}; //# sourceMappingURL=getInitialColumns.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/getColumns.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getColumns",
    ()=>getColumns
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/filterFieldsWithPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/getInitialColumns.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const getColumns = ({ clientConfig, collectionConfig, collectionSlug, columns, i18n, permissions })=>{
    const isPolymorphic = Array.isArray(collectionSlug);
    const fields = !isPolymorphic ? collectionConfig?.fields ?? [] : [];
    if (isPolymorphic) {
        for (const collection of collectionSlug){
            const clientCollectionConfig = clientConfig.collections.find((each)=>each.slug === collection);
            for (const field of (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
                fieldPermissions: permissions?.collections?.[collection]?.fields || true,
                fields: clientCollectionConfig.fields
            })){
                if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field)) {
                    if (fields.some((each)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(each) && each.name === field.name)) {
                        continue;
                    }
                }
                fields.push(field);
            }
        }
    }
    return columns ? columns?.filter((column)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["flattenTopLevelFields"])(fields, {
            i18n,
            keepPresentationalFields: true,
            moveSubFieldsToTop: true
        })?.some((field)=>{
            const accessor = 'accessor' in field ? field.accessor : 'name' in field ? field.name : undefined;
            return accessor === column.accessor;
        })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialColumns"])(isPolymorphic ? fields : (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
        fieldPermissions: typeof collectionSlug === 'string' && permissions?.collections?.[collectionSlug]?.fields ? permissions.collections[collectionSlug].fields : true,
        fields
    }), collectionConfig?.admin?.useAsTitle, isPolymorphic ? [] : collectionConfig?.admin?.defaultColumns);
}; //# sourceMappingURL=getColumns.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/isColumnActive.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isColumnActive",
    ()=>isColumnActive
]);
function isColumnActive({ accessor, activeColumnsIndices, column, columns }) {
    if (column) {
        return column.active;
    } else if (columns && Array.isArray(columns) && columns.length > 0) {
        return Boolean(columns.find((col)=>col.accessor === accessor)?.active);
    } else if (activeColumnsIndices.length < 4) {
        return true;
    }
    return false;
} //# sourceMappingURL=isColumnActive.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderCustomComponent/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Renders a CustomComponent or a Fallback component.
 * Only fallback if the Custom Component is undefined.
 *
 * If the CustomComponent is null, render null.
 *
 * @param {Object} args - Arguments object.
 * @param {React.ReactNode} [args.CustomComponent] - Optional custom component to render.
 * @param {React.ReactNode} args.Fallback - Fallback component to render if CustomComponent is undefined.
 * @returns {React.ReactNode} Rendered component.
 */ __turbopack_context__.s([
    "RenderCustomComponent",
    ()=>RenderCustomComponent
]);
function RenderCustomComponent({ CustomComponent, Fallback }) {
    return CustomComponent !== undefined ? CustomComponent : Fallback;
} //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/isValidReactElement.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidReactElement",
    ()=>isValidReactElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const LazyReactComponentSymbol = Symbol.for('react.lazy');
function isValidReactElement(object) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isValidElement(object) || object?.['$$typeof'] === LazyReactComponentSymbol;
} //# sourceMappingURL=isValidReactElement.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/hasOptionLabelJSXElement.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasOptionLabelJSXElement",
    ()=>hasOptionLabelJSXElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$isValidReactElement$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/isValidReactElement.js [app-rsc] (ecmascript)");
;
const hasOptionLabelJSXElement = (cellClientProps)=>{
    const { cellData, field } = cellClientProps;
    if ((field?.type === 'select' || field?.type == 'radio') && Array.isArray(field?.options)) {
        const matchingOption = field.options.find((option)=>typeof option === 'object' && option.value === cellData);
        if (matchingOption && typeof matchingOption === 'object' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$isValidReactElement$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidReactElement"])(matchingOption.label)) {
            return true;
        }
    }
    return false;
}; //# sourceMappingURL=hasOptionLabelJSXElement.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/findValueFromPath.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safely resolves a deeply nested value from a document using dot-notation accessor paths.
 *
 * Used in list views to retrieve field values, especially for fields hoisted from nested structures
 * like groups, where the accessor may be in the form of `group.someField`.
 *
 * @param doc - The document object to retrieve the value from.
 * @param path - A dot-separated accessor string (e.g., "group.someField").
 * @returns The resolved value at the specified path, or undefined if any segment is missing.
 */ __turbopack_context__.s([
    "findValueFromPath",
    ()=>findValueFromPath
]);
const findValueFromPath = (doc, path)=>{
    return path.split('.').reduce((acc, key)=>acc?.[key], doc);
}; //# sourceMappingURL=findValueFromPath.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/renderCell.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "renderCell",
    ()=>renderCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload [external] (payload, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderCustomComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderCustomComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$hasOptionLabelJSXElement$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/utilities/hasOptionLabelJSXElement.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$findValueFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/findValueFromPath.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function renderCell({ clientField, collectionSlug, columnIndex, customCellProps, doc, enableRowSelections, i18n, isLinkedColumn, payload, req, rowIndex, serverField, viewType }) {
    const baseCellClientProps = {
        cellData: undefined,
        collectionSlug,
        customCellProps,
        field: clientField,
        rowData: undefined,
        viewType
    };
    const accessor = ('accessor' in clientField ? clientField.accessor : undefined) ?? ('name' in clientField ? clientField.name : undefined);
    // Check if there's a custom formatDocURL function for this linked column
    let shouldLink = isLinkedColumn;
    let customLinkURL;
    if (isLinkedColumn && req) {
        const collectionConfig = payload.collections[collectionSlug]?.config;
        const formatDocURL = collectionConfig?.admin?.formatDocURL;
        if (typeof formatDocURL === 'function') {
            // Generate the default URL that would normally be used
            const adminRoute = req.payload.config.routes?.admin || '/admin';
            const defaultURL = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["formatAdminURL"])({
                adminRoute,
                path: `/collections/${collectionSlug}${viewType === 'trash' ? '/trash' : ''}/${encodeURIComponent(String(doc.id))}`
            });
            const customURL = formatDocURL({
                collectionSlug,
                defaultURL,
                doc,
                req,
                viewType
            });
            if (customURL === null) {
                // formatDocURL returned null = disable linking entirely
                shouldLink = false;
            } else if (typeof customURL === 'string') {
                // formatDocURL returned a string = use custom URL
                shouldLink = true;
                customLinkURL = customURL;
            } else {
                // formatDocURL returned unexpected type = disable linking for safety
                shouldLink = false;
            }
        }
    }
    // For _status field, use _displayStatus if available (for showing "changed" status in list view)
    const cellData = 'name' in clientField && accessor === '_status' && '_displayStatus' in doc ? doc._displayStatus : 'name' in clientField ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$findValueFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findValueFromPath"])(doc, accessor) : undefined;
    // For _status field, add 'changed' option for display purposes
    // The 'changed' status is computed at runtime
    let enrichedClientField = clientField;
    if ('name' in clientField && accessor === '_status' && clientField.type === 'select') {
        const hasChangedOption = clientField.options?.some((opt)=>(typeof opt === 'object' ? opt.value : opt) === 'changed');
        if (!hasChangedOption) {
            enrichedClientField = {
                ...clientField,
                options: [
                    ...clientField.options || [],
                    {
                        label: i18n.t('version:draftHasPublishedVersion'),
                        value: 'changed'
                    }
                ]
            };
        }
    }
    const cellClientProps = {
        ...baseCellClientProps,
        cellData,
        field: enrichedClientField,
        link: shouldLink,
        linkURL: customLinkURL,
        rowData: doc
    };
    const cellServerProps = {
        cellData: cellClientProps.cellData,
        className: baseCellClientProps.className,
        collectionConfig: payload.collections[collectionSlug].config,
        collectionSlug,
        columnIndex,
        customCellProps: baseCellClientProps.customCellProps,
        field: serverField,
        i18n,
        link: shouldLink,
        linkURL: customLinkURL,
        onClick: baseCellClientProps.onClick,
        payload,
        rowData: doc
    };
    let CustomCell = null;
    if (serverField?.type === 'richText') {
        if (!serverField?.editor) {
            throw new __TURBOPACK__imported__module__$5b$externals$5d2f$payload__$5b$external$5d$__$28$payload$2c$__esm_import$29$__["MissingEditorProp"](serverField) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
            ;
        }
        if (typeof serverField?.editor === 'function') {
            throw new Error('Attempted to access unsanitized rich text editor.');
        }
        if (!serverField.admin) {
            serverField.admin = {};
        }
        if (!serverField.admin.components) {
            serverField.admin.components = {};
        }
        CustomCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps: cellClientProps,
            Component: serverField.editor.CellComponent,
            importMap: payload.importMap,
            serverProps: cellServerProps
        });
    } else {
        const CustomCellComponent = serverField?.admin?.components?.Cell;
        if (CustomCellComponent) {
            CustomCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                clientProps: cellClientProps,
                Component: CustomCellComponent,
                importMap: payload.importMap,
                serverProps: cellServerProps
            });
        } else if (cellClientProps.cellData && cellClientProps.field && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$hasOptionLabelJSXElement$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasOptionLabelJSXElement"])(cellClientProps)) {
            CustomCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                clientProps: cellClientProps,
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultCell"],
                importMap: payload.importMap
            });
        } else {
            const CustomCellComponent = serverField?.admin?.components?.Cell;
            if (CustomCellComponent) {
                CustomCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps: cellClientProps,
                    Component: CustomCellComponent,
                    importMap: payload.importMap,
                    serverProps: cellServerProps
                });
            } else {
                CustomCell = undefined;
            }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderCustomComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderCustomComponent"], {
        CustomComponent: CustomCell,
        Fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderDefaultCell"], {
            clientProps: cellClientProps,
            columnIndex: columnIndex,
            enableRowSelections: enableRowSelections,
            isLinkedColumn: isLinkedColumn
        })
    }, `${rowIndex}-${columnIndex}`);
} //# sourceMappingURL=renderCell.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/sortFieldMap.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortFieldMap",
    ()=>sortFieldMap
]);
function getAccessor(field) {
    return field.accessor ?? ('name' in field ? field.name : undefined);
}
function sortFieldMap(fieldMap, sortTo) {
    return fieldMap?.sort((a, b)=>{
        const aIndex = sortTo.findIndex((column)=>'name' in a && column.accessor === getAccessor(a));
        const bIndex = sortTo.findIndex((column)=>'name' in b && column.accessor === getAccessor(b));
        if (aIndex === -1 && bIndex === -1) {
            return 0;
        }
        if (aIndex === -1) {
            return 1;
        }
        if (bIndex === -1) {
            return -1;
        }
        return aIndex - bIndex;
    });
} //# sourceMappingURL=sortFieldMap.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildColumnState",
    ()=>buildColumnState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/filterFieldsWithPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$isColumnActive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/isColumnActive.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$renderCell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/renderCell.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$sortFieldMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/sortFieldMap.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$renderCell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$renderCell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const buildColumnState = (args)=>{
    const { beforeRows, clientFields, collectionSlug, columns, customCellProps, dataType, docs, enableLinkedCell = true, enableRowSelections, fieldPermissions, i18n, payload, req, serverFields, sortColumnProps, useAsTitle, viewType } = args;
    // clientFields contains the fake `id` column
    let sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["flattenTopLevelFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
        fieldPermissions,
        fields: clientFields
    }), {
        i18n,
        keepPresentationalFields: true,
        moveSubFieldsToTop: true
    });
    let _sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["flattenTopLevelFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
        fieldPermissions,
        fields: serverFields
    }), {
        i18n,
        keepPresentationalFields: true,
        moveSubFieldsToTop: true
    }) // TODO: think of a way to avoid this additional flatten
    ;
    // place the `ID` field first, if it exists
    // do the same for the `useAsTitle` field with precedence over the `ID` field
    // then sort the rest of the fields based on the `defaultColumns` or `columns`
    const idFieldIndex = sortedFieldMap?.findIndex((field)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsID"])(field));
    if (idFieldIndex > -1) {
        const idField = sortedFieldMap.splice(idFieldIndex, 1)[0];
        sortedFieldMap.unshift(idField);
    }
    const useAsTitleFieldIndex = useAsTitle ? sortedFieldMap.findIndex((field)=>'name' in field && field.name === useAsTitle) : -1;
    if (useAsTitleFieldIndex > -1) {
        const useAsTitleField = sortedFieldMap.splice(useAsTitleFieldIndex, 1)[0];
        sortedFieldMap.unshift(useAsTitleField);
    }
    const sortTo = columns;
    if (sortTo) {
        // sort the fields to the order of `defaultColumns` or `columns`
        sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$sortFieldMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortFieldMap"])(sortedFieldMap, sortTo);
        _sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$sortFieldMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortFieldMap"])(_sortedFieldMap, sortTo) // TODO: think of a way to avoid this additional sort
        ;
    }
    const activeColumnsIndices = [];
    const sorted = sortedFieldMap?.reduce((acc, clientField, colIndex)=>{
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsHiddenOrDisabled"])(clientField) && !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsID"])(clientField)) {
            return acc;
        }
        const accessor = clientField.accessor ?? ('name' in clientField ? clientField.name : undefined);
        const serverField = _sortedFieldMap.find((f)=>{
            const fAccessor = f.accessor ?? ('name' in f ? f.name : undefined);
            return fAccessor === accessor;
        });
        const hasCustomCell = serverField?.admin && 'components' in serverField.admin && serverField.admin.components && 'Cell' in serverField.admin.components && serverField.admin.components.Cell;
        if (serverField && serverField.type === 'group' && !hasCustomCell) {
            return acc // skip any group without a custom cell
            ;
        }
        const columnPref = columns?.find((preference)=>clientField && 'name' in clientField && preference.accessor === accessor);
        const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$isColumnActive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isColumnActive"])({
            accessor,
            activeColumnsIndices,
            column: columnPref,
            columns
        });
        if (isActive && !activeColumnsIndices.includes(colIndex)) {
            activeColumnsIndices.push(colIndex);
        }
        let CustomLabel = undefined;
        if (dataType === 'monomorphic') {
            const CustomLabelToRender = serverField && 'admin' in serverField && 'components' in serverField.admin && 'Label' in serverField.admin.components && serverField.admin.components.Label !== undefined // let it return `null`
             ? serverField.admin.components.Label : undefined;
            // TODO: customComponent will be optional in v4
            const clientProps = {
                field: clientField
            };
            const customLabelServerProps = {
                clientField,
                collectionSlug,
                field: serverField,
                i18n,
                payload
            };
            CustomLabel = CustomLabelToRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                clientProps,
                Component: CustomLabelToRender,
                importMap: payload.importMap,
                serverProps: customLabelServerProps
            }) : undefined;
        }
        const fieldAffectsDataSubFields = clientField && clientField.type && (clientField.type === 'array' || clientField.type === 'group' || clientField.type === 'blocks');
        const label = clientField && 'labelWithPrefix' in clientField && clientField.labelWithPrefix !== undefined ? clientField.labelWithPrefix : 'label' in clientField ? clientField.label : undefined;
        // Convert accessor to dot notation specifically for SortColumn sorting behavior
        const dotAccessor = accessor?.replace(/-/g, '.');
        const Heading = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortColumn"], {
            disable: fieldAffectsDataSubFields || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsPresentationalOnly"])(clientField) || undefined,
            Label: CustomLabel,
            label: label,
            name: dotAccessor,
            ...sortColumnProps || {}
        });
        const column = {
            accessor,
            active: isActive,
            CustomLabel,
            field: clientField,
            Heading,
            renderedCells: isActive ? docs.map((doc, rowIndex)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$renderCell$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderCell"])({
                    clientField,
                    collectionSlug: dataType === 'monomorphic' ? collectionSlug : doc.relationTo,
                    columnIndex: colIndex,
                    customCellProps,
                    doc: dataType === 'monomorphic' ? doc : doc.value,
                    enableRowSelections,
                    i18n,
                    isLinkedColumn: enableLinkedCell && colIndex === activeColumnsIndices[0],
                    payload,
                    req,
                    rowIndex,
                    serverField,
                    viewType
                });
            }) : []
        };
        acc.push(column);
        return acc;
    }, []);
    if (beforeRows) {
        sorted.unshift(...beforeRows);
    }
    return sorted;
}; //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/utilities/renderTable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "renderFilters",
    ()=>renderFilters,
    "renderTable",
    ()=>renderTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/payload/shared [external] (payload/shared, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/filterFieldsWithPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/providers/TableColumns/buildColumnState/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const renderFilters = (fields, importMap)=>fields.reduce((acc, field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldIsHiddenOrDisabled"])(field)) {
            return acc;
        }
        if ('name' in field && field.admin?.components?.Filter) {
            acc.set(field.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                Component: field.admin.components?.Filter,
                importMap
            }));
        }
        return acc;
    }, new Map());
const renderTable = ({ clientCollectionConfig, clientConfig, collectionConfig, collections, columns, customCellProps, data, enableRowSelections, fieldPermissions, groupByFieldPath, groupByValue, heading, i18n, key = 'table', orderableFieldName, payload, query, renderRowTypes, req, tableAppearance, useAsTitle, viewType })=>{
    // Ensure that columns passed as args comply with the field config, i.e. `hidden`, `disableListColumn`, etc.
    let columnState;
    let clientFields = clientCollectionConfig?.fields || [];
    let serverFields = collectionConfig?.fields || [];
    const isPolymorphic = collections;
    const isGroupingBy = Boolean(collectionConfig?.admin?.groupBy && query?.groupBy);
    if (isPolymorphic) {
        clientFields = [];
        serverFields = [];
        for (const collection of collections){
            const clientCollectionConfig = clientConfig.collections.find((each)=>each.slug === collection);
            for (const field of (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
                fieldPermissions,
                fields: clientCollectionConfig.fields
            })){
                if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field)) {
                    if (clientFields.some((each)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(each) && each.name === field.name)) {
                        continue;
                    }
                }
                clientFields.push(field);
            }
            const serverCollectionConfig = payload.collections[collection].config;
            for (const field of (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$filterFieldsWithPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFieldsWithPermissions"])({
                fieldPermissions,
                fields: serverCollectionConfig.fields
            })){
                if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(field)) {
                    if (serverFields.some((each)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$payload$2f$shared__$5b$external$5d$__$28$payload$2f$shared$2c$__esm_import$29$__["fieldAffectsData"])(each) && each.name === field.name)) {
                        continue;
                    }
                }
                serverFields.push(field);
            }
        }
    }
    const sharedArgs = {
        clientFields,
        columns,
        enableRowSelections,
        fieldPermissions,
        i18n,
        // sortColumnProps,
        customCellProps,
        payload,
        req,
        serverFields,
        useAsTitle,
        viewType
    };
    if (isPolymorphic) {
        columnState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildColumnState"])({
            ...sharedArgs,
            collectionSlug: undefined,
            dataType: 'polymorphic',
            docs: data?.docs || []
        });
    } else {
        columnState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$TableColumns$2f$buildColumnState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildColumnState"])({
            ...sharedArgs,
            collectionSlug: clientCollectionConfig.slug,
            dataType: 'monomorphic',
            docs: data?.docs || []
        });
    }
    const columnsToUse = [
        ...columnState
    ];
    if (renderRowTypes) {
        columnsToUse.unshift({
            accessor: 'collection',
            active: true,
            field: {
                admin: {
                    disabled: true
                },
                hidden: true
            },
            Heading: i18n.t('version:type'),
            renderedCells: (data?.docs || []).map((doc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pill"], {
                    size: "small",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collections ? payload.collections[doc.relationTo].config.labels.singular : clientCollectionConfig.labels.singular, i18n)
                }, i))
        });
    }
    if (enableRowSelections) {
        columnsToUse.unshift({
            accessor: '_select',
            active: true,
            field: {
                admin: {
                    disabled: true
                },
                hidden: true
            },
            Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectAll"], {}),
            renderedCells: (data?.docs || []).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectRow"], {
                    rowData: data?.docs[i]
                }, i))
        });
    }
    if (isGroupingBy) {
        return {
            columnState,
            // key is required since Next.js 15.2.0 to prevent React key error
            Table: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: [
                    'table-wrap',
                    groupByValue !== undefined && `table-wrap--group-by`
                ].filter(Boolean).join(' '),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectionProvider"], {
                    docs: data?.docs || [],
                    totalDocs: data?.totalDocs || 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GroupByHeader"], {
                            collectionConfig: clientCollectionConfig,
                            groupByFieldPath: groupByFieldPath,
                            groupByValue: groupByValue,
                            heading: heading
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                            appearance: tableAppearance,
                            columns: columnsToUse,
                            data: data?.docs || []
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GroupByPageControls"], {
                            collectionConfig: clientCollectionConfig,
                            data: data,
                            groupByValue: groupByValue
                        })
                    ]
                })
            }, key)
        };
    }
    if (!orderableFieldName) {
        return {
            columnState,
            // key is required since Next.js 15.2.0 to prevent React key error
            Table: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "table-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                    appearance: tableAppearance,
                    columns: columnsToUse,
                    data: data?.docs || []
                })
            }, key)
        };
    }
    columnsToUse.unshift({
        accessor: '_dragHandle',
        active: true,
        field: {
            admin: {
                disabled: true
            },
            hidden: true
        },
        Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortHeader"], {}),
        renderedCells: (data?.docs || []).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortRow"], {}, i))
    });
    return {
        columnState,
        // key is required since Next.js 15.2.0 to prevent React key error
        Table: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "table-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderableTable"], {
                appearance: tableAppearance,
                collection: clientCollectionConfig,
                columns: columnsToUse,
                data: data?.docs || []
            })
        }, key)
    };
}; //# sourceMappingURL=renderTable.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Banner",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js <module evaluation>", "Banner");
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Banner",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js", "Banner");
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Banner$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Banner$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Banner$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/FieldDiffLabel/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldDiffLabel",
    ()=>FieldDiffLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
const baseClass = 'field-diff-label';
const FieldDiffLabel = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: baseClass,
        children: children
    }); //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/FieldDiffContainer/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldDiffContainer",
    ()=>FieldDiffContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$FieldDiffLabel$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/FieldDiffLabel/index.js [app-rsc] (ecmascript)");
;
;
;
;
const baseClass = 'field-diff';
const FieldDiffContainer = (args)=>{
    const { className, From, i18n, label: { label, locale }, nestingLevel = 0, To } = args;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: `${baseClass}-container${className ? ` ${className}` : ''} nested-level-${nestingLevel}`,
        style: nestingLevel ? {
            // Need to use % instead of fr, as calc() doesn't work with fr when this is used in gridTemplateColumns
            '--left-offset': `calc(50%  - (${nestingLevel} * calc( calc(var(--base)* 0.5) - 2.5px  )))`
        } : {
            '--left-offset': '50%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$FieldDiffLabel$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldDiffLabel"], {
                children: [
                    locale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: `${baseClass}__locale-label`,
                        children: locale
                    }),
                    typeof label !== 'function' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(label || '', i18n)
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: `${baseClass}-content`,
                style: nestingLevel ? {
                    gridTemplateColumns: `calc(var(--left-offset) - calc(var(--base)*0.5) )     calc(50% - calc(var(--base)*0.5) + calc(50% - var(--left-offset)))`
                } : undefined,
                children: [
                    From,
                    To
                ]
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/diff/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Taken and modified from https://github.com/Arman19941113/html-diff/blob/master/packages/html-diff/src/index.ts
// eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
__turbopack_context__.s([
    "HtmlDiff",
    ()=>HtmlDiff
]);
const htmlStartTagReg = /^<(?<name>[^\s/>]+)[^>]*>$/;
// eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
const htmlTagWithNameReg = /^<(?<isEnd>\/)?(?<name>[^\s>]+)[^>]*>$/;
const htmlTagReg = /^<[^>]+>/;
const htmlImgTagReg = /^<img[^>]*>$/;
const htmlVideoTagReg = /^<video[^>]*>.*?<\/video>$/ms;
class HtmlDiff {
    config;
    leastCommonLength = Infinity;
    matchedBlockList = [];
    newTokens = [];
    oldTokens = [];
    operationList = [];
    sideBySideContents;
    unifiedContent;
    constructor(oldHtml, newHtml, { classNames = {
        createBlock: 'html-diff-create-block-wrapper',
        createInline: 'html-diff-create-inline-wrapper',
        deleteBlock: 'html-diff-delete-block-wrapper',
        deleteInline: 'html-diff-delete-inline-wrapper'
    }, greedyBoundary = 1000, greedyMatch = true, minMatchedSize = 2, tokenizeByCharacter = false } = {}){
        // init config
        this.config = {
            classNames: {
                createBlock: 'html-diff-create-block-wrapper',
                createInline: 'html-diff-create-inline-wrapper',
                deleteBlock: 'html-diff-delete-block-wrapper',
                deleteInline: 'html-diff-delete-inline-wrapper',
                ...classNames
            },
            greedyBoundary,
            greedyMatch,
            minMatchedSize
        };
        // white space is junk
        oldHtml = oldHtml.trim();
        newHtml = newHtml.trim();
        // no need to diff
        if (oldHtml === newHtml) {
            this.unifiedContent = oldHtml;
            let equalSequence = 0;
            // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
            const content = oldHtml.replace(/<([^\s/>]+)[^>]*>/g, (match, name)=>{
                const tagNameLength = name.length + 1;
                return `${match.slice(0, tagNameLength)} data-seq="${++equalSequence}"${match.slice(tagNameLength)}`;
            });
            this.sideBySideContents = [
                content,
                content
            ];
            return;
        }
        // step1: split HTML to tokens(atomic tokens)
        const tokenizeFn = tokenizeByCharacter ? this.tokenizeByCharacter : this.tokenizeByWord;
        this.oldTokens = tokenizeFn(oldHtml);
        this.newTokens = tokenizeFn(newHtml);
        // step2: find matched blocks
        this.matchedBlockList = this.getMatchedBlockList();
        // step3: generate operation list
        this.operationList = this.getOperationList();
    }
    // Find the longest matched block between tokens
    computeBestMatchedBlock(oldStart, oldEnd, newStart, newEnd) {
        let bestMatchedBlock = null;
        for(let i = oldStart; i < oldEnd; i++){
            const len = Math.min(oldEnd - i, newEnd - newStart);
            const ret = this.slideBestMatchedBlock(i, newStart, len);
            if (ret && (!bestMatchedBlock || ret.size > bestMatchedBlock.size)) {
                bestMatchedBlock = ret;
                if (ret.size > this.leastCommonLength) {
                    return bestMatchedBlock;
                }
            }
        }
        for(let j = newStart; j < newEnd; j++){
            const len = Math.min(oldEnd - oldStart, newEnd - j);
            const ret = this.slideBestMatchedBlock(oldStart, j, len);
            if (ret && (!bestMatchedBlock || ret.size > bestMatchedBlock.size)) {
                bestMatchedBlock = ret;
                if (ret.size > this.leastCommonLength) {
                    return bestMatchedBlock;
                }
            }
        }
        return bestMatchedBlock;
    }
    computeMatchedBlockList(oldStart, oldEnd, newStart, newEnd, matchedBlockList = []) {
        const matchBlock = this.computeBestMatchedBlock(oldStart, oldEnd, newStart, newEnd);
        if (!matchBlock) {
            return [];
        }
        if (oldStart < matchBlock.oldStart && newStart < matchBlock.newStart) {
            this.computeMatchedBlockList(oldStart, matchBlock.oldStart, newStart, matchBlock.newStart, matchedBlockList);
        }
        matchedBlockList.push(matchBlock);
        if (oldEnd > matchBlock.oldEnd && newEnd > matchBlock.newEnd) {
            this.computeMatchedBlockList(matchBlock.oldEnd, oldEnd, matchBlock.newEnd, newEnd, matchedBlockList);
        }
        return matchedBlockList;
    }
    dressUpBlockTag(type, token) {
        if (type === 'create') {
            return `<div class="${this.config.classNames.createBlock}">${token}</div>`;
        }
        if (type === 'delete') {
            return `<div class="${this.config.classNames.deleteBlock}">${token}</div>`;
        }
        return '';
    }
    dressUpDiffContent(type, tokens) {
        const tokensLength = tokens.length;
        if (!tokensLength) {
            return '';
        }
        let result = '';
        let textStartIndex = 0;
        let i = -1;
        for (const token of tokens){
            i++;
            // If this is true, this HTML should be diffed as well - not just its children
            const isMatchElement = token.includes('data-enable-match="true"');
            const isMatchExplicitlyDisabled = token.includes('data-enable-match="false"');
            const isHtmlTag = !!token.match(htmlTagReg)?.length;
            if (isMatchExplicitlyDisabled) {
                textStartIndex = i + 1;
                result += token;
            } else if (!isMatchElement && isHtmlTag) {
                // handle text tokens before
                if (i > textStartIndex) {
                    result += this.dressUpText(type, tokens.slice(textStartIndex, i));
                }
                // handle this tag
                textStartIndex = i + 1;
                if (token.match(htmlVideoTagReg)) {
                    result += this.dressUpBlockTag(type, token);
                } else {
                    result += token;
                }
            } else if (isMatchElement && isHtmlTag) {
                // handle text tokens before
                if (i > textStartIndex) {
                    result += this.dressUpText(type, tokens.slice(textStartIndex, i));
                }
                // handle this tag
                textStartIndex = i + 1;
                // Add data-match-type to the tag that can be styled
                const newToken = this.dressupMatchEnabledHtmlTag(type, token);
                result += newToken;
            }
        }
        if (textStartIndex < tokensLength) {
            result += this.dressUpText(type, tokens.slice(textStartIndex));
        }
        return result;
    }
    dressUpInlineTag(type, token) {
        if (type === 'create') {
            return `<span class="${this.config.classNames.createInline}">${token}</span>`;
        }
        if (type === 'delete') {
            return `<span class="${this.config.classNames.deleteInline}">${token}</span>`;
        }
        return '';
    }
    dressupMatchEnabledHtmlTag(type, token) {
        // token is a single html tag, e.g. <a data-enable-match="true" href="https://2" rel=undefined target=undefined>
        // add data-match-type to the tag
        const tagName = token.match(htmlStartTagReg)?.groups?.name;
        if (!tagName) {
            return token;
        }
        const tagNameLength = tagName.length + 1;
        const matchType = type === 'create' ? 'create' : 'delete';
        return `${token.slice(0, tagNameLength)} data-match-type="${matchType}"${token.slice(tagNameLength, token.length)}`;
    }
    dressUpText(type, tokens) {
        const text = tokens.join('');
        if (!text.trim()) {
            return '';
        }
        if (type === 'create') {
            return `<span data-match-type="create">${text}</span>`;
        }
        if (type === 'delete') {
            return `<span data-match-type="delete">${text}</span>`;
        }
        return '';
    }
    /**
  * Generates a list of token entries that are matched between the old and new HTML. This list will not
  * include token ranges that differ.
  */ getMatchedBlockList() {
        const n1 = this.oldTokens.length;
        const n2 = this.newTokens.length;
        // 1. sync from start
        let start = null;
        let i = 0;
        while(i < n1 && i < n2 && this.oldTokens[i] === this.newTokens[i]){
            i++;
        }
        if (i >= this.config.minMatchedSize) {
            start = {
                newEnd: i,
                newStart: 0,
                oldEnd: i,
                oldStart: 0,
                size: i
            };
        }
        // 2. sync from end
        let end = null;
        let e1 = n1 - 1;
        let e2 = n2 - 1;
        while(i <= e1 && i <= e2 && this.oldTokens[e1] === this.newTokens[e2]){
            e1--;
            e2--;
        }
        const size = n1 - 1 - e1;
        if (size >= this.config.minMatchedSize) {
            end = {
                newEnd: n2,
                newStart: e2 + 1,
                oldEnd: n1,
                oldStart: e1 + 1,
                size
            };
        }
        // 3. handle rest
        const oldStart = start ? i : 0;
        const oldEnd = end ? e1 + 1 : n1;
        const newStart = start ? i : 0;
        const newEnd = end ? e2 + 1 : n2;
        // optimize for large tokens
        if (this.config.greedyMatch) {
            const commonLength = Math.min(oldEnd - oldStart, newEnd - newStart);
            if (commonLength > this.config.greedyBoundary) {
                this.leastCommonLength = Math.floor(commonLength / 3);
            }
        }
        const ret = this.computeMatchedBlockList(oldStart, oldEnd, newStart, newEnd);
        if (start) {
            ret.unshift(start);
        }
        if (end) {
            ret.push(end);
        }
        return ret;
    }
    // Generate operation list by matchedBlockList
    getOperationList() {
        const operationList = [];
        let walkIndexOld = 0;
        let walkIndexNew = 0;
        for (const matchedBlock of this.matchedBlockList){
            const isOldStartIndexMatched = walkIndexOld === matchedBlock.oldStart;
            const isNewStartIndexMatched = walkIndexNew === matchedBlock.newStart;
            const operationBase = {
                newEnd: matchedBlock.newStart,
                newStart: walkIndexNew,
                oldEnd: matchedBlock.oldStart,
                oldStart: walkIndexOld
            };
            if (!isOldStartIndexMatched && !isNewStartIndexMatched) {
                operationList.push(Object.assign(operationBase, {
                    type: 'replace'
                }));
            } else if (isOldStartIndexMatched && !isNewStartIndexMatched) {
                operationList.push(Object.assign(operationBase, {
                    type: 'create'
                }));
            } else if (!isOldStartIndexMatched && isNewStartIndexMatched) {
                operationList.push(Object.assign(operationBase, {
                    type: 'delete'
                }));
            }
            operationList.push({
                type: 'equal',
                newEnd: matchedBlock.newEnd,
                newStart: matchedBlock.newStart,
                oldEnd: matchedBlock.oldEnd,
                oldStart: matchedBlock.oldStart
            });
            walkIndexOld = matchedBlock.oldEnd;
            walkIndexNew = matchedBlock.newEnd;
        }
        // handle the tail content
        const maxIndexOld = this.oldTokens.length;
        const maxIndexNew = this.newTokens.length;
        const tailOperationBase = {
            newEnd: maxIndexNew,
            newStart: walkIndexNew,
            oldEnd: maxIndexOld,
            oldStart: walkIndexOld
        };
        const isOldFinished = walkIndexOld === maxIndexOld;
        const isNewFinished = walkIndexNew === maxIndexNew;
        if (!isOldFinished && !isNewFinished) {
            operationList.push(Object.assign(tailOperationBase, {
                type: 'replace'
            }));
        } else if (isOldFinished && !isNewFinished) {
            operationList.push(Object.assign(tailOperationBase, {
                type: 'create'
            }));
        } else if (!isOldFinished && isNewFinished) {
            operationList.push(Object.assign(tailOperationBase, {
                type: 'delete'
            }));
        }
        return operationList;
    }
    slideBestMatchedBlock(addA, addB, len) {
        let maxSize = 0;
        let bestMatchedBlock = null;
        let continuousSize = 0;
        for(let i = 0; i < len; i++){
            if (this.oldTokens[addA + i] === this.newTokens[addB + i]) {
                continuousSize++;
            } else {
                continuousSize = 0;
            }
            if (continuousSize > maxSize) {
                maxSize = continuousSize;
                bestMatchedBlock = {
                    newEnd: addB + i + 1,
                    newStart: addB + i - continuousSize + 1,
                    oldEnd: addA + i + 1,
                    oldStart: addA + i - continuousSize + 1,
                    size: continuousSize
                };
            }
        }
        return maxSize >= this.config.minMatchedSize ? bestMatchedBlock : null;
    }
    /**
  * Convert HTML to tokens at character level, preserving HTML tags as complete tokens
  * @example
  * tokenize("<a> Hello World </a>")
  * ["<a>", " ", "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " ", "</a>"]
  */ tokenizeByCharacter(html) {
        // First, identify HTML tags and preserve them as complete tokens
        const tokens = [];
        let currentPos = 0;
        // Regular expression to match HTML tags (including picture and video tags with content)
        const tagRegex = /<picture[^>]*>.*?<\/picture>|<video[^>]*>.*?<\/video>|<[^>]+>/gs;
        let match;
        while((match = tagRegex.exec(html)) !== null){
            // Add characters before the tag
            const beforeTag = html.substring(currentPos, match.index);
            if (beforeTag) {
                // Split non-tag content into individual characters
                for (const char of beforeTag){
                    tokens.push(char);
                }
            }
            // Add the complete tag as a single token
            tokens.push(match[0]);
            currentPos = match.index + match[0].length;
        }
        // Add any remaining characters after the last tag
        const remaining = html.substring(currentPos);
        for (const char of remaining){
            tokens.push(char);
        }
        return tokens;
    }
    /**
  * convert HTML to tokens
  * @example
  * tokenize("<a> Hello World </a>")
  * ["<a>"," ", "Hello", " ", "World", " ", "</a>"]
  */ tokenizeByWord(html) {
        // atomic token: html tag、continuous numbers or letters、blank spaces、other symbol
        return html.match(/<picture[^>]*>.*?<\/picture>|<video[^>]*>.*?<\/video>|<[^>]+>|\w+\b|\s+|[^<>\w]/gs) || [];
    }
    getSideBySideContents() {
        if (this.sideBySideContents !== undefined) {
            return this.sideBySideContents;
        }
        let oldHtml = '';
        let newHtml = '';
        let equalSequence = 0;
        this.operationList.forEach((operation)=>{
            switch(operation.type){
                case 'create':
                    {
                        newHtml += this.dressUpDiffContent('create', this.newTokens.slice(operation.newStart, operation.newEnd));
                        break;
                    }
                case 'delete':
                    {
                        const deletedTokens = this.oldTokens.slice(operation.oldStart, operation.oldEnd);
                        oldHtml += this.dressUpDiffContent('delete', deletedTokens);
                        break;
                    }
                case 'equal':
                    {
                        const equalTokens = this.newTokens.slice(operation.newStart, operation.newEnd);
                        let equalString = '';
                        for (const token of equalTokens){
                            // find start tags and add data-seq to enable sync scroll
                            const startTagMatch = token.match(htmlStartTagReg);
                            if (startTagMatch) {
                                equalSequence += 1;
                                const tagNameLength = (startTagMatch?.groups?.name?.length ?? 0) + 1;
                                equalString += `${token.slice(0, tagNameLength)} data-seq="${equalSequence}"${token.slice(tagNameLength)}`;
                            } else {
                                equalString += token;
                            }
                        }
                        oldHtml += equalString;
                        newHtml += equalString;
                        break;
                    }
                case 'replace':
                    {
                        oldHtml += this.dressUpDiffContent('delete', this.oldTokens.slice(operation.oldStart, operation.oldEnd));
                        newHtml += this.dressUpDiffContent('create', this.newTokens.slice(operation.newStart, operation.newEnd));
                        break;
                    }
                default:
                    {
                        console.error('Richtext diff error - invalid operation: ' + String(operation.type));
                    }
            }
        });
        const result = [
            oldHtml,
            newHtml
        ];
        this.sideBySideContents = result;
        return result;
    }
    getUnifiedContent() {
        if (this.unifiedContent !== undefined) {
            return this.unifiedContent;
        }
        let result = '';
        this.operationList.forEach((operation)=>{
            switch(operation.type){
                case 'create':
                    {
                        result += this.dressUpDiffContent('create', this.newTokens.slice(operation.newStart, operation.newEnd));
                        break;
                    }
                case 'delete':
                    {
                        result += this.dressUpDiffContent('delete', this.oldTokens.slice(operation.oldStart, operation.oldEnd));
                        break;
                    }
                case 'equal':
                    {
                        for (const token of this.newTokens.slice(operation.newStart, operation.newEnd)){
                            result += token;
                        }
                        break;
                    }
                case 'replace':
                    {
                        // handle specially tag replace
                        const olds = this.oldTokens.slice(operation.oldStart, operation.oldEnd);
                        const news = this.newTokens.slice(operation.newStart, operation.newEnd);
                        if (olds.length === 1 && news.length === 1 && olds[0]?.match(htmlTagReg) && news[0]?.match(htmlTagReg)) {
                            result += news[0];
                            break;
                        }
                        const deletedTokens = [];
                        const createdTokens = [];
                        let createIndex = operation.newStart;
                        for(let deleteIndex = operation.oldStart; deleteIndex < operation.oldEnd; deleteIndex++){
                            const deletedToken = this.oldTokens[deleteIndex];
                            if (!deletedToken) {
                                continue;
                            }
                            const matchTagResultD = deletedToken?.match(htmlTagWithNameReg);
                            if (matchTagResultD) {
                                // handle replaced tag token
                                // skip special tag
                                if ([
                                    htmlImgTagReg,
                                    htmlVideoTagReg
                                ].some((item)=>deletedToken?.match(item))) {
                                    deletedTokens.push(deletedToken);
                                    continue;
                                }
                                // handle normal tag
                                result += this.dressUpDiffContent('delete', deletedTokens);
                                deletedTokens.splice(0);
                                let isTagInNewFind = false;
                                for(let tempCreateIndex = createIndex; tempCreateIndex < operation.newEnd; tempCreateIndex++){
                                    const createdToken = this.newTokens[tempCreateIndex];
                                    if (!createdToken) {
                                        continue;
                                    }
                                    const matchTagResultC = createdToken?.match(htmlTagWithNameReg);
                                    if (matchTagResultC && matchTagResultC.groups?.name === matchTagResultD.groups?.name && matchTagResultC.groups?.isEnd === matchTagResultD.groups?.isEnd) {
                                        // find first matched tag, but not maybe the expected tag(to optimize)
                                        isTagInNewFind = true;
                                        result += this.dressUpDiffContent('create', createdTokens);
                                        result += createdToken;
                                        createdTokens.splice(0);
                                        createIndex = tempCreateIndex + 1;
                                        break;
                                    } else {
                                        createdTokens.push(createdToken);
                                    }
                                }
                                if (!isTagInNewFind) {
                                    result += deletedToken;
                                    createdTokens.splice(0);
                                }
                            } else {
                                // token is not a tag
                                deletedTokens.push(deletedToken);
                            }
                        }
                        if (createIndex < operation.newEnd) {
                            createdTokens.push(...this.newTokens.slice(createIndex, operation.newEnd));
                        }
                        result += this.dressUpDiffContent('delete', deletedTokens);
                        result += this.dressUpDiffContent('create', createdTokens);
                        break;
                    }
                default:
                    {
                        console.error('Richtext diff error - invalid operation: ' + String(operation.type));
                    }
            }
        });
        this.unifiedContent = result;
        return result;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHTMLDiffComponents",
    ()=>getHTMLDiffComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$HTMLDiff$2f$diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/elements/HTMLDiff/diff/index.js [app-rsc] (ecmascript)");
;
;
;
;
const baseClass = 'html-diff';
const getHTMLDiffComponents = ({ fromHTML, toHTML, tokenizeByCharacter })=>{
    const diffHTML = new __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$HTMLDiff$2f$diff$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HtmlDiff"](fromHTML, toHTML, {
        tokenizeByCharacter
    });
    const [oldHTML, newHTML] = diffHTML.getSideBySideContents();
    const From = oldHTML ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: `${baseClass}__diff-old html-diff`,
        dangerouslySetInnerHTML: {
            __html: oldHTML
        }
    }) : null;
    const To = newHTML ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: `${baseClass}__diff-new html-diff`,
        dangerouslySetInnerHTML: {
            __html: newHTML
        }
    }) : null;
    return {
        From,
        To
    };
}; //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/graphics/File/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>File
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const File = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        height: "150",
        style: {
            backgroundColor: '#333333'
        },
        viewBox: "0 0 150 150",
        width: "150",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M82.8876 50.5H55.5555V100.5H94.4444V61.9818H82.8876V50.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M82.8876 61.9818H94.4444L82.8876 50.5V61.9818Z",
                fill: "#9A9A9A"
            })
        ]
    }); //# sourceMappingURL=index.js.map
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/payload-favicon-dark.1c5fa1c5.png");}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png (static in ecmascript) <export default as payloadFaviconDark>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "payloadFaviconDark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$28$static__in__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png (static in ecmascript)");
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/payload-favicon-light.9ef06530.png");}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png (static in ecmascript) <export default as payloadFaviconLight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "payloadFaviconLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$28$static__in__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png (static in ecmascript)");
}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/static-og-image.png (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/static-og-image.f4012f69.png");}),
"[project]/cms/node_modules/@payloadcms/ui/dist/assets/static-og-image.png (static in ecmascript) <export default as staticOGImage>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "staticOGImage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$28$static__in__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$cms$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/cms/node_modules/@payloadcms/ui/dist/assets/static-og-image.png (static in ecmascript)");
}),
];

//# sourceMappingURL=0a8f5_%40payloadcms_ui_dist_427492c4._.js.map
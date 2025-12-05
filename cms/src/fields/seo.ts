import type { Field } from 'payload'

/**
 * Reusable SEO fields group for Payload CMS collections
 * Includes meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 */
export const seoFields: Field = {
    name: 'seo',
    type: 'group',
    label: 'SEO & Metadata',
    admin: {
        description: 'Search engine optimization and social media metadata',
    },
    fields: [
        // Basic Meta Tags
        {
            name: 'metaTitle',
            type: 'text',
            label: 'Meta Title',
            localized: true,
            admin: {
                description: 'Title displayed in search results (50-60 characters recommended)',
            },
        },
        {
            name: 'metaDescription',
            type: 'textarea',
            label: 'Meta Description',
            localized: true,
            admin: {
                description: 'Description shown in search results (150-160 characters recommended)',
            },
        },
        {
            name: 'keywords',
            type: 'text',
            label: 'Keywords',
            localized: true,
            admin: {
                description: 'Comma-separated keywords for SEO',
            },
        },
        {
            name: 'canonicalUrl',
            type: 'text',
            label: 'Canonical URL',
            admin: {
                description: 'The preferred URL for this content (for duplicate content handling)',
            },
        },
        {
            name: 'noIndex',
            type: 'checkbox',
            label: 'No Index',
            defaultValue: false,
            admin: {
                description: 'Prevent search engines from indexing this page',
            },
        },
        {
            name: 'noFollow',
            type: 'checkbox',
            label: 'No Follow',
            defaultValue: false,
            admin: {
                description: 'Prevent search engines from following links on this page',
            },
        },
        // Open Graph (Facebook, LinkedIn, etc.)
        {
            name: 'openGraph',
            type: 'group',
            label: 'Open Graph (Facebook, LinkedIn)',
            fields: [
                {
                    name: 'ogTitle',
                    type: 'text',
                    label: 'OG Title',
                    localized: true,
                    admin: {
                        description: 'Title for Facebook/LinkedIn shares (defaults to Meta Title if empty)',
                    },
                },
                {
                    name: 'ogDescription',
                    type: 'textarea',
                    label: 'OG Description',
                    localized: true,
                    admin: {
                        description: 'Description for Facebook/LinkedIn shares',
                    },
                },
                {
                    name: 'ogImage',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'OG Image',
                    admin: {
                        description: 'Image for social shares (1200x630px recommended)',
                    },
                },
                {
                    name: 'ogType',
                    type: 'select',
                    label: 'OG Type',
                    defaultValue: 'article',
                    options: [
                        { label: 'Article', value: 'article' },
                        { label: 'Website', value: 'website' },
                        { label: 'Profile', value: 'profile' },
                    ],
                },
            ],
        },
        // Twitter Cards
        {
            name: 'twitter',
            type: 'group',
            label: 'Twitter Card',
            fields: [
                {
                    name: 'twitterCard',
                    type: 'select',
                    label: 'Card Type',
                    defaultValue: 'summary_large_image',
                    options: [
                        { label: 'Summary', value: 'summary' },
                        { label: 'Summary Large Image', value: 'summary_large_image' },
                    ],
                },
                {
                    name: 'twitterTitle',
                    type: 'text',
                    label: 'Twitter Title',
                    localized: true,
                    admin: {
                        description: 'Title for Twitter shares (defaults to Meta Title if empty)',
                    },
                },
                {
                    name: 'twitterDescription',
                    type: 'textarea',
                    label: 'Twitter Description',
                    localized: true,
                    admin: {
                        description: 'Description for Twitter shares',
                    },
                },
                {
                    name: 'twitterImage',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Twitter Image',
                    admin: {
                        description: 'Image for Twitter shares (use OG Image if not set)',
                    },
                },
                {
                    name: 'twitterCreator',
                    type: 'text',
                    label: 'Twitter Creator',
                    admin: {
                        description: '@username of the content creator',
                    },
                },
            ],
        },
        // JSON-LD Structured Data
        {
            name: 'structuredData',
            type: 'group',
            label: 'Structured Data (JSON-LD)',
            admin: {
                description: 'Schema.org structured data for rich search results',
            },
            fields: [
                {
                    name: 'schemaType',
                    type: 'select',
                    label: 'Schema Type',
                    defaultValue: 'Article',
                    options: [
                        { label: 'Article', value: 'Article' },
                        { label: 'NewsArticle', value: 'NewsArticle' },
                        { label: 'Event', value: 'Event' },
                        { label: 'Organization', value: 'Organization' },
                        { label: 'WebPage', value: 'WebPage' },
                    ],
                },
                {
                    name: 'author',
                    type: 'text',
                    label: 'Author Name',
                    localized: true,
                },
                {
                    name: 'publisher',
                    type: 'text',
                    label: 'Publisher Name',
                    defaultValue: 'The Truth',
                },
                {
                    name: 'datePublished',
                    type: 'date',
                    label: 'Date Published',
                    admin: {
                        date: {
                            pickerAppearance: 'dayAndTime',
                        },
                    },
                },
                {
                    name: 'dateModified',
                    type: 'date',
                    label: 'Date Modified',
                    admin: {
                        date: {
                            pickerAppearance: 'dayAndTime',
                        },
                    },
                },
                {
                    name: 'customJsonLd',
                    type: 'code',
                    label: 'Custom JSON-LD',
                    admin: {
                        language: 'json',
                        description: 'Override with custom JSON-LD (advanced users only)',
                    },
                },
            ],
        },
    ],
}

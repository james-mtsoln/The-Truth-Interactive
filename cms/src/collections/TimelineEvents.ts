import type { CollectionConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const TimelineEvents: CollectionConfig = {
    slug: 'timeline-events',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'id',
    },
    fields: [
        {
            name: 'topic',
            type: 'relationship',
            relationTo: 'topics',
            required: true,
            // Allow null to enable deletion of parent topics
            // Related events should be deleted first or manually cleaned up
            admin: {
                description: 'The parent topic this event belongs to',
            },
        },
        {
            name: 'title',
            type: 'text',
            localized: true,
            required: true,
        },
        {
            name: 'cardTitle',
            type: 'text',
            localized: true,
        },
        {
            name: 'cardSubtitle',
            type: 'text',
            localized: true,
        },
        {
            name: 'cardDetailedText',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'date',
            type: 'text', // Using text for flexible date formats (e.g. "2024", "Jan 2024")
            required: true,
        },
        {
            name: 'mediaSource',
            type: 'text',
        },
        {
            name: 'newsPerspective',
            type: 'text',
            localized: true,
        },
        {
            name: 'mediaBias',
            type: 'text',
            localized: true,
        },
        {
            name: 'diverseViewpoint',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'order',
            type: 'number',
        },
        seoFields,
    ],
}

import type { CollectionConfig } from 'payload'

export const MediaOutlets: CollectionConfig = {
    slug: 'media-outlets',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'icon',
            type: 'text',
            required: true,
            admin: {
                description: 'Emoji icon or URL to icon image',
            },
        },
        {
            name: 'region',
            type: 'select',
            required: true,
            options: [
                { label: 'International', value: 'international' },
                { label: 'US', value: 'us' },
            ],
            admin: {
                description: 'Determines which sidebar the outlet appears in',
            },
        },
        {
            name: 'url',
            type: 'text',
            admin: {
                description: 'Link to the media outlet website',
            },
        },
        {
            name: 'order',
            type: 'number',
            defaultValue: 0,
            admin: {
                description: 'Order in which to display (lower = first)',
            },
        },
    ],
}

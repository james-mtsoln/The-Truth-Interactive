import type { CollectionConfig } from 'payload'

export const Topics: CollectionConfig = {
    slug: 'topics',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'slug',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            localized: true,
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'summary',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'type',
            type: 'select',
            options: [
                { label: 'Environment', value: 'environment' },
                { label: 'Technology', value: 'technology' },
                { label: 'Economy', value: 'economy' },
                { label: 'Health', value: 'health' },
                { label: 'Conflict', value: 'conflict' },
                { label: 'Science', value: 'science' },
            ],
            required: true,
        },
        {
            name: 'location',
            type: 'group',
            fields: [
                {
                    name: 'lat',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'lon',
                    type: 'number',
                    required: true,
                },
            ],
        },
    ],
}

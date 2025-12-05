import type { CollectionConfig } from 'payload'
import { seoFields } from '../fields/seo'

export const Topics: CollectionConfig = {
    slug: 'topics',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    admin: {
        useAsTitle: 'slug',
    },
    hooks: {
        beforeDelete: [
            async ({ id, req }) => {
                try {
                    // Delete all timeline events related to this topic before deleting the topic
                    const payload = req.payload
                    const result = await payload.delete({
                        collection: 'timeline-events',
                        where: {
                            topic: {
                                equals: id,
                            },
                        },
                        req, // Pass request context for proper auth
                    })
                    console.log(`Deleted ${result.docs?.length || 0} timeline events for topic ${id}`)
                } catch (error) {
                    // Log but don't block deletion if cleanup fails
                    console.error('Error cleaning up timeline events:', error)
                }
            },
        ],
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
            name: 'showInViewA',
            type: 'checkbox',
            defaultValue: true,
            admin: {
                description: 'Toggle to show/hide this topic on the globe in View A',
                position: 'sidebar',
            },
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
        seoFields,
    ],
}

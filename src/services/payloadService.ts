/**
 * Payload CMS API Service
 * 
 * This service provides an API-compatible layer that works with Payload CMS data structure.
 * Fetches data from the local Payload CMS instance.
 */

import type { Topic, TimelineEvent, MediaOutlet, Language, PayloadListResponse } from '../types/payload-types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Payload CMS API Client
 */
export class PayloadAPIClient {
    private static instance: PayloadAPIClient;
    private timelineCache: Map<string, TimelineEvent[]> = new Map();

    private constructor() { }

    static getInstance(): PayloadAPIClient {
        if (!PayloadAPIClient.instance) {
            PayloadAPIClient.instance = new PayloadAPIClient();
        }
        return PayloadAPIClient.instance;
    }

    /**
     * Get all topics
     * Fetches with locale=all to get all translations
     */
    async getTopics(): Promise<PayloadListResponse<Topic>> {
        try {
            const response = await fetch(`${API_URL}/topics?limit=100&locale=all`);
            if (!response.ok) {
                throw new Error(`Failed to fetch topics: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching topics:', error);
            return {
                docs: [],
                totalDocs: 0,
                limit: 100,
                totalPages: 1,
                page: 1,
                pagingCounter: 1,
                hasPrevPage: false,
                hasNextPage: false,
                prevPage: null,
                nextPage: null,
            };
        }
    }

    /**
     * Get topic by ID
     */
    async getTopicById(id: string): Promise<Topic | null> {
        try {
            const response = await fetch(`${API_URL}/topics/${id}?locale=all`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`Failed to fetch topic ${id}: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching topic ${id}:`, error);
            return null;
        }
    }

    /**
     * Get topic by slug
     */
    async getTopicBySlug(slug: string): Promise<Topic | null> {
        try {
            const response = await fetch(`${API_URL}/topics?where[slug][equals]=${slug}&locale=all`);
            if (!response.ok) {
                throw new Error(`Failed to fetch topic by slug ${slug}: ${response.statusText}`);
            }
            const data: PayloadListResponse<Topic> = await response.json();
            return data.docs[0] || null;
        } catch (error) {
            console.error(`Error fetching topic by slug ${slug}:`, error);
            return null;
        }
    }

    /**
     * Get timeline events for a topic
     */
    async getTimelineEvents(topicSlug: string, language: Language = 'en'): Promise<TimelineEvent[]> {
        // Check cache
        const cacheKey = `${topicSlug}-${language}`; // Cache key still includes language although we fetch all
        if (this.timelineCache.has(cacheKey)) {
            return this.timelineCache.get(cacheKey)!;
        }

        try {
            // First get the topic to get its ID (needed for relationship query if we can't query by related slug directly easily)
            // Actually Payload allows querying related fields: where[topic.slug][equals]=...
            // But let's use the slug directly if possible.

            const response = await fetch(`${API_URL}/timeline-events?where[topic.slug][equals]=${topicSlug}&limit=100&sort=order&locale=all`);

            if (!response.ok) {
                throw new Error(`Failed to fetch timeline events: ${response.statusText}`);
            }

            const data: PayloadListResponse<TimelineEvent> = await response.json();
            const events = data.docs;

            // Cache the result
            this.timelineCache.set(cacheKey, events);

            return events;
        } catch (error) {
            console.error(`Error fetching timeline events for ${topicSlug}:`, error);
            return [];
        }
    }

    /**
     * Clear timeline cache
     */
    clearCache(): void {
        this.timelineCache.clear();
    }

    /**
     * Get media outlets by region
     */
    async getMediaOutlets(region?: 'international' | 'us'): Promise<MediaOutlet[]> {
        try {
            let url = `${API_URL}/media-outlets?limit=100&sort=order`;
            if (region) {
                url += `&where[region][equals]=${region}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch media outlets: ${response.statusText}`);
            }
            const data: PayloadListResponse<MediaOutlet> = await response.json();
            return data.docs;
        } catch (error) {
            console.error('Error fetching media outlets:', error);
            return [];
        }
    }
}

/**
 * Get the singleton API client instance
 */
export const payloadAPI = PayloadAPIClient.getInstance();

/**
 * Helper function to get localized field value
 */
export const getLocalizedValue = <T>(field: Record<Language, T> | undefined, language: Language): T | undefined => {
    if (!field) return undefined;
    return field[language] || field.en;
};

/**
 * Payload CMS API Service
 * 
 * This service provides an API-compatible layer that works with Payload CMS data structure.
 * Currently uses mock data, but can be easily swapped to fetch from a real Payload API.
 */

import type { Topic, TimelineEvent, Language, PayloadListResponse } from '../types/payload-types';
import { payloadTopics } from '../data/payloadTopics';

// Import the existing timeline data to convert it
import { getTopicData as getOldTopicData } from './dataService';
import { topics as oldTopics } from '../data/topics';

/**
 * Payload CMS API Client
 * Simulates Payload CMS REST API responses
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
     */
    async getTopics(): Promise<PayloadListResponse<Topic>> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 50));

        return {
            docs: payloadTopics,
            totalDocs: payloadTopics.length,
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

    /**
     * Get topic by ID
     */
    async getTopicById(id: string): Promise<Topic | null> {
        await new Promise(resolve => setTimeout(resolve, 50));
        return payloadTopics.find(t => t.id === id) || null;
    }

    /**
     * Get topic by slug
     */
    async getTopicBySlug(slug: string): Promise<Topic | null> {
        await new Promise(resolve => setTimeout(resolve, 50));
        return payloadTopics.find(t => t.slug === slug) || null;
    }

    /**
     * Get timeline events for a topic
     * This method converts the old format data to Payload format on-the-fly
     */
    async getTimelineEvents(topicSlug: string, language: Language = 'en'): Promise<TimelineEvent[]> {
        await new Promise(resolve => setTimeout(resolve, 50));

        // Find the topic
        const topic = payloadTopics.find(t => t.slug === topicSlug);
        if (!topic) return [];

        // Check cache
        const cacheKey = `${topicSlug}-${language}`;
        if (this.timelineCache.has(cacheKey)) {
            return this.timelineCache.get(cacheKey)!;
        }

        // Find old topic to get data
        const oldTopic = oldTopics.find(t => t.id === topicSlug);
        if (!oldTopic) return [];

        try {
            // Get old format data
            const oldEvents = await getOldTopicData(oldTopic, language);

            // Convert to Payload format
            const payloadEvents: TimelineEvent[] = oldEvents.map((event, index) => {
                // Create fully localized event
                const localizedEvent: TimelineEvent = {
                    id: `evt-${topic.id}-${index + 1}`,
                    topic: topic.id,
                    date: event.title,
                    title: { en: event.title, es: event.title, ja: event.title, ko: event.title, zh: event.title },
                    cardTitle: { en: event.cardTitle, es: event.cardTitle, ja: event.cardTitle, ko: event.cardTitle, zh: event.cardTitle },
                    cardSubtitle: { en: event.cardSubtitle, es: event.cardSubtitle, ja: event.cardSubtitle, ko: event.cardSubtitle, zh: event.cardSubtitle },
                    cardDetailedText: { en: event.cardDetailedText, es: event.cardDetailedText, ja: event.cardDetailedText, ko: event.cardDetailedText, zh: event.cardDetailedText },
                    mediaSource: event.mediaSource,
                    media: event.media,
                    order: index + 1,
                    _status: 'published',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                };

                return localizedEvent;
            });

            // Cache the result
            this.timelineCache.set(cacheKey, payloadEvents);

            return payloadEvents;
        } catch (error) {
            console.error(`Error fetching timeline events for ${topicSlug}:`, error);
            return [];
        }
    }

    /**
     * Clear timeline cache (useful for development)
     */
    clearCache(): void {
        this.timelineCache.clear();
    }
}

/**
 * Get the singleton API client instance
 */
export const payloadAPI = PayloadAPIClient.getInstance();

/**
 * Helper function to get localized field value
 */
export const getLocalizedValue = <T>(field: Record<Language, T>, language: Language): T => {
    return field[language] || field.en;
};

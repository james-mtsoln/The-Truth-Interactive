/**
 * Payload CMS Type Definitions
 * 
 * These types match the structure that Payload CMS would return from its API
 * for Topics and Timeline Events with localized content.
 */

export type Language = 'en' | 'es' | 'ja' | 'ko' | 'zh';

/**
 * Payload CMS Localization structure
 * Each localized field is stored with language codes as keys
 */
export interface LocalizedField<T = string> {
    en: T;
    es: T;
    ja: T;
    ko: T;
    zh: T;
}

/**
 * Media Source (referenced in timeline events)
 */
export interface MediaSource {
    id: string;
    name: string;
    icon?: string;
    url?: string;
}

/**
 * Topic Collection
 * Represents a news topic positioned on the globe
 */
export interface Topic {
    id: string;
    title: LocalizedField;
    slug: string;
    showInViewA?: boolean; // Toggle to show/hide on globe in View A
    summary: LocalizedField;
    type: 'environment' | 'technology' | 'economy' | 'health' | 'conflict' | 'science';
    location: {
        lat: number;
        lon: number;
    };
    _status: 'draft' | 'published';
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
}

/**
 * Timeline Event Collection
 * Represents a single event in a topic's timeline
 */
export interface TimelineEvent {
    id: string;
    topic: string | Topic; // Relationship - can be populated or just ID
    title: LocalizedField;
    cardTitle: LocalizedField;
    cardSubtitle: LocalizedField;
    cardDetailedText: LocalizedField;
    date: string; // Event date (can be year, month, or specific date)
    mediaSource?: string | MediaSource; // Optional relationship to media source
    media?: {
        type: 'IMAGE' | 'VIDEO';
        source: {
            url: string;
        };
    };
    newsPerspective?: LocalizedField;
    mediaBias?: LocalizedField;
    diverseViewpoint?: LocalizedField;
    order: number; // For sorting events chronologically
    _status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
}

/**
 * Payload API List Response
 * Standard Payload CMS pagination structure
 */
export interface PayloadListResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

/**
 * Payload API Single Document Response
 */
export interface PayloadDocumentResponse<T> {
    doc: T;
}

/**
 * Helper type for getting localized content
 */
export type GetLocalizedContent<T extends { [K in Language]: any }> = (
    field: T,
    language: Language
) => T[Language];

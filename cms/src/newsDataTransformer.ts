import type { NewsArticle, NewsEvent } from './newsApiService'

/**
 * Data transformation utilities
 * Converts NewsAPI (Event Registry) data to Payload CMS TimelineEvents format
 */

/**
 * Extract date from NewsAPI article
 * Converts ISO datetime to simple date string
 */
export function extractDate(article: NewsArticle): string {
    if (article.date) {
        return article.date // Already in YYYY-MM-DD format
    }
    if (article.dateTime) {
        // Extract date from datetime (e.g., "2024-12-05T10:30:00Z" -> "2024-12-05")
        return article.dateTime.split('T')[0]
    }
    return new Date().toISOString().split('T')[0]
}

/**
 * Create a concise summary from article body
 * Limits to first 200 characters
 */
export function createSummary(body: string, maxLength: number = 200): string {
    if (!body) return ''

    const cleaned = body.replace(/\s+/g, ' ').trim()

    if (cleaned.length <= maxLength) {
        return cleaned
    }

    // Try to cut at sentence boundary
    const truncated = cleaned.substring(0, maxLength)
    const lastPeriod = truncated.lastIndexOf('.')
    const lastExclamation = truncated.lastIndexOf('!')
    const lastQuestion = truncated.lastIndexOf('?')

    const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion)

    if (lastSentenceEnd > maxLength * 0.6) {
        return truncated.substring(0, lastSentenceEnd + 1)
    }

    return truncated + '...'
}

/**
 * Transform NewsAPI article to TimelineEvent data structure
 */
export interface TimelineEventData {
    date: string
    title: string
    cardTitle: string
    cardSubtitle: string
    cardDetailedText: string
    mediaSource: string
    sourceUrl: string
    sentiment?: number
    apiSource: string
    publishedDate: string
    order?: number
}

export function transformArticleToTimelineEvent(
    article: NewsArticle,
    order?: number
): TimelineEventData {
    const date = extractDate(article)
    const summary = createSummary(article.body || '', 300)

    return {
        date: date,
        title: article.title || 'Untitled',
        cardTitle: article.title || 'Untitled',
        cardSubtitle: article.source?.title || 'Unknown Source',
        cardDetailedText: summary,
        mediaSource: article.source?.title || 'Unknown Source',
        sourceUrl: article.url || '',
        sentiment: article.sentiment,
        apiSource: 'newsapi',
        publishedDate: article.dateTime || date,
        order: order,
    }
}

/**
 * Transform NewsAPI event to multiple TimelineEvent entries
 * Each article in the event becomes a separate timeline event
 */
export function transformEventToTimelineEvents(
    event: NewsEvent,
    maxArticles: number = 5
): TimelineEventData[] {
    const events: TimelineEventData[] = []

    // Use the articles from the event
    const articles = event.articles?.slice(0, maxArticles) || []

    articles.forEach((article, index) => {
        events.push(transformArticleToTimelineEvent(article, index))
    })

    return events
}

/**
 * Deduplicate timeline events based on title and date
 * Returns unique events
 */
export function deduplicateEvents(events: TimelineEventData[]): TimelineEventData[] {
    const seen = new Set<string>()
    const unique: TimelineEventData[] = []

    for (const event of events) {
        const key = `${event.title.toLowerCase()}_${event.date}`
        if (!seen.has(key)) {
            seen.add(key)
            unique.push(event)
        }
    }

    return unique
}

/**
 * Map topic keywords for better NewsAPI search
 * Helps refine searches for specific topics
 */
export const TOPIC_KEYWORD_MAP: Record<string, string[]> = {
    'climate-change': ['climate change', 'global warming', 'carbon emissions', 'climate crisis'],
    'ai-regulation': ['artificial intelligence regulation', 'AI policy', 'AI ethics', 'AI governance'],
    'global-economy': ['global economy', 'economic trends', 'financial markets', 'world economy'],
    'renewable-energy': ['renewable energy', 'solar power', 'wind energy', 'clean energy'],
    'covid-19': ['COVID-19', 'coronavirus', 'pandemic', 'COVID vaccine'],
    'ukraine-conflict': ['Ukraine war', 'Russia Ukraine', 'Ukraine conflict'],
    'space-exploration': ['space exploration', 'Mars mission', 'NASA', 'SpaceX'],
    'cybersecurity': ['cybersecurity', 'cyber attack', 'data breach', 'hacking'],
    'wang-fuk-court-fire': ['Wang Fuk Court fire', 'Hong Kong fire', 'residential fire Hong Kong'],
}

/**
 * Get search keywords for a topic slug
 */
export function getTopicKeywords(slug: string): string[] {
    return TOPIC_KEYWORD_MAP[slug] || [slug.replace(/-/g, ' ')]
}

/**
 * Calculate date range for news fetching
 * @param days - Number of days back from today
 */
export function getDateRange(days: number = 30): { dateStart: string; dateEnd: string } {
    const end = new Date()
    const start = new Date()
    start.setDate(start.getDate() - days)

    return {
        dateStart: start.toISOString().split('T')[0],
        dateEnd: end.toISOString().split('T')[0],
    }
}

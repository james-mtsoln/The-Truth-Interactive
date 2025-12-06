import 'dotenv/config'
import { EventRegistry, QueryArticlesIter, QueryEventsIter } from 'eventregistry'

/**
 * NewsAPI Service
 * Wrapper around Event Registry API for fetching news articles and events
 */

export interface NewsArticle {
    uri: string
    title: string
    body?: string
    date?: string
    dateTime?: string
    source?: {
        uri: string
        title: string
    }
    url?: string
    sentiment?: number
    language?: string
    location?: {
        label?: {
            eng?: string
        }
    }
}

export interface NewsEvent {
    uri: string
    title?: {
        eng?: string
    }
    summary?: {
        eng?: string
    }
    eventDate?: string
    articles?: NewsArticle[]
    concepts?: Array<{
        uri: string
        label?: {
            eng?: string
        }
    }>
}

export class NewsAPIService {
    private er: EventRegistry
    private initialized: boolean = false

    constructor(apiKey?: string) {
        const key = apiKey || process.env.NEWSAPI_KEY
        if (!key) {
            throw new Error('NewsAPI key not provided. Set NEWSAPI_KEY environment variable.')
        }
        this.er = new EventRegistry({ apiKey: key })
    }

    /**
     * Initialize the service (for any async setup if needed)
     */
    async initialize(): Promise<void> {
        // Could add connection tests here if needed
        this.initialized = true
    }

    /**
     * Search for articles by keywords
     * @param keywords - Search terms
     * @param options - Additional search options
     */
    async searchArticles(
        keywords: string | string[],
        options: {
            dateStart?: string // YYYY-MM-DD format
            dateEnd?: string // YYYY-MM-DD format
            lang?: string
            maxArticles?: number
            sortBy?: 'date' | 'rel' | 'sourceImportance'
        } = {}
    ): Promise<NewsArticle[]> {
        const {
            dateStart,
            dateEnd,
            lang = 'eng',
            maxArticles = 10,
            sortBy = 'date'
        } = options

        const articles: NewsArticle[] = []
        let conceptUri: string | undefined

        try {
            // If keywords is a string, try to get concept URI for better results
            if (typeof keywords === 'string') {
                try {
                    conceptUri = await this.er.getConceptUri(keywords)
                } catch (err) {
                    console.log(`Could not find concept for "${keywords}", using keyword search`)
                }
            }

            const queryParams: any = {
                lang,
                sortBy,
            }

            if (conceptUri) {
                queryParams.conceptUri = conceptUri
            } else {
                queryParams.keyword = Array.isArray(keywords) ? keywords.join(' OR ') : keywords
            }

            if (dateStart) queryParams.dateStart = dateStart
            if (dateEnd) queryParams.dateEnd = dateEnd

            const query = new QueryArticlesIter(this.er, queryParams)

            let count = 0
            await query.execQuery((article: any) => {
                if (count < maxArticles) {
                    articles.push(article as NewsArticle)
                    count++
                } else {
                    return false // Stop iteration
                }
            })

            return articles
        } catch (error) {
            console.error('Error searching articles:', error)
            throw error
        }
    }

    /**
     * Search for events by keywords
     * @param keywords - Search terms
     * @param options - Additional search options
     */
    async searchEvents(
        keywords: string | string[],
        options: {
            dateStart?: string
            dateEnd?: string
            lang?: string
            maxEvents?: number
        } = {}
    ): Promise<NewsEvent[]> {
        const {
            dateStart,
            dateEnd,
            lang = 'eng',
            maxEvents = 10
        } = options

        const events: NewsEvent[] = []
        let conceptUri: string | undefined

        try {
            // Try to get concept URI for better results
            if (typeof keywords === 'string') {
                try {
                    conceptUri = await this.er.getConceptUri(keywords)
                } catch (err) {
                    console.log(`Could not find concept for "${keywords}", using keyword search`)
                }
            }

            const queryParams: any = {
                lang,
            }

            if (conceptUri) {
                queryParams.conceptUri = conceptUri
            } else {
                queryParams.keyword = Array.isArray(keywords) ? keywords.join(' OR ') : keywords
            }

            if (dateStart) queryParams.dateStart = dateStart
            if (dateEnd) queryParams.dateEnd = dateEnd

            const query = new QueryEventsIter(this.er, queryParams)

            let count = 0
            await query.execQuery((event: any) => {
                if (count < maxEvents) {
                    events.push(event as NewsEvent)
                    count++
                } else {
                    return false // Stop iteration
                }
            })

            return events
        } catch (error) {
            console.error('Error searching events:', error)
            throw error
        }
    }

    /**
     * Get concept URI for a keyword (useful for more accurate searches)
     */
    async getConceptUri(keyword: string): Promise<string | undefined> {
        try {
            return await this.er.getConceptUri(keyword)
        } catch (error) {
            console.warn(`Could not find concept URI for "${keyword}"`)
            return undefined
        }
    }

    /**
     * Get category URI for a category name
     */
    async getCategoryUri(categoryName: string): Promise<string | undefined> {
        try {
            return await this.er.getCategoryUri(categoryName)
        } catch (error) {
            console.warn(`Could not find category URI for "${categoryName}"`)
            return undefined
        }
    }
}

// Export a singleton instance
let newsAPIInstance: NewsAPIService | null = null

export function getNewsAPIService(apiKey?: string): NewsAPIService {
    if (!newsAPIInstance) {
        newsAPIInstance = new NewsAPIService(apiKey)
    }
    return newsAPIInstance
}

import 'dotenv/config'
import config from './payload.config'
import { getPayload } from 'payload'
import { getNewsAPIService } from './newsApiService'
import {
    transformArticleToTimelineEvent,
    getTopicKeywords,
    getDateRange,
    deduplicateEvents,
    type TimelineEventData,
} from './newsDataTransformer'

/**
 * Fetch News Data Script
 * Fetches news articles from NewsAPI and inserts them into Payload CMS as TimelineEvents
 */

interface FetchOptions {
    topicSlugs?: string[]  // Specific topics to fetch for, or all if not provided
    daysBack?: number      // How many days back to search (default 30)
    maxArticlesPerTopic?: number  // Max articles to fetch per topic (default 10)
    dryRun?: boolean       // If true, don't insert into DB, just log what would be inserted
}

async function fetchNewsData(options: FetchOptions = {}) {
    const {
        topicSlugs,
        daysBack = 30,
        maxArticlesPerTopic = 10,
        dryRun = false,
    } = options

    console.log('🚀 Starting NewsAPI data fetch...')
    console.log(`Options: ${JSON.stringify(options, null, 2)}`)

    // Initialize Payload CMS
    const payload = await getPayload({ config })
    console.log('✅ Payload CMS initialized')

    // Initialize NewsAPI service
    const newsAPI = getNewsAPIService()
    console.log('✅ NewsAPI service initialized')

    // Get date range
    const { dateStart, dateEnd } = getDateRange(daysBack)
    console.log(`📅 Date range: ${dateStart} to ${dateEnd}`)

    // Fetch all topics or specific ones
    let topicsToProcess: any[] = []

    if (topicSlugs && topicSlugs.length > 0) {
        // Fetch specific topics
        for (const slug of topicSlugs) {
            const result = await payload.find({
                collection: 'topics',
                where: {
                    slug: { equals: slug },
                },
            })
            if (result.docs.length > 0) {
                topicsToProcess.push(result.docs[0])
            } else {
                console.warn(`⚠️  Topic not found: ${slug}`)
            }
        }
    } else {
        // Fetch all topics
        const result = await payload.find({
            collection: 'topics',
            limit: 100,
        })
        topicsToProcess = result.docs
    }

    console.log(`📝 Processing ${topicsToProcess.length} topics`)

    let totalArticlesFetched = 0
    let totalEventsInserted = 0

    // Process each topic
    for (const topic of topicsToProcess) {
        console.log(`\n🔍 Processing topic: ${topic.slug} (${topic.title})`)

        // Get search keywords for this topic
        const keywords = getTopicKeywords(topic.slug)
        console.log(`   Keywords: ${keywords.join(', ')}`)

        try {
            // Search for articles
            const articles = await newsAPI.searchArticles(keywords[0], {
                dateStart,
                dateEnd,
                lang: 'eng',
                maxArticles: maxArticlesPerTopic,
                sortBy: 'date',
            })

            console.log(`   Found ${articles.length} articles`)
            totalArticlesFetched += articles.length

            if (articles.length === 0) {
                continue
            }

            // Transform articles to timeline events
            let timelineEvents = articles.map((article, index) =>
                transformArticleToTimelineEvent(article, index)
            )

            // Deduplicate
            timelineEvents = deduplicateEvents(timelineEvents)
            console.log(`   After deduplication: ${timelineEvents.length} events`)

            if (dryRun) {
                console.log('   [DRY RUN] Would insert:')
                timelineEvents.slice(0, 3).forEach((event, i) => {
                    console.log(`     ${i + 1}. ${event.date} - ${event.title.substring(0, 60)}...`)
                })
                if (timelineEvents.length > 3) {
                    console.log(`     ... and ${timelineEvents.length - 3} more`)
                }
                continue
            }

            // Check for existing events to avoid duplicates
            let insertedCount = 0
            for (const eventData of timelineEvents) {
                // Check if this article already exists
                const existing = await payload.find({
                    collection: 'timeline-events',
                    where: {
                        and: [
                            { topic: { equals: topic.id } },
                            { title: { equals: eventData.title } },
                            { date: { equals: eventData.date } },
                        ],
                    },
                })

                if (existing.docs.length === 0) {
                    // Insert new event
                    await payload.create({
                        collection: 'timeline-events',
                        data: {
                            topic: topic.id,
                            ...eventData,
                        },
                    })
                    insertedCount++
                } else {
                    console.log(`   ⏭️  Skipping duplicate: ${eventData.title.substring(0, 50)}...`)
                }
            }

            console.log(`   ✅ Inserted ${insertedCount} new events`)
            totalEventsInserted += insertedCount

        } catch (error) {
            console.error(`   ❌ Error processing topic ${topic.slug}:`, error)
        }
    }

    console.log('\n' + '='.repeat(60))
    console.log('📊 Summary:')
    console.log(`   Topics processed: ${topicsToProcess.length}`)
    console.log(`   Articles fetched: ${totalArticlesFetched}`)
    console.log(`   Events inserted: ${totalEventsInserted}`)
    console.log('='.repeat(60))

    if (dryRun) {
        console.log('\n⚠️  This was a DRY RUN - no data was inserted into the database')
    }

    console.log('\n✅ NewsAPI data fetch complete!')
    process.exit(0)
}

// Parse command line arguments
const args = process.argv.slice(2)
const options: FetchOptions = {}

for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg === '--dry-run') {
        options.dryRun = true
    } else if (arg === '--topics' && args[i + 1]) {
        options.topicSlugs = args[i + 1].split(',')
        i++
    } else if (arg === '--days' && args[i + 1]) {
        options.daysBack = parseInt(args[i + 1], 10)
        i++
    } else if (arg === '--max' && args[i + 1]) {
        options.maxArticlesPerTopic = parseInt(args[i + 1], 10)
        i++
    }
}

// Run the script
fetchNewsData(options)

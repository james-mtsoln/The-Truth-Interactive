import 'dotenv/config'
import { getNewsAPIService } from './newsApiService'
import { getDateRange } from './newsDataTransformer'

/**
 * Quick test script to verify NewsAPI connectivity
 */

async function testNewsAPI() {
    console.log('🧪 Testing NewsAPI connection...\n')

    const newsAPI = getNewsAPIService()
    const { dateStart, dateEnd } = getDateRange(30)

    console.log(`Date range: ${dateStart} to ${dateEnd}`)
    console.log('API Key:', process.env.NEWSAPI_KEY ? '✅ Set' : '❌ Missing')
    console.log('')

    // Test 1: Simple keyword search
    console.log('Test 1: Searching for "climate" articles...')
    try {
        const articles = await newsAPI.searchArticles('climate', {
            dateStart,
            dateEnd,
            lang: 'eng',
            maxArticles: 3,
            sortBy: 'date',
        })
        console.log(`✅ Found ${articles.length} articles`)
        if (articles.length > 0) {
            console.log('Sample article:')
            console.log(`  - Title: ${articles[0].title}`)
            console.log(`  - Source: ${articles[0].source?.title || 'Unknown'}`)
            console.log(`  - Date: ${articles[0].date}`)
            console.log(`  - URL: ${articles[0].url}`)
        }
    } catch (error) {
        console.error('❌ Error:', error)
    }

    console.log('')

    // Test 2: Try with different date range (last 7 days)
    console.log('Test 2: Searching for "technology" articles (last 7 days)...')
    try {
        const { dateStart: start7, dateEnd: end7 } = getDateRange(7)
        const articles = await newsAPI.searchArticles('technology', {
            dateStart: start7,
            dateEnd: end7,
            lang: 'eng',
            maxArticles: 3,
            sortBy: 'date',
        })
        console.log(`✅ Found ${articles.length} articles`)
        articles.slice(0, 2).forEach((article, i) => {
            console.log(`  ${i + 1}. ${article.title?.substring(0, 60)}...`)
        })
    } catch (error) {
        console.error('❌ Error:', error)
    }

    console.log('\n✅ Test complete!')
    process.exit(0)
}

testNewsAPI()

# NewsAPI Integration

This project integrates with [NewsAPI.ai](https://newsapi.ai/) (Event Registry) to fetch real-world news articles and populate the Payload CMS timeline events.

## Quick Start

### Prerequisites

1. Create a free account at [newsapi.ai](https://newsapi.ai/) to obtain an API key
2. Add your API key to `cms/.env`:

   ```bash
   NEWSAPI_KEY=your_api_key_here
   ```

### Fetch News Data

```bash
cd cms

# Test with dry-run (no database changes)
npm run fetch-news -- --dry-run

# Fetch for all topics
npm run fetch-news

# Fetch for specific topics
npm run fetch-news -- --topics climate-change,ai-regulation

# Custom options
npm run fetch-news -- --days 7 --max 5
```

### Command Options

- `--dry-run`: Test mode without database insertion
- `--topics <slugs>`: Comma-separated topic slugs to fetch for
- `--days <number>`: Number of days back to search (default: 30)
- `--max <number>`: Maximum articles per topic (default: 10)

## Architecture

### Core Modules

1. **newsApiService.ts** - Wrapper around Event Registry SDK
   - Search articles by keywords, date range, language
   - Search events (grouped articles)
   - Get concept URIs for better search accuracy

2. **newsDataTransformer.ts** - Data transformation utilities
   - Convert NewsAPI articles to TimelineEvents format
   - Deduplicate events
   - Map topics to search keywords

3. **fetchNewsData.ts** - Main fetch script
   - Loads topics from Payload CMS
   - Fetches relevant news for each topic
   - Transforms and inserts into database
   - Handles duplicates and errors

### Schema Changes

Added to `TimelineEvents` collection:

- `sourceUrl` - Link to original article
- `sentiment` - Sentiment score (-1 to 1)
- `apiSource` - Data source tracker ("manual" or "newsapi")
- `publishedDate` - Original publication date

## Troubleshooting

### Free Tier Limitations

NewsAPI.ai free accounts have limitations:

- 2,000 tokens for testing
- Access to last 30 days of articles
- May require email verification
- Regional restrictions may apply

If you're getting 0 results, check your account status in the [NewsAPI dashboard](https://newsapi.ai/dashboard).

### Common Issues

**API Key Error**: Ensure `NEWSAPI_KEY` is set in `cms/.env`

**Type Errors**: Run `npm run generate:types` after schema changes

**Rate Limits**: Reduce `--max` value or upgrade API plan

## Development

See [walkthrough.md](file:///.gemini/antigravity/brain/6c07ffc9-0b8b-4187-b536-6d6fa1c5027b/walkthrough.md) for detailed implementation documentation.

## Next Steps

1. Verify your NewsAPI account is activated
2. Test with: `npm run fetch-news -- --dry-run --topics climate-change --max 3`
3. Review inserted events in Payload Admin: `http://localhost:3000/admin`
4. Set up scheduled fetches (cron job) for regular updates
5. (Optional) Add multilingual support with translation API

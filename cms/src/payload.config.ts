import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Topics } from './collections/Topics'
import { TimelineEvents } from './collections/TimelineEvents'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media, Topics, TimelineEvents],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || 'super-secret-key-please-change',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    localization: {
        locales: ['en', 'es', 'ja', 'ko', 'zh'],
        defaultLocale: 'en',
        fallback: true,
    },
    sharp,
    plugins: [
        // Add plugins here
    ],
    cors: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:3000',
        'https://the-truth-interactive.vercel.app',
        'https://the-truth-interactive-*.vercel.app',
    ],
    csrf: [
        process.env.FRONTEND_URL || 'http://localhost:5173',
        'http://localhost:3000',
        'https://the-truth-interactive.vercel.app',
        'https://the-truth-interactive-*.vercel.app',
    ],
})

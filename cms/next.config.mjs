import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Disable ESLint during build to avoid deprecated options error
        ignoreDuringBuilds: true,
    },
}

export default withPayload(nextConfig)

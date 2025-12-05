import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: false,
    experimental: {},
}

export default withPayload(nextConfig)

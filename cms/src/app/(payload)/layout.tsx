/* THIS FILE IS USED FOR PAYLOAD ADMIN UI */
import config from '@/payload.config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from '@/importMap'
import { serverFunction } from './server-functions'
import React from 'react'

type Args = {
    children: React.ReactNode
}

const Layout = ({ children }: Args) => (
    <RootLayout
        config={config}
        importMap={importMap}
        serverFunction={serverFunction}
    >
        {children}
    </RootLayout>
)

export default Layout

// pages/index.tsx
import React from 'react'
import dynamic from 'next/dynamic'

const AppBuilderWrapper = dynamic(
    () => import('../src/components/AppBuilderWrapper'),
    {
        ssr: false,
        loading: () => <div>Loading...</div>
    }
)

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8"></h1>
            <AppBuilderWrapper />
        </div>
    )
}

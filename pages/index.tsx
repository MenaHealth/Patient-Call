'use client'

import dynamic from 'next/dynamic'
import { LoadingSpinner } from '../src/components/LoadingSpinner'

const AppBuilderWrapper = dynamic(
    () => import('../src/components/AppBuilderWrapper'),
    {
        ssr: false,
        loading: () => <LoadingSpinner />
    }
)

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Welcome to Med-Flow</h1>
            <AppBuilderWrapper />
        </div>
    )
}
'use client'

import { useEffect, useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'

interface AgoraAppBuilderType {
    View: React.ComponentType<any>
}

export default function AppBuilderWrapper() {
    const [AgoraAppBuilder, setAgoraAppBuilder] = useState<AgoraAppBuilderType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadAgoraAppBuilder = async () => {
            try {
                console.log('Attempting to load @appbuilder/react')
                const module = await import('@appbuilder/react')
                console.log('Module loaded:', module)

                if (typeof module.default === 'object' && module.default !== null && 'View' in module.default) {
                    setAgoraAppBuilder(module.default as AgoraAppBuilderType)
                } else {
                    setError('AgoraAppBuilder is not available in the expected format')
                }
            } catch (error) {
                console.error('Failed to load AgoraAppBuilder:', error)
                setError(`Failed to load AgoraAppBuilder: ${error instanceof Error ? error.message : String(error)}`)
            } finally {
                setIsLoading(false)
            }
        }

        loadAgoraAppBuilder()
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error || !AgoraAppBuilder) {
        return (
            <div className="max-w-md mx-auto my-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <h2 className="font-bold mb-2">Error</h2>
                <p>{error || 'App Builder is not available'}</p>
            </div>
        )
    }

    return (
        <div className="w-full h-[550px]">
            <AgoraAppBuilder.View />
        </div>
    )
}
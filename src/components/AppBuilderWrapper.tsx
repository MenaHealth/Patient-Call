// src/components/AppBuilderWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface AgoraAppBuilderType {
    View: React.ComponentType<any>;
}

export default function AppBuilderWrapper() {
    const [AgoraAppBuilder, setAgoraAppBuilder] = useState<AgoraAppBuilderType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAgoraAppBuilder = async () => {
            try {
                const module = await import('@appbuilder/react');
                if (module.default && module.default.View) {
                    setAgoraAppBuilder(module.default as AgoraAppBuilderType);
                } else {
                    setError('AgoraAppBuilder is not available in the expected format');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        loadAgoraAppBuilder();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (AgoraAppBuilder) {
        return (
            <div>
                <AgoraAppBuilder.View />
            </div>
        );
    }

    return null;
}
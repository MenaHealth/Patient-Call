'use client';

import React, { useEffect, useState } from 'react';

interface AgoraAppBuilderType {
    View: React.ComponentType<any>;
}

const AppBuilderWrapper: React.FC = () => {
    const [AgoraAppBuilder, setAgoraAppBuilder] = useState<AgoraAppBuilderType | null>(null);

    useEffect(() => {
        const loadAgoraAppBuilder = async () => {
            try {
                const module = await import('@appbuilder/react');
                setAgoraAppBuilder(module.default as AgoraAppBuilderType);
            } catch (error) {
                console.error('Failed to load AgoraAppBuilder:', error);
            }
        };

        loadAgoraAppBuilder();
    }, []);

    if (!AgoraAppBuilder) {
        return <div>Loading AgoraAppBuilder...</div>;
    }

    return (
        <div style={{ display: "flex", width: "100vw", height: "550px" }}>
            <AgoraAppBuilder.View />
        </div>
    );
};

export default AppBuilderWrapper;
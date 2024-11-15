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
                console.log('Attempting to load @appbuilder/react');
                const module = await import('@appbuilder/react');
                console.log('Module loaded:', module);
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

    console.log('AgoraAppBuilder loaded:', AgoraAppBuilder);

    return (
        <div style={{ display: "flex", width: "100vw", height: "550px" }}>
            {AgoraAppBuilder.View ? <AgoraAppBuilder.View /> : <div>AgoraAppBuilder.View is not available</div>}
        </div>
    );
};

export default AppBuilderWrapper;
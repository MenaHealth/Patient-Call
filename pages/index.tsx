import React from 'react';
import dynamic from 'next/dynamic';

const AppBuilderWrapper = dynamic(
    () => import('../src/components/AppBuilderWrapper'),
    { ssr: false }
);

const Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Med-Flow</h1>
            <AppBuilderWrapper />
        </div>
    );
};

export default Page;
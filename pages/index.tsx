'use client';

import React, { ErrorInfo } from 'react';
import dynamic from 'next/dynamic';

const AppBuilderWrapper = dynamic(
    () => import('../src/components/AppBuilderWrapper'),
    { ssr: false }
);

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
    constructor(props: {children: React.ReactNode}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const Page: React.FC = () => {
    return (
        <ErrorBoundary>
            <div>
                <h1>Welcome to Med-Flow</h1>
                <AppBuilderWrapper />
            </div>
        </ErrorBoundary>
    );
};

export default Page;
import React from 'react'

export function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[550px] gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-sm">Loading Med-Flow...</p>
        </div>
    )
}
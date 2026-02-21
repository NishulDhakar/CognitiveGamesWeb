"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-200 dark:text-gray-800">
                Oops!
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Something went wrong
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                An unexpected error occurred. Please try again or return to the homepage.
            </p>
            <div className="flex gap-4 mt-8">
                <button
                    onClick={reset}
                    className="px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    Try Again
                </button>
                <a
                    href="/"
                    className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}

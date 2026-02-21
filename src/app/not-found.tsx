import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Explore our cognitive games and aptitude practice challenges.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-8xl font-bold text-gray-200 dark:text-gray-800 font-game">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Page Not Found
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Let&apos;s get you back on track.
            </p>
            <div className="flex gap-4 mt-8">
                <Link
                    href="/"
                    className="px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    Go Home
                </Link>
                <Link
                    href="/play/switch-challenge"
                    className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    Play a Game
                </Link>
            </div>
        </div>
    );
}

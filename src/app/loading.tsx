export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-black dark:border-t-white animate-spin" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}

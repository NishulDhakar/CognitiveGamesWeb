'use client';

import { ArrowLeft } from "lucide-react";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center font-game text-2xl sm:text-3xl md:text-4xl">
      Leaderboard Coming Soon Champ 🏆

      <button
        onClick={() => window.location.replace("/")}
        className="hidden md:flex mt-10 items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-[#A35C2D] hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
      >
        <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" /> Back to Dashboard
      </button>
    </div>
  );
}

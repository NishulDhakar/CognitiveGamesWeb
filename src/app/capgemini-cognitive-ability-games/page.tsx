'use client';

import { useState } from "react";
import { Button } from "@/components/ui/ui/button";
import Link from "next/link";
import { gamesData } from "@/data/BlogData";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/ui/separator";

export default function BlogPage() {
  const [openGame, setOpenGame] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Back Button */}
      <div className="hidden md:block px-4 pt-6 sm:pt-8">
        <button
          onClick={() => window.location.replace("/")}
          className="flex  hover:bg-[#A35C2D]  items-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-4 py-2 text-base font-bold tracking-wide text-black shadow-[3px_3px_0px_0px_#000] transition-all duration-200 hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[3px_3px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:px-6 sm:py-2 sm:text-lg"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" /> Back to Dashboard
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Capgemini Game Based Aptitude
        </h1>
        <Separator className="w-full max-w-6xl bg-[#756b60]" />

        <p className="mb-4 mt-6 text-sm sm:text-lg text-gray-700">
          Capgemini has introduced a <strong>Game-Based Aptitude Test</strong> in
          its hiring process. Instead of traditional aptitude questions, candidates
          play <strong>4 randomly selected games</strong> out of 24 available.
          These games measure logical thinking, problem-solving, multitasking,
          memory, and decision-making.
        </p>

        <p className="mb-6 text-gray-700 text-base sm:text-lg">
          Here are some of the most common games that appear in the test. Click{" "}
          <Link href="/capgemini-games" className="text-blue-600 underline">
            here
          </Link>{" "}
          to practice directly.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow mb-8">
          <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 sm:px-4 py-2 text-left">Game</th>
                <th className="border px-2 sm:px-4 py-2 text-left">Type of Questions</th>
                <th className="border px-2 sm:px-4 py-2 text-center">Duration</th>
                <th className="border px-2 sm:px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {gamesData.map((game) => (
                <tr key={game.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-2 sm:px-4 py-3 font-medium">{game.name}</td>
                  <td className="border px-2 sm:px-4 py-3">{game.typeOfQuestions}</td>
                  <td className="border px-2 sm:px-4 py-3 text-center">{game.duration}</td>
                  <td className="border px-2 sm:px-4 py-3 text-center">
                    <Button
                      className="rounded-lg border border-black px-2 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-zinc-100 hover:text-black hover:shadow-md dark:border-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        setOpenGame(openGame === game.id ? null : game.id)
                      }
                    >
                      {openGame === game.id ? "Hide Details" : "View Details"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Details Section */}
        {gamesData.map(
          (game) =>
            openGame === game.id && (
              <div
                key={game.id}
                className="border rounded-xl shadow p-4 sm:p-6 bg-white/70 mb-8"
              >
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{game.name}</h2>
                <p className="text-gray-700 mb-3">{game.description}</p>

                <h3 className="font-medium mb-1">How to Play:</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700 text-sm sm:text-base">
                  {game.howToPlay.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>

                <Link href={game.playLink}>
                  <Button
                    className="gap-2 sm:gap-4 border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:text-white hover:bg-[#A35C2D] hover:shadow-[2px_2px_0px_0px_#000] dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[3px_3px_0px_0px_#757373] dark:hover:shadow-[2px_2px_0px_0px_#757373]"
                  >
                    🎮 Play Game
                  </Button>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

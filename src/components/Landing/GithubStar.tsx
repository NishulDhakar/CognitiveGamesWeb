"use client";

import { useEffect, useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/ui/button";


export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch("https://api.github.com/repos/Nishuldhakar/CognitiveGamesWeb");
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    }

    fetchStars();
  }, []);

  return (
    <div className="z-50 hidden md:block">
      <Link
        href="https://github.com/NishulDhakar/CognitiveGamesWeb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Star NishulDhakar/CognitiveGamesWeb on GitHub">
        <Button
          variant="outline"
            size="lg"
           className=" rounded-xl border border-black  font-semibold transition-all duration-200 hover:bg-zinc-100 hover:text-black hover:shadow-md dark:border-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
          <Star className="w-4 h-4 stroke-black dark:stroke-white" />
          <span>Star</span>
          <span className="px-2 py-0.5 text-xs bg-gray-200 dark:bg-[#2f2f2f] rounded-full font-medium text-black dark:text-white">
            {stars !== null ? stars : "..."}
          </span>
          <ChevronDown className="w-3 h-3 stroke-black dark:stroke-white" />
        </Button>
      </Link>
    </div>
  );
}
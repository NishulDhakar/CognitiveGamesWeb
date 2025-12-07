import { getLeaderboard } from "@/actions/leaderboard";
import LeaderboardClient from "./client";
import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Leaderboard | Cognitive Games",
  description: "View the top performers in our cognitive training games.",
};

export default async function LeaderboardPage(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const game = typeof searchParams.game === 'string' ? searchParams.game : 'overall';

  // Get current user
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const currentUserId = session?.user?.id;

  // Fetch data
  try {
    const data = await getLeaderboard(game === 'overall' ? undefined : game);
    return <LeaderboardClient data={data} gameId={game} currentUserId={currentUserId} />;
  } catch (error) {
    console.error('Failed to fetch leaderboard data:', error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
        <p className="text-red-500">Failed to load leaderboard data. Please try again later.</p>
      </div>
    );
  }
}

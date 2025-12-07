import { getLeaderboard } from "@/actions/leaderboard";
import LeaderboardClient from "./client";
import { Metadata } from "next";

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

  // Fetch data
  const data = await getLeaderboard(game === 'overall' ? undefined : game);

  return <LeaderboardClient data={data} gameId={game} />;
}

'use server';

import prisma from '@/lib/prisma';

export type LeaderboardEntry = {
    rank: number;
    userId: string;
    name: string | null;
    image: string | null;
    score: number;
};

export async function getLeaderboard(gameId?: string): Promise<LeaderboardEntry[]> {
    try {
        if (gameId) {
            // Game-specific leaderboard
            // Get max score per user for this game
            const scores = await (prisma as any).gameScore.groupBy({
                by: ['userId'],
                where: {
                    gameId: gameId,
                },
                _max: {
                    score: true,
                },
                orderBy: {
                    _max: {
                        score: 'desc',
                    },
                },
                take: 50, // Top 50
            });

            // Fetch user details
            const userIds = scores.map((s: any) => s.userId);
            const users = await prisma.user.findMany({
                where: {
                    id: { in: userIds },
                },
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            });

            // Map back to result
            const result = scores
                .map((s: any, index: number) => {
                    const user = users.find((u) => u.id === s.userId);
                    if (!user) return null;
                    return {
                        rank: index + 1,
                        userId: user.id,
                        name: user.name,
                        image: user.image,
                        score: s._max.score || 0,
                    };
                })
                .filter((item: any): item is LeaderboardEntry => item !== null);

            return result;
        } else {
            // Overall Leaderboard (Sum of best scores per game)
            // 1. Get best score for every user on every game
            const allBestScores = await (prisma as any).gameScore.groupBy({
                by: ['userId', 'gameId'],
                _max: {
                    score: true,
                },
            });

            // 2. Sum up best scores per user
            const userTotals = new Map<string, number>();

            allBestScores.forEach((entry: any) => {
                const currentTotal = userTotals.get(entry.userId) || 0;
                userTotals.set(entry.userId, currentTotal + (entry._max.score || 0));
            });

            // 3. Sort by total score
            const sortedUsers = Array.from(userTotals.entries())
                .sort((a, b) => b[1] - a[1])
                .slice(0, 50); // Top 50

            // 4. Fetch user details
            const userIds = sortedUsers.map(([id]) => id);
            const users = await prisma.user.findMany({
                where: {
                    id: { in: userIds },
                },
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            });

            // 5. Construct result
            const result = sortedUsers
                .map(([id, score], index) => {
                    const user = users.find((u) => u.id === id);
                    if (!user) return null;
                    return {
                        rank: index + 1,
                        userId: user.id,
                        name: user.name,
                        image: user.image,
                        score: score,
                    };
                })
                .filter((item): item is LeaderboardEntry => item !== null);

            return result;
        }
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }
}

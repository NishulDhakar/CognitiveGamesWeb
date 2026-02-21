"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

/**
 * Save a game score for the authenticated user.
 */
export async function saveScore(gameId: string, score: number) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session) {
            return { success: false, error: "Unauthorized" };
        }

        await prisma.gameScore.create({
            data: {
                userId: session.user.id,
                gameId,
                score,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to save score:", error);
        return { success: false, error: "Failed to save score" };
    }
}

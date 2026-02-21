"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

/**
 * Get the most recent active poll with its options.
 * Creates a default poll if none exists (first-run seed).
 */
export async function getPoll() {
    try {
        const poll = await prisma.poll.findFirst({
            where: { isActive: true },
            include: {
                options: {
                    orderBy: { label: "asc" },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        if (!poll) {
            const newPoll = await prisma.poll.create({
                data: {
                    question: "Which game you want next?",
                    options: {
                        create: [
                            { label: "Inductive Challenge", votes: 45 },
                            { label: "Grid Challenge", votes: 32 },
                            { label: "Motion Challenge", votes: 28 },
                            { label: "Suggest new game", isInput: true, votes: 12 },
                        ],
                    },
                },
                include: { options: true },
            });
            return newPoll;
        }

        return poll;
    } catch (error) {
        console.error("Error fetching poll:", error);
        return null;
    }
}

/**
 * Submit a vote for a poll option.
 */
export async function submitVote(optionId: string, suggestion?: string) {
    try {
        await prisma.pollOption.update({
            where: { id: optionId },
            data: {
                votes: { increment: 1 },
            },
        });

        if (suggestion) {
            console.log("New game suggestion:", suggestion);
        }

        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error submitting vote:", error);
        return { success: false, error: "Failed to submit vote" };
    }
}

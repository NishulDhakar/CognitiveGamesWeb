"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getPoll() {
    try {
        // Get the most recent active poll
        const poll = await prisma.poll.findFirst({
            where: { isActive: true },
            include: {
                options: {
                    orderBy: { label: "asc" }, // Or any other sorting you prefer
                },
            },
            orderBy: { createdAt: "desc" },
        });

        if (!poll) {
            // If no poll exists, create a default one (seed logic)
            // This is useful for first run so the component has something to show
            const newPoll = await prisma.poll.create({
                data: {
                    question: "Which game you want next?",
                    options: {
                        create: [
                            { label: "Inductive Challenge", votes: 45 },
                            { label: "Grid Challenge", votes: 32 },
                            { label: "Motion Challenge", votes: 28 },
                            { label: "Suggest new game", isInput: true, votes: 12 },
                        ]
                    }
                },
                include: { options: true }
            });
            return newPoll;
        }

        return poll;
    } catch (error) {
        console.error("Error fetching poll:", error);
        return null;
    }
}

export async function submitVote(optionId: string, suggestion?: string) {
    try {
        // Basic verification - if suggestion input, maybe log it separately?
        // For now we just count the vote on the option.

        // Increment vote count
        await prisma.pollOption.update({
            where: { id: optionId },
            data: {
                votes: { increment: 1 },
            },
        });

        if (suggestion) {
            // TODO: Store suggestion in a separate table if needed
            console.log("New game suggestion:", suggestion);
        }

        revalidatePath("/"); // Revalidate the home page so updated counts show up
        return { success: true };
    } catch (error) {
        console.error("Error submitting vote:", error);
        return { success: false, error: "Failed to submit vote" };
    }
}

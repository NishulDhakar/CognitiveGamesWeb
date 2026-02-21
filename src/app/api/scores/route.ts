
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const scores = await prisma.gameScore.findMany({
            where: {
                userId: session.user.id
            },
            orderBy: {
                score: 'desc'
            },
            take: 10 
        });

        return NextResponse.json(scores);
    } catch (error) {
        console.error("Error fetching scores:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { gameId, score } = body;

        if (!gameId || typeof score !== 'number') {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }

        const newScore = await prisma.gameScore.create({
            data: {
                userId: session.user.id,
                gameId,
                score
            }
        });

        return NextResponse.json(newScore);
    } catch (error) {
        console.error("Error saving score:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

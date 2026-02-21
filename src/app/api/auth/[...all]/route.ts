import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextResponse } from "next/server";

export const { POST, GET } = toNextJsHandler(auth);

export async function OPTIONS(request: Request) {
    const allowedOrigins = [
        "http://localhost:3001",
        "http://localhost:3001",
        "http://localhost:8081",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
        "http://10.0.2.2:3000",
        "http://10.0.2.2:3001",
    ];
    const origin = request.headers.get("origin");

    // Allow any localhost, 127.0.0.1, or 10.0.2.2 origin for development
    let allowOrigin = origin;
    if (origin) {
        if (
            origin.startsWith("http://localhost") ||
            origin.startsWith("http://127.0.0.1") ||
            origin.startsWith("http://10.0.2.2") ||
            allowedOrigins.includes(origin)
        ) {
            allowOrigin = origin;
        } else {
            allowOrigin = allowedOrigins[0];
        }
    } else {
        allowOrigin = allowedOrigins[0];
    }

    return new NextResponse(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": allowOrigin,
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
            "Access-Control-Allow-Credentials": "true",
        },
    });
}
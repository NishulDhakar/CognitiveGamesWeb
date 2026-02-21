"use server";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";

/**
 * Server-side sign out action.
 */
export async function signOut() {
    try {
        const res = await auth.api.signOut({
            headers: await headers(),
        });
        return {
            status: true,
            data: res,
        };
    } catch (error) {
        console.log(error);
        return {
            status: false,
            error,
        };
    }
}

/**
 * Client-side Google OAuth sign-in.
 * Note: This is a client action — re-exported here for co-location.
 */
export const signInWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
    });
};

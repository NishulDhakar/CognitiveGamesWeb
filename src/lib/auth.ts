import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";

export const auth = betterAuth({
   database: prismaAdapter(prisma, {
      provider: "postgresql"
   }),
   emailAndPassword: {
      enabled: true,
      autoSignIn: false
   },
   session: {
      expiresIn: 60 * 60 * 24 * 30, // 30 days
      updateAge: 60 * 60 * 24, // 1 day
   },
   socialProviders: {
      google: {
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
   },
   rateLimit: {
      window: 60,
      max: 10,
   },
})
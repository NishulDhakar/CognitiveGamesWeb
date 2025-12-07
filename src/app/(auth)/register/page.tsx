"use client";

import { signInWithGoogle } from "@/actions/google-auth-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { JSX, SVGProps } from "react";

// Google Icon
const GoogleIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
  </svg>
);

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen  dark:from-zinc-900 dark:to-zinc-800">
      <div className="flex flex-col items-center justify-center px-6 py-12 rounded-2xl dark:bg-zinc-900 w-full max-w-md">

        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
          Welcome !
        </h1>
        {/* <p className="text-sm text-muted-foreground mb-8 text-center">
          Don’t have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:text-primary/90"
          >
            Login
          </Link>
        </p> */}

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-black font-semibold border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:text-white hover:bg-[#A35C2D] hover:shadow-[2px_2px_0px_0px_#000] dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:shadow-[2px_2px_0px_0px_#757373]"
          onClick={signInWithGoogle}
        >
          <GoogleIcon className="w-5 h-5" aria-hidden={true} />
          Continue with Google
        </Button>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          By continuing, you agree to our{" "}
          <Link
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

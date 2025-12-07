import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="mt-10 mb-5 flex w-full flex-col items-center justify-center gap-6">
      <Separator className="w-full max-w-6xl bg-[#756b60]" />
      <div className="container mx-4 flex max-w-4xl flex-row flex-wrap items-center justify-center gap-4 md:mx-2">
      </div>
      <div className="text-muted-foreground text-sm">
        © 2025 Blync. All rights reserved.
      </div>
      <div className="font-excon relative text-5xl font-black tracking-tighter text-nowrap opacity-15 lg:text-9xl">
        Click in a Blync.
      </div>
      <div className="group flex items-center gap-2">
        <Image
          className="hidden size-12 rounded-2xl border border-gray-400 group-hover:border-2 md:block"
          src="/og-logo.png"
          width={48}
          height={48}
          alt="logo"
        />
        <p className="opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Link target="_blank" href="https://www.nishul.dev">
            Build with ❤️{" "}
            <span className="transition-all duration-300 ease-in-out group-hover:underline">
              Nishul
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
}

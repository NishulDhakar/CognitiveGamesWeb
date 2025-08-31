"use client";

import React from "react";

import { Mail, Globe, ArrowLeft } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Contact | Blync",
//   description: "Get in touch with Blync, share your feedback, or ask any questions.",
// };

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div>
            <button
        onClick={() => window.location.replace("/")}
        className="hidden md:flex  mt-10 ml-10 items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
      >
        <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" /> Back to Dashboard
      </button>
    <section className="relative z-10 flex flex-col items-center justify-center gap-10 px-4 py-20 text-center">

     
      <h1 className="font-excon mb-4 text-4xl font-black tracking-tight text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)] dark:text-white sm:text-5xl md:text-6xl">
        Let&apos;s Connect!
      </h1>

      <p className="font-satoshi max-w-xl text-lg font-medium text-zinc-800 dark:text-zinc-200 sm:text-xl md:text-2xl">
        Whether you have a question, a suggestion, or just want to say hi, I’d love to hear from you.
        <br className="hidden md:block" /> 
        Reach out via email or explore my portfolio.
      </p>

      <div className="flex w-full max-w-3xl flex-col gap-6 sm:flex-row sm:justify-center">
        <a
          href="mailto:nishuldhakar123@gmail.com"
          className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
        >
          <Mail className="h-5 w-5 sm:h-6 sm:w-6" /> nishuldhakar123@gmail.com
        </a>

        <a
          href="https://nishul.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
        >
          <Globe className="h-5 w-5 sm:h-6 sm:w-6" /> Visit My Portfolio
        </a>
      </div>

      <p className="mt-8 max-w-md font-satoshi text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl">
        Can’t wait to connect and collaborate on something amazing! 🚀
      </p>
    </section>
    </div>

  );
}

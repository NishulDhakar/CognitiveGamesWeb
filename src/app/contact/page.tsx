"use client";

import React from "react";
import { Mail, Globe, ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <div>
      {/* Back to Dashboard Button */}
      <button
        onClick={() => window.location.replace("/")}
        className="hidden md:flex mt-10 ml-10 items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
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

        {/* Contact Buttons */}
        <div className="flex w-full max-w-2xl flex-col gap-6 sm:flex-row sm:justify-center flex-wrap">
          <a
            href="mailto:nishuldhakar123@gmail.com"
            className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
          >
            <Mail className="h-5 w-5 sm:h-6 sm:w-6" /> Send Email 
          </a>

          <a
            href="https://nishul.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
          >
            <Globe className="h-5 w-5 sm:h-6 sm:w-6" /> Visit My Portfolio
          </a>

          {/* X (Twitter) Button */}
          <a
            href="https://x.com/intent/follow?screen_name=NishulDhakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
          >
            {/* X SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
            >
              <path d="M714.163 519.284L1160.89 0H1053.64L667.137 450.887L357.328 0H0L468.725 681.821L0 1226.37H107.252L515.799 753.261L842.672 1226.37H1200L714.137 519.284H714.163ZM563.31 689.648L521.016 628.935L146.336 79.4971H306.42L597.946 503.498L640.24 564.211L1056.42 1183.02H896.336L563.31 689.648Z" />
            </svg>
            X (Twitter)
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/nishuldhakar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-zinc-100 px-6 py-4 text-lg font-bold tracking-wide text-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:bg-black hover:text-white dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:bg-white dark:hover:text-black sm:text-xl sm:px-8 sm:py-4"
          >
            {/* LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.9 108 0 83.1 0 52.2a52.2 52.2 0 0 1 104.4 0c0 30.9-24.9 55.8-55.56 55.8zM447.9 448h-92.4V306.4c0-33.7-12-56.7-41.9-56.7-22.9 0-36.6 15.4-42.6 30.3-2.2 5.3-2.8 12.7-2.8 20.1V448h-92.4s1.2-270.1 0-299.1h92.4v42.4c12.3-19 34.3-46 83.6-46 61 0 107 39.7 107 124.9V448z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="mt-8 max-w-md font-satoshi text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl">
          Can’t wait to connect and collaborate on something amazing! 🚀
        </p>
      </section>
    </div>
  );
}

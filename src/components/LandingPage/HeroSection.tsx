"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from 'framer-motion';
import HandDrawnArrow from "../svgs/HandDrawnArrow";


export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
  "Swich",
  "Deductive ",
  "Grid ",
  "Inductive"
],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center gap-8 p-10">
          <div className="absolute top-4 left-4 size-24 md:size-64" />
          <div className="absolute right-10 bottom-0 size-24 md:bottom-10 md:size-64" />
          <div className="flex flex-col gap-4">

            <h1 className="font-one text-[#3B3024] max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="font-excon  relative font-black">
                Cognitive games to boost     <span className="bg-gradient-to-r from-[#7fb236] to-[#7fb236] bg-clip-text text-transparent">
             logic & focus.
            </span>
                <HandDrawnArrow className="absolute right-2 mx-auto mt-4 size-8 md:-right-8 md:size-12" />
              </span>

              <span className="font-ranade relative flex w-full justify-center overflow-hidden text-center md:pt-1 md:pb-4">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.div
                    key={index}
                    className=" absolute font-light italic "
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.div>
                ))}
              </span>
            </h1>

            <p className="text-slate-600 font-satoshi max-w-2xl text-center text-lg leading-relaxed tracking-tight md:text-xl">
Challenge your brain, not your patience.  <br/>  Explore Cognitive Ability Games to enhance your logic and problem-solving skills.
            </p>
          </div>

          {/* <div className="flex flex-row gap-3">
            <Link href="/notes">
              <Button
                size="lg"
                className="gap-4 border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:text-white hover:shadow-[2px_2px_0px_0px_#000] dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:shadow-[2px_2px_0px_0px_#757373]"
              >
                Visit Notes 
              </Button>
            </Link>
            <Link href="/premium">
              <Button
                size="lg"
                className="gap-4 border-2 border-black bg-black text-white shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-black hover:shadow-[2px_2px_0px_0px_#000] dark:border-white/20 dark:bg-white dark:text-black dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:shadow-[2px_2px_0px_0px_#757373]"
              >
                Purchase Premium{" "}

              </Button>
            </Link>
          </div> */}

          {/* <div className="flex flex-row gap-3">
            <div className="flex items-center gap-2">
              <p className="text-muted-foreground text-sm">
                Trusted by 100+ students
              </p>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

"use client";

import Container from "../common/Container";
import { motion } from "framer-motion";
import HandDrawnArrow from "../svgs/HandDrawnArrow";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/ui/button";
import Link from "next/link";
import { CgGames } from "react-icons/cg";
import { MdOutlineReviews } from "react-icons/md";

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => [
      "Switch Challenge",
      "Deductive Challenge",
      "Grid Challenge",
      "Inductive Challenge",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div>
      <Container>
        <div className="relative py-12 mt-2 md:mt-12 overflow-hidden">
          {/* Glow background circles */}
          <div className="absolute -top-10 -left-10 w-40 md:w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-16 -right-10 w-96 h-96 rounded-full filter blur-3xl opacity-30 animate-pulse" />

          <motion.div
            className="flex flex-col items-center justify-center gap-6 text-center relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <h1 className="relative text-3xl md:text-7xl font-extrabold font-one leading-tight tracking-tight text-[#3B3024]">
              Cognitive Ability{" "}
              <span className="bg-gradient-to-r from-[#7fb236] to-[#7fb236] bg-clip-text text-transparent">
                Games
              </span>
              <HandDrawnArrow className="absolute right-2 mx-auto mt-4 size-8 md:-right-8 md:size-12" />
            </h1>

            {/* Rotating Subtitles */}
            <span className="font-ranade relative flex w-full justify-center overflow-hidden text-center md:pt-1 md:pb-4 h-8 md:h-12">
              {titles.map((title, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl text-[#3B3024] md:text-4xl font-semibold italic"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
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

            {/* Description */}
            <p className="max-w-xl text-sm md:text-lg text-[#756b60] mt-4">
              Challenge your brain, not your patience. <br /> Explore Cognitive
              Ability Games to enhance your logic and problem-solving skills.
            </p>

            {/* CTA Button */}
            <div className="flex flex-row gap-3">
              <Link href="/capgemini-games">
                <Button
                  size="lg"
                  className="gap-4 border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:text-white hover:bg-[#A35C2D] hover:shadow-[2px_2px_0px_0px_#000] dark:border-white/20 dark:bg-zinc-900 dark:text-white dark:shadow-[4px_4px_0px_0px_#757373] dark:hover:shadow-[2px_2px_0px_0px_#757373]"
                >
                  Visit Games <CgGames size={20} />
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground text-sm">
              Trusted by 1000+ students
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

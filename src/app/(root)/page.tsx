"use client";
import About from "@/components/Landing/About";
import FAQ from "@/components/Landing/FAQ";
import GamesCard from "@/components/Landing/GamesCard";
import Hero from "@/components/Landing/Hero";
import Testimonial from "@/components/Landing/Testimonial";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  return (
    <div>
      <div className="relative w-full flex justify-end">
        {!isExpanded && isArrowVisible && (
          <motion.div
            className=" absolute -translate-x-1 "
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <div className="relative flex flex-col items-center">
              <img
                src="./arrow.gif"
                alt="Click the page curl"
                className="size-12 rotate-90 md:size-16"
              />
              {!isMobile && (
                <p className=" text-sm italic whitespace-nowrap">
                  Please give star on github.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
      <Hero />
      <About />
      <Testimonial />
      <FAQ />
    </div>
  );
}

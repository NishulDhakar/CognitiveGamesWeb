"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Puzzle, Brain, Zap } from "lucide-react";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

function AnimatedTextCycle({
  words,
  interval = 3000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className={`inline-block font-light ${className}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative hover:bg-[#A35C2D]  rounded-2xl border p-8 shadow-[6px_6px_0px_0px]  dark:bg-zinc-900 border-black/20 dark:border-white/10 transition-all duration-300 hover:shadow-[3px_3px_0px_0px] ">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 group-hover:bg-zinc-200 transition-colors duration-300">
            {icon}
          </div>

          <h3 className="mb-3 text-xl font-semibold text-[#3B3024] dark:text-white group-hover:text-zinc-200 transition-colors duration-300 ">
            {title}
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-[#756b60] dark:text-zinc-300 group-hover:text-zinc-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const features = [
    {
      icon: <Puzzle className="text-primary h-6 w-6" />,
      title: "Practice Real Cognitive Games",
      description:
        "Get access to practice versions of Cognitive Ability games. Prepare with the same style of challenges you’ll face in actual assessments.",
    },
    {
      icon: <Brain className="text-primary h-6 w-6" />,
      title: "Sharpen Your Problem-Solving",
      description:
        "Boost your logical reasoning, pattern recognition, and critical thinking with interactive puzzles designed to mimic real exam challenges.",
    },
    {
      icon: <Zap className="text-primary h-6 w-6" />,
      title: "Learn Faster, Perform Better",
      description:
        "Track your progress, identify weak areas, and build speed with repeated practice so you walk into your placement confident and ready.",
    },
  ];

  const animatedWords = ["practice", "prepare", "improve"];

  return (
    <section className="relative overflow-hidden py-10 lg:py-24 ">
      <div className="relative z-10 container mx-auto">
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mx-auto mb-6 max-w-4xl text-center text-4xl leading-tight tracking-tighter md:text-5xl lg:text-6xl font-extrabold text-[#3B3024] dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Get Ready to </span>
            <span className="relative text-primary">
              <AnimatedTextCycle words={animatedWords} interval={2500} />
            </span>
            <span> with Games</span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-[#756b60] dark:text-zinc-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Practice makes placements easy. Our platform is built for students
            preparing for Cognitive Ability Games so you can practice,
            learn, and ace your tests stress-free.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

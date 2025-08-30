"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDownIcon } from "@phosphor-icons/react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  delay = 0,
}: FAQItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      className=" border-primary dark:border-primary/30 rounded-md border border-r-8 border-b-8"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:cursor-pointer"
      >
        <h3 className="text-foreground font-excon text-lg font-semibold">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <CaretDownIcon className="text-muted-foreground h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="border-t-border border-t px-6 pt-0 pb-6">
              <p className="text-muted-foreground font-satoshi mt-4 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqData = [
  {
    question: "What are Capgemini Cognitive Ability Games?",
    answer:
      "These are game-based assessments used by Capgemini during placements to test logical reasoning, problem-solving, memory, and pattern recognition skills.",
  },
  {
    question: "Can I practice the exact same games here?",
    answer:
      "We provide practice challenges inspired by the real Capgemini Cognitive Ability Games. While not identical, they are designed to mimic the logic, difficulty, and format closely.",
  },
  {
    question: "Do I need to create an account to practice?",
    answer:
      "No account is required to try out basic games. However, creating a free account allows you to track your progress and revisit your practice history.",
  },
  {
    question: "How should I prepare for the actual Capgemini assessment?",
    answer:
      "Regularly practice puzzles, focus on improving speed and accuracy, and review different challenge types such as Switch, Grid, Inductive, and Deductive Challenges.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes! All core Capgemini practice games are free to access. We aim to help students prepare effectively without barriers.",
  },
  {
    question: "Will practicing here really improve my chances?",
    answer:
      "Yes. Consistent practice builds confidence, improves reaction time, and strengthens your logical problem-solving skills — all of which are essential for clearing Capgemini’s games.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="relative z-10 container mx-auto">
        <motion.div
          className="mb-16 text-center md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-[#3B3024] font-excon mx-auto mb-6 max-w-4xl text-center text-4xl leading-tight font-black tracking-tighter md:text-5xl lg:text-6xl"
            variants={titleVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-[#756b60]  font-satoshi mx-auto max-w-3xl text-center text-lg leading-relaxed tracking-tight md:text-xl"
            variants={titleVariants}
          >
            Everything you need to know about Capgemini or Cognizant Games Practice
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

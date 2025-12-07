"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about your preparation journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

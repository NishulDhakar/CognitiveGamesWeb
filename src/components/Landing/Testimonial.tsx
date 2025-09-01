"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarIcon, QuotesIcon } from "@phosphor-icons/react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

function TestimonialCard({
  name,
  role,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
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
      <div className="relative rounded-md border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#000] dark:border-white/20 dark:shadow-[8px_8px_0px_0px_#fff] dark:hover:shadow-[12px_12px_0px_0px_#fff]">
        <div className="relative z-10">
          {/* Quote Icon */}
          <div className="mb-4">
            <QuotesIcon
              weight="fill"
              className="h-8 w-8 text-black dark:text-white"
            />
          </div>

          {/* Rating */}
          <div className="mb-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                weight={index < rating ? "fill" : "regular"}
                className={`h-4 w-4 ${
                  index < rating
                    ? "text-black dark:text-white"
                    : "text-gray-400 dark:text-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <p className="font-satoshi mb-6 leading-relaxed font-medium text-black dark:text-white">
            &quot;{content}&quot;
          </p>

          {/* Author */}
          <div>
            <h4 className="font-excon font-bold text-black dark:text-white">
              {name}
            </h4>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Akshay",
    role: "B. Tech AIML (TIT Bhopal)",
    content:
      "Blync’s cognitive games made my preparation fun and effective. I felt confident going into my Capgemini placement test.",
    rating: 5,
  },
  {
    name: "Shubham Kumar",
    role: "Engineering Student",
    content:
      "The puzzles on Blync helped me improve speed and accuracy. Practicing daily really boosted my logical thinking.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "B. Tech IT (LNCT Bhopal)",
    content:
      "Blync feels like playing games, but it’s actually preparing you for real cognitive tests. Loved the experience so much!",
    rating: 5,
  },
  {
    name: "Hardh jaiswal",
    role: "B. Tech CSE (Oriental) ",
    content:
      "Thanks to Blync’s practice challenges, I cleared my aptitude round with ease. The game format kept me motivated.",
    rating: 5,
  },
  {
    name: "Vishal",
    role: "B. Tech CSE ",
    content:
      "Unlike boring PDFs, Blync turns preparation into interactive games. It’s the best way to stay consistent with practice.",
    rating: 5,
  },
  {
    name: "siya",
    role: "B. Tech IT ",
    content:
      "Blync sharpened my problem-solving mindset. The variety of cognitive puzzles is exactly what I needed for placements.",
    rating: 5,
  },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-10">
      <div className="absolute inset-0" />

      <div className="relative z-10 container mx-auto">
        <motion.div
          className="mb-16 text-center md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-[#3B3024] font-regular font-excon mx-auto mb-6 max-w-4xl text-center text-4xl leading-tight font-black tracking-tighter md:text-5xl lg:text-6xl"
            variants={titleVariants}
          >
            What Students Say
          </motion.h2>
          <motion.p
            className="text-[#756b60] font-satoshi mx-auto max-w-3xl text-center text-lg leading-relaxed tracking-tight md:text-xl"
            variants={titleVariants}
          >
            Join thousands of students who have transformed their learning
            experience with <span className="font-bold">Blync</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

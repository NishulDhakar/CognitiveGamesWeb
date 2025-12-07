"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-border/50 bg-card hover:shadow-md transition-shadow duration-300">
        <CardContent className="pt-6 flex-1">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-muted"
                  }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            &ldquo;{content}&rdquo;
          </p>
        </CardContent>
        <CardHeader className="flex flex-row items-center gap-4 pt-0 pb-6">
          {/* <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar> */}
          <div>
            <h4 className="font-semibold text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Akshay",
    role: "B. Tech AIML (TIT Bhopal)",
    content:
      "The dedicated practice modules for cognitive games gave me a real edge. I felt much more prepared for the actual assessment logic.",
    rating: 5,
  },
  {
    name: "Shubham Kumar",
    role: "Engineering Student",
    content:
      "Excellent resource for pattern recognition puzzles. The difficulty progression is spot on for placement tests.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "B. Tech IT (LNCT Bhopal)",
    content:
      "A professional platform that cuts through the noise. Direct, relevant practice without unnecessary distractions.",
    rating: 5,
  },
  {
    name: "Lovlesh",
    role: "B. Tech CSE",
    content:
      "Structured and effective. It turns a usually stressful preparation process into a systematic training routine.",
    rating: 5,
  },
  {
    name: "Vishal",
    role: "B. Tech CSE",
    content:
      "The interface is clean and the games accurately reflect standard cognitive ability tests used by major recruiters.",
    rating: 5,
  },
  {
    name: "Siya",
    role: "B. Tech IT",
    content:
      "Highly recommended for anyone looking to seriously improve their problem-solving speed and accuracy.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Student Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Hear from students who have used our platform to sharpen their skills and secure their dream placements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
        </div>
      </div>
    </section>
  );
}

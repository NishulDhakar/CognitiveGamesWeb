"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Container from "../common/Container";

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
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="pt-6 flex-1 relative z-10">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: delay + index * 0.05 }}
              >
                <Star
                  className={`h-4 w-4 ${
                    index < rating 
                      ? "text-yellow-400 fill-yellow-400 drop-shadow-sm" 
                      : "text-muted"
                  }`}
                />
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
            &ldquo;{content}&rdquo;
          </p>
        </CardContent>
        <CardHeader className="flex flex-row items-center gap-4 pt-0 pb-6 relative z-10">
          <Avatar className="border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">{name}</h4>
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
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 via-primary/5 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5">
              💬 Success Stories
            </Badge>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Student Success Stories
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
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
      </Container>
    </section>
  );
}

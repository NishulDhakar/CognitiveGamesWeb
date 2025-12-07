"use client";

import Container from "../common/Container";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
              Level Up Your Mind
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Master Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Cognitive Potential
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enhance logical reasoning, pattern recognition, and problem-solving skills with our scientifically designed game suite. Prepare for success with precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/capgemini-games">
                Start Training <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <Link href="/capgemini-cognitive-ability-games">
                Learn Methodology
              </Link>
            </Button>
          </motion.div>

          {/* Stats / Trust Indicators (Optional placeholder for professional look) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-2xl items-center justify-center text-center"
          >
            <div>
              <h4 className="text-2xl font-bold text-foreground">6+</h4>
              <p className="text-sm text-muted-foreground">Cognitive Games</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground">5k+</h4>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-2xl font-bold text-foreground">98%</h4>
              <p className="text-sm text-muted-foreground">Improvement Rate</p>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Subtle Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}

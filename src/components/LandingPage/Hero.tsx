'use client';

import Container from "../common/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Container>
      <div className="relative py-12 mt-2 md:mt-12 overflow-hidden">
        <div className="absolute -top-10 -left-10  w-40 md:w-80 h-80 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-10 w-96 h-96  rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

        <motion.div
          className="flex flex-col items-center justify-center gap-6 text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-7xl font-extrabold font-one leading-tight tracking-tight text-[#3B3024]">
            Cognitive Ability{" "}
            <span className="bg-gradient-to-r from-[#7fb236] to-[#7fb236] bg-clip-text text-transparent">
              Games
            </span>
          </h1>

          <p className="max-w-xl  text-sm md:text-lg text-[#756b60] mt-4">
            Explore Cognitive Ability Games like Deductive, Switch, Grid, Inductive, and Motion challenges to enhance your problem-solving skills.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}

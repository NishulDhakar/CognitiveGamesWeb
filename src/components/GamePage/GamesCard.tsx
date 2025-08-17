'use client';

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { gameCards } from "@/data/GamesData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GamesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <div className="mt-2 md:mt-20 mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={ref}>
        {gameCards.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center gap-6 text-center relative z-10"
          >
            <Card className="group relative overflow-hidden rounded-2xl bg-white border border-gray-600 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer">
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A35C2D] transition-colors duration-300">
                  {game.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {game.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <Link
                    href={game.rulesLink}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r bg-[#A35C2D] text-white rounded-lg text-sm font-semibold hover:bg-[#A35CD] transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Play Game
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

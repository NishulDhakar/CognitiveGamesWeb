'use client';

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { gameCards } from "@/data/GamesData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function GamesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4 pb-16 px-4" ref={ref}>
        {gameCards.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
          >
            <Link href={game.rulesLink} className="block h-full">
              <Card className="relative h-full overflow-hidden rounded-2xl bg-card border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-5 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {game.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                    {game.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm font-medium">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Play Now
                    </span>
                    <div className="p-2 rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

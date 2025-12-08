'use client';

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { gameCards } from "@/data/GamesData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GamesCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4 pb-16 px-4" ref={ref}>
        {gameCards.map((game, index) => {
          const isAvailable = game.isAvailable !== false; // Default to true if undefined

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className={cn("block h-full relative", !isAvailable && "cursor-not-allowed")}>
                {!isAvailable && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/10 backdrop-blur-[2px] rounded-2xl">
                    <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                      <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                    </div>
                  </div>
                )}

                <Link
                  href={isAvailable ? game.rulesLink : "#"}
                  className={cn("block h-full", !isAvailable && "pointer-events-none select-none")}
                  aria-disabled={!isAvailable}
                >
                  <Card className={cn(
                    "relative h-full overflow-hidden rounded-2xl bg-card border-border shadow-sm transition-all duration-300 flex flex-col",
                    isAvailable ? "hover:shadow-xl hover:border-primary/20" : "opacity-80 grayscale-[0.5]"
                  )}>
                    {/* Image Section */}
                    <div className="relative h-56 w-full overflow-hidden bg-muted">
                      <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className={cn(
                          "object-cover transition-transform duration-500",
                          isAvailable && "group-hover:scale-105"
                        )}
                      />
                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={cn(
                          "text-xl font-bold text-foreground transition-colors duration-200",
                          isAvailable && "group-hover:text-primary"
                        )}>
                          {game.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                        {game.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-sm font-medium">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {isAvailable ? "Play Now" : "Coming Soon"}
                        </span>
                        <div className={cn(
                          "p-2 rounded-full transition-colors duration-300",
                          isAvailable
                            ? "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

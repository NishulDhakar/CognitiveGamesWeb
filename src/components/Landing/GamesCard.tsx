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
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <div
        ref={ref}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 pt-6 pb-20"
      >
        {gameCards.map((game, index) => {
          const isAvailable = game.isAvailable !== false;

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group h-full"
            >
              <div
                className={cn(
                  "relative h-full",
                  !isAvailable && "cursor-not-allowed"
                )}
              >
                {/* Coming Soon Overlay */}
                {!isAvailable && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-white/40 backdrop-blur-sm">
                    <span className="px-5 py-2 text-sm font-semibold rounded-full bg-white/80 text-emerald-800 shadow">
                      Coming Soon
                    </span>
                  </div>
                )}

                <Link
                  href={isAvailable ? game.rulesLink : "#"}
                  aria-disabled={!isAvailable}
                  className={cn(
                    "block h-full",
                    !isAvailable && "pointer-events-none select-none"
                  )}
                >
                  <Card
                    className={cn(
                      "relative h-full overflow-hidden rounded-3xl flex flex-col",
                      "bg-white/70 backdrop-blur-md",
                      "border border-white/40",
                      "shadow-[0_20px_40px_rgba(0,0,0,0.12)]",
                      "transition-all duration-500 ease-out",
                      isAvailable
                        ? "hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(34,197,94,0.25)]"
                        : "opacity-75 grayscale"
                    )}
                  >
                    {/* Image Section */}
                    <div className="relative h-52 w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-green-100 via-sky-100 to-blue-100">
                      <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        priority={index < 3}
                        className={cn(
                          "object-cover transition-transform duration-700",
                          isAvailable && "group-hover:scale-110"
                        )}
                      />

                      {/* Soft sunlight overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="text-lg font-semibold text-emerald-900 mb-2">
                        {game.name}
                      </h3>

                      <p className="text-sm text-emerald-800/70 leading-relaxed line-clamp-2 mb-6">
                        {game.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm font-medium text-emerald-700">
                          {isAvailable ? "Play Now" : "Coming Soon"}
                        </span>

                        <div
                          className={cn(
                            "p-2.5 rounded-full transition-all duration-300",
                            isAvailable
                              ? "bg-emerald-500 text-white group-hover:scale-110"
                              : "bg-gray-300 text-gray-600"
                          )}
                        >
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

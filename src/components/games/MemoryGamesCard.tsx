'use client';

import Image from "next/image";
import Link from "next/link";
import { memoryGameCards } from "@/data/MemoryGamesData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MemoryGamesCard() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="relative">
            <div
                ref={ref}
                className="grid sm:grid-cols-2 lg:grid-cols-3 px-4 pt-6 pb-20 justify-items-center gap-8"
            >
                {memoryGameCards.map((game, index) => {
                    const isAvailable = game.isAvailable !== false;

                    return (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            className="group relative w-full max-w-[320px] aspect-[2/2] cursor-pointer "
                        >
                            <Link
                                href={isAvailable ? game.rulesLink : "#"}
                                className={cn(
                                    "block h-full w-full",
                                    !isAvailable && "cursor-not-allowed pointer-events-none"
                                )}
                            >
                                <div className={cn(
                                    "relative h-full w-full rounded-[28px] overflow-hidden shadow-2xl transition-all duration-500",
                                    isAvailable ? "hover:scale-[1.01] hover:shadow-primary/20" : "grayscale opacity-80"
                                )}>
                                    {/* Background Image */}
                                    <Image
                                        src={game.image}
                                        alt={game.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-100"
                                    />

                                    {/* Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Top Badges */}
                                    {/* <div className="absolute top-8 right-8">
                                        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/30">
                                            <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                                                {game.accuracy || "New"} Accuracy
                                            </span>
                                        </div>
                                    </div> */}

                                    {/* Content (Bottom Section) */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 space-y-4">
                                        {/* Name & Difficulty */}
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-2xl font-bold text-white tracking-tight">
                                                {game.name}
                                            </h3>
                                            {/* <div className="bg-black/40 backdrop-blur-md rounded-2xl px-4 py-1 border border-white/10">
                                                <span className="text-white font-mono text-sm font-bold">
                                                    {game.level || "LVL 1"}
                                                </span>
                                            </div> */}
                                        </div>

                                        {/* Description */}
                                        {/* <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                                            {game.description}
                                        </p> */}

                                        {/* Tags */}
                                        <div className="flex gap-2">
                                            {/* <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1">
                                                <span className="text-white text-[10px] font-bold uppercase">
                                                    {game.tag || "Core"}
                                                </span>
                                            </div> */}
                                            {!isAvailable && (
                                                <div className="bg-orange-500 rounded-full px-4 py-1">
                                                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                                                        Coming Soon
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Button */}
                                        <div className="pt-4">
                                            <div className={cn(
                                                "w-full py-4 rounded-[24px] text-center font-bold transition-all duration-300",
                                                isAvailable
                                                    ? "bg-white/80 text-black hover:bg-white/60 border border-white/10 shadow-xl"
                                                    : "bg-white/10 text-white/40 border border-white/10"
                                            )}>
                                                {isAvailable ? "Play Game" : "Locked"}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pagination indicator (Visual only) */}
                                    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 flex gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

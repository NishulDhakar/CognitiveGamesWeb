"use client"

import GamesCard from '@/components/games/GamesCard'
import { Gamepad2, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import BackToDashboard from '@/components/common/BackToDashboard'
import Image from 'next/image'

const CognizantGamesClient = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="fixed inset-0 ">
                <Image
                    src="/store.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-8 relative z-10">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12 flex justify-between items-center"
                >
                    <BackToDashboard />
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 border border-white/20">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm font-medium">GenC Elevate Prep</span>
                    </div>
                </motion.div>

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative inline-block"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Cognizant Game-Based Aptitude Practice
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light text-white leading-relaxed"
                    >
                        Ace the Cognizant GenC puzzle round. Practice deductive logic, grid reasoning, and memory challenges designed to prepare you for the actual assessment.
                    </motion.p>
                </div>

                {/* Games Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-3xl -z-10" />
                    <GamesCard />
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <Gamepad2 className="h-4 w-4 text-white" />
                        <span className="text-white">Updated for Cognizant 2025 Placement Season</span>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default CognizantGamesClient

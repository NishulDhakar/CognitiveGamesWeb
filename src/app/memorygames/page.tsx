"use client"

import MemoryGamesCard from '@/components/games/MemoryGamesCard'
import { Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import BackToDashboard from '@/components/common/BackToDashboard'
import Image from 'next/image'

const MemoryGamePage = () => {
    return (
        <div className="min-h-screen relative mt-10 overflow-hidden">
            <div className="fixed inset-0 ">
                <Image
                    src="/memorygamebg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-8 relative z-10">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <BackToDashboard />
                </motion.div>

                {/* Header Section */}
                <div className="text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative inline-block"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
                            Memory Games
                        </h1>
                    </motion.div>

                    {/* <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light text-white leading-relaxed"
                    >
                        Challenge your mind with our suite of specialized cognitive games designed to test and improve your mental agility.
                    </motion.p> */}
                </div>

                {/* Games Grid Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl -z-10" />
                    <MemoryGamesCard />
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <Gamepad2 className="h-4 w-4" />
                        <span>New challenges added regularly</span>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default MemoryGamePage

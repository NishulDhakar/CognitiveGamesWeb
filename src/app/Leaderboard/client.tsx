'use client';

import type { LeaderboardEntry } from "@/actions/leaderboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Medal, Trophy, ArrowLeft, Gamepad2, LayoutGrid, Binary, ArrowRightLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import BackToDashboard from "@/components/common/BackToDashboard";

interface LeaderboardClientProps {
    data: LeaderboardEntry[];
    gameId: string;
}

export default function LeaderboardClient({ data, gameId }: LeaderboardClientProps) {
    const router = useRouter();

    const handleTabChange = (value: string) => {
        if (value === 'overall') {
            router.push('/Leaderboard');
        } else {
            router.push(`/Leaderboard?game=${value}`);
        }
    };

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Crown className="h-8 w-8 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" fill="currentColor" />
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Medal className="h-7 w-7 text-gray-300 drop-shadow-[0_0_8px_rgba(209,213,219,0.5)]" fill="currentColor" />
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Medal className="h-7 w-7 text-amber-700 drop-shadow-[0_0_8px_rgba(180,83,9,0.5)]" fill="currentColor" />
                    </motion.div>
                );
            default:
                return <span className="text-xl font-bold text-muted-foreground/50 w-8 text-center tabular-nums">{rank}</span>;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container max-w-5xl py-12 mx-auto px-4 relative z-10">
                <div className="flex items-center mb-12">
                    <BackToDashboard />
                </div>

                <div className="text-center mb-12 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Leaderboard
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
                    >
                        Celebrating the brilliant minds mastering our cognitive challenges.
                    </motion.p>
                </div>

                <Tabs defaultValue={gameId} onValueChange={handleTabChange} className="w-full space-y-8">
                    <div className="flex justify-center">
                        <TabsList className="bg-background/80 backdrop-blur-xl border border-border/50 p-1 rounded-full h-auto gap-0 md:gap-4 shadow-lg flex-wrap justify-center sm:flex-nowrap">
                            <TabsTrigger
                                value="overall"
                                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 flex-1 sm:flex-none min-w-[20px] md:min-w-[100px]"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Trophy className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>Overall</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger
                                value="grid-challenge"
                                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 flex-1 sm:flex-none min-w-[20px] md:min-w-[100px]"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <LayoutGrid className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>Switch</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger
                                value="digit-challenge"
                                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 flex-1 sm:flex-none min-w-[    100px]"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Binary className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>Digit</span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger
                                value="switch-challenge"
                                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 flex-1 sm:flex-none min-w-[100px]"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <ArrowRightLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>Deductive</span>
                                </div>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={gameId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="border-0 shadow-2xl bg-card/30 backdrop-blur-xl overflow-hidden ring-1 ring-white/10">
                                <CardHeader className="border-b border-border/10 bg-muted/5 p-6">
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            {gameId === 'overall' && <Trophy className="h-6 w-6 text-primary" />}
                                            {gameId === 'switch-challenge' && <LayoutGrid className="h-6 w-6 text-primary" />}
                                            {gameId === 'digit-challenge' && <Binary className="h-6 w-6 text-primary" />}
                                            {gameId === 'deductive-challenge' && <ArrowRightLeft className="h-6 w-6 text-primary" />}
                                        </div>
                                        <span>Top Performers</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    {data.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-32 text-muted-foreground bg-muted/5">
                                            <Gamepad2 className="h-16 w-16 mb-4 opacity-20" />
                                            <p className="text-xl font-medium">No champions yet</p>
                                            <p className="text-sm opacity-60">Be the first to claim victory!</p>
                                        </div>
                                    ) : (
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="divide-y divide-border/10"
                                        >
                                            {data.map((entry, index) => (
                                                <motion.div
                                                    key={entry.userId}
                                                    variants={itemVariants}
                                                    className={`group flex items-center justify-between p-4 sm:p-6 hover:bg-accent/5 transition-all duration-300 ${index === 0 ? 'bg-gradient-to-r from-yellow-500/10 to-transparent' :
                                                        index === 1 ? 'bg-gradient-to-r from-gray-400/10 to-transparent' :
                                                            index === 2 ? 'bg-gradient-to-r from-amber-600/10 to-transparent' : ''
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3 sm:gap-8 flex-1 min-w-0">
                                                        <div className="w-8 sm:w-12 flex justify-center transform group-hover:scale-110 transition-transform shrink-0">
                                                            {getRankIcon(entry.rank)}
                                                        </div>

                                                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                                            <div className="relative shrink-0">
                                                                <Avatar className={`h-10 w-10 sm:h-14 sm:w-14 border-2 ${index === 0 ? 'border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]' :
                                                                    index === 1 ? 'border-gray-400' :
                                                                        index === 2 ? 'border-amber-700' : 'border-border'
                                                                    }`}>
                                                                    <AvatarImage src={entry.image || undefined} alt={entry.name || 'User'} className="object-cover" />
                                                                    <AvatarFallback className="font-bold bg-muted">{entry.name?.slice(0, 2).toUpperCase() || 'U'}</AvatarFallback>
                                                                </Avatar>
                                                                {index < 3 && (
                                                                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm ${index === 0 ? 'bg-yellow-500' :
                                                                        index === 1 ? 'bg-gray-400' :
                                                                            'bg-amber-700'
                                                                        }`}>
                                                                        {index + 1}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div className="flex flex-col min-w-0 pr-2">
                                                                <span className={`font-bold text-base sm:text-xl truncate ${index === 0 ? 'text-primary' : 'text-foreground'
                                                                    }`}>
                                                                    {entry.name || 'Anonymous User'}
                                                                </span>
                                                                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                                                    {index < 3 ? 'Champion' : 'Contender'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pl-2 sm:pl-4 shrink-0">
                                                        <Badge variant="outline" className={`text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-1.5 font-mono font-bold tracking-tight border-2 ${index === 0 ? 'border-yellow-500/30 text-yellow-600 bg-yellow-500/5' :
                                                            'border-border bg-background/50'
                                                            }`}>
                                                            {entry.score.toLocaleString()}
                                                            <span className="text-[10px] ml-1 opacity-60 font-sans uppercase">pts</span>
                                                        </Badge>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </Tabs>
            </div>
        </div>
    );
}

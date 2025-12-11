"use client";

import { Question } from "@/lib/iq-test-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

interface QuestionCardProps {
    question: Question;
    onAnswer: (index: number) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [memoryMode, setMemoryMode] = useState<'view' | 'recall'>('view');
    const [timeLeftInMemory, setTimeLeftInMemory] = useState(0);

    // Reset state when question changes
    useEffect(() => {
        setSelectedOption(null);
        if (question.type === 'memory') {
            setMemoryMode('view');
            setTimeLeftInMemory(question.memoryViewTime || 3);
        } else {
            setMemoryMode('recall'); // Standard mode
        }
    }, [question]);

    // Memory Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (question.type === 'memory' && memoryMode === 'view' && timeLeftInMemory > 0) {
            interval = setInterval(() => {
                setTimeLeftInMemory((prev) => prev - 1);
            }, 1000);
        } else if (timeLeftInMemory === 0 && memoryMode === 'view') {
            setMemoryMode('recall');
        }
        return () => clearInterval(interval);
    }, [question.type, memoryMode, timeLeftInMemory]);


    const handleOptionClick = (index: number) => {
        if (memoryMode === 'view') return; // Cannot answer while viewing
        setSelectedOption(index);
        onAnswer(index);
    };

    // Render different content based on type/mode
    const renderQuestionContent = () => {
        if (question.type === 'memory' && memoryMode === 'view') {
            return (
                <div className="flex flex-col items-center justify-center h-64 bg-slate-100 dark:bg-slate-800/50 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-8">
                    <div className="mb-4 text-primary animate-pulse">
                        <Eye className="w-8 h-8 mx-auto mb-2" />
                        <span className="text-lg font-bold">Memorize this!</span>
                    </div>
                    {/* Placeholder for actual image */}
                    <div className="w-32 h-32 bg-primary/20 rounded-lg flex items-center justify-center">
                        {question.image ? (
                            <span className="text-xs">{question.image}</span>
                        ) : (
                            <span className="text-4xl text-primary font-bold">?</span>
                        )}
                    </div>
                    <div className="mt-4 text-2xl font-mono font-bold text-slate-500">
                        {timeLeftInMemory}s
                    </div>
                </div>
            );
        }

        // Standard Question View
        return (
            <div className="mb-8">
                <h3 className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                    {question.question}
                </h3>

                {/* Logic/Spatial/Pattern visual area */}
                {(question.type !== 'memory') && question.image && (
                    <div className="w-full h-48 md:h-64 mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800">
                        {/* In reality, use <Image /> here */}
                        <span className="text-muted-foreground">{question.image}</span>
                    </div>
                )}

                {/* Answer Grid */}
                <div className={`grid gap-4 ${question.options.length > 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {question.options.map((opt, idx) => (
                        <motion.button
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleOptionClick(idx)}
                            className={`
                            relative p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-center min-h-[60px]
                            ${selectedOption === idx
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-200 dark:border-slate-800 bg-card hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }
                        `}
                        >
                            <span className="font-medium text-sm md:text-base">{opt}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={question.id + memoryMode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderQuestionContent()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

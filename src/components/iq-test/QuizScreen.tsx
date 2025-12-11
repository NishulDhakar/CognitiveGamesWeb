"use client";

import { useIQTest } from "./useIQTest";
import QuestionCard from "./QuestionCard";
import { motion } from "framer-motion";

import { Clock } from "lucide-react";
import ResultScreen from "./ResultScreen";

interface QuizScreenProps {
    // onFinish is now handled internally by switching view state in container
    // via the hook callback, but we might pass it down or handle it here.
    // Actually, the hook handles logic, but the View switching is in Container.
    // Let's make QuizScreen receive the start props or lift state up? 
    // Better: QuizScreen *uses* useIQTest and just tells parent when done.
    onFinish: (result: any) => void;
}

export default function QuizScreen({ onFinish }: QuizScreenProps) {
    const {
        gameState,
        currentQuestionIndex,
        currentQuestion,
        totalQuestions,
        timeLeft,
        handleAnswer,
        retry,
        startGame // calling start game inside useEffect on mount
    } = useIQTest({ onFinish });


    // Format time mm:ss
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Start the game on mount
    // We need to trigger the hook's start function. 
    // Ideally this component is only mounted when game starts.
    // useIQTest hook has internal state 'start', 'playing', 'result'
    // But our container also has ViewState. 
    // To avoid dup state, let's just assume this component is only rendered when playing
    // and we call startGame immediately.

    // Actually, useIQTest manages the whole flow. 
    // If we render <QuizScreen> it should probably just use the hook.
    // But wait, useIQTest returns 'gameState'.
    // If useIQTest is local to this component, it will re-init every time Container unmounts it.
    // That's fine because Container mounts QuizScreen only when Playing.
    // So we call startGame on mount.

    // Correction: React 18 strict mode might double invoke. 
    // Let's use a ref or just rely on the fact that init state is 'start'.
    // We need to call startGame() to start the timer.

    // Effect to start game on mount
    const startedRef = require("react").useRef(false);
    require("react").useEffect(() => {
        if (!startedRef.current) {
            startGame();
            startedRef.current = true;
        }
    }, []);

    if (gameState === 'result') {
        // If the hook finishes, it calls onFinish prop. 
        // We can render null here or a loading state while parent switches.
        return null;
    }

    if (!currentQuestion) return <div className="p-10 text-center">Loading Assessment...</div>;

    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-6">
            {/* Header Info */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Question</span>
                    <div className="text-2xl font-bold text-foreground">
                        {currentQuestionIndex + 1} <span className="text-muted-foreground text-lg">/ {totalQuestions}</span>
                    </div>
                </div>

                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-medium ${timeLeft < 60 ? 'bg-red-500/10 text-red-500 animate-pulse' : 'bg-secondary text-secondary-foreground'}`}>
                    <Clock className="w-4 h-4" />
                    {formatTime(timeLeft)}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-12">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Question Card */}
            <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
            />

            <div className="mt-8 text-center">
                <p className="text-xs text-muted-foreground">
                    Select the best answer. You cannot go back to previous questions.
                </p>
            </div>
        </div>
    );
}

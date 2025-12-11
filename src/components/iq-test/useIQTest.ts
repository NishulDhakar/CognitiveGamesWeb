"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Question, iqTestQuestions, calculateIQ } from "@/lib/iq-test-data";

export type GameState = 'start' | 'playing' | 'result';

interface UseIQTestProps {
    onFinish?: (results: any) => void;
}

export function useIQTest({ onFinish }: UseIQTestProps = {}) {
    const [gameState, setGameState] = useState<GameState>('start');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [score, setScore] = useState(0);
    const [difficultyLevel, setDifficultyLevel] = useState(2); // Start at level 2

    // Track consecutive correct/wrong for adaptive difficulty
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [consecutiveWrong, setConsecutiveWrong] = useState(0);

    // We need to filter/sort questions based on difficulty or pick them dynamically.
    // For simplicity in this implementation, we will just use the full list but potentially 
    // skip or reorder if we were being truly adaptive. 
    // Given the requirement: "20 questions total". We can pre-select a set or just iterate.
    // Let's iterate through the fixed list for now but track "difficulty" as a user stat.
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        // Shuffle and pick 20 or just load the list
        setQuestions(iqTestQuestions); // In real app, might want to randomize order
    }, []);

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            finishTest();
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startGame = () => {
        setGameState('playing');
        setIsActive(true);
        setTimeLeft(600);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setScore(0);
    };

    const handleAnswer = (answerIndex: number) => {
        const currentQ = questions[currentQuestionIndex];
        const isCorrect = answerIndex === currentQ.correctAnswer;

        // Record answer
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answerIndex;
        setAnswers(newAnswers);

        // Update internal score/stats
        if (isCorrect) {
            setScore((prev) => prev + currentQ.difficulty); // Weighted score
            setConsecutiveCorrect((prev) => prev + 1);
            setConsecutiveWrong(0);
        } else {
            setConsecutiveWrong((prev) => prev + 1);
            setConsecutiveCorrect(0);
        }

        // Adaptive Logic (Simple simulation)
        // If we had a huge bank of questions, we would pick the next one based on this.
        // For fixed list, we just track the "user level".
        if (consecutiveCorrect >= 3) {
            setDifficultyLevel((prev) => Math.min(5, prev + 1));
            // Reset tracker so we don't level up every single time after 3
            setConsecutiveCorrect(0);
        } else if (consecutiveWrong >= 2) {
            setDifficultyLevel((prev) => Math.max(1, prev - 1));
            setConsecutiveWrong(0);
        }

        // Move to next
        if (currentQuestionIndex < questions.length - 1) {
            // Small delay for UX? Or instant? Requirement says "Auto-advance".
            // Let's do it instantly or with a tiny wrapper handler in the UI.
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1);
            }, 300); // 300ms delay to see selection feedback
        } else {
            finishTest();
        }
    };

    const finishTest = () => {
        setIsActive(false);
        setGameState('result');
        if (onFinish) {
            // Calculate final stats
            const finalIQ = calculateIQ(score, 600 - timeLeft);
            onFinish({
                rawScore: score,
                iq: finalIQ,
                correctCount: answers.filter((a, i) => a === questions[i].correctAnswer).length,
                totalTime: 600 - timeLeft,
                answers
            });
        }
    };

    const retry = () => {
        setGameState('start');
        setAnswers([]);
        setScore(0);
        setTimeLeft(600);
    };

    return {
        gameState,
        currentQuestionIndex,
        currentQuestion: questions[currentQuestionIndex],
        totalQuestions: questions.length,
        timeLeft,
        startGame,
        handleAnswer,
        retry,
    };
}

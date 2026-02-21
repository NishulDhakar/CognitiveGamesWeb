import React, { useState, useEffect } from 'react';
import MotionChallengeBoard from './MotionChallengeBoard';
import { motionLevels, Entity, isValidMove, checkWinPattern, LevelDef } from '@/app/play/Motion-challenge/gameLogic';
import { ArrowRight, SkipForward, RefreshCw } from 'lucide-react';

interface MotionChallengeUIProps {
    levelIndex: number;
    onLevelComplete: (moves: number) => void;
    onSkipLevel: () => void;
    gameStatus: 'playing' | 'results';
    correct: number;
    wrong: number;
    resetGame: () => void;
}

const MotionChallengeUI: React.FC<MotionChallengeUIProps> = ({
    levelIndex,
    onLevelComplete,
    onSkipLevel,
    gameStatus,
    correct,
    wrong,
    resetGame,
}) => {
    // Get current level definition (looping if we run out)
    const levelDef: LevelDef = motionLevels[levelIndex % motionLevels.length];

    const [entities, setEntities] = useState<Entity[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [movesCount, setMovesCount] = useState<number>(0);
    const [isLevelWon, setIsLevelWon] = useState<boolean>(false);

    // Initialize or reset level state when levelIndex changes
    useEffect(() => {
        // Deep copy entities to avoid mutating the original level definition
        setEntities(JSON.parse(JSON.stringify(levelDef.entities)));
        setSelectedId(null);
        setMovesCount(0);
        setIsLevelWon(false);
    }, [levelDef]);

    const handleSelect = (id: string) => {
        setSelectedId(id);
    };

    const handleMove = (id: string, dx: number, dy: number) => {
        if (isLevelWon || gameStatus !== 'playing') return;

        if (isValidMove(levelDef, entities, id, dx, dy)) {
            const newEntities = entities.map((e) =>
                e.id === id ? { ...e, x: e.x + dx, y: e.y + dy } : e
            );

            setEntities(newEntities);
            setSelectedId(null);
            setMovesCount((m) => m + 1);

            if (checkWinPattern(levelDef, newEntities)) {
                setIsLevelWon(true);
                // Small delay so user sees the ball enter the hole
                setTimeout(() => {
                    onLevelComplete(movesCount + 1);
                }, 800);
            }
        }
    };

    const handleResetLevel = () => {
        setEntities(JSON.parse(JSON.stringify(levelDef.entities)));
        setSelectedId(null);
        setMovesCount(0);
    };

    if (gameStatus === 'results') {
        const totalAttempted = correct + wrong;
        const finalScore = correct * 4 - wrong * 1;
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 focus:outline-none">Time's Up!</h2>

                <div className="w-full space-y-4 mb-8">
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                        <span className="text-gray-600 font-medium">Levels Complete</span>
                        <span className="text-2xl font-bold text-green-600">{correct}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                        <span className="text-gray-600 font-medium">Levels Skipped</span>
                        <span className="text-2xl font-bold text-red-500">{wrong}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border-t-2 border-gray-200">
                        <span className="text-gray-800 font-bold">Total Score</span>
                        <span className="text-3xl font-bold text-blue-600">{finalScore}</span>
                    </div>
                </div>

                <button
                    onClick={resetGame}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <RefreshCw className="w-5 h-5" />
                    Play Again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full">
            {/* Game Header Controls */}
            <div className="w-full max-w-[400px] flex justify-between items-center mb-6 px-4">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">Moves</span>
                    <span className="text-2xl font-bold text-gray-800 font-mono">{movesCount}</span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleResetLevel}
                        className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors shadow-sm"
                        title="Reset Level"
                        aria-label="Reset Level"
                    >
                        <RefreshCw className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onSkipLevel}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-semibold shadow-sm text-sm"
                    >
                        Skip <SkipForward className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* The Board */}
            <div className="relative">
                <MotionChallengeBoard
                    level={levelDef}
                    entities={entities}
                    selectedId={selectedId}
                    onSelect={handleSelect}
                    onMove={handleMove}
                    disabled={isLevelWon}
                />

                {/* Success Overlay */}
                {isLevelWon && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-lg animate-in fade-in duration-300">
                        <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl shadow-green-500/30 flex items-center gap-3 transform scale-110">
                            <span className="font-bold text-xl">Well Done!</span>
                            <ArrowRight className="w-6 h-6 animate-pulse" />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm max-w-sm px-4">
                <p>Tap a block to select it, then tap the arrows to slide it into empty spaces. Build a path for the red ball to reach the hole!</p>
            </div>
        </div>
    );
};

export default MotionChallengeUI;

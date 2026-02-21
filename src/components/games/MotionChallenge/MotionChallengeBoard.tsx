import React from 'react';
import { Entity, LevelDef, getValidMoves } from '@/app/play/Motion-challenge/gameLogic';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, X } from 'lucide-react';

interface MotionChallengeBoardProps {
    level: LevelDef;
    entities: Entity[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onMove: (id: string, dx: number, dy: number) => void;
    disabled?: boolean;
}

const CELL_SIZE = 64; // px

const MotionChallengeBoard: React.FC<MotionChallengeBoardProps> = ({
    level,
    entities,
    selectedId,
    onSelect,
    onMove,
    disabled = false,
}) => {
    const boardWidth = level.cols * CELL_SIZE;
    const boardHeight = level.rows * CELL_SIZE;

    const handleEntityClick = (id: string, type: string) => {
        if (disabled || type === 'obstacle') return;
        onSelect(id === selectedId ? '' : id); // Toggle selection
    };

    return (
        <div className="flex flex-col items-center select-none">
            <div
                className="relative bg-gray-200 shadow-xl rounded-lg overflow-hidden border-4 border-gray-300"
                style={{ width: boardWidth, height: boardHeight }}
            >
                {/* Render grid lines for visual clarity */}
                {Array.from({ length: level.rows }).map((_, r) => (
                    Array.from({ length: level.cols }).map((_, c) => (
                        <div
                            key={`grid-${r}-${c}`}
                            className="absolute border border-gray-300/30"
                            style={{
                                top: r * CELL_SIZE,
                                left: c * CELL_SIZE,
                                width: CELL_SIZE,
                                height: CELL_SIZE,
                            }}
                        />
                    ))
                ))}

                {/* Render the Hole */}
                <div
                    className="absolute flex items-center justify-center"
                    style={{
                        top: level.hole.y * CELL_SIZE,
                        left: level.hole.x * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                    }}
                >
                    <div className="w-3/4 h-3/4 bg-gray-900 rounded-full shadow-inner z-0" />
                </div>

                {/* Render Entities */}
                {entities.map((entity) => {
                    const isSelected = selectedId === entity.id;
                    const validMoves = isSelected ? getValidMoves(level, entities, entity.id) : null;

                    // Entity styling based on type
                    let entityClasses = 'absolute flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer';
                    let innerContent = null;

                    if (entity.type === 'obstacle') {
                        entityClasses += ' bg-gray-300 cursor-not-allowed z-10';
                        innerContent = (
                            <div className="w-full h-full relative flex items-center justify-center">
                                <X className="text-gray-400 w-10 h-10" />
                                {/* Diagonal lines to match screenshot cross marks */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-50" />
                            </div>
                        );
                    } else if (entity.type === 'ball') {
                        entityClasses += ` rounded-full ${entity.color} z-20 hover:scale-105 active:scale-95`;
                        if (isSelected) entityClasses += ' ring-4 ring-yellow-400 ring-offset-2';
                    } else if (entity.type === 'block') {
                        entityClasses += ` ${entity.color} rounded-md z-20 hover:brightness-110`;
                        if (isSelected) entityClasses += ' ring-4 ring-yellow-400 ring-inset';
                    }

                    return (
                        <motion.div
                            key={entity.id}
                            layout
                            initial={false}
                            animate={{
                                top: entity.y * CELL_SIZE,
                                left: entity.x * CELL_SIZE,
                                width: entity.w * CELL_SIZE,
                                height: entity.h * CELL_SIZE,
                            }}
                            className={entityClasses}
                            // Slight padding to scale blocks down a bit from absolute cell borders
                            style={{
                                padding: entity.type === 'ball' ? '4px' : '2px',
                                backgroundClip: 'content-box'
                            }}
                            onClick={() => handleEntityClick(entity.id, entity.type)}
                        >
                            {innerContent}

                            {/* Arrow Controls for Selected Entity */}
                            {isSelected && !disabled && (
                                <div className="absolute inset-0 z-30 pointer-events-none">
                                    {validMoves?.up && (
                                        <button
                                            className="absolute top-0 left-1/2 -trangray-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg pointer-events-auto hover:bg-gray-100"
                                            style={{ transform: 'translate(-50%, -50%)' }}
                                            onClick={(e) => { e.stopPropagation(); onMove(entity.id, 0, -1); }}
                                        >
                                            <ArrowUp className="w-4 h-4 text-gray-800" />
                                        </button>
                                    )}
                                    {validMoves?.down && (
                                        <button
                                            className="absolute bottom-0 left-1/2 -trangray-x-1/2 translate-y-1/2 bg-white rounded-full p-1 shadow-lg pointer-events-auto hover:bg-gray-100"
                                            style={{ transform: 'translate(-50%, 50%)' }}
                                            onClick={(e) => { e.stopPropagation(); onMove(entity.id, 0, 1); }}
                                        >
                                            <ArrowDown className="w-4 h-4 text-gray-800" />
                                        </button>
                                    )}
                                    {validMoves?.left && (
                                        <button
                                            className="absolute left-0 top-1/2 -translate-x-1/2 -trangray-y-1/2 bg-white rounded-full p-1 shadow-lg pointer-events-auto hover:bg-gray-100"
                                            style={{ transform: 'translate(-50%, -50%)' }}
                                            onClick={(e) => { e.stopPropagation(); onMove(entity.id, -1, 0); }}
                                        >
                                            <ArrowLeft className="w-4 h-4 text-gray-800" />
                                        </button>
                                    )}
                                    {validMoves?.right && (
                                        <button
                                            className="absolute right-0 top-1/2 translate-x-1/2 -trangray-y-1/2 bg-white rounded-full p-1 shadow-lg pointer-events-auto hover:bg-gray-100"
                                            style={{ transform: 'translate(50%, -50%)' }}
                                            onClick={(e) => { e.stopPropagation(); onMove(entity.id, 1, 0); }}
                                        >
                                            <ArrowRight className="w-4 h-4 text-gray-800" />
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default MotionChallengeBoard;

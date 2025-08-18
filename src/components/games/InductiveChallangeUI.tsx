import React from 'react';
import { Clock, Lightbulb } from 'lucide-react';
import { Grid, InductivePuzzle, Shape } from '@/app/games/Inductivechallenge/gameLogic';
import ResultCard from '../common/Result';

interface InductiveChallengeUIProps {
  puzzle?: InductivePuzzle | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  selectedCandidates: number[];
  handleCandidateSelect: (index: number) => void;
  timeLeft: number;
  gameStatus: 'playing' | 'results';
  correct: number;
  wrong: number;
  resetGame: () => void;
  level: number;
}

export default function InductiveChallengeUI({
  puzzle,
  isAnswered,
  isCorrect,
  selectedCandidates,
  handleCandidateSelect,
  timeLeft,
  gameStatus,
  correct,
  wrong,
  resetGame,
  level
}: InductiveChallengeUIProps) {

  const getShapeDisplay = (shape: Shape) => {
    const shapeMap = {
      CIRCLE: { symbol: '●', color: 'text-purple-500' },
      SQUARE: { symbol: '■', color: 'text-green-500' },
      TRIANGLE: { symbol: '▲', color: 'text-blue-500' },
      PLUS: { symbol: '+', color: 'text-red-500' },
      DIAMOND: { symbol: '♦', color: 'text-orange-500' },
      STAR: { symbol: '★', color: 'text-yellow-600' }
    };
    return shapeMap[shape];
  };

  const GridDisplay = ({ grid, title, isCandidate = false, candidateIndex = -1 }: {
    grid: Grid;
    title?: string;
    isCandidate?: boolean;
    candidateIndex?: number;
  }) => {
    const isSelected = isCandidate && selectedCandidates.includes(candidateIndex);
    const isCorrectCandidate = isAnswered && puzzle?.correctIndices.includes(candidateIndex);
    const isWrongSelection = isAnswered && isSelected && !puzzle?.correctIndices.includes(candidateIndex);

    return (
      <div className="text-center space-y-3">
        {title && <h4 className="text-sm font-medium text-gray-600">{title}</h4>}
        <div 
          className={`inline-block p-4 rounded-2xl transition-all duration-300 ${
            isCandidate ? 'cursor-pointer hover:scale-105' : ''
          } ${
            isSelected && !isAnswered 
              ? 'bg-blue-50 border-2 border-blue-300 shadow-lg' 
              : isCorrectCandidate
                ? 'bg-emerald-50 border-2 border-emerald-300 shadow-lg'
                : isWrongSelection
                  ? 'bg-rose-50 border-2 border-rose-300 shadow-lg'
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
          }`}
          onClick={isCandidate ? () => handleCandidateSelect(candidateIndex) : undefined}
        >
          <div className="grid grid-cols-3 gap-2">
            {grid.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                const shape = getShapeDisplay(cell);
                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-xl font-bold rounded-lg bg-gray-50 border border-gray-200 ${shape.color}`}
                  >
                    {shape.symbol}
                  </div>
                );
              })
            )}
          </div>
          {isAnswered && isCandidate && (
            <div className="mt-2">
              {isCorrectCandidate ? (
                <div className="text-emerald-600 text-xs font-semibold">✓ Correct</div>
              ) : isWrongSelection ? (
                <div className="text-rose-600 text-xs font-semibold">✗ Wrong</div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (gameStatus === 'results') {
    return (
    
        <ResultCard
          correct={correct}
          wrong={wrong}
          resetGame={resetGame}
        />

    );
  }

  if (!puzzle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      
      {/* Game info bar */}
      <div className="flex justify-between items-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border-white/30   p-4 shadow-lg border ">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Difficulty <span className="font-semibold text-gray-900">{puzzle.difficulty}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className={`font-mono text-sm font-semibold ${timeLeft <= 5 ? 'text-red-600' : 'text-gray-700'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Main game area - Desktop Layout */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden p-4 md:p-8">
          {/* Examples section */}
          <div className="mb-4">
            <div className="text-center mb-2">
            </div>
            
            <div className="flex justify-center gap-8">
              <GridDisplay 
                grid={puzzle.examples[0]} 
                title="Example 1"
              />
              <GridDisplay 
                grid={puzzle.examples[1]} 
                title="Example 2"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="px-4 text-gray-500 text-sm font-medium">Find the Pattern</div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Candidates section */}
          <div className="">
            
            <div className="grid grid-cols-2 gap-6">
              {puzzle.candidates.map((grid, index) => (
                <GridDisplay
                  key={index}
                  grid={grid}
                  title={`Option ${String.fromCharCode(65 + index)}`}
                  isCandidate={true}
                  candidateIndex={index}
                />
              ))}
            </div>

                    <div className=" mt-6 text-center ">
              <p className="text-gray-600 text-sm">
            Select 2 Correct Grids
              </p>
              <div className="mt-2 text-xs text-gray-500">
                Selected: {selectedCandidates.length}/2
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 min-h-[600px]">
          
          {/* Left side - Examples */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">These two grids follow a rule.</h3>
              <p className=" text-gray-600 text-sm">Study the pattern carefully</p>
            </div>
            
            <div className="space-y-8">
              <GridDisplay 
                grid={puzzle.examples[0]} 
                title="Example 1"
              />
              <GridDisplay 
                grid={puzzle.examples[1]} 
                title="Example 2"
              />
            </div>
          </div>

          {/* Right side - Candidates */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Which two of these grids follow the same rule?</h3>
              <p className="text-gray-600 text-sm">Select exactly 2 grids</p>
              <div className="mt-2 text-xs text-gray-500">
                Selected: {selectedCandidates.length}/2
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {puzzle.candidates.map((grid, index) => (
                <GridDisplay
                  key={index}
                  grid={grid}
                  title={`Option ${String.fromCharCode(65 + index)}`}
                  isCandidate={true}
                  candidateIndex={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Selection status */}
        {selectedCandidates.length > 0 && !isAnswered && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
              <div className="text-sm font-medium">
                Selected: {selectedCandidates.map(i => String.fromCharCode(65 + i)).join(', ')}
              </div>
            </div>
          </div>
        )}

        {/* Feedback overlay */}
{isAnswered && (
  <div
    className={`absolute inset-0 flex flex-col items-center justify-center 
      bg-white/95 backdrop-blur-sm rounded-3xl 
      transition-all duration-500 px-4 text-center
      ${isCorrect ? 'border-4 border-emerald-300' : 'border-4 border-rose-300'}
    `}
    style={{ zIndex: 10, pointerEvents: 'none' }}
  >
    {/* Icon container */}
    <div
      className={`mb-6 flex items-center justify-center rounded-full 
        ${isCorrect ? 'bg-emerald-100' : 'bg-rose-100'}
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
      `}
    >
      <span
        className={`${
          isCorrect ? 'text-emerald-600' : 'text-rose-600'
        } text-4xl sm:text-5xl md:text-6xl`}
      >
        {isCorrect ? '✓' : '✗'}
      </span>
    </div>

    {/* Text content */}
    <div className="space-y-2 max-w-sm sm:max-w-md mx-auto">
      <div
        className={`font-bold 
          ${isCorrect ? 'text-emerald-700' : 'text-rose-700'} 
          text-2xl sm:text-3xl md:text-4xl
        `}
      >
        {isCorrect ? 'Excellent!' : 'Not Quite!'}
      </div>
      <div className="text-gray-600 text-base sm:text-lg md:text-xl">
        {isCorrect
          ? 'You found the correct pattern!'
          : `The rule was: ${puzzle.rule}`}
      </div>
      {!isCorrect && (
        <div className="text-xs sm:text-sm text-gray-500 mt-2">
          Correct answers:{' '}
          {puzzle.correctIndices.map((i) => String.fromCharCode(65 + i)).join(', ')}
        </div>
      )}
    </div>
  </div>
)}

      </div>

      {/* Hint section */}
      <div className="hidden md:flex justify-center text-center">
        <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <div className="text-amber-700 text-sm">
            <span className="font-medium">Hint:</span> Look for patterns in rows, columns, or shape arrangements
          </div>
        </div>
      </div>
    </div>
  );
}
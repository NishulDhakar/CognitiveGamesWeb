import React from "react";
import { Puzzle, Symbol as GameSymbol } from "@/types/game";
import { Button } from "../ui/button";

interface DeductiveChallengeUIProps {
  puzzle: Puzzle | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  selected: GameSymbol | null;
  handleSelect: (symbol: GameSymbol) => void;
  timeLeft: number;
  gameStatus: 'playing' | 'results';
  correct: number;
  wrong: number;
  resetGame: () => void;
  level: number;
}

const DeductiveChallengeUI: React.FC<DeductiveChallengeUIProps> = ({
  puzzle,
  isAnswered,
  isCorrect,
  selected,
  handleSelect,
  timeLeft,
  gameStatus,
  correct,
  wrong,
  resetGame,
}) => {
  // Helper to check if a cell is the target
  const isTargetCell = (r: number, c: number) => puzzle && puzzle.targetCell.row === r && puzzle.targetCell.col === c;
  // Helper to check if a cell is an empty distractor
  const isDistractorCell = (r: number, c: number) => puzzle && puzzle.emptyCells.some((cell: {row: number, col: number}) => cell.row === r && cell.col === c) && !isTargetCell(r, c);

  return (
    <>
      {gameStatus === "results" ? (
        <div className="text-center space-y-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl 	p-4 md:p-8 border border-white/50">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">Session Complete!</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg">
                <div className="text-emerald-600 text-sm font-semibold mb-2">Correct</div>
                <div className="text-xl md:text-3xl font-bold text-emerald-700">{correct}</div>
              </div>
              <div className="bg-rose-50 p-6 rounded-2xl border-2 border-rose-200 shadow-lg">
                <div className="text-rose-600 text-sm font-semibold mb-2">Wrong</div>
                <div className="text-xl md:text-3xl font-bold text-rose-700">{wrong}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
                <div className="text-slate-600 text-sm font-semibold mb-2">Total</div>
                <div className="text-xl md:text-3xl font-bold text-slate-700">{correct + wrong}</div>
              </div>
            </div>
            <Button
              onClick={resetGame}
             variant={"outline"}
            >
              Play Again
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl 	p-4 md:p-8 relative border border-white/50">
          {/* Enhanced instruction */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Find the Missing Symbol</h3>
            <p className="text-gray-600">Choose the correct answer from the options below</p>
          </div>
          {/* Enhanced feedback overlay */}
          {isAnswered && (
            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl transition-all duration-500 ${
              isCorrect ? 'border-4 border-emerald-300' : 'border-4 border-rose-300'
            }`}
                 style={{zIndex: 10, pointerEvents: 'none'}}>
              <div className={`mb-4 w-20 h-20 rounded-full flex items-center justify-center ${
                isCorrect ? 'bg-emerald-100' : 'bg-rose-100'
              }`}>
                <span className={`text-4xl ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {isCorrect ? '✓' : '✗'}
                </span>
              </div>
              <span className={`text-2xl font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                {isCorrect ? 'Correct!' : 'Wrong!'}
              </span>
              <div className="mt-2 text-gray-600">
                {isCorrect ? 'Well done!' : 'Better luck next time!'}
              </div>
            </div>
          )}
          {/* Enhanced Grid */}
          {puzzle && (
            <div className="mb-10 flex justify-center">
              <div className="grid gap-6 md:gap-3 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-slate-200 shadow-inner" 
                   style={{ gridTemplateColumns: `repeat(${puzzle.grid.length}, minmax(0, 1fr))` }}>
                {puzzle.grid.map((row, rIdx) =>
                  row.map((cell, cIdx) => {
                    if (isTargetCell(rIdx, cIdx)) {
                      return (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className="	w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-xl md:text-3xl rounded-xl font-bold shadow-lg border-3 border-blue-400 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-500 animate-pulse"
                        >
                          ?
                        </div>
                      );
                    } else if (isDistractorCell(rIdx, cIdx)) {
                      return (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className="	w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-xl md:text-3xl rounded-xl font-bold shadow-md border-2 border-slate-300 bg-gradient-to-br from-slate-200 to-slate-300 opacity-60"
                        >
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className="	w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-xl md:text-3xl rounded-xl font-bold shadow-lg border-2 border-slate-300 bg-gradient-to-br from-white to-slate-50 text-slate-700 hover:shadow-xl transition-all duration-200"
                        >
                          {cell}
                        </div>
                      );
                    }
                  })
                )}
              </div>
            </div>
          )}
          {/* Enhanced Options */}
          {puzzle && (
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-4">
                {puzzle.options.map((option, idx) => (
                  <button
                    key={`${option}-${idx}`}
                    onClick={() => handleSelect(option)}
                    disabled={isAnswered}
                    className={`h-12 md:h-16 text-lg md:text-2xl rounded-2xl font-bold shadow-lg border-2 transition-all duration-200 transform ${
                      selected === option && isAnswered
                        ? isCorrect
                          ? "bg-gradient-to-r from-emerald-200 to-emerald-300 border-emerald-400 text-emerald-800 shadow-xl"
                          : "bg-gradient-to-r from-rose-200 to-rose-300 border-rose-400 text-rose-800 shadow-xl"
                        : "bg-gradient-to-br from-white to-slate-50 border-slate-300 text-slate-700 hover:from-blue-50 hover:to-blue-100 hover:border-blue-300 hover:shadow-xl hover:scale-105 active:scale-95"
                    } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Enhanced Timer */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-slate-200 px-6 py-3 rounded-2xl border-2 border-slate-300 shadow-lg">
              <div className={`w-3 h-3 rounded-full ${timeLeft <= 5 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
              <span className={`font-mono text-lg font-semibold ${timeLeft <= 5 ? 'text-red-600' : 'text-slate-700'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeductiveChallengeUI;

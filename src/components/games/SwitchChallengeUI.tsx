'use client';

import React from "react";
import { SwitchPuzzle } from "@/app/games/(capgemini)/Switchchallenge/gameLogic";

interface Props {
  puzzle: SwitchPuzzle | null;
  isAnswered: boolean;
  isCorrect: boolean | null;
  selected: string | null;
  handleSelect: (op: string) => void;
  timeLeft: number;
  gameStatus: "playing" | "results";
  correct: number;
  resetGame: () => void;
}

const SwitchChallengeUI: React.FC<Props> = ({
  puzzle,
  isAnswered,
  isCorrect,
  selected,
  handleSelect,
  timeLeft,
  gameStatus,
  correct,
  resetGame,
}) => {
  if (!puzzle) return null;

  const options: string[] = puzzle.options;

  return (
    <div className=" px-4 py-8">
      {gameStatus === "results" ? (
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            🎉 Session Complete!
          </h2>

          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow mb-8">
            <div className="text-emerald-600 text-sm font-semibold mb-2">Correct Answers</div>
            <div className="text-3xl font-bold text-emerald-700">{correct}</div>
          </div>

          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md transition-transform hover:scale-105"
          >
            🔁 Play Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200 relative">
          {/* Feedback Overlay */}
          {isAnswered && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl transition-all duration-500 z-10 pointer-events-none ${
                isCorrect ? 'border-4 border-emerald-300' : 'border-4 border-rose-300'
              }`}
            >
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
              <p className="text-gray-600 mt-1">
                {isCorrect ? 'Nice work!' : 'Try again next round.'}
              </p>
            </div>
          )}

          {/* Puzzle Info */}
          <div className="text-center mb-6 space-y-2">
            <p className="text-gray-700 text-base">
              <strong>Input:</strong> {puzzle.input.join(" ")}
            </p>
            {puzzle.layers === 2 && (
              <p className="text-gray-700 text-base">
                <strong>First Operator:</strong> {puzzle.operators[0].join(" ")}
              </p>
            )}
            <p className="text-gray-700 text-base">
              <strong>Output:</strong> {puzzle.output.join(" ")}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              Which operator produces this output?
            </h3>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {options.map((op, idx) => {
              const isSelected = selected === op;
              const showResult = isAnswered && isSelected;

              return (
                <button
                  key={op}
                  onClick={() => handleSelect(op)}
                  disabled={isAnswered}
                  className={`h-12 md:h-14 rounded-2xl text-lg md:text-xl font-bold shadow-lg border-2 transition-all duration-200 transform ${
                    showResult
                      ? isCorrect
                        ? "bg-emerald-100 border-emerald-300 text-emerald-700 shadow-xl"
                        : "bg-rose-100 border-rose-300 text-rose-700 shadow-xl"
                      : "bg-gradient-to-br from-white to-slate-50 border-slate-300 text-slate-700 hover:shadow-xl hover:scale-105"
                  } ${isAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {op}
                </button>
              );
            })}
          </div>

          {/* Timer */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-6 py-2 rounded-2xl border-2 border-slate-300 shadow-md">
              <div
                className={`w-3 h-3 rounded-full ${
                  timeLeft <= 5 ? 'bg-red-500 animate-pulse' : 'bg-green-500'
                }`}
              ></div>
              <span
                className={`font-mono text-base font-semibold ${
                  timeLeft <= 5 ? 'text-red-600' : 'text-slate-700'
                }`}
              >
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitchChallengeUI;

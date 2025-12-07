"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DigitProblem } from "@/app/play/Digitchallenge/gameLogic";
import ResultCard from "../common/Result";

interface Props {
  problem: DigitProblem | null;
  userDigits: number[];
  timeLeft: number;
  sessionTime: number;
  isAnswered: boolean;
  isCorrect: boolean | null;
  correctCount: number;
  wrongCount: number;
  gameStatus: "playing" | "results";
  handleDigitClick: (d: number) => void;
  handleDelete: () => void;
  handleSubmit: () => void;
  resetGame: () => void;
}

export default function DigitChallengeUI({
  problem,
  userDigits,
  timeLeft,
  isAnswered,
  isCorrect,
  correctCount,
  wrongCount,
  gameStatus,
  handleDigitClick,
  handleDelete,
  handleSubmit,
  resetGame,
}: Props) {
  if (!problem) return null;

  // Results screen
  if (gameStatus === "results") {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <ResultCard correct={correctCount} wrong={wrongCount} resetGame={resetGame} />
      </div>
    );
  }

  const used = new Set(userDigits);

  return (
    <div className="px-4 py-8 flex flex-col-3 items-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200 relative">
        {isAnswered && (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl transition-all duration-500 z-10 pointer-events-none ${isCorrect ? "border-4 border-emerald-300" : "border-4 border-rose-300"
              }`}
          >
            <div
              className={`mb-4 w-20 h-20 rounded-full flex items-center justify-center ${isCorrect ? "bg-emerald-100" : "bg-rose-100"
                }`}
            >
              <span
                className={`text-4xl ${isCorrect ? "text-emerald-600" : "text-rose-600"
                  }`}
              >
                {isCorrect ? "✓" : "✗"}
              </span>
            </div>
            <span
              className={`text-2xl font-bold ${isCorrect ? "text-emerald-700" : "text-rose-700"
                }`}
            >
              {isCorrect ? "Correct!" : "Wrong!"}
            </span>
            <p className="text-gray-600 mt-1">
              {isCorrect ? "Great job!" : "Try again next round."}
            </p>
          </div>
        )}

        {/* Equation */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            {problem.tokens.map((t, i) => {
              if (t === "_") {
                const blankIndex =
                  problem.tokens.slice(0, i + 1).filter((x) => x === "_").length - 1;
                const val = userDigits[blankIndex];
                return (
                  <div
                    key={i}
                    className="w-12 h-12 flex items-center justify-center border-2 rounded-xl bg-slate-50 text-lg font-bold shadow-sm"
                  >
                    {typeof val === "number" ? val : ""}
                  </div>
                );
              } else {
                return (
                  <div key={i} className="px-1">
                    {t === "*" ? "×" : t === "/" ? "÷" : t}
                  </div>
                );
              }
            })}
            <span>=</span>
            <span className="font-bold">{problem.target}</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">Use each digit only once.</p>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
            const disabled = used.has(n) || isAnswered;
            return (
              <Button
                key={n}
                onClick={() => handleDigitClick(n)}
                disabled={disabled}
                className={`h-14 text-lg rounded-2xl font-semibold shadow-md ${disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:scale-105 transition-transform"
                  }`}
              >
                {n}
              </Button>
            );
          })}
          <Button
            onClick={handleDelete}
            disabled={isAnswered}
            variant="destructive"
            className="col-span-3 h-12 mt-4 rounded-2xl"
          >
            Delete
          </Button>
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={isAnswered || userDigits.length !== problem.blanks}
          className="w-full bg-[#A35C2D] h-12 text-lg rounded-2xl shadow-md"
        >
          Submit
        </Button>

        {/* Stats */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <div>
            Blanks: <strong>{problem.blanks}</strong>
          </div>
          <div>
            Time Left:{" "}
            <span
              className={`font-mono font-semibold ${timeLeft <= 5 ? "text-red-600 animate-pulse" : "text-slate-800"
                }`}
            >
              {timeLeft}s
            </span>
          </div>

        </div>

        {/* Score */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-center">
            <div className="text-sm text-gray-500">Correct</div>
            <div className="font-semibold text-lg">{correctCount}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Wrong</div>
            <div className="font-semibold text-lg">{wrongCount}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

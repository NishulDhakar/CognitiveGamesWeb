// "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import GamePage from "@/components/common/GamePage"; // your shared layout
// import { GridChallenge, defaultConfig, Cell, GameSnapshot } from "./gameLogic";

// export default function GridChallengePage() {
//   const [engine] = useState(() => new GridChallenge(defaultConfig));
//   const [snapshot, setSnapshot] = useState<GameSnapshot>(engine.snapshot());
//   const [recallSequence, setRecallSequence] = useState<Cell[]>([]);
//   const [cellFeedback, setCellFeedback] = useState<{ [key: string]: "correct" | "wrong" }>({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 min total game timer

//   // Main countdown timer
//   useEffect(() => {
//     if (snapshot.phase !== "Idle" && timeLeft > 0) {
//       const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
//       return () => clearTimeout(t);
//     }
//   }, [snapshot.phase, timeLeft]);

//   const formatTime = (sec: number) =>
//     `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;

//   const handleStart = () => {
//     const snap = engine.start();
//     setSnapshot(snap);
//     setRecallSequence([]);
//     setCellFeedback({});
//     setTimeLeft(300);
//     scheduleBlinkToPatterns(snap);
//   };

//   // Blink → Patterns after 2 seconds
//   const scheduleBlinkToPatterns = useCallback(
//     (snap: GameSnapshot) => {
//       if (snap.phase === "Blink") {
//         setTimeout(() => {
//           const next = engine.proceedToPatterns();
//           setSnapshot(next);
//           schedulePatternsNext(next);
//         }, 2000);
//       }
//     },
//     [engine]
//   );

//   // Patterns → Blink or Recall after 4 seconds if no answer
//   const schedulePatternsNext = useCallback(
//     (snap: GameSnapshot) => {
//       if (snap.phase === "Patterns") {
//         setTimeout(() => {
//           if (engine.isAwaitingAnswer()) {
//             // Auto skip if user didn't answer
//             const next = engine.answerSymmetry({ saysSymmetric: false });
//             setSnapshot(next);
//             if (next.phase === "Blink") scheduleBlinkToPatterns(next);
//           }
//         }, 4000);
//       }
//     },
//     [engine]
//   );

  

//   const handleSymmetryAnswer = (saysSymmetric: boolean) => {
//     const snap = engine.answerSymmetry({ saysSymmetric });
//     setSnapshot(snap);
//     if (snap.phase === "Blink") scheduleBlinkToPatterns(snap);
//   };

//   // Recall click with feedback
//   const handleRecallClick = (cell: Cell) => {
//     if (snapshot.phase !== "Recall") return;
//     const key = `${cell.r}-${cell.c}`;
//     if (recallSequence.some(sel => sel.r === cell.r && sel.c === cell.c)) return;

//     const isCorrect = snapshot.blink?.blinkCell.r === cell.r && snapshot.blink?.blinkCell.c === cell.c;
//     setCellFeedback(prev => ({ ...prev, [key]: isCorrect ? "correct" : "wrong" }));

//     const seq = [...recallSequence, cell];
//     setRecallSequence(seq);

//     // Proceed after short delay
//     setTimeout(() => {
//       if (seq.length === snapshot.recallTargetLength) {
//         const snap = engine.answerRecall({ sequence: seq });
//         setSnapshot(snap);
//         setRecallSequence([]);
//         setCellFeedback({});
//         if (snap.phase === "Blink") scheduleBlinkToPatterns(snap);
//       }
//     }, 800); // 0.8s delay to show tick/cross
//   };

// const renderGrid = (grid: boolean[][], blinkCell?: Cell, blink = false) => (
//   <div
//     className={`grid gap-2`}
//     style={{
//       gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
//       width: "fit-content",
//       margin: "0 auto"
//     }}
//   >
//     {grid.map((row, r) =>
//       row.map((hasCircle, c) => {
//         const key = `${r}-${c}`;
//         const isBlink = blinkCell && r === blinkCell.r && c === blinkCell.c;
//         const isSelected = recallSequence.findIndex(s => s.r === r && s.c === c) >= 0;
//         const feedback = cellFeedback[key];

//         return (
//           <div
//             key={key}
//             className={`w-12 h-12 border rounded flex items-center justify-center
//               ${hasCircle ? (isBlink && blink ? "bg-green-500" : "bg-gray-700") : "bg-white"} 
//               ${snapshot.phase === "Recall" ? "cursor-pointer hover:scale-105" : ""} 
//               ${isSelected ? "opacity-50" : ""}`}
//             onClick={() => handleRecallClick({ r, c })}
//           >
//             {feedback === "correct" && <span className="text-green-500 text-xl">✔️</span>}
//             {feedback === "wrong" && <span className="text-red-500 text-xl">❌</span>}
//           </div>
//         );
//       })
//     )}
//   </div>
// );


//   return (
//     <GamePage
//       title="Grid Challenge"
//       level={snapshot.level}
//       timer={formatTime(timeLeft)}
//     >
//       {snapshot.phase === "Idle" && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={handleStart}
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
//           >
//             Start Game
//           </button>
//         </div>
//       )}

//       {snapshot.phase === "Blink" && snapshot.blink && (
//         <div className="mt-6 text-center">
//           <p className="mb-4 text-lg">Memorize the blinking cell</p>
//           {renderGrid(snapshot.blink.grid, snapshot.blink.blinkCell, true)}
//         </div>
//       )}

//       {snapshot.phase === "Patterns" && snapshot.patterns && (
//         <div className="mt-6 text-center">
//           <p className="mb-4 text-lg">Is Pattern B a symmetric transform of A?</p>
//           <div className="flex justify-center gap-8">
//             {renderGrid(snapshot.patterns.A)}
//             {renderGrid(snapshot.patterns.B)}
//           </div>
//           <div className="flex justify-center gap-4 mt-6">
//             <button
//               onClick={() => handleSymmetryAnswer(true)}
//               className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
//             >
//               Yes
//             </button>
//             <button
//               onClick={() => handleSymmetryAnswer(false)}
//               className="px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
//             >
//               No
//             </button>
//           </div>
//         </div>
//       )}

//       {snapshot.phase === "Recall" && (
//         <div className="mt-6 text-center">
//           <p className="mb-4 text-lg">Click the blinked cells in order</p>
//           {renderGrid(
//             Array.from({ length: defaultConfig.gridSize }, () =>
//               Array(defaultConfig.gridSize).fill(true)
//             )
//           )}
//         </div>
//       )}

//       {snapshot.phase === "Complete" && (
//         <div className="text-center mt-8">
//           <h2 className="text-2xl font-bold mb-2">Game Complete</h2>
//           <p className="mb-4">Final Score: {snapshot.score}</p>
//           <button
//             onClick={handleStart}
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
//           >
//             Play Again
//           </button>
//         </div>
//       )}
//     </GamePage>
//   );
// }


'use client';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-center font-game text-2xl sm:text-3xl md:text-4xl">
      Coming soon {">.<"}
    </div>
  );
}
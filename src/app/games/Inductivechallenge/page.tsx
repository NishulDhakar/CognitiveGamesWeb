"use client";
import { useState, useEffect } from "react";
import { generatePuzzle, checkInductiveAnswer, InductivePuzzle } from "./gameLogic";
import Container from "@/components/common/Container";
import GamePage from "@/components/common/GamePage";
import InductiveChallengeUI from "@/components/games/InductiveChallangeUI";


const TIME_PER_QUESTION = 30;
const SESSION_TIME = 360; 

export default function InductiveChallenge() {
  const [level, setLevel] = useState<number>(1);
  const [correct, setCorrect] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0);
  const [puzzle, setPuzzle] = useState<InductivePuzzle | null>(null);
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(TIME_PER_QUESTION);
  const [sessionTime, setSessionTime] = useState<number>(SESSION_TIME);
  const [gameStatus, setGameStatus] = useState<'playing' | 'results'>("playing");

  useEffect(() => {
    const newPuzzle = generatePuzzle(level);
    setPuzzle(newPuzzle);
    setSelectedCandidates([]);
    setIsAnswered(false);
    setIsCorrect(null);
    setTimeLeft(TIME_PER_QUESTION);
  }, [level]);

  useEffect(() => {
    if (gameStatus !== "playing" || isAnswered) return;
    if (timeLeft <= 0) {
      setIsAnswered(true);
      setIsCorrect(false);
      setWrong(w => w + 1);
      setTimeout(() => {
        setLevel(l => l + 1);
      }, 1200);
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, isAnswered, gameStatus]);

  useEffect(() => {
    if (gameStatus !== "playing") return;
    if (sessionTime <= 0) {
      setGameStatus("results");
      return;
    }
    const t = setTimeout(() => setSessionTime(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [sessionTime, gameStatus]);

  const handleCandidateSelect = (index: number) => {
    if (isAnswered || !puzzle) return;
    
    if (selectedCandidates.includes(index)) {
      setSelectedCandidates(selectedCandidates.filter(i => i !== index));
    } else if (selectedCandidates.length < 2) {
      const newSelected = [...selectedCandidates, index];
      setSelectedCandidates(newSelected);
      
      if (newSelected.length === 2) {
        const correctAns = checkInductiveAnswer(puzzle, newSelected);
        setIsCorrect(correctAns);
        setIsAnswered(true);
        
        if (correctAns) {
          setCorrect(c => c + 1);
        } else {
          setWrong(w => w + 1);
        }
        
        setTimeout(() => {
          setLevel(l => l + 1);
        }, 2500);
      }
    }
  };

  const resetGame = () => {
    setLevel(1);
    setCorrect(0);
    setWrong(0);
    setSessionTime(SESSION_TIME);
    setGameStatus("playing");
  };

  const formatTime = (t: number) => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;

  return (
    <Container>
      <GamePage title="Inductive Challenge" level={level} timer={formatTime(sessionTime)}>
        <div className="hidden"></div>

      </GamePage>
              <InductiveChallengeUI
          puzzle={puzzle}
          isAnswered={isAnswered}
          isCorrect={isCorrect}
          selectedCandidates={selectedCandidates}
          handleCandidateSelect={handleCandidateSelect}
          timeLeft={timeLeft}
          gameStatus={gameStatus}
          correct={correct}
          wrong={wrong}
          resetGame={resetGame}
          level={level}
        />
    </Container>
  );
}
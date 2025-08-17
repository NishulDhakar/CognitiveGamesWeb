"use client";
import { useState, useEffect } from "react";
import { generatePuzzle, checkAnswer, Puzzle, Symbol as GameSymbol } from "./gameLogic";
import Container from "@/components/common/Container";
import GamePage from "@/components/common/GamePage";
import DeductiveChallengeUI from "@/components/games/DeductiveChallengeUI";

const TIME_PER_QUESTION = 30;
const SESSION_TIME = 180;

export default function DeductiveChallenge() {
  const [level, setLevel] = useState<number>(1);
  const [correct, setCorrect] = useState<number>(0);
  const [wrong, setWrong] = useState<number>(0);
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [selected, setSelected] = useState<GameSymbol | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(TIME_PER_QUESTION);
  const [sessionTime, setSessionTime] = useState<number>(SESSION_TIME);
  const [gameStatus, setGameStatus] = useState<'playing' | 'results'>("playing");

  useEffect(() => {
    const newPuzzle = generatePuzzle(level);
    setPuzzle(newPuzzle);
    setSelected(null);
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

  const handleSelect = (symbol: GameSymbol) => {
    if (isAnswered || !puzzle) return;
    setSelected(symbol);
    const correctAns = checkAnswer(puzzle, symbol);
    setIsCorrect(correctAns);
    setIsAnswered(true);
    if (correctAns) {
      setCorrect(c => c + 1);
    } else {
      setWrong(w => w + 1);
    }
    setTimeout(() => {
      setLevel(l => l + 1);
    }, 1200);
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
      <GamePage title="Deductive Challenge" level={level} timer={formatTime(sessionTime)}>
        <DeductiveChallengeUI
          puzzle={puzzle}
          isAnswered={isAnswered}
          isCorrect={isCorrect}
          selected={selected}
          handleSelect={handleSelect}
          timeLeft={timeLeft}
          gameStatus={gameStatus}
          correct={correct}
          wrong={wrong}
          resetGame={resetGame}
          level={level}
        />
      </GamePage>
    </Container>
  );
}
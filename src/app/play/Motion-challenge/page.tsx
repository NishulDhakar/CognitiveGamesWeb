"use client"

import { useState, useEffect } from "react";
import Container from "@/components/common/Container";
import GamePage from "@/components/common/GamePage";
import MotionChallengeUI from "@/components/games/MotionChallenge/MotionChallengeUI";
import { formatTime } from "@/utils/gameUtils";
import { saveScore } from "@/actions/saveScore";

const SESSION_TIME = 240; // 4 minutes

export default function MotionChallenge() {
  const [level, setLevel] = useState(1);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [sessionTime, setSessionTime] = useState(SESSION_TIME);
  const [gameStatus, setGameStatus] = useState<'playing' | 'results'>("playing");
  const [isScoreSaved, setIsScoreSaved] = useState(false);

  // Save score locally (DB integration via action) when session ends
  useEffect(() => {
    if (gameStatus === "results" && !isScoreSaved) {
      // 4 marks per correct solve, deduct 1 for wrong/skip
      const finalScore = (correct * 4) - wrong;
      saveScore("motion-challenge", Math.max(0, finalScore));
      setIsScoreSaved(true);
    }
  }, [gameStatus, correct, wrong, isScoreSaved]);

  // Main session timer
  useEffect(() => {
    if (gameStatus !== "playing") return;
    if (sessionTime <= 0) {
      setGameStatus("results");
      return;
    }
    const t = setTimeout(() => setSessionTime(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [sessionTime, gameStatus]);

  const handleLevelComplete = () => {
    if (gameStatus !== "playing") return;
    setCorrect(c => c + 1);
    setLevel(l => l + 1);
  };

  const handleSkipLevel = () => {
    if (gameStatus !== "playing") return;
    setWrong(w => w + 1);
    setLevel(l => l + 1);
  };

  const resetGame = () => {
    setLevel(1);
    setCorrect(0);
    setWrong(0);
    setSessionTime(SESSION_TIME);
    setGameStatus("playing");
    setIsScoreSaved(false);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Motion Challenge Game",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "654"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <GamePage title="Motion Challenge" level={level} timer={formatTime(sessionTime)}>
        <MotionChallengeUI
          levelIndex={level - 1} // 0-indexed for array lookups
          onLevelComplete={handleLevelComplete}
          onSkipLevel={handleSkipLevel}
          gameStatus={gameStatus}
          correct={correct}
          wrong={wrong}
          resetGame={resetGame}
        />
      </GamePage>
    </Container>
  );
}

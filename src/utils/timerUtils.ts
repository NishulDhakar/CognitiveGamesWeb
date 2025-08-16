import React, { useState, useRef, useCallback } from "react";

export function useGameTimer(
  initial: number,
  running: boolean,
  onTimeout: () => void
): [number, () => void, () => void, () => void] {
  const [timeLeft, setTimeLeft] = useState(initial);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const paused = useRef(false);

  const tick = useCallback(() => {
    setTimeLeft((t) => {
      if (t <= 1) {
        onTimeout();
        return 0;
      }
      return t - 1;
    });
  }, [onTimeout]);

  // Start or stop timer
  React.useEffect(() => {
    if (running && !paused.current) {
      timerRef.current = setInterval(tick, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [running, tick]);

  const resetTimer = useCallback(() => {
    setTimeLeft(initial);
  }, [initial]);

  const pauseTimer = useCallback(() => {
    paused.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const resumeTimer = useCallback(() => {
    paused.current = false;
    if (!timerRef.current) timerRef.current = setInterval(tick, 1000);
  }, [tick]);

  return [timeLeft, resetTimer, pauseTimer, resumeTimer];
}

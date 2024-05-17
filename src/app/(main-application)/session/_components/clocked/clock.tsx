import { formatTime } from "@/lib/time";
import React, { useEffect, useState, useRef } from "react";

interface ClockProps {
  sessionStarted: boolean;
  sessionPaused: boolean;
  sessionFinished: boolean;
}

export const Clock = ({
  sessionStarted,
  sessionPaused,
  sessionFinished,
}: ClockProps) => {
  const [time, setTime] = useState({ hours: 0, mins: 0, secs: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (sessionStarted && !sessionPaused && !sessionFinished) {
      startClock();
    } else if (sessionPaused || sessionFinished) {
      stopClock();
    } else {
      resetClock();
    }

    return () => stopClock();
  }, [sessionStarted, sessionPaused, sessionFinished]);

  const startClock = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        const nextTime = { ...prevTime };
        nextTime.secs += 1;

        if (nextTime.secs === 60) {
          nextTime.secs = 0;
          nextTime.mins += 1;

          if (nextTime.mins === 60) {
            nextTime.mins = 0;
            nextTime.hours += 1;
          }
        }

        return nextTime;
      });
    }, 1000);
  };

  const stopClock = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetClock = () => {
    setTime({ hours: 0, mins: 0, secs: 0 });
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(time.hours)}
        </span>
        <span className="font-semibold">hr</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(time.mins)}
        </span>
        <span className="font-semibold">min</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(time.secs)}
        </span>
        <span className="font-semibold">sec</span>
      </div>
    </div>
  );
};

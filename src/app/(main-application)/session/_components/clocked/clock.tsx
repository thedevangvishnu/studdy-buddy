import { formatTime } from "@/lib/time";
import React, { useEffect, useState, useRef } from "react";

interface ClockProps {
  sessionStarted: boolean;
  sessionPaused: boolean;
}

export const Clock = ({ sessionStarted, sessionPaused }: ClockProps) => {
  const [time, setTime] = useState({ hours: 0, mins: 0, secs: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log(
      "useEffect - sessionStarted:",
      sessionStarted,
      "sessionPaused:",
      sessionPaused
    );
    if (sessionStarted && !sessionPaused) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      console.log("Cleanup from return() - executing stopTimer()");
      stopTimer();
    };
  }, [sessionStarted, sessionPaused]);

  const startTimer = () => {
    if (timerRef.current !== null) return;
    console.log("Starting timer");

    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        newTime.secs += 1;

        if (newTime.secs === 60) {
          newTime.secs = 0;
          newTime.mins += 1;

          if (newTime.mins === 60) {
            newTime.mins = 0;
            newTime.hours += 1;
          }
        }

        return newTime;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      console.log("Stopping timer");
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

import React, { useEffect, useState } from "react";

interface ClockProps {
  sessionStarted: boolean;
}

export const Clock = ({ sessionStarted }: ClockProps) => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (sessionStarted) {
      runClock();
    }
  }, [sessionStarted]);

  const runClock = () => {
    setInterval(() => {
      setSeconds((sec) => sec + 1);
    }, 1000);
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">{hours}</span>
        <span className="font-semibold">hr</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">{mins}</span>
        <span className="font-semibold">min</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">{seconds}</span>
      </div>
    </div>
  );
};

import { formatTime } from "@/lib/time";
import React, { useEffect, useState } from "react";

interface ClockProps {
  sessionStarted: boolean;
}

export const Clock = ({ sessionStarted }: ClockProps) => {
  const [time, setTime] = useState({ hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sessionStarted) {
      timer = setInterval(() => {
        updateTime();
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [sessionStarted]);

  const updateTime = () => {
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

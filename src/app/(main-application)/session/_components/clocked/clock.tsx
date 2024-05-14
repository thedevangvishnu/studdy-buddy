import React from "react";

export const Clock = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="font-bold text-5xl md:7xl">00</span>
      <span className="font-bold text-2xl">:</span>

      <span className="font-bold text-5xl md:7xl">00</span>
      <span className="font-bold text-2xl">:</span>

      <span className="font-bold text-5xl md:7xl">00</span>
    </div>
  );
};

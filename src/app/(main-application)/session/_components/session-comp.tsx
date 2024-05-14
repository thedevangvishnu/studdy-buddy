"use client";

import { CardWrapper } from "@/components/card-wrapper";
import { SectionContainer } from "@/components/section-container";
import { Trigger } from "./trigger/trigger";
import { CurrentSession } from "./current/current";
import { Clocked } from "./clocked/clocked";
import { useState } from "react";

export const SessionComp = () => {
  const [sessionStarted, setSessionStarted] = useState(false);
  console.log(sessionStarted);

  const startSession = () => {
    setSessionStarted(true);
  };

  return (
    <SectionContainer>
      <div className="z-10 relative w-full h-full flex flex-col gap-8 md:gap-10">
        {/* Header section */}
        {/* section title compnent */}

        {/* upper section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4">
          <Trigger
            onStartSession={startSession}
            sessionStarted={sessionStarted}
          />
          <CurrentSession
            sessionStarted={sessionStarted}
            onStartSession={startSession}
          />
        </div>

        {/* lower section */}
        <div className="w-full md:h-[calc(100% - 240px)]">
          <Clocked />
        </div>
      </div>
    </SectionContainer>
  );
};

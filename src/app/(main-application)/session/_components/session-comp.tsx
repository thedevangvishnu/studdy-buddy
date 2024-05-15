"use client";

import { SectionContainer } from "@/components/section-container";
import { Trigger } from "./trigger/trigger";
import { CurrentSession } from "./current/current";
import { Clocked } from "./clocked/clocked";

export const SessionComp = () => {
  return (
    <SectionContainer>
      <div className="z-10 relative w-full h-full flex flex-col gap-8 md:gap-10">
        {/* Header section */}
        {/* section title compnent */}

        {/* upper section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4">
          <Trigger />
          <CurrentSession />
        </div>

        {/* lower section */}
        <div className="w-full md:h-[calc(100% - 240px)]">
          <Clocked />
        </div>
      </div>
    </SectionContainer>
  );
};

"use client";

import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import { useStudySessionContext } from "@/contexts/study-session-context";

export const Trigger = () => {
  const { isSessionActive, startSession } = useStudySessionContext();

  const handleClick = () => {
    startSession();
  };

  return (
    <CardWrapper
      title="Start a session"
      description="Start studying now"
      className="w-full min-h-60 md:h-72"
    >
      <div className="w-full flex justify-center">
        <Button size="lg" onClick={handleClick} disabled={isSessionActive}>
          {!isSessionActive ? "Start Now" : "One active..."}
        </Button>
      </div>
    </CardWrapper>
  );
};

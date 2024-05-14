"use client";

import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";

interface TriggerProps {
  sessionStarted: boolean;
  onStartSession: () => void;
}

export const Trigger = ({ onStartSession, sessionStarted }: TriggerProps) => {
  return (
    <CardWrapper
      title="Start a session"
      description="Start studying now"
      className="w-full min-h-60 md:h-72"
    >
      <div className="w-full flex justify-center">
        <Button size="lg" onClick={onStartSession} disabled={sessionStarted}>
          {!sessionStarted ? "Start Now" : "One active..."}
        </Button>
      </div>
    </CardWrapper>
  );
};

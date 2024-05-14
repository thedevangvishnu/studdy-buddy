"use client";

import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";

export const Trigger = () => {
  return (
    <CardWrapper
      title="Start a session"
      description="Start studying now"
      className="w-full min-h-60 md:h-72"
      body={startSesionBody}
    />
  );
};

const startSesionBody = (
  <div className="w-full flex justify-center">
    <Button size="lg" onClick={() => {}}>
      Start Now
    </Button>
  </div>
);

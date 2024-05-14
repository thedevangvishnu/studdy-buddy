import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import { Clock } from "../clocked/clock";

interface CurrentSessionProps {
  sessionStarted: boolean;
  onStartSession: () => void;
}

export const CurrentSession = ({
  sessionStarted,
  onStartSession,
}: CurrentSessionProps) => {
  return (
    <CardWrapper
      title="Current session"
      description="Showing the time of your current session"
      className="w-full min-h-60 md:h-72"
    >
      <div className="flex flex-col gap-6">
        {/* create a clock */}
        <Clock sessionStarted={sessionStarted} />

        {/* buttons to end/pause session */}
        <div className="w-full flex items-center justify-center gap-4">
          <Button size="lg" disabled={!sessionStarted}>
            Finish
          </Button>
          <Button size="lg" variant="ghost" disabled={!sessionStarted}>
            Pause
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

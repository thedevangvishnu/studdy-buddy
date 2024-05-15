import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import { Clock } from "../clocked/clock";
import { useStudySessionContext } from "@/contexts/study-session-context";

export const CurrentSession = () => {
  const { isSessionActive, endSession } = useStudySessionContext();

  const handleClick = () => {
    endSession();
  };

  return (
    <CardWrapper
      title="Current session"
      description="Showing the time of your current session"
      className="w-full min-h-60 md:h-72"
    >
      <div className="flex flex-col gap-6">
        {/* create a clock */}
        <Clock sessionStarted={isSessionActive} />

        {/* buttons to end/pause session */}
        <div className="w-full flex items-center justify-center gap-4">
          <Button size="lg" disabled={!isSessionActive} onClick={handleClick}>
            Finish
          </Button>
          <Button size="lg" variant="ghost" disabled={!isSessionActive}>
            Pause
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

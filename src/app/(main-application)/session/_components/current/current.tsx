import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import { Clock } from "../clocked/clock";

export const CurrentSession = () => {
  return (
    <CardWrapper
      title="Current session"
      description="Showing the time of your current session"
      className="w-full min-h-60 md:h-72"
      body={body}
    />
  );
};

const body = (
  <div className="flex flex-col gap-6">
    {/* create a clock */}
    <Clock />

    {/* buttons to end/pause session */}
    <div className="w-full flex items-center justify-center gap-4">
      <Button size="lg" disabled>
        Finish
      </Button>
      <Button size="lg" variant="ghost" disabled>
        Pause
      </Button>
    </div>
  </div>
);

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BreakTimeTabs } from "./breaktime-tabs";
import { useStudySessionContext } from "@/contexts/study-session-context";

const breakTimes = [
  {
    label: "5min",
    value: 5,
  },
  {
    label: "10min",
    value: 10,
  },
  {
    label: "15min",
    value: 15,
  },
  {
    label: "20min",
    value: 20,
  },
  {
    label: "30min",
    value: 30,
  },
];

interface TerminateProps {
  disabled: boolean;
}

export function Terminate({ disabled }: TerminateProps) {
  const { isSessionPaused, pauseUnpause } = useStudySessionContext();

  return (
    <Dialog open={isSessionPaused} onOpenChange={pauseUnpause}>
      <DialogTrigger asChild>
        <Button size="lg" disabled={disabled}>
          Finish
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Finish this session</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 pt-4">
          {/* add tags for breaktime */}
          <p>Total breaktime in this session?</p>
          <form action="" className="flex flex-col gap-6">
            <div className="flex gap-2 items-center flex-wrap">
              {breakTimes.map((breakTime) => (
                <label
                  key={breakTime.label}
                  className="p-2 bg-secondary rounded-md cursor-pointer"
                >
                  <input type="checkbox" className="hidden" />
                  {breakTime.label}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <Button type="submit" className="w-24">
                Save
              </Button>
              <Button type="submit" variant="secondary" className="w-24">
                Discard
              </Button>
            </div>
          </form>
          <BreakTimeTabs />
        </div>
      </DialogContent>
    </Dialog>
  );
}

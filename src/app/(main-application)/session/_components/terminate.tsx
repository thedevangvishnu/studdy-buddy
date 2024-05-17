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
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const breakTimes = [
  {
    label: "None",
    value: 0,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "15",
    value: 15,
  },
  {
    label: "30",
    value: 30,
  },
];

interface TerminateProps {
  disabled: boolean;
}

export function Terminate({ disabled }: TerminateProps) {
  const { isSessionFinished, finishSession, discardSession } =
    useStudySessionContext();
  const [selected, setSelected] = useState(0);
  const [isDiscarding, setIsDiscarding] = useState(false);

  const handleTagClick = (value: number) => {
    setSelected(value);
  };

  const handleSave = () => {
    console.log("breaktime", selected);
  };

  const handleOnOpenChange = () => {
    finishSession();
    setIsDiscarding(false);
  };

  return (
    <Dialog open={isSessionFinished} onOpenChange={handleOnOpenChange}>
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
          <div>
            <span>Total breaktime in this session?</span>
            <span className="text-xs text-muted-foreground ml-2">
              (in mins)
            </span>
          </div>

          <div className="flex gap-2 items-center flex-wrap">
            {breakTimes.map((breakTime) => (
              <div
                key={breakTime.value}
                onClick={() => handleTagClick(breakTime.value)}
                className={cn(
                  "min-w-16 py-2 flex items-center justify-center text-sm cursor-pointer rounded-md text-muted-foreground border-[1px] font-semibold  duration-150 transition-all",
                  selected === breakTime.value
                    ? "border-foreground bg-muted-foreground text-secondary"
                    : "hover:bg-secondary hover:text-foreground"
                )}
              >
                {breakTime.label}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <Button type="submit" className="w-24" onClick={handleSave}>
              Save
            </Button>
            <Button
              type="submit"
              variant="secondary"
              className="w-24"
              disabled={isDiscarding}
              onClick={() => setIsDiscarding(true)}
            >
              Discard
            </Button>
          </div>
          <BreakTimeTabs />
        </div>

        {isDiscarding && (
          <DialogFooter className="ml-auto">
            <div className="flex flex-col items-end">
              <p className="text-xs">Sure you want to delete this session?</p>
              <div className="flex gap-2">
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs font-semibold"
                  onClick={discardSession}
                >
                  YES
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs font-semibold"
                  onClick={() => setIsDiscarding(false)}
                >
                  NO
                </Button>
              </div>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

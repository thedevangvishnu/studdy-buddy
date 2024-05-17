import { useStudySessionContext } from "@/contexts/study-session-context";
import { formatTime } from "@/lib/time";

export const Clock = () => {
  const { currentTime } = useStudySessionContext();

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(currentTime.hr)}
        </span>
        <span className="font-semibold">hr</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(currentTime.min)}
        </span>
        <span className="font-semibold">min</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-5xl md:7xl">
          {formatTime(currentTime.sec)}
        </span>
        <span className="font-semibold">sec</span>
      </div>
    </div>
  );
};

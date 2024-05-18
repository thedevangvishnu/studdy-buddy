import { useStudySessionContext } from "@/contexts/study-session-context";
import { formatTime } from "@/lib/time";

export const Clock = () => {
  const { currentTime } = useStudySessionContext();

  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex gap-1 items-end">
        <span className="font-semibold text-3xl md:text-5xl">
          {formatTime(currentTime.hr)}
        </span>
        <span className="font-semibold text-sm md:text-base">hr</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-3xl md:text-5xl">
          {formatTime(currentTime.min)}
        </span>
        <span className="font-semibold text-sm md:text-base">min</span>
      </div>

      <div className="flex gap-1 items-end">
        <span className="font-semibold text-3xl md:text-5xl">
          {formatTime(currentTime.sec)}
        </span>
        <span className="font-semibold text-sm md:text-base">sec</span>
      </div>
    </div>
  );
};

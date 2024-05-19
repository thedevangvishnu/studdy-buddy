import { CardWrapper } from "@/components/card-wrapper";
import { calculateDuration } from "@/lib/time";
import { StudySession } from "prisma/prisma-client";

export const Clocked = ({
  studySessions,
}: {
  studySessions: StudySession[];
}) => {
  return (
    <CardWrapper
      title="Clocked"
      description="Showing all your sessions"
      className="w-full h-full"
    >
      <div className="flex flex-col">
        {studySessions?.map((session, index) => {
          const { hr, mins } = calculateDuration(
            session.startTime,
            session.endTime
          );
          return (
            <div key={session.id}>
              <p>
                Session {index + 1}:{" "}
                <span className="font-semibold text-xl">
                  {hr ? `${hr} hr and ${mins} min` : `${mins} min`}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
};

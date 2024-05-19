"use client";

import { SectionContainer } from "@/components/section-container";
import { Trigger } from "./trigger/trigger";
import { CurrentSession } from "./current/current";
import { Clocked } from "./clocked/clocked";
import { DatePicker } from "@/components/ui/date.picker";
import { useQuery } from "react-query";
import * as requests from "@/lib/requests";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const SessionComp = () => {
  const searchParams = useSearchParams();

  const dateParam = searchParams.get("date");

  // better to use a start variable with useEffect so that the date can also be updated when selected the date picker
  const date = useMemo(() => {
    return dateParam ? new Date(dateParam) : new Date();
  }, [dateParam]);

  const { data } = useQuery(["study-sessions", date], () =>
    requests.getStudySessionsByDate(date)
  );

  return (
    <SectionContainer>
      <div className="z-10 relative w-full h-full flex flex-col gap-8 md:gap-10">
        {/* Header section */}
        {/* section title compnent */}

        {/* upper section */}
        <div className="w-full flex flex-col gap-8 lg:flex-row items-center lg:gap-5">
          <Trigger />
          <CurrentSession />
        </div>

        {/* lower section */}
        <div className="w-full relative md:h-[calc(100% - 240px)]">
          <div className="relative">
            <Clocked studySessions={data?.studySessions} />
            <div className="absolute top-4 right-8">
              <p>Filter</p>
              <DatePicker />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

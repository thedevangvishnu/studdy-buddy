"use client";

import { useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import { FaAngleLeft, FaHouse } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [onlyIconView, setOnlyIconView] = useState(false);

  const toggleIconOnlyView = () => {
    setTimeout(() => {
      setOnlyIconView(!onlyIconView);
    }, 100);
  };

  return (
    <>
      {/* logo div */}
      <div className="absolute z-50 top-6 left-[1.55rem] flex items-center gap-1 cursor-pointer">
        <AiFillBulb className="text-2xl" />
        {!onlyIconView && (
          <h1 className="hidden md:inline text-xl font-bold">StudyBuddy</h1>
        )}
      </div>

      {/* main sidebar */}
      <aside
        className={cn(
          "group/sidebar absolute bottom-0 w-full h-16 md:relative md:h-screen md:w-[240px] flex items-center md:flex-col md:items-start bg-secondary md:py-5 px-3 gap-y-6 transition-all duration-150 md:pt-20",
          onlyIconView && "md:w-[80px]"
        )}
      >
        {/* arrow key for collapse/expand */}
        <div
          onClick={toggleIconOnlyView}
          className="hidden invisible md:visible md:flex items-center absolute bottom-8 bg-muted-foreground hover:bg-accent-foreground transition-colors right-[-8px] h-5 w-5 p-1 rounded-full cursor-pointer opacity-0 group-hover/sidebar:opacity-100 z-40"
        >
          <FaAngleLeft
            className={cn(
              "text-sm text-background",
              onlyIconView && "rotate-180"
            )}
          />
        </div>

        {/* width resetter */}

        {/* logo */}

        {/* menu */}
        <div className="w-full flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start gap-y-2">
          <HoverWrap>
            <div className="h-8 flex items-center gap-3">
              <FaHouse className="h-5 w-5" />
              {!onlyIconView && (
                <span className="hidden md:inline">Dashboard</span>
              )}
            </div>
          </HoverWrap>
        </div>

        {/* more options */}

        {/* profile */}

        {/* settings */}

        {/* signout */}
      </aside>
    </>
  );
};

const HoverWrap = ({
  children,
  onlyIconView,
}: {
  children: React.ReactNode;
  onlyIconView?: boolean;
}) => {
  return (
    <div className="py-2 px-4 hover:bg-background rounded-full cursor-pointer w-fit items-center">
      {children}
    </div>
  );
};

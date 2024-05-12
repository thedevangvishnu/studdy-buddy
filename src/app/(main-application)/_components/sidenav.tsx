"use client";

import { useState } from "react";
import { ArrowLeftCircle, LucideLayoutDashboard } from "lucide-react";
import { AiFillBulb } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const Sidenav = () => {
  const [onlyIconView, setOnlyIconView] = useState(false);

  return (
    <>
      {/* logo div */}
      <div className="absolute z-50 top-6 left-[1.3rem] flex items-center gap-1 cursor-pointer">
        <AiFillBulb className="text-2xl" />
        <h1
          className={cn(
            "text-xl font-bold transition-all duration-300",
            onlyIconView && "hidden invisible"
          )}
        >
          StudyBuddy
        </h1>
      </div>

      {/* main sidebar */}
      <aside
        className={cn(
          "group/sidebar relative md:h-screen md:w-[240px] flex md:flex-col bg-secondary md:py-5 md:px-2 gap-y-6 transition-all duration-150 md:pt-20",
          onlyIconView && "md:w-[80px]"
        )}
      >
        {/* arrow key for collapse/expand */}
        <div
          onClick={() => setOnlyIconView(!onlyIconView)}
          className="absolute bottom-8 bg-background right-[-8px] h-5 w-5 p-1 rounded-full border-[2px] cursor-pointer flex items-center opacity-0 group-hover/sidebar:opacity-100 z-40"
        >
          <FaAngleLeft
            className={cn("text-sm", onlyIconView && "rotate-180")}
          />
        </div>

        {/* width resetter */}

        {/* logo */}

        {/* menu */}
        <div className="flex flex-col">
          <HoverWrap onlyIconView={onlyIconView}>
            <div className={cn("w-full flex items-center gap-3")}>
              <LucideLayoutDashboard className="h-5 w-5" />
              <p
                className={cn(
                  "transition-all duration-300",
                  onlyIconView && "hidden invisible"
                )}
              >
                Dashboard
              </p>
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
    <div
      className={cn(
        "w-full py-3 px-4 rounded-xl hover:bg-background transition duration-300 cursor-pointer",
        onlyIconView && "rounded-full"
      )}
    >
      {children}
    </div>
  );
};

"use client";

import { useState } from "react";
import { AiFillBulb } from "react-icons/ai";
import { FaAngleLeft, FaHouse } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { sideBarMainMenu, sideBarBottomMenu } from "@/lib/sidebar-menu";
import { MenuItem } from "./menu-item";

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
      <div className="absolute h-14 z-50 top-4 left-[1.575rem] flex items-center gap-1 cursor-pointer">
        <AiFillBulb className="text-2xl" />
        {!onlyIconView && (
          <h1 className="hidden md:inline text-xl font-bold">StudyBuddy</h1>
        )}
      </div>

      {/* main sidebar */}
      <aside
        className={cn(
          "group/sidebar absolute bottom-0 w-full h-16 md:relative md:h-screen md:w-56 flex items-center md:flex-col md:items-start bg-secondary md:py-5 px-3 gap-y-6 transition-all duration-150 md:pt-24",
          onlyIconView && "md:w-[80px]"
        )}
      >
        {/* menu */}
        <div className="w-full flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarMainMenu.map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              icon={menuItem.icon}
              label={menuItem.label}
              onlyIconView={onlyIconView}
            />
          ))}
        </div>

        <div className="hidden invisible md:mt-auto md:visible md:flex md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarBottomMenu.map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              icon={menuItem.icon}
              label={menuItem.label}
              onlyIconView={onlyIconView}
            />
          ))}
        </div>

        {/* more options */}

        {/* profile */}

        {/* settings */}

        {/* signout */}

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
      </aside>
    </>
  );
};

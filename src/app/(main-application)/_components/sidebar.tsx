"use client";

import { AiFillBulb } from "react-icons/ai";
import { FaAngleLeft, FaHouse } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { sideBarMainMenu, sideBarBottomMenu } from "@/lib/sidebar-menu";
import { MenuItem } from "./menu-item";
import Link from "next/link";

export const Sidebar = ({
  onToggleSidebar,
  isCollapsed,
}: {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}) => {
  const toggleIconOnlyView = () => {
    setTimeout(() => {
      onToggleSidebar();
    }, 100);
  };

  return (
    <>
      {/* for mobile only */}
      <div className="fixed w-full h-14 z-40 top-0 left-0 md:hidden md:invisible flex items-center px-4 gap-1 cursor-pointer bg-muted">
        {/* implemnet profile complement and nav for mobile */}
        <AiFillBulb className="text-2xl" />
      </div>

      {/* main sidebar */}
      <aside
        className={cn(
          "group/sidebar fixed bottom-0 w-full h-16 md:fixed md:left-0 md:h-screen md:w-56 flex items-center md:flex-col md:items-start bg-secondary md:py-5 px-3 gap-y-6 transition-all duration-150 md:pt-24 z-40",
          isCollapsed && "md:w-[80px]"
        )}
      >
        {/* logo */}
        <div className="hidden invisible absolute h-14 z-50 top-4 left-[1.575rem] md:flex md:visible items-center gap-1 cursor-pointer">
          <AiFillBulb className="text-2xl" />
          {!isCollapsed && (
            <h1 className="hidden md:inline text-xl font-bold">StudyBuddy</h1>
          )}
        </div>

        {/* menu */}
        <div className="w-full flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarMainMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link}>
              <MenuItem
                icon={menuItem.icon}
                label={menuItem.label}
                onlyIconView={isCollapsed}
              />
            </Link>
          ))}
        </div>

        {/* settings and logout */}
        <div className="hidden invisible md:mt-auto md:visible md:flex md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarBottomMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link}>
              <MenuItem
                icon={menuItem.icon}
                label={menuItem.label}
                onlyIconView={isCollapsed}
              />
            </Link>
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
              isCollapsed && "rotate-180"
            )}
          />
        </div>
      </aside>
    </>
  );
};

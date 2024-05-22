"use client";

import { AiFillBulb } from "react-icons/ai";
import { FaAngleLeft, FaAnglesLeft, FaHouse } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import {
  sideBarMainMenu,
  sideBarBottomMenu,
  sideBarMiddleMenu,
} from "@/lib/sidebar-menu";
import { MenuItem } from "./menu-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { SidebarUser } from "./sidebar-user";
import { useCallback } from "react";
import { useSession } from "next-auth/react";

export const Sidebar = ({
  onToggleSidebar,
  isCollapsed,
}: {
  onToggleSidebar: () => void;
  isCollapsed: boolean;
}) => {
  const collapseSidebar = useCallback(() => {
    setTimeout(() => {
      onToggleSidebar();
    }, 100);
  }, [onToggleSidebar]);

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
          "group/sidebar fixed bottom-0 w-full h-16 md:fixed md:left-0 md:h-screen md:w-64 flex items-center md:flex-col md:items-start bg-background md:py-5 px-3 gap-y-6 transition-all duration-150 md:pt-20 z-40 border-right-border border-r-[1px]",
          isCollapsed && "md:w-0 hidden invisible"
        )}
      >
        <div
          onClick={collapseSidebar}
          className="hidden invisible md:visible md:flex items-center absolute top-3 text-foreground transition-colors right-[8px] h-8 w-8 cursor-pointer opacity-0 group-hover/sidebar:opacity-100 z-40"
        >
          <FaAnglesLeft className="text-base" />
        </div>

        {/* logo */}
        <div className="hidden invisible absolute h-14 z-50 top-[2px] left-[1.575rem] md:flex md:visible items-center gap-1 cursor-pointer">
          <AiFillBulb className="text-2xl" />
          {!isCollapsed && (
            <h1 className="hidden md:inline text-xl font-bold">StudyBuddy</h1>
          )}
        </div>

        {/* create button */}
        <Button variant="default" className="w-full flex items-center gap-1">
          Create new <PlusIcon className="w-5 font-semibold" />
        </Button>

        {/* menu */}
        <div className="w-full flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarMainMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link} className="w-full">
              <MenuItem icon={menuItem.icon} label={menuItem.label} />
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start gap-y-1">
          {sideBarMiddleMenu.map((menuItem) => {
            if (menuItem.label === "Hub") {
              return (
                <a
                  key={menuItem.label}
                  href={menuItem.link}
                  target="_blank"
                  className="w-full"
                >
                  <MenuItem icon={menuItem.icon} label={menuItem.label} />
                </a>
              );
            }

            return (
              <Link
                key={menuItem.label}
                href={menuItem.link}
                className="w-full"
              >
                <MenuItem icon={menuItem.icon} label={menuItem.label} />
              </Link>
            );
          })}
        </div>

        {/* todo: Remove the bottom section menu adn implement a profile component that will have all the  bottom menu options into one popup/page */}
        {/* settings and logout */}
        {/* <div className="hidden invisible md:mt-auto md:visible md:flex md:flex-col md:items-start md:justify-start gap-y-1">


          {sideBarBottomMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link}>
              <MenuItem
                icon={menuItem.icon}
                label={menuItem.label}
                onlyIconView={isCollapsed}
              />
            </Link>
          ))}
        </div> */}
        <SidebarUser />
      </aside>
    </>
  );
};

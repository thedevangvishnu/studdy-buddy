"use client";

import { AiFillBulb } from "react-icons/ai";
import { FaAnglesLeft } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { sideBarMainMenu, sideBarMiddleMenu } from "@/lib/options";
import { MenuItem } from "../menu-item";
import Link from "next/link";
import { SideNavUser } from "./sidenav-user";
import { useCallback } from "react";
import { CreateButtonSidenav } from "./create-button-sidenav";

interface SideNavProps {
  toggleSidebar: () => void;
  toggleSidebarInMobileView: () => void;
  isCollapsed: boolean;
  mobileViewActive: boolean;
}

export const SideNav = ({
  toggleSidebar,
  toggleSidebarInMobileView,
  isCollapsed,
  mobileViewActive,
}: SideNavProps) => {
  const collapseSidebar = useCallback(() => {
    setTimeout(() => {
      mobileViewActive ? toggleSidebarInMobileView() : toggleSidebar();
    }, 100);
  }, [mobileViewActive, toggleSidebar, toggleSidebarInMobileView]);

  return (
    <>
      {/* main sidebar */}
      <aside
        className={cn(
          "group/sidebar bottom-0 fixed left-0 h-screen w-64 flex flex-col items-start bg-background p-5 px-3 gap-y-6 transition-all duration-150 z-50 border-r-[1px]",
          (isCollapsed || mobileViewActive) && "md:w-0 hidden invisible"
        )}
      >
        {/* logo */}
        <div className="w-full flex items-center z-50">
          <Link
            href="/dashboard"
            className="flex items-center gap-1 cursor-pointer"
          >
            <AiFillBulb className="text-xl" />
            <h1 className="inline text-lg font-bold">StudyBuddy</h1>
          </Link>

          <div
            onClick={collapseSidebar}
            className="ml-auto flex items-center text-foreground transition-colors h-8 w-8 hover:text-white cursor-pointer opacity-100 group-hover/sidebar:opacity-100"
          >
            <FaAnglesLeft className="text-base " />
          </div>
        </div>

        {/* create button */}
        <CreateButtonSidenav />
        {/* menu */}
        <div className="w-full flex flex-col items-start justify-start gap-y-1">
          {sideBarMainMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link} className="w-full">
              <MenuItem icon={menuItem.icon} label={menuItem.label} />
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full flex flex-col items-start justify-start gap-y-1">
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

        <SideNavUser />
      </aside>
    </>
  );
};

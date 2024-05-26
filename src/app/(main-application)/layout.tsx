"use client";

import { cn } from "@/lib/utils";
import { SideNav } from "./_components/sidenav/sidenav";
import React, { useCallback, useEffect, useState } from "react";
import { StudySessionContextProvider } from "@/contexts/study-session-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hamburger } from "./_components/hamburger";
import { SessionProvider } from "next-auth/react";
import { useMediaQuery } from "usehooks-ts";

const client = new QueryClient();

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileViewActive, setMobileViewActive] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  const toggleSidebarInMobileView = useCallback(() => {
    setMobileViewActive(!mobileViewActive);
  }, [mobileViewActive]);

  useEffect(() => {
    setMobileViewActive(isMobile);
    setIsSidebarCollapsed(false);
  }, [isMobile]);

  console.log("isCollapsed", isSidebarCollapsed);
  console.log("mobileActiveView", mobileViewActive);

  return (
    <div className="relative flex w-full">
      <SessionProvider>
        <SideNav
          toggleSidebar={toggleSidebar}
          toggleSidebarInMobileView={toggleSidebarInMobileView}
          isCollapsed={isSidebarCollapsed}
          mobileViewActive={mobileViewActive}
        />
      </SessionProvider>

      <div
        className={cn(
          "flex-1 md:ml-[256px] transition-all duration-150",
          (isSidebarCollapsed || mobileViewActive) && "md:ml-0"
        )}
      >
        {/* Navbar */}
        <nav className="h-16 px-6 fixed w-full z-40 flex items-center bg-secondary">
          {(isSidebarCollapsed || mobileViewActive) && (
            <Hamburger
              mobileViewActive={mobileViewActive}
              toggleSidebar={toggleSidebar}
              toggleSidebarInMobileView={toggleSidebarInMobileView}
            />
          )}
        </nav>
        <QueryClientProvider client={client}>
          <StudySessionContextProvider>{children}</StudySessionContextProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default MainLayout;

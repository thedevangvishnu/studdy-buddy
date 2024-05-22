"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./_components/sidebar";
import React, { useCallback, useState } from "react";
import { StudySessionContextProvider } from "@/contexts/study-session-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hamburger } from "./_components/hamburger";
import { SessionProvider } from "next-auth/react";

const client = new QueryClient();

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  return (
    <div className="relative flex w-full">
      <SessionProvider>
        <Sidebar
          onToggleSidebar={toggleSidebar}
          isCollapsed={isSidebarCollapsed}
        />
      </SessionProvider>

      <div
        className={cn(
          "flex-1 md:ml-[256px] transition-all duration-150",
          isSidebarCollapsed && "md:ml-0"
        )}
      >
        {/* Navbar */}
        <nav className=" p-3 fixed w-full z-40 flex items-center bg-secondary">
          {isSidebarCollapsed && <Hamburger toggleSidebar={toggleSidebar} />}
        </nav>
        <QueryClientProvider client={client}>
          <StudySessionContextProvider>{children}</StudySessionContextProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default MainLayout;

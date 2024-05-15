"use client";

import { cn } from "@/lib/utils";
import { Sidebar } from "./_components/sidebar";
import React, { useState } from "react";
import { StudySessionContextProvider } from "@/contexts/study-session-context";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="relative flex w-full">
      <Sidebar
        onToggleSidebar={toggleSidebar}
        isCollapsed={isSidebarCollapsed}
      />
      <div
        className={cn(
          "flex-1 md:ml-[224px] transition-all duration-150",
          isSidebarCollapsed && "md:ml-[80px]"
        )}
      >
        <StudySessionContextProvider>{children}</StudySessionContextProvider>
      </div>
    </div>
  );
};

export default MainLayout;

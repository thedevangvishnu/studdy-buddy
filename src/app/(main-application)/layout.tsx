import { Sidebar } from "./_components/sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen">{children}</div>
    </div>
  );
};

export default MainLayout;

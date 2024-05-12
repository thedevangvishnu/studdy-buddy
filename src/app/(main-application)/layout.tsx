import React from "react";
import { Sidenav } from "./_components/sidenav";

const MainAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidenav />
      <div className="">{children}</div>
    </div>
  );
};

export default MainAppLayout;

import { cn } from "@/lib/utils";
import React from "react";

export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full p-6 md:p-10 overflow-x-hidden overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

import React from "react";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full p-6 md:p-8 lg:p-10 overflow-y-auto">
      {children}
    </div>
  );
};

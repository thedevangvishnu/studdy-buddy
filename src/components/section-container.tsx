import React from "react";

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full px-6 py-20 md:p-8 lg:p-10 overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
};

import React from "react";
import { HoverBgWrapper } from "@/components/hover-bg-wrapper";
import { IconType } from "react-icons/lib";

interface MenuItemProps {
  icon: IconType;
  label: string;
}

export const MenuItem = ({ icon: Icon, label }: MenuItemProps) => {
  return (
    <HoverBgWrapper>
      <div className="h-8 flex items-center gap-3">
        <Icon className="h-[16px] w-[16px]" />
        <span className="hidden md:inline text-sm">{label}</span>
      </div>
    </HoverBgWrapper>
  );
};

import React from "react";
import { HoverBgWrapper } from "@/components/hover-bg-wrapper";
import { IconType } from "react-icons/lib";

interface MenuItemProps {
  icon: IconType;
  label: string;
  onlyIconView: boolean;
}

export const MenuItem = ({
  icon: Icon,
  label,
  onlyIconView,
}: MenuItemProps) => {
  return (
    <HoverBgWrapper>
      <div className="h-8 flex items-center gap-3">
        <Icon className="h-[18px] w-[18px]" />
        {!onlyIconView && <span className="hidden md:inline">{label}</span>}
      </div>
    </HoverBgWrapper>
  );
};

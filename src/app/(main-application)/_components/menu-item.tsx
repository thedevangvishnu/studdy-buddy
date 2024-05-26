import React from "react";
import { HoverBgWrapper } from "@/components/hover-bg-wrapper";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  icon: IconType;
  label: string;
  itemClasses?: string;
  hoverClasses?: string;
  textClasses?: string;
  iconClasses?: string;
}

export const MenuItem = ({
  icon: Icon,
  label,
  itemClasses,
  hoverClasses,
  textClasses,
  iconClasses,
}: MenuItemProps) => {
  return (
    <HoverBgWrapper hoverClasses={hoverClasses}>
      <div className={cn("h-8 flex items-center gap-3", itemClasses)}>
        <Icon className={cn("h-[16px] w-[16px]", iconClasses)} />
        <span className={cn("inline text-sm", textClasses)}>{label}</span>
      </div>
    </HoverBgWrapper>
  );
};

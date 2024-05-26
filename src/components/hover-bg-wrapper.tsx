import { cn } from "@/lib/utils";

export const HoverBgWrapper = ({
  children,
  hoverClasses,
}: {
  children: React.ReactNode;
  hoverClasses?: string;
}) => {
  return (
    <div
      className={cn(
        "py-[5px] px-4 transition-all duration-200 hover:bg-accent w-full rounded-md cursor-pointer items-center hover:text-background dark:hover:text-foreground",
        hoverClasses
      )}
    >
      {children}
    </div>
  );
};

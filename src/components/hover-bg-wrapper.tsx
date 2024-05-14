export const HoverBgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-[6px] px-4 hover:bg-background rounded-full cursor-pointer w-fit items-center">
      {children}
    </div>
  );
};

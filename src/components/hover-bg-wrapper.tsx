export const HoverBgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-[5px] px-4 transition-all duration-150 hover:bg-accent w-full rounded-md cursor-pointer items-center">
      {children}
    </div>
  );
};

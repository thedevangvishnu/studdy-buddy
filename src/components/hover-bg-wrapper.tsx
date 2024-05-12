export const HoverBgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-2 px-4 hover:bg-background rounded-full cursor-pointer w-fit items-center">
      {children}
    </div>
  );
};

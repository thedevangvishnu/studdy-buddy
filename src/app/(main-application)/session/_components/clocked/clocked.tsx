import { CardWrapper } from "@/components/card-wrapper";

export const Clocked = () => {
  return (
    <CardWrapper
      title="Clocked"
      description="Showing all your sessions"
      className="w-full h-full"
      body={body}
    />
  );
};

const body = (
  <div>
    <div className="h-80 w-6 bg-muted-foreground"></div>
  </div>
);

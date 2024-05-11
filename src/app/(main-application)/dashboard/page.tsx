import React from "react";
import { authHandler } from "@/auth";
import { Button } from "@/components/ui/button";

const DashboardPage = async () => {
  const session = await authHandler.auth();

  return (
    <div className="h-screen p-10 flex flex-col items-center justify-center gap-10 text-center">
      <h1>Dashboard Page</h1>
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";

          const { signOut } = authHandler;
          await signOut({
            redirectTo: "/auth/login",
          });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default DashboardPage;

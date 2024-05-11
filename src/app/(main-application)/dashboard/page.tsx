import React from "react";
import { authHandler } from "@/auth";

const DashboardPage = async () => {
  const session = await authHandler.auth();
  console.log(session);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default DashboardPage;

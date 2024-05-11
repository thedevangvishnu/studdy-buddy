"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex items-center justify-center gap-6">
        <Button
          size="lg"
          className="text-lg"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
        >
          <FaGoogle className="mr-2" />
          Google
        </Button>
        <Button
          size="lg"
          className="text-lg"
          onClick={() =>
            signIn("github", {
              callbackUrl: "/dashboard",
            })
          }
        >
          <FaGithub className="mr-2" />
          Github
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

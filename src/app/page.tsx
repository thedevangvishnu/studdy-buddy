"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <h1 className="text-4xl font-bold">StudyBuddy Landing Page</h1>
      <div className="flex items-center gap-6">
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
    </main>
  );
}

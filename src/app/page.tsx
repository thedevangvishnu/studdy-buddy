"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <h1 className="text-4xl font-bold">StudyBuddy Landing Page</h1>
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
    </main>
  );
}

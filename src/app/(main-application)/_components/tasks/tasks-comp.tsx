"use client";

import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { NewButton } from "../new-button";
import { NewPageTemplate } from "../new-page-template";

export const TasksComp = () => {
  return (
    <SectionContainer>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <NewButton label="Task" />
      </div>

      {/* show all tasks */}
    </SectionContainer>
  );
};

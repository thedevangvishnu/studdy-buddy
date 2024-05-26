import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewPageTemplate } from "./new-page-template";

interface NewButtonProps {
  label: string;
}

export const NewButton = ({ label }: NewButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-1">
          New {label} <PlusIcon className="w-5 font-semibold" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[800px]">
        {/* menu bar for new page */}
        {/* <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl"></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader> */}

        <NewPageTemplate />
        {/* <div className="flex flex-wrap gap-y-6 gap-x-4 pt-4"></div> */}
      </DialogContent>
    </Dialog>
  );
};

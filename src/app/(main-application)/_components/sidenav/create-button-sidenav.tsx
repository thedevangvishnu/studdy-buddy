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
import { createMenu } from "@/lib/options";
import Link from "next/link";
import { MenuItem } from "../menu-item";

export const CreateButtonSidenav = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full flex items-center gap-1">
          Create new <PlusIcon className="w-5 font-semibold" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            Create a new
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-y-6 gap-x-4 pt-4">
          {createMenu.map((menu) => (
            <Link key={menu.label} href={menu.link} className="flex-1 min-w-52">
              <MenuItem
                icon={menu.icon}
                label={menu.label}
                hoverClasses="hover:bg-primary border-2"
                itemClasses="h-10"
                textClasses="md:text-base"
                iconClasses="md:h-[20px] md:w-[20px]"
              />
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

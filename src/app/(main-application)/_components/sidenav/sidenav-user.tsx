import React from "react";
import { sideBarBottomMenu } from "@/lib/options";
import { MenuItem } from "../menu-item";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const SideNavUser = () => {
  const { data } = useSession();

  return (
    <div className="w-full mt-auto flex items-center justify-start gap-y-1">
      <Popover>
        <PopoverTrigger className="w-full">
          <div className="w-full flex items-center gap-3 pl-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src={data?.user.image as string} alt="User" />
              <AvatarFallback>
                {data?.user.name && data.user.name[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-semibold line-clamp-1 text-sm">
              {data?.user.name}
            </p>
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-50 p-2">
          {sideBarBottomMenu.map((menuItem) => (
            <Link key={menuItem.label} href={menuItem.link}>
              <MenuItem icon={menuItem.icon} label={menuItem.label} />
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

// const SidebarUser = React.memo(function SidebarUser() {
//   console.log("Session data:", data); // Keep this for debugging purposes
//   return (
//     <div className="hidden invisible md:mt-auto md:visible md:flex md:flex-col md:items-start md:justify-start gap-y-1">
//       <Avatar>
//         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//         <AvatarFallback>CN</AvatarFallback>
//       </Avatar>

//       {sideBarBottomMenu.map((menuItem) => (
//         <Link key={menuItem.label} href={menuItem.link}>
//           <MenuItem icon={menuItem.icon} label={menuItem.label} />
//         </Link>
//       ))}
//     </div>
//   );
// });

// SidebarUser.displayName = "SidebarUser";

// export default SidebarUser;

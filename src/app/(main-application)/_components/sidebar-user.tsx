import React from "react";
import { sideBarBottomMenu } from "@/lib/sidebar-menu";
import { MenuItem } from "./menu-item";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { HoverBgWrapper } from "@/components/hover-bg-wrapper";

export const SidebarUser = () => {
  const { data } = useSession();

  return (
    <div className="hidden invisible md:mt-auto md:visible md:flex md:flex-col md:items-start md:justify-start gap-y-1">
      <HoverBgWrapper>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={data?.user.image as string} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{data?.user.name}</p>
        </div>

        {/* implement popover */}
      </HoverBgWrapper>

      {sideBarBottomMenu.map((menuItem) => (
        <Link key={menuItem.label} href={menuItem.link}>
          <MenuItem icon={menuItem.icon} label={menuItem.label} />
        </Link>
      ))}
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

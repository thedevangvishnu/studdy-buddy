import {
  FaHouse,
  FaBookOpenReader,
  FaClock,
  FaListCheck,
  FaPenToSquare,
  FaArrowRightFromBracket,
  FaGear,
  FaUserGroup,
} from "react-icons/fa6";
import { GoGoal } from "react-icons/go";

export const sideBarMainMenu = [
  {
    icon: FaHouse,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: FaClock,
    label: "Session",
    link: "/session",
  },
  {
    icon: FaListCheck,
    label: "Tasks",
    link: "/tasks",
  },
  {
    icon: FaPenToSquare,
    label: "Notes",
    link: "/notes",
  },
];

export const sideBarMiddleMenu = [
  {
    icon: GoGoal,
    label: "Goals",
    link: "/goals",
  },
  {
    icon: FaBookOpenReader,
    label: "Learn",
    link: "/learn",
  },
  {
    icon: FaUserGroup,
    label: "Hub",
    link: "https://www.google.com/", // change this to hub's link once it's there's a layout and page
  },
];

export const sideBarBottomMenu = [
  {
    icon: FaGear,
    label: "Preferences",
    link: "/preferences",
  },
  {
    icon: FaArrowRightFromBracket,
    label: "Logout",
    link: "",
  },
];

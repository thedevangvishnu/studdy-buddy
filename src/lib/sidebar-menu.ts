import {
  FaHouse,
  FaClock,
  FaListCheck,
  FaPenToSquare,
  FaArrowRightFromBracket,
  FaGear,
} from "react-icons/fa6";

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

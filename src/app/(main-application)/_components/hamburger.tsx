import React, { useState } from "react";
import { FaAnglesRight, FaB, FaBars } from "react-icons/fa6";

export const Hamburger = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-5 h-5  relative cursor-pointer flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaBars
        className={`w-full h-full transition-transform duration-300 ${
          isHovered ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
      <div
        onClick={toggleSidebar}
        className={`w-full h-full flex items-center justify-center transition-transform duration-300 absolute ${
          isHovered ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
        }`}
      >
        <FaAnglesRight />
      </div>
    </div>
  );
};

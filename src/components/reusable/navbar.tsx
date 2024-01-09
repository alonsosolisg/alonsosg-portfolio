import Link from "next/link";
import React from "react";

const Navbar = ({
  textEnter,
  textLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
}) => {
  return (
    <div className="w-full text-customBlack-700 font-robotoCondensed italic py-20 h-fit justify-center items-center gap-5 inline-flex">
      <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        href="#projects"
        className="text-[40px] font-light hover:underline"
      >
        PROJECTS
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        href="#skillset"
        className="text-[40px] font-light hover:underline"
      >
        SKILLSET
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        href="#certificates"
        className="text-[40px] font-light hover:underline"
      >
        CERTIFICATES
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        href="#contact"
        className="text-[40px] font-light hover:underline"
      >
        CONTACT ME
      </Link>
    </div>
  );
};

export default Navbar;

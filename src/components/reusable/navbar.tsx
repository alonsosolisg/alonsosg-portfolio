import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full text-customBlack-700 font-robotoCondensed italic py-20 h-fit justify-center items-center gap-5 inline-flex">
      <Link href="#projects" className="text-[40px] font-light hover:underline">
        PROJECTS
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link href="#skillset" className="text-[40px] font-light hover:underline">
        SKILLSET
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link
        href="#certificates"
        className="text-[40px] font-light hover:underline"
      >
        CERTIFICATES
      </Link>
      <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
      <Link href="#contact" className="text-[40px] font-light hover:underline">
        CONTACT ME
      </Link>
    </div>
  );
};

export default Navbar;

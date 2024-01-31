"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const Navbar = ({
  textEnter,
  textLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className="w-full text-customBlack-700 font-robotoCondensed italic xs:py-14 xl:py-20 h-fit justify-center items-center gap-5 xs:hidden lg:inline-flex">
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="#projects"
          className="text-[40px] font-light hover:underline select-none"
        >
          PROJECTS
        </Link>
        <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="#skillset"
          className="text-[40px] font-light hover:underline select-none"
        >
          SKILLSET
        </Link>
        <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="#certificates"
          className="text-[40px] font-light hover:underline select-none"
        >
          CERTIFICATES
        </Link>
        <div className="w-2.5 h-2.5 bg-customBlack-700 rounded-full" />
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          href="#contact"
          className="text-[40px] font-light hover:underline select-none"
        >
          CONTACT ME
        </Link>
      </div>
      <div className="relative w-full text-customBlack-700 font-robotoCondensed italic py-6 px-10 h-fit justify-start items-center gap-5 xs:flex lg:hidden">
        <div className="relative w-fit h-fit">
          <IoMenu
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className={`relative z-10 w-[40px] h-[40px] text-customBlack-700 ${
              mobileMenu ? "hidden" : "flex"
            }`}
          />
          <FaAngleDown
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className={`relative z-10 w-[40px] h-[40px] text-customBlack-700 ${
              mobileMenu ? "flex" : "hidden"
            }`}
          />
          {mobileMenu && (
            <div className="absolute flex text-customWhite-200 mt-[40px] gap-4 flex-col w-fit h-fit py-4 px-6 top-0 left-0 bg-customBlack-700 rounded-md">
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href="#projects"
                className="text-[40px] font-light hover:underline select-none"
              >
                PROJECTS
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href="#skillset"
                className="text-[40px] font-light hover:underline select-none"
              >
                SKILLSET
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href="#certificates"
                className="text-[40px] font-light hover:underline select-none"
              >
                CERTIFICATES
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                href="#contact"
                className="text-[40px] font-light hover:underline select-none"
              >
                CONTACT ME
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

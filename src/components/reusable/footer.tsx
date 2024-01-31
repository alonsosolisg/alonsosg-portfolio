import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = ({
  textEnter,
  textLeave,
  hoverEnter,
  hoverLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
  hoverEnter: () => void;
  hoverLeave: () => void;
}) => {
  return (
    <div className="w-full h-fit bg-customBlack-800 xs:text-sm md:text-2xl font-normal flex xs:flex-col lg:flex-row items-center xs:text-center lg:text-start justify-evenly py-10 lg:gap-0 xs:gap-8 text-customWhite-200">
      <div className="flex justify-center select-none gap-2 xs:items-center lg:items-start flex-col">
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:underline"
          href="/#projects"
        >
          PROJECTS
        </Link>
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:underline"
          href="/#skillset"
        >
          SKILLSET
        </Link>
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:underline"
          href="/#certificates"
        >
          CERTIFICATES
        </Link>
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:underline"
          href="/#contact"
        >
          CONTACT ME
        </Link>
      </div>
      <div className="flex justify-center gap-2 xs:items-center lg:items-start flex-col">
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="font-bold select-none underline"
        >
          Email
        </p>
        <Link
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:text-customYellow-600 transition-all"
          href="mailto:alonsosolisgerloni@gmail.com"
        >
          alonsosolisgerloni@gmail.com
        </Link>
      </div>
      <div className="flex select-none justify-center gap-2 xs:items-center lg:items-start flex-col">
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="font-bold underline"
        >
          Socials
        </p>
        <div className="flex justify-start gap-4">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/alonso-solis-gerloni-a5b88020a/"
          >
            <FaLinkedin
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className="w-[50px] h-[50px] hover:text-customYellow-600  hover:scale-125"
            />
          </Link>
          <Link target="_blank" href="https://github.com/alonsosolisg">
            <FaGithub
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className="w-[50px] h-[50px] hover:text-customYellow-600 hover:scale-125"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

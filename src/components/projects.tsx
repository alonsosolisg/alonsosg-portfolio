import React from "react";
import { FaGithub, FaGlobe, FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Projects = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
  hoverEnter,
  hoverLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
  hoverEnter: () => void;
  hoverLeave: () => void;
}) => {
  return (
    <div className="w-full -mt-36">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 100.865L1440 0V168H0V100.865Z" fill="#262626" />
      </svg>
      <div
        className="w-full -mt-2 flex flex-col gap-20 pb-20 h-fit bg-customBlack-700 relative"
        id="projects"
      >
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center leading-tight text-white font-robotoCondensed italic text-[50px] font-normal"
        >
          PROJECTS
        </div>
        <div className="w-full flex justify-center items-center px-5">
          <FaCaretLeft
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
            className="w-[50px] h-[50px] text-customYellow-500 hover:scale-125 transition-all"
          />
          <div className="w-full h-fit justify-center grid-cols-3 items-center gap-5 grid">
            <div className="flex-col px-12 justify-center items-center gap-5 inline-flex">
              <div
                onMouseEnter={imageEnter}
                onMouseLeave={imageLeave}
                className="w-full h-[314px] bg-customYellow-500 rounded-[10px]"
              />
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-white text-[35px] font-medium"
              >
                PROJECT 1 NAME
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-justify text-white text-xl font-extralight"
              >
                A short description for the project as a small paragraph telling
                what the project is about
              </div>
              <div className="justify-center items-center gap-[30px] inline-flex">
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGlobe className="w-full h-full" />
                </div>
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGithub className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex-col px-12 justify-center items-center gap-5 inline-flex">
              <div
                onMouseEnter={imageEnter}
                onMouseLeave={imageLeave}
                className="w-full h-[314px] bg-customYellow-500 rounded-[10px]"
              />
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-white text-[35px] font-medium"
              >
                PROJECT 2 NAME
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-justify text-white text-xl font-extralight"
              >
                A short description for the project as a small paragraph telling
                what the project is about
              </div>
              <div className="justify-center items-center gap-[30px] inline-flex">
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGlobe className="w-full h-full" />
                </div>
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGithub className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex-col px-12 justify-center items-center gap-5 inline-flex">
              <div
                onMouseEnter={imageEnter}
                onMouseLeave={imageLeave}
                className="w-full h-[314px] bg-customYellow-500 rounded-[10px]"
              />
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-white text-[35px] font-medium"
              >
                PROJECT 3 NAME
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-justify text-white text-xl font-extralight"
              >
                A short description for the project as a small paragraph telling
                what the project is about
              </div>
              <div className="justify-center items-center gap-[30px] inline-flex">
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGlobe className="w-full h-full" />
                </div>
                <div
                  onMouseEnter={hoverEnter}
                  onMouseLeave={hoverLeave}
                  className="w-[60px] h-[60px] bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                >
                  <FaGithub className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <FaCaretRight
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}
            className="w-[50px] h-[50px] text-customYellow-500 hover:scale-125 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

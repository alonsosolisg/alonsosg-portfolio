"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaGlobe, FaCaretRight, FaCaretLeft } from "react-icons/fa";
import projects from "../json/projects.json";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
  const [firstInList, setFirstInList] = useState(0);
  const threeProjects = projects.slice(firstInList, firstInList + 3);
  const singleProject = projects.slice(firstInList, firstInList + 1);

  return (
    <div className="w-full relative overflow-hidden xs:-mt-28 md:-mt-24 lg:-mt-36">
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
        className="w-full overflow-hidden -mt-2 flex flex-col xs:gap-10 md:gap-20 pb-20 h-fit bg-customBlack-700 relative"
        id="projects"
      >
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="select-none text-center leading-tight text-white font-robotoCondensed italic text-[50px] font-normal"
        >
          PROJECTS
        </div>
        <div className="w-full relative overflow-hidden xs:hidden lg:flex justify-center items-start xs:px-0 md:px-5">
          <FaCaretLeft
            onMouseEnter={firstInList > 0 ? hoverEnter : () => {}}
            onMouseLeave={firstInList > 0 ? hoverLeave : () => {}}
            className={`w-[50px] h-[50px] mt-[20%] select-none text-customYellow-500 hover:scale-125 transition-all ${
              firstInList > 0 ? "" : "opacity-50"
            }`}
            onClick={() => {
              if (firstInList > 0) {
                setFirstInList(firstInList - 3);
              }
            }}
          />
          <div className="relative overflow-hidden w-full h-[100%] justify-center grid-rows-1 xs:grid-cols-1 lg:grid-cols-3 items-center xs:gap-10 lg:gap-5 grid">
            <AnimatePresence>
              {threeProjects.map((project) => (
                <motion.div
                  key={project.link}
                  className="relative flex-col xs:px-2 sm:px-6 lg:px-6 xl:px-12 justify-between h-full items-center gap-5 inline-flex"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 10 }}
                >
                  <div
                    onMouseEnter={imageEnter}
                    onMouseLeave={imageLeave}
                    className="w-full fit bg-customYellow-500 rounded-[10px]"
                  >
                    <Image
                      src={`/images/${project.image}`}
                      alt="Project Image"
                      width={1000}
                      height={1000}
                      className="w-full select-none h-full object-fill rounded-[10px]"
                    />
                  </div>

                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-white select-none text-[35px] font-medium"
                  >
                    {project.name}
                  </div>
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-justify select-none text-white text-xl font-extralight"
                  >
                    {project.description}
                  </div>
                  <div className="justify-center items-center gap-[30px] inline-flex">
                    <Link
                      className={`${
                        project.link === "none" ? "hidden" : "flex"
                      }`}
                      href={project.link}
                      target="_blank"
                    >
                      <div
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[60px] h-[60px] select-none bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                      >
                        <FaGlobe className="w-full h-full" />
                      </div>
                    </Link>
                    <Link
                      className={`${
                        project.github === "none" ? "hidden" : "flex"
                      }`}
                      href={project.github}
                      target="_blank"
                    >
                      <div
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[60px] h-[60px] select-none bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                      >
                        <FaGithub className="w-full h-full" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <FaCaretRight
            onMouseEnter={
              firstInList < projects.length - 3 ? hoverEnter : () => {}
            }
            onMouseLeave={
              firstInList < projects.length - 3 ? hoverLeave : () => {}
            }
            className={`w-[50px] h-[50px] mt-[20%] select-none text-customYellow-500 hover:scale-125 transition-all ${
              firstInList < projects.length - 3 ? "" : "opacity-50"
            }`}
            onClick={() => {
              if (firstInList < projects.length - 3) {
                setFirstInList(firstInList + 3);
              }
            }}
          />
        </div>
        <div className="w-full relative overflow-hidden lg:hidden xs:flex justify-center items-start xs:px-0 md:px-5">
          <FaCaretLeft
            onMouseEnter={firstInList > 0 ? hoverEnter : () => {}}
            onMouseLeave={firstInList > 0 ? hoverLeave : () => {}}
            className={`w-[50px] h-[50px] mt-[40%] select-none text-customYellow-500 hover:scale-125 transition-all ${
              firstInList > 0 ? "" : "opacity-50"
            }`}
            onClick={() => {
              if (firstInList > 0) {
                setFirstInList(firstInList - 1);
              }
            }}
          />
          <div className="relative overflow-hidden w-full h-[100%] justify-center grid-rows-1 xs:grid-cols-1 lg:grid-cols-3 items-center xs:gap-10 lg:gap-5 grid">
            <AnimatePresence>
              {singleProject.map((project) => (
                <motion.div
                  key={project.link}
                  className="relative flex-col xs:px-2 sm:px-6 lg:px-6 xl:px-12 justify-between h-full items-center gap-5 inline-flex"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 10 }}
                >
                  <div
                    onMouseEnter={imageEnter}
                    onMouseLeave={imageLeave}
                    className="w-full fit bg-customYellow-500 rounded-[10px]"
                  >
                    <Image
                      src={`/images/${project.image}`}
                      alt="Project Image"
                      width={1000}
                      height={1000}
                      className="w-full select-none h-full object-fill rounded-[10px]"
                    />
                  </div>

                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-white select-none text-[35px] font-medium"
                  >
                    {project.name}
                  </div>
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-justify select-none text-white text-xl font-extralight"
                  >
                    {project.description}
                  </div>
                  <div className="justify-center items-center gap-[30px] inline-flex">
                    <Link
                      className={`${
                        project.link === "none" ? "hidden" : "flex"
                      }`}
                      href={project.link}
                      target="_blank"
                    >
                      <div
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[60px] h-[60px] select-none bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                      >
                        <FaGlobe className="w-full h-full" />
                      </div>
                    </Link>
                    <Link
                      className={`${
                        project.github === "none" ? "hidden" : "flex"
                      }`}
                      href={project.github}
                      target="_blank"
                    >
                      <div
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[60px] h-[60px] select-none bg-customYellow-500 p-2 rounded-full  hover:scale-125 transition-all"
                      >
                        <FaGithub className="w-full h-full" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <FaCaretRight
            onMouseEnter={
              firstInList < projects.length - 1 ? hoverEnter : () => {}
            }
            onMouseLeave={
              firstInList < projects.length - 1 ? hoverLeave : () => {}
            }
            className={`w-[50px] h-[50px] mt-[40%] select-none text-customYellow-500 hover:scale-125 transition-all ${
              firstInList < projects.length - 1 ? "" : "opacity-50"
            }`}
            onClick={() => {
              if (firstInList < projects.length - 1) {
                setFirstInList(firstInList + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

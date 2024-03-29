import React from "react";
import projects from "../projects.json";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="md:py-10 bg-white dark:bg-gray-900" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 "
      >
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            My Projects
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 mb-6 lg:mb-16 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              className="items-center bg-gray-50 rounded-lg shadow sm:flex flex-col dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  className="lg:w-full lg:h-full rounded-t-lg sm:rounded-none sm:rounded-t-lg"
                  src={project.image}
                  height={500}
                  width={500}
                  alt="projects"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex ${
                        project.github === "none" && "hidden"
                      } text-gray-500 hover:text-gray-900 dark:hover:text-white`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

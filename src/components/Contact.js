import React from "react";
import socials from "../socials.json";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="md:py-10 bg-white dark:bg-gray-900" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
      >
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <div className="sm:justify-center grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {socials.map((socials, index) => (
            <a href={socials.link} target="_blank" rel="noreferrer" key={index}>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image
                  className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
                  src={socials.icon}
                  height={20}
                  width={20}
                  alt="social"
                />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {socials.name}
                </h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {socials.user}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

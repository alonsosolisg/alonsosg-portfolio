import React from "react";
import Image from "next/image";
import certificates from "../certificates.json";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <section className="md:py-10 bg-white dark:bg-gray-900" id="certificates">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2 className="text-center mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Certificates
        </h2>

        <div className=" items-center align-center justify-center mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {certificates.map((certificates, index) => (
            <div className="group relative" key={index}>
              <a href={certificates.link} target="_blank" rel="noreferrer">
                <Image
                  src={certificates.image}
                  width={500}
                  height={500}
                  className="dark:rounded-3xl"
                  alt="certificate"
                />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;

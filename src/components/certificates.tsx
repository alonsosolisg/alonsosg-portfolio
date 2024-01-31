"use client";

import React, { useEffect, useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaEye,
  FaGlobe,
} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import certificates from "../json/certificates.json";
import Link from "next/link";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Certificates = ({
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
  const [firstInList, setFirstInList] = useState(0);
  const threeCertificates = certificates.slice(firstInList, firstInList + 3);
  const singleCertificate = certificates.slice(firstInList, firstInList + 1);

  const downloadImage = (image: string) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-full h-fit justify-center items-center border-y-2 border-customBlack-800 xs:flex-col md:flex-row inline-flex"
      id="certificates"
    >
      <div className="relative xs:w-full xs:border-b-2 xs:border-customBlack-800 md:border-none md:w-[25%] h-full md:py-0 xs:py-10 flex justify-center items-center">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center xs:mb-12 md:mb-0 select-none font-robotoCondensed italic bg-customBlack-700 p-6 md:-rotate-90 text-white md:text-[40px] lg:text-[50px] font-normal "
        >
          CERTIFICATES
        </div>
        <div className="absolute xs:hidden md:flex gap-2 xs:mr-10 md:mr-2 lg:mr-8 flex-col right-0">
          <FaChevronCircleUp
            onMouseEnter={firstInList > 0 ? hoverEnter : () => {}}
            onMouseLeave={firstInList > 0 ? hoverLeave : () => {}}
            className={`xs:w-[35px] xs:h-[35px] lg:w-[50px] lg:h-[50px] select-none text-customBlack-700 transition-all ${
              firstInList > 0 ? " hover:scale-125" : "opacity-50 "
            }`}
            onClick={() => {
              if (firstInList > 0) {
                setFirstInList(firstInList - 1);
              }
            }}
          />
          <FaChevronCircleDown
            onMouseEnter={
              firstInList < certificates.length - 3 ? hoverEnter : () => {}
            }
            onMouseLeave={
              firstInList < certificates.length - 3 ? hoverLeave : () => {}
            }
            className={`xs:w-[35px] xs:h-[35px] lg:w-[50px] lg:h-[50px] select-none text-customBlack-700 hover:scale-125 transition-all ${
              firstInList < certificates.length - 3
                ? " hover:scale-125"
                : "opacity-50 "
            }`}
            onClick={() => {
              if (firstInList < certificates.length - 3) {
                setFirstInList(firstInList + 1);
              }
            }}
          />
        </div>
        <div className="absolute xs:flex md:hidden gap-2 w-full mb-6 justify-center bottom-0 md:mr-2 lg:mr-8 flex-row right-0">
          <FaChevronCircleLeft
            onMouseEnter={firstInList > 0 ? hoverEnter : () => {}}
            onMouseLeave={firstInList > 0 ? hoverLeave : () => {}}
            className={`xs:w-[35px] xs:h-[35px] lg:w-[50px] lg:h-[50px] select-none text-customBlack-700 transition-all ${
              firstInList > 0 ? " hover:scale-125" : "opacity-50 "
            }`}
            onClick={() => {
              if (firstInList > 0) {
                setFirstInList(firstInList - 1);
              }
            }}
          />
          <FaChevronCircleRight
            onMouseEnter={
              firstInList < certificates.length - 1 ? hoverEnter : () => {}
            }
            onMouseLeave={
              firstInList < certificates.length - 1 ? hoverLeave : () => {}
            }
            className={`xs:w-[35px] xs:h-[35px] lg:w-[50px] lg:h-[50px] select-none text-customBlack-700 hover:scale-125 transition-all ${
              firstInList < certificates.length - 1
                ? " hover:scale-125"
                : "opacity-50 "
            }`}
            onClick={() => {
              if (firstInList < certificates.length - 1) {
                setFirstInList(firstInList + 1);
              }
            }}
          />
        </div>
      </div>
      <div className="xs:w-full md:w-[75%] border-l-2 xs:border-r-2 md:border-r-0 border-customBlack-800 h-fit relative">
        <div className="w-full h-fit relative flex-col justify-center items-center inline-flex">
          <AnimatePresence>
            {threeCertificates.map((certificate, key) => (
              <motion.div
                key={key}
                className={`xs:hidden md:flex select-none py-12 w-full justify-between transition-all flex-col gap-8 ${
                  key === 2 ? "" : "border-b-2 border-customBlack-800"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
              >
                <div className="w-full justify-between items-center px-8 xs:gap-6 lg:gap-20 inline-flex">
                  <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 leading-[50px] xs:text-[40px] lg:text-[50px] font-bold font-['Roboto']"
                    >
                      {certificate.name}
                    </div>
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 xs:text-[16px] lg:text-[20px] xl:text-[25px] font-normal font-['Roboto']"
                    >
                      {certificate.description}
                    </div>
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 text-lg font-light font-['Roboto']"
                    >
                      DATE OF COMPLETION: {certificate.completion}
                    </div>
                  </div>
                  <div className="h-fit justify-center xs:flex-col md:flex-row items-center gap-5 flex">
                    <FaEye
                      onMouseEnter={hoverEnter}
                      onMouseLeave={hoverLeave}
                      className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      onClick={() =>
                        window.open(
                          `${window.location.href}/images/${certificate.image}`,
                          "_blank"
                        )
                      }
                    />
                    <IoMdDownload
                      onMouseEnter={hoverEnter}
                      onMouseLeave={hoverLeave}
                      className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      onClick={() =>
                        downloadImage(
                          `${window.location.href}/images/${certificate.image}`
                        )
                      }
                    />
                    <Link href={certificate.link} target="_blank">
                      <FaGlobe
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            {singleCertificate.map((certificate, key) => (
              <motion.div
                key={certificate.name}
                className={`md:hidden xs:flex select-none py-12 w-full justify-between transition-all flex-col gap-8 ${
                  key === 2 ? "" : "border-b-2 border-customBlack-800"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
              >
                <div className="w-full justify-between items-center px-8 xs:gap-6 lg:gap-20 inline-flex">
                  <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 leading-[50px] xs:text-[40px] lg:text-[50px] font-bold font-['Roboto']"
                    >
                      {certificate.name}
                    </div>
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 xs:text-[16px] lg:text-[20px] xl:text-[25px] font-normal font-['Roboto']"
                    >
                      {certificate.description}
                    </div>
                    <div
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-zinc-900 text-lg font-light font-['Roboto']"
                    >
                      DATE OF COMPLETION: {certificate.completion}
                    </div>
                  </div>
                  <div className="h-fit justify-center xs:flex-col md:flex-row items-center gap-5 flex">
                    <FaEye
                      onMouseEnter={hoverEnter}
                      onMouseLeave={hoverLeave}
                      className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      onClick={() =>
                        window.open(
                          `${window.location.href}/images/${certificate.image}`,
                          "_blank"
                        )
                      }
                    />
                    <IoMdDownload
                      onMouseEnter={hoverEnter}
                      onMouseLeave={hoverLeave}
                      className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      onClick={() =>
                        downloadImage(
                          `${window.location.href}/images/${certificate.image}`
                        )
                      }
                    />
                    <Link href={certificate.link} target="_blank">
                      <FaGlobe
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        className="w-[50px] h-[50px] hover:scale-125 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

"use client";

import React, { useEffect, useState } from "react";
import { FaEye, FaGlobe } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import certificates from "../json/certificates.json";
import Link from "next/link";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

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
      className="w-full h-fit justify-center items-center border-y-2 border-customBlack-800  inline-flex"
      id="certificates"
    >
      <div className="relative w-[25%] h-full flex justify-center items-center">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center select-none font-robotoCondensed italic bg-customBlack-700 p-6 -rotate-90 text-white text-[50px] font-normal "
        >
          CERTIFICATES
        </div>
        <div className="absolute flex gap-2 mr-8 flex-col right-0">
          <FaChevronCircleUp
            onMouseEnter={firstInList > 0 ? hoverEnter : () => {}}
            onMouseLeave={firstInList > 0 ? hoverLeave : () => {}}
            className={`w-[50px] select-none h-[50px] text-customBlack-700 transition-all ${
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
            className={`w-[50px] select-none h-[50px] text-customBlack-700 hover:scale-125 transition-all ${
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
      </div>
      <div className="w-[75%] border-l-2 border-customBlack-800 h-fit relative">
        <div className="w-full h-fit relative flex-col justify-center items-center inline-flex">
          {threeCertificates.map((certificate, key) => (
            <div
              key={key}
              className={`flex select-none py-12 w-full justify-between transition-all flex-col gap-8 ${
                key === 2 ? "" : "border-b-2 border-customBlack-800"
              }`}
            >
              <div className="w-full justify-between items-center px-8 gap-20 inline-flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-zinc-900 text-[50px] font-bold font-['Roboto']"
                  >
                    {certificate.name}
                  </div>
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-zinc-900 text-[25px] font-normal font-['Roboto']"
                  >
                    {certificate.description}
                  </div>
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="text-zinc-900 text-lg font-light font-['Roboto']"
                  >
                    DATE OF COMPLETION: 10-10-2023
                  </div>
                </div>
                <div className="h-[50px] justify-center items-center gap-5 flex">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

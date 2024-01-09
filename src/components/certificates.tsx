import React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

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
  return (
    <div
      className="w-full h-fit justify-center items-center border-y-2 border-customBlack-800  inline-flex"
      id="certificates"
    >
      <div className="w-[25%] h-full flex justify-center items-center">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center font-robotoCondensed italic bg-customBlack-700 p-6 -rotate-90 text-white text-[50px] font-normal "
        >
          CERTIFICATES
        </div>
      </div>
      <div className="w-[75%] border-l-2 border-customBlack-800 h-fit relative">
        <div className="w-full py-28 h-fit left-0 top-0 relative flex-col justify-center items-center gap-[41px] inline-flex">
          <div className="w- justify-center items-center gap-[406px] inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[50px] font-bold font-['Roboto']"
              >
                CERTIFICATE 1
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[25px] font-normal font-['Roboto']"
              >
                DESCRIPTION OF CERIFICATE
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
              />
              <IoMdDownload
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
                className="w-[50px] h-[50px] hover:scale-125 transition-all"
              />
            </div>
          </div>
          <div className="w-[873px] h-[0px] border border-black"></div>
          <div className="w-[1044px] justify-center items-center gap-[406px] inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[50px] font-bold font-['Roboto']"
              >
                CERTIFICATE 2
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[25px] font-normal font-['Roboto']"
              >
                DESCRIPTION OF CERIFICATE
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
              />
              <IoMdDownload
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
                className="w-[50px] h-[50px] hover:scale-125 transition-all"
              />
            </div>
          </div>
          <div className="w-[873px] h-[0px] border border-black"></div>
          <div className="w-[1044px] justify-center items-center gap-[406px] inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[50px] font-bold font-['Roboto']"
              >
                CERTIFICATE 3
              </div>
              <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-zinc-900 text-[25px] font-normal font-['Roboto']"
              >
                DESCRIPTION OF CERIFICATE
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
              />
              <IoMdDownload
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
                className="w-[50px] h-[50px] hover:scale-125 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

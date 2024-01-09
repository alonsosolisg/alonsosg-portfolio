import Image from "next/image";
import React from "react";

const Hero = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
}) => {
  return (
    <div className="w-full h-fit flex-row justify-between items-start px-40 pt-16  inline-flex">
      <div className="gap-10 flex flex-col">
        <div className="flex-col justify-center items-start gap-2.5 flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-customBlack-700 leading-tight text-[82px] font-extrabold "
          >
            Hello,
            <br />
            I&apos;m Alonso
          </div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-customBlack-700 text-[56px] font-light "
          >
            Software Developer
          </div>
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="w-[92px] h-3.5 bg-customBlack-700"
        />
      </div>
      <Image
        src="/images/home-pic.png"
        alt="Picture of the author"
        width={1000}
        height={1000}
        className="-mt-20 w-[600px] h-[600px]"
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
      />
    </div>
  );
};

export default Hero;

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
    <div className="w-full h-fit xs:flex-col md:flex-row justify-between xs:items-center md:items-start xs:px-6 md:px-10 lg:px-20 xl:px-40 xs:pt-8 md:pt-16  inline-flex">
      <div className="gap-10 flex flex-col">
        <div className="flex-col justify-center items-start gap-2.5 flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-customBlack-700 select-none leading-tight xs:text-[60px] md:text-[50px] xl:text-[72px] 2xl:text-[82px] font-extrabold "
          >
            Hello,
            <br />
            I&apos;m Alonso
          </div>
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-customBlack-700 select-none xs:text-[40px] md:text-[30px] xl:text-[40px] 2xl:text-[56px] font-light "
          >
            Software Developer
          </div>
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="w-[92px] h-3.5 select-none bg-customBlack-700"
        />
      </div>
      <Image
        src="/images/home-pic.png"
        priority
        alt="Picture of the author"
        width={1000}
        height={1000}
        className="xs:-mt-0 md:-mt-20 sm:w-[500px] sm:h -[500px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] select-none"
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
      />
    </div>
  );
};

export default Hero;

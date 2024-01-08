import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-fit flex-col justify-center items-start gap-10 px-40 pt-10 pb-44 inline-flex">
      <div className="flex-col justify-center items-start gap-2.5 flex">
        <div className="text-customBlack-700 leading-tight text-[82px] font-extrabold ">
          Hello,
          <br />
          I&apos;m Alonso
        </div>
        <div className="text-customBlack-700 text-[56px] font-light ">
          Software Developer
        </div>
      </div>
      <div className="w-[92px] h-3.5 bg-customBlack-700" />
    </div>
  );
};

export default Hero;

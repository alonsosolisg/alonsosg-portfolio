import React from "react";

const Skillset = ({
  textEnter,
  textLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
}) => {
  return (
    <div
      className="w-full bg-pattern h-fit flex justify-center items-center p-10"
      id="skillset"
    >
      <div className="bg-customBlack-700 p-10 rounded-md w-full h-full">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center leading-tight text-white font-robotoCondensed italic text-[50px] font-normal"
        >
          SKILLSET
        </div>
      </div>
    </div>
  );
};

export default Skillset;

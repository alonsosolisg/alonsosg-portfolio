import React from "react";
import skillset from "../json/skillset.json";
import Link from "next/link";
import Image from "next/image";

const Skillset = ({
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
      className="w-full bg-pattern h-fit flex justify-center items-center p-10"
      id="skillset"
    >
      <div className="bg-customBlack-700 flex flex-col p-10 rounded-md w-full h-full">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center leading-tight select-none text-white font-robotoCondensed italic text-[50px] font-normal"
        >
          SKILLSET
        </div>
        <div className="w-full h-full p-10 grid grid-cols-6 gap-8">
          {skillset.map((skill, key) => (
            <Link
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              href={skill.link}
              target="_blank"
              className="font-normal select-none flex flex-col gap-2 justify-center items-center text-center font-robotoCondensed italic text-customWhite-200"
              key={key}
            >
              <div className="w-fit h-fit p-4 flex justify-center items-center bg-customYellow-600 rounded-full">
                <Image
                  src={`/images${skill.image}`}
                  alt={skill.skill}
                  className="w-10 h-10 object-contain"
                  width={40}
                  height={40}
                />
              </div>
              {skill.skill}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;

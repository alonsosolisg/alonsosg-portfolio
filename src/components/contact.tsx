import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      className="relative w-full flex justify-center items-center py-10"
      id="contact"
    >
      <div className="w-[700px] h-[700px] flex justify-center gap-6 items-center flex-col rounded-full bg-customBlack-700">
        <div className="text-center leading-tight text-white font-robotoCondensed italic text-[50px] font-normal">
          CONTACT ME
        </div>
        <form
          className="w-[70%] flex flex-col justify-center text-center item-center gap-6"
          action=""
        >
          <textarea
            className="placeholder:font-light py-1 px-2 w-full rounded-md text-xl resize-none outline-none font-normal"
            placeholder="Write a message"
            rows={3}
          />
          <div className="w-full flex justify-center items-center">
            <button
              className="font-normal bg-yellow-400 hover:scale-105 hover:shadow-md transition-all w-fit text-2xl rounded-xl px-4 py-2"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

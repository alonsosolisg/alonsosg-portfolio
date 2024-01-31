"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = ({
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    try {
      await fetch("/api/contact", {
        method: "post",
        body: formData,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success(
        "Message sent! Thanks for reaching out 😃 I'll get back to you as soon as possible!"
      );
    } catch (error) {
      toast.error("Error sending message");
    }
  }
  return (
    <div
      className="relative w-full flex justify-center items-center xs:py-0 sm:py-10"
      id="contact"
    >
      <div className="xs:rounded-none xs:w-full xs:py-10 md:py-0 xs:h-full sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] flex overflow-x-hidden justify-center gap-6 items-center flex-col sm:rounded-full bg-customBlack-700">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-center select-none leading-tight text-white font-robotoCondensed italic text-[50px] font-normal"
        >
          CONTACT ME
        </div>
        <form
          className="w-[70%] flex flex-col justify-center text-center item-center gap-6"
          action=""
          onSubmit={handleSubmit}
        >
          <input
            className="placeholder:font-light py-1 px-2 w-full rounded-md text-xl outline-none font-normal"
            placeholder="Name"
            type="text"
            id="form-name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="placeholder:font-light py-1 px-2 w-full rounded-md text-xl outline-none font-normal"
            placeholder="Email"
            type="email"
            id="form-email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="placeholder:font-light py-1 px-2 w-full rounded-md text-xl resize-none outline-none font-normal"
            placeholder="Write a message"
            rows={3}
            value={message}
            id="form-message"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="w-full flex justify-center items-center">
            <button
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className="font-normal select-none disabled:opacity-50 disabled:hover:scale-100 bg-yellow-400 hover:scale-105 hover:shadow-md transition-all cursor-none w-fit text-2xl rounded-xl px-4 py-2"
              type="submit"
              disabled={message === "" || name === "" || email === ""}
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

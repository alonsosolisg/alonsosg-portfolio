"use client";

import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/reusable/footer";
import Navbar from "@/components/reusable/navbar";
import Skillset from "@/components/skillset";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const serchParams = useSearchParams();

  const initialMousePositionX = serchParams.get("x");
  const initialMousePositionY = serchParams.get("y");

  const mouseX = initialMousePositionX as string;
  const mouseY = initialMousePositionY as string;

  const [mousePosition, setMousePosition] = useState({
    x: mouseX ? parseInt(mouseX) : 0,
    y: mouseY ? parseInt(mouseY) : 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "#ffd133",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "#ffd133",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      height: 120,
      width: 120,
      backgroundColor: "#ffd133",
      mixBlendMode: "difference",
    },
    image: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: "#ffd133",
      mixBlendMode: "difference",
    },
  };

  const textLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const hoverEnter = () => setCursorVariant("hover");
  const hoverLeave = () => setCursorVariant("default");
  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");
  return (
    <div className="font-roboto text-3xl bg-customYellow-500 font-extrabold w-full">
      <motion.div
        className="w-10 h-10 top-0 left-0 fixed rounded-full bg-customBlack-700 z-50 pointer-events-none"
        variants={variants as any}
        animate={cursorVariant}
      ></motion.div>
      <Navbar textEnter={textEnter} textLeave={textLeave} />
      <Hero
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
        imageLeave={imageLeave}
      />
      <Projects
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
      <Skillset
        textEnter={textEnter}
        textLeave={textLeave}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
      <Certificates
        textEnter={textEnter}
        textLeave={textLeave}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
      <Contact
        textEnter={textEnter}
        textLeave={textLeave}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
      <Footer
        textEnter={textEnter}
        textLeave={textLeave}
        hoverEnter={hoverEnter}
        hoverLeave={hoverLeave}
      />
    </div>
  );
}

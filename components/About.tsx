"use client";
import React from "react";
import SectionHead from "./SectionHead";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="flex flex-col items-center leading-7 mb-40 justify-center [word-spacing:0.4rem] w-60  sm:w-[50%]"
    >
      <SectionHead>About Me</SectionHead>
      <p className="sm:text-lg ">
        <span className="font-bold  ">Hello,I'm Reyad.</span> I'm a{" "}
        <span className="font-bold ">Frontend Developer</span> My work using{" "}
        <span className="font-bold ">React (Next.js).</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        cupiditate. Culpa labore natus quidem adipisci! Enim vel veniam maxime
        dignissimos dolorum ad dolores doloribus illo, corporis vero iste unde
        dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        natus voluptas nesciunt itaque tempore officiis placeat unde nobis hic
        quam! In accusantium et ea modi quaerat tenetur possimus hic architecto?
      </p>
    </motion.section>
  );
};

export default About;
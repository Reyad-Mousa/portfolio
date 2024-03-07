"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TfiDownload } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex  transition ease-in duration-700   md:flex-row flex-col-reverse items-center justify-center gap-10 w-full h-full mt-20 "
    >
      <div className="flex flex-col justify-between gap-10 ">
        <div className=" text-lg sm:text-3xl  [word-spacing:0.5rem] w-60  sm:w-[17rem]">
          <span className="font-bold  ">Hello,I'm Reyad.</span> I'm a{" "}
          <span className="font-bold ">Frontend Developer</span> My work using{" "}
          <span className="font-bold ">React (Next.js).</span>
        </div>
        <div className="flex gap-3  flex-col">
          <div className="flex gap-3 flex-col ">
            <button className="flex items-center gap-4 bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Contact Me her <HiOutlineArrowLongRight />
            </button>
            <button className="flex items-center gap-4 bg-white shadow-xl hover:bg-gray-700 hover:text-white text-gray-950 font-bold py-2 px-4 rounded-full">
              Download CV <TfiDownload />
            </button>
          </div>
          <button className="flex gap-5 justify-evenly flex-row font-bold py-2 pl-4 text-3xl rounded-full">
            <BsLinkedin className="hover:text-blue-600" />
            <FaWhatsapp className="hover:text-green-600" />
            <FaGithub className="hover:text-red-800" />
          </button>
        </div>
      </div>
      <div className=" relative">
        <Image
          className=" relative w-60  shadow-2xl"
          src="/myImage.jpg"
          height={100}
          width={200}
          alt="Reyad Image"
        />
        <div className=" absolute w-[247.461px] sm:left-10   sm:w-[199.991px] h-[267.749px] top-[-1rem] left-4 -z-10 bg-red-100 blur-md"></div>
      </div>
    </motion.section>
  );
};

export default Intro;

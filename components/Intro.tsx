"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TfiDownload } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useActiveSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useActiveSectionInView("Home");

  // useInView is catch section head
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex mb-40 transition ease-in duration-700   md:flex-row flex-col-reverse items-center justify-center gap-10 w-full h-full mt-20 "
    >
      <div className="flex flex-col justify-between gap-10 ">
        <div className=" text-lg sm:text-3xl  [word-spacing:0.5rem] w-60  sm:w-[17rem]">
          <span className="font-bold  ">Hello,I'm Reyad.</span> I'm a{" "}
          <span className="font-bold ">Frontend Developer</span> My work using{" "}
          <span className="font-bold ">React (Next.js).</span>
        </div>
        <motion.div
          className="flex gap-3  flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-3 flex-col sm:flex-row ">
            <Link
              href="#contact"
              className="focus:scale-110 hover:scale-110 active:scale-105 transition flex items-center gap-4 bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Contact Me her <HiOutlineArrowLongRight />
            </Link>
            <Link
              href="/Cv.pdf"
              //   download
              className="focus:scale-110 hover:scale-110 active:scale-105 transition flex items-center gap-4 bg-white shadow-xl hover:bg-gray-700 hover:text-white text-gray-950 font-bold py-2 px-4 rounded-full"
            >
              Download CV <TfiDownload />
            </Link>
          </div>
          <button className="flex gap-5 justify-evenly sm:justify-normal flex-row font-bold py-2 pl-4 text-3xl rounded-full">
            <Link
              href="https://www.linkedin.com/in/reyad-mousa-81956821a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIIpdr2YdRO6S22J4naVwnA%3D%3D"
              className="focus:scale-110 hover:scale-110 active:scale-105 transition hover:text-blue-600"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://whatsapp.com/"
              className="focus:scale-110 hover:scale-110 active:scale-105 transition hover:text-green-600"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://github.com/Reyad-Mousa"
              className="focus:scale-110 hover:scale-110 active:scale-105 transition hover:text-red-800"
            >
              <FaGithub />
            </Link>
          </button>
        </motion.div>
      </div>
      <div className=" relative">
        <Image
          className=" relative  w-64  shadow-2xl"
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

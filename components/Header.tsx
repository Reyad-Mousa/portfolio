"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
export const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <header className="z-50 relative flex items-center ">
      <motion.div
        animate={{ y: 30, x: "-50%", opacity: 1 }}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        className="fixed    sm:left-1/2 left-[50%]    border border-white border-opacity-40 bg-white bg-opacity-80
                    shadow-lg shadow-black/[0.15] backdrop-blur-[0.1rem] 
                     top-0  sm:w-[36rem] rounded-full  "
      >
        <nav className=" flex items-center justify-center p-3 text-gray-500 overflow-hidden">
          <ul className="flex  gap-5 sm:gap-8">
            {links.map((link) => (
              <Link
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
                className={clsx(
                  " relative cursor-pointer text-[0.6rem] sm:text-lg hover:text-gray-950 transition px-2 py-1",
                  { "text-white hover:text-white": link.name === activeSection }
                )}
                key={link.hash}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    // layoutId="activeSection"
                    // transition={{
                    //   type:"just",
                    //   stiffness: 900,
                    //   damping: 300,
                    // }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className=" transition  delay-1000 absolute bg-gray-950 inset-0 rounded-full -z-10"
                  ></motion.span>
                )}
              </Link>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

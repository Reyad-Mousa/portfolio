"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
export const Header = () => {
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
          <ul className="flex gap-5 sm:gap-8">
            {links.map((link) => (
              <li
                className=" cursor-pointer text-[0.6rem] sm:text-lg hover:text-gray-950 transition"
                key={link.hash}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

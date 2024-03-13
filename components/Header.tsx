"use client";
// Import necessary hooks and types from React and other libraries
import React, { useContext, useState } from "react";
import { motion } from "framer-motion"; // for animations
import { links } from "@/lib/data"; // import the data for the links
import Link from "next/link"; // for routing
import clsx from "clsx"; // for conditional classnames
import { useActiveSection } from "@/context/activeSectionContext"; // import the custom hook to use the active section context

// Define the Header component
export const Header = () => {
  // Use the active section context to get the current active section, the function to set it, and the function to set the time of the last click
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  // Return the JSX for the header
  return (
    <header className="z-50 relative flex items-center ">
      <motion.div
        animate={{ y: 30, x: "-50%", opacity: 1 }} // animate the div to slide down and fade in
        initial={{ y: -100, x: "-50%", opacity: 0 }} // initial position and opacity of the div
        className="fixed    sm:left-1/2 left-[50%]    border border-white border-opacity-40 bg-white bg-opacity-80
                    shadow-lg shadow-black/[0.15] backdrop-blur-[0.1rem] 
                     top-0  sm:w-[36rem] rounded-full  " // CSS classes for styling
      >
        <nav className=" flex items-center justify-center p-3 text-gray-500 overflow-hidden">
          <ul className="flex sm:gap-8">
            {links.map((link) => (
              <Link
                href={link.hash} // the href is the hash from the link data
                onClick={() => {
                  setActiveSection(link.name); // when the link is clicked, set the active section to the name of the link
                  setTimeOfLastClick(Date.now()); // also set the time of the last click to now
                }}
                className={clsx(
                  " relative cursor-pointer text-[0.6rem] sm:text-sm hover:text-gray-950 transition px-2 py-1",
                  { "text-white hover:text-white": link.name === activeSection } // if the link is the active section, add the text-white and hover:text-white classes
                )}
                key={link.hash} // the key for the map function is the hash from the link data
              >
                {/*  // the text of the link is the name from the link  data */}
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    animate={{ opacity: 1 }} // animate the span to fade in
                    initial={{ opacity: 0 }} // initial opacity of the span
                    className="absolute bg-gray-950 inset-0 rounded-full -z-10" // CSS classes for styling
                  ></motion.span> // this span is only rendered if the link is the active section
                )}
              </Link>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

"use client";
import React from "react";
import SectionHead from "./SectionHead";
import { skillsData } from "@/lib/data";
import { useActiveSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useActiveSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section className=" w-60 scroll-mt-28 my-20 sm:w-1/2" ref={ref} id="skills">
      <SectionHead>Skills</SectionHead>
      <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] px-5 py-3 rounded-xl
            dark:bg-gray-50 dark:text-gray-900"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

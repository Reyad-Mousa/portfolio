import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pro1 from "@/public/pro1.png";
import pro2 from "@/public/pro2.png";
import pro3 from "@/public/pro3.png";
import weather from "@/public/weather.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Weather Website",
    description:
      "I worked as a Frontend developer react (nextJs) . Features : search any city , dark mode ",
    tags: [
      "React",
      "Next js",
      "Tailwind",
      "lucide-react",
      "Rest Api",
      "Context Hook",
    ],
    imageUrl: weather,
  },
  {
    title: "Simple Shop",
    description:
      "I worked as a Frontend developer react (nextJs) . Features : filter Product , add Product to cart , dark mode ",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Context Hook",
      "React-Icons",
      "Rest-Api",
    ],
    imageUrl: pro2,
  },
  {
    title: "Game Shop",
    tags: ["React", "Css", "JavaScript"],
    imageUrl: pro1,
  },
  {
    title: "Test Profile ",
    tags: ["Html", "Css", "JaveScript"],
    imageUrl: pro3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

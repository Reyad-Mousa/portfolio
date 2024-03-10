import React from "react";
import SectionHead from "./SectionHead";
import { projectsData } from "@/lib/data";
import Image from "next/image";

const Project = () => {
  return (
    <section>
      <SectionHead>Project</SectionHead>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Projects {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;

type projectProps = (typeof projectsData)[number];
function Projects({ title, description, tags, imageUrl }: projectProps) {
  return (
    <section
      className=" group rounded-lg relative flex flex-col sm:flex-row gap-4 mb-9 bg-gray-100 max-w-[42rem]  border border-black/5 overflow-hidden
    hover:bg-gray-200 transition"
    >
      <div
        className=" flex flex-col  p-5 sm:py-12 gap-3 sm:max-w-[60%]
         sm:group-even:ml-[18rem]  "
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-800 text-white px-3 py-1 rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="w-[29rem]  sm:absolute  sm:-right-48  sm:top-8  rounded-lg shadow-2xl
        group-even:right-[initial] group-even:-left-48 transition
        group-hover:scale-[1.04]

        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2"
        src={imageUrl}
        alt="Project I Worked on"
        quality={95}
      />
    </section>
  );
}

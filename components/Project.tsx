import React from "react";
import SectionHead from "./SectionHead";
import { projectsData } from "@/lib/data";
import Projects from "./Projects";

const Project = () => {
  return (
    <section id="projects" className=" scroll-mt-28">
      <SectionHead>Projects</SectionHead>
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

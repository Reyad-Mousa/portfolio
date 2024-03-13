"use client";

// Import necessary hooks and types from React and other libraries
import React from "react";
import SectionHead from "./SectionHead"; // import the SectionHead component
import { projectsData } from "@/lib/data"; // import the data for the projects
import Projects from "./Projects"; // import the Projects component
import { useActiveSectionInView } from "@/lib/hooks";

// Define the Project component
const Project = () => {
  const { ref } = useActiveSectionInView("Projects");
  // Return the JSX for the Project component
  return (
    <section ref={ref} id="projects" className=" scroll-mt-28">
      <SectionHead>Projects</SectionHead>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Projects {...project} />
            {/* // render a Projects component for each project in the projects data */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;

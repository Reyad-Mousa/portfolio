"use client";

// Import necessary hooks and types from React and other libraries
import React, { useEffect } from "react";
import SectionHead from "./SectionHead"; // import the SectionHead component
import { projectsData } from "@/lib/data"; // import the data for the projects
import Projects from "./Projects"; // import the Projects component
import { useInView } from "react-intersection-observer"; // for detecting when an element is in view
import { useActiveSection } from "@/context/activeSectionContext"; // import the custom hook to use the active section context

// Define the Project component
const Project = () => {
  // Use the useInView hook to get a ref and a boolean indicating whether the element is in view
  const { ref, inView } = useInView({
    threshold: 0.4, // the element is considered in view if 40% of it is visible
  });

  // Use the active section context to get the function to set the active section
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  // Use the useEffect hook to set the active section to "Projects" when the element comes into view
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

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

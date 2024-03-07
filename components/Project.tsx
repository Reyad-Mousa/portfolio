import React from "react";
import SectionHead from "./SectionHead";
import { projectsData } from "@/lib/data";

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
  return <div>{title}</div>;
}

"use client";
// Import necessary hooks and types from React and other libraries
import { projectsData } from "@/lib/data"; // import the data for the projects
import Image from "next/image"; // for optimized image rendering
import { useRef } from "react"; // to create a reference to a DOM element
import { useScroll, motion } from "framer-motion"; // for animations and scroll effects

// Define the type for the project props based on the projects data
type projectProps = (typeof projectsData)[number];

// Define the Projects component
export default function Projects({
  title,
  description,
  tags,
  imageUrl,
}: projectProps) {
  // Create a ref for the div that will be animated
  const ref = useRef<HTMLDivElement>(null);
  // Use the useScroll hook to get the scroll progress of the div
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-1 1", "1.1 1"],
  });

  // Return the JSX for the Projects component
  return (
    <motion.div
      ref={ref} // assign the ref to the div
      style={{
        scale: scrollYProgress, // scale the div based on the scroll progress
        opacity: scrollYProgress, // change the opacity of the div based on the scroll progress
      }}
    >
      <section
        className=" group rounded-lg relative flex flex-col sm:flex-row gap-4 mb-9 bg-gray-100 max-w-[42rem] sm:max-h-[20rem] min-h-[20rem] border border-black/5 overflow-hidden
    hover:bg-gray-200 transition" // CSS classes for styling
      >
        <div
          className=" flex flex-col  p-5 sm:py-12 gap-3 sm:max-w-[60%]
         sm:group-even:ml-[18rem]  " // CSS classes for styling
        >
          <h2 className="text-xl font-bold">{title}</h2>{" "}
          {/*// the title of the */}
          project
          <p>{description}</p>
          {/* // the description of the project */}
          <ul className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-800 text-white px-3 py-1 rounded-full"
                key={index}
              >
                {tag}
                {/* // the tags of the project */}
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
        group-even:group-hover:rotate-2" // CSS classes for styling
          src={imageUrl} // the image URL of the project
          alt="Project I Worked on" // alt text for the image
          quality={95} // the quality of the image
          priority // load the image as soon as possible
        />
      </section>
    </motion.div>
  );
}

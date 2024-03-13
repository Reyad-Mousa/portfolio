"use client";
import React, { Fragment } from "react";
import SectionHead from "./SectionHead";
import { useActiveSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

const Experience = () => {
  const { ref } = useActiveSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="my-20 scroll-mt-28">
      <SectionHead>My Experience</SectionHead>
      <VerticalTimeline lineColor="#f3f4f6">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem solid #9ca3af",
              }}
              contentArrowStyle={{
                borderRight: "10px solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "#fff" }}
            >
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.location}</p>
              <p className="text-gray-500">{item.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

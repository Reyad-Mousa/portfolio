import React from "react";
type sectionHeadProps = {
  children: React.ReactNode;
};
const SectionHead = ({ children }: sectionHeadProps) => {
  return <h2 className="font-bold text-2xl sm:text-3xl  mb-16">{children}</h2>;
};

export default SectionHead;

import type { SectionName } from "./../context/activeSectionContext";
import { useActiveSection } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useActiveSectionInView(
  SectionName: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold, // the element is considered in view if 40% of it is visible
  });

  // Use the active section context to get the function to set the active section
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  // Use the useEffect hook to set the active section to "Projects" when the element comes into view
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, SectionName]);
  return {
    ref,
  };
}

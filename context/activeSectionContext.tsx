"use client";

// Import necessary hooks and types from React
import { useState, createContext, useContext, ReactNode } from "react";
// Import the links data
import { links } from "@/lib/data";

// Define a type for the section names based on the links data
type SectionName = (typeof links)[number]["name"];

// Create a context for the active section. This context will hold the current active section,
// a function to set the active section, the time of the last click, and a function to set the time of the last click.
// This context is created to share these values between different components in the application.
export const ActiveSectionContext = createContext<{
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

// Create a provider component for the active section context. This component maintains the state of the active section
// and the time of the last click, and provides these values to all child components. This allows child components to
// read the current active section and time of the last click, and update these values.
export const ActiveSectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); //make move active section to next section smother than active section

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Create a custom hook to use the active section context. This hook provides a convenient way for components to access
// the active section context. It throws an error if the context is null, which means that the hook is being used outside
// of an ActiveSectionProvider.
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};

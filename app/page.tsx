import About from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Intro />
      <About />
      <Project />
      <Skills />
    </main>
  );
}

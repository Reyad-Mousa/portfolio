"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experience";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Intro />
      <About />
      <Project />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  );
}

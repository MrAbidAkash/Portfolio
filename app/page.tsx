import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import AboutSection from "./_components/AboutSection";
import PortfolioSection from "./_components/Projects";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Projects from "./_components/Projects";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return (
    <main className="[&>*:nth-child(odd)]:bg-[#f9f9f9] [&>*:nth-child(n)]:py-20 space-y-10 ">
      <section id="" className=" section lg:h-[100dvh] lg:flex  ">
        <header className=" max-lg:items-center max-w-[1020px] mx-auto max-xl:px-10  flex  flex-col max-lg:space-y-14  lg:justify-evenly ">
          <Hero />
          <Skill />
        </header>
      </section>
      <section id="about" className="section">
        <div className=" space-y-16  items-center text-center justify-center max-w-[1020px] mx-auto max-xl:px-10">
          <AboutSection />
        </div>
      </section>
      <section id="projects" className="section">
        <div className="max-w-[1020px] mx-auto max-xl:px-10">
          <Projects />
        </div>
      </section>
      <section id="contact" className="section">
        <div className="max-w-[1020px] mx-auto max-xl:px-10 py-10">
          <Contact />
        </div>
      </section>
    </main>
  );
}

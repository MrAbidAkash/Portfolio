'use client';

import { useEffect, useRef } from "react";
import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import AboutSection from "./_components/AboutSection";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Home() {
  const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

  useEffect(() => {
    // Select all sections and nav links once
    sectionsRef.current = document.querySelectorAll(".section");
    navLinksRef.current = document.querySelectorAll(".navLink");

    // Callback for IntersectionObserver
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute("id");
        const activeLink = Array.from(navLinksRef.current || []).find(
          (link) => link.href.includes(`#${sectionId}`)
        );

        if (entry.isIntersecting) {
          // Remove active class from previously active link
          document.querySelector(".active")?.classList.remove("active");
          // Add active class to the current section’s link
          activeLink?.classList.add("active");
        }
      });
    };

    // Initialize IntersectionObserver with appropriate options
    const observerOptions = { threshold: 0.75 }; // Multiple thresholds for fine control
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sectionsRef.current?.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main className="[&>*:nth-child(odd)]:bg-[#f9f9f9] [&>*:nth-child(n)]:py-20 space-y-10 overflow-hidden">
      <section id="home" className="section lg:h-[100dvh] lg:flex">
        <header className="max-lg:items-center max-w-[1020px] mx-auto max-xl:px-10 flex flex-col max-lg:space-y-14 lg:justify-evenly">
          <Hero />
          <Skill />
        </header>
      </section>
      <section id="about" className="section">
        <div className="space-y-16 items-center text-center justify-center max-w-[1020px] mx-auto max-xl:px-10">
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

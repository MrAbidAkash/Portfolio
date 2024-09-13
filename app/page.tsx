'use client'

import Hero from "./_components/Hero";
import Skill from "./_components/Skill";
import AboutSection from "./_components/AboutSection";
import PortfolioSection from "./_components/Projects";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Projects from "./_components/Projects";
import { Suspense, useEffect } from "react";
import Loading from "./loading";

export default function Home() {

  useEffect(() => {
    const navLinks: any = document.querySelectorAll(".navLink");
    const navLink: any = document.querySelector(".navLink");
    const sections: any = document.querySelectorAll(".section");

    /*   console.log(`sections: ${sections[0].classList}`);
    console.log(`navLinks: ${navLinks[0]}`);
    console.log(`navLink: ${navLink.classList}`); */

    window.onscroll = () => {
      sections.forEach((sec: any) => {
        let top = window.scrollY + 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        /*        console.log(`this is offset ${offset}`);
        console.log(`this is height ${height}`); */
        if (top >= offset && top < offset + height / 2) {
          let currentId: any = sec.id;
          let currentIDS =
            (navLink.href = `http://localhost:3000/#${currentId}`);
          /*           console.log((navLink.href = `http://localhost:3000/#${currentId}`));
           */
          navLinks.forEach((Link: any) => {
            if (Link.href === currentIDS) {
              document.querySelector(".active")?.classList.remove("active");

              Link.classList.add("active");
            }

            /*   console.log(Link) */

            /* document.querySelector(".active")?.classList.remove("active");
            navLink.classList.add("active"); */
          });
        }
      });

      /*   console.log(`this is top ${top}`); */
      /*  console.log(`this is current ${currentId}`); */
    };

     const cont = document.querySelector("#contact");
     /*  console.log(cont); */
     const obz: any = new IntersectionObserver(
       (cont) => {
         /*  console.log(cont[0].target);
       console.log(cont[0].isIntersecting); */

         const contar = cont[0].target;
         const intersect = cont[0].isIntersecting;

         if (intersect) {
           document.querySelector(".active")?.classList.remove("active");

           document.querySelector("#contactLink")?.classList.add("active");
         }
       },
       {
         threshold: 1,
       },
     );

     obz.observe(cont);
  });



  return (
    <main className="[&>*:nth-child(odd)]:bg-[#f9f9f9] [&>*:nth-child(n)]:py-20 space-y-10 overflow-hidden">
      <section
        id="home"
        className=" section lg:h-[100dvh] lg:flex"
      >
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
        <div className="max-w-[1020px] mx-auto max-xl:px-10 ">
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

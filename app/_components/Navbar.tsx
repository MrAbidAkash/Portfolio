"use client";
import { ModeToggle } from "@/components/dark-mode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  // Function to handle scroll and update active link
  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact']; // Array of section IDs
    const scrollPosition = window.scrollY + 200; // Adjust based on navbar height

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section); // Set active link based on scroll position
        }
      }
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scroll and close the menu
  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id); // Update active link on click
  };

  return (
    <div className="flex justify-between items-center py-8 max-lg:px-12 max-w-[1020px] mx-auto">
      <a href="/" className="">
        <h2 className={`text-2xl font-bold`}>Mr.AbidAkash</h2>
      </a>
      <div className="flex md:items-center space-x-5">
        <div className="hidden md:inline">
          <Menu />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon size={36} className="hover:text-[#147efb] md:hidden -ml-11" />
            </SheetTrigger>
            <SheetContent id="sheetSec" side="left" className="w-full py-16 px-14 md:hidden">
              <SheetHeader className="items-center justify-center mt-14 md:hidden">
                <SheetClose asChild>
                  <nav className="">
                    <ul className="text-4xl font-semibold flex flex-col space-y-14 items-center">
                      {['home', 'about', 'projects', 'contact'].map((section) => (
                        <li key={section}>
                          <a
                            onClick={() => handleLinkClick(section)}
                            className={activeLink === section ? 'navLink active' : 'navLink'}
                            href={`/#${section}`} // Ensure href matches the ID of the sections
                          >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetClose>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

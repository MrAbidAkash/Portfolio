"use client";

import { DialogClose } from "@/components/ui/dialog";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";


const Menu = () => {
  /* 
  const activeNav = () => {
    const navLinks: any[] = Array.from(document.querySelectorAll(".navLink"));
    console.log(navLinks);
    navLinks.map((navLink: any) => {
      document.querySelector(".active")?.classList.remove("active");
      navLink.classList.add("active");
    });
  }; */

 

  return (
    <nav className="">
      <ul className="text-4xl font-semibold flex flex-col space-y-14 items-center md:flex-row md:text-xl md:space-y-0 md:space-x-5 ">
        <li>
        {/*  <SheetClose > */}
            <a 
              /* onClick={activeNav} */ className={`navLink active `}
              href="/#"
            >
              Home
            </a>
        {/*   </SheetClose> */}
        </li>
        <li>
          <a  /* onClick={activeNav} */ className="navLink" href="/#about">
            About
          </a>
        </li>
        <li>
          <a  /* onClick={activeNav} */ className="navLink" href="/#projects">
            Projects
          </a>
        </li>
        <li>
          <a  /* onClick={activeNav} */ className="navLink" id="contactLink" href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

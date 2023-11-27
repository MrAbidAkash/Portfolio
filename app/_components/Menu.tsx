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
import { useEffect } from "react";

const Menu = () => {
  const closeMenu = (link: any) => {
    document.querySelector("#sheetSec")?.classList.add("hidden");
  };

  useEffect(() => {
    const navLink: any = document.querySelectorAll("nav ul li a");

    navLink.forEach((link: any) => {
/*       console.log(link.classList);
 */      link.addEventListener("click", () => {});
    });
  }, []);

  return (
    <nav className="">
      <ul className="text-4xl font-semibold flex flex-col space-y-14 items-center md:flex-row md:text-xl md:space-y-0 md:space-x-5 ">
        <li>
          <Link onClick={closeMenu} className={`navLink  `} href="/">
            Home
          </Link>
        </li>
        <li>
          <a onClick={closeMenu} className="navLink" href="/#about">
            About
          </a>
        </li>
        <li>
          <a onClick={closeMenu} className="navLink" href="/#projects">
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={closeMenu}
            className="navLink"
            id="contactLink"
            href="/#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

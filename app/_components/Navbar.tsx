"use client";
import { ModeToggle } from "@/components/dark-mode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  

  return (
    <div className="flex justify-between items-center py-8 px-12 ">
      <Link href="" className="">
        <h2 className={`text-2xl font-bold `}>Mr.AbidAkash</h2>
      </Link>
      <div className="flex md:items-center space-x-5">
        <div className="hidden md:inline">
          <Menu />
        </div>
        {/*   <div>
          <ModeToggle />
        </div> */}
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger>
              <MenuIcon
                size={36}
                className="hover:text-[#147efb] md:hidden  "
              />
            </SheetTrigger>
            <SheetContent
              id="sheetSec "
              side={"left"}
              className="w-full py-16 px-14 md:hidden"
            >
              <SheetHeader className=" items-center justify-center mt-14 md:hidden ">
                <SheetClose asChild>
                  <Menu />
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

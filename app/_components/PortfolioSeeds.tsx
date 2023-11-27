import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioSeeds = () => {
  return (
    <div className="md:min-w-[570px]  overflow-idden bg-white pt-5 md:p-5 rounded-3xl max-md:space-y-10 md:space-x-10 shadow-slate-400  shadow-lg md:flex md:flex-row p-5 ">
      <div className="w-full h-[400px] mx-auto  md:w-[50%] relative  overflow-hidden overflow-y-scroll scroll-smooth scrollhide  shadow-lg  rounded-3xl ">
        <Image
          alt=""
          src="https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"
          width={5000}
          height={5000}
          className=" scrollPic "
        />
      </div>

      <div className="flex flex-col justify-between md:w-[40%] md:px-5 space-y-10 ">
        <div className="max-md:text-center space-y-5 max-sm:px-0 max-sm:text-start max-md:px-20">
          <h1 className="text-2xl ">
            <span className="font-bold">CAR RENTAL </span>
            <span className="font-bold text-xl ">(FEBRUARY 2023) 🚗</span>
          </h1>
          <h2 className="text-md text-[#767676] text-justify">
            A car rental website is an online platform that allows users to rent
            cars for personal or business use. The website provides an interface
            for searching, comparing, and reserving cars.
          </h2>
          <div className="flex flex-wrap font-semibold gap-2">
            <span className="py-3 px-3 shadow-md rounded-xl ">React</span>
            <span className="py-3 px-3 shadow-md rounded-xl ">Next JS</span>
            <span className="py-3 px-3 shadow-md rounded-xl ">
              Tailwind CSS
            </span>
            <span className="py-3 px-3 shadow-md rounded-xl ">MongoDB</span>
            <span className="py-3 px-3 shadow-md rounded-xl ">TypeScript</span>
          </div>
        </div>
        <div className="font-medium text-xl flex flex-wrap items-center justify-center mx-auto gap-x-10 ">
          <Link href="">
            <span className=" flex items-center gap-x-2">
              Code <FiGithub />
            </span>
          </Link>
          <Link href="">
            <span className="flex items-center gap-x-2">
              Live Demo <FiExternalLink />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSeeds;

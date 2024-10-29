import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Props {
  imgUrl: string;
  liveUrl: string;
  githubUrl: string;
  title: string;
  description: string;
  date: string;
}

const PortfolioSeeds = ({
  imgUrl,
  liveUrl,
  githubUrl,
  title,
  description,
  date,
}: Props) => {
  return (
    <div className="relative lg:min-w-[570px] lg:h-[500px] overflow-idden bg-white pt-5 lg:p-5 rounded-3xl max-lg:space-y-10 lg:space-x-5 shadow-slate-400  shadow-lg lg:flex lg:flex-row p-5 lg:items-center lg:justify-between ">
      <div className="w-full lg:flex-grow max-sm:h-[340px] max-lg:h-[420px] min-h-[250px] h-[90%]   lg:w-[50%] overflow-hidden overflow-y-scroll scroll-smooth scrollhide  shadow-lg  rounded-3xl ">
        <div className="relative h-[800px] w-full scrollPic ">
          <Image alt="" src={imgUrl} fill className=" " />
        </div>
      </div>

      <div className="relative h-full lg:flex flex-col justify-between lg:w-[40%] lg:px-5 space-y-6 ">
        <div className="max-lg:text-center space-y-3 px-0 sm:px-10 max-sm:text-start lg:px-0 lg:flex flex-col lg:items-center justify-between lg:h-[85%]">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-2xl ">
              <span className="font-bold">{title} </span>
              <span className="font-bold text-xl ">({date}) </span>
            </h1>
            <h2 className="text-md text-[#767676] text-justify">
              {description}
            </h2>
          </div>
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
        <div className="lg:absolute bottom-2 font-medium text-xl flex flex-wrap items-center justify-center mx-auto gap-x-10 ">
          <Link href={githubUrl}>
            <span className=" flex items-center gap-x-2">
              Code <FiGithub />
            </span>
          </Link>
          <Link href={liveUrl}>
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

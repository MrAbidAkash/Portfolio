import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import PortfolioSeeds from "./PortfolioSeeds";

const Projects = () => {
  return (
    <div className="items-start justify-center flex flex-col space-y-10  mx-auto">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-[#147efb]">PORTFOLIO</h2>
        <h2 className="text-2xl font-bold">
          Each project is a unique piece of development 🧩
        </h2>
      </div>

      <div className="items-center justify-center mx-auto space-y-20">
      <PortfolioSeeds/>
      <PortfolioSeeds/>
      <PortfolioSeeds/>
      <PortfolioSeeds/>
      </div>
    </div>
  );
};

export default Projects;

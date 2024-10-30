import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import PortfolioSeeds from "./PortfolioSeeds";

const projectDetails = [
  {
    imgUrl: "/projects-img/ghotion-thumbnail.png",
    liveUr: "https://ghotion.vercel.app/",
    githubUrl: "https://github.com/MrAbidAkash/ghotion",
    title: "NOTE-BOOK",
    description:
      "Ghotion is your ultimate workspace for productivity and collaboration. Whether you're planning, writing, or brainstorming, Ghotion streamlines your workflow with the power of AI, making work feel smoother and faster. Say goodbye to scattered tools—welcome to Ghotion, where every project is organized, efficient, and just a little smarter.",
    date: "February 2024",
    imgHeight: "h-[600px] ",
    techStack: ["Next.JS", "Tailwind CSS", "MongoDB", "TypeScript","Prisma ORM"],
  },
  {
    imgUrl: "/projects-img/pratice-frontend-01.png",
    liveUr: "https://pratice-frontend-01.vercel.app/",
    githubUrl: "https://github.com/MrAbidAkash/pratice-frontend-01",
    title: "The WPPOOL Index",
    description:
      "The WPPOOL Index tracks the performance of emerging, publicly traded financial technology (fintech) companies. It offers investors insights into market trends and key performance metrics, helping them make informed decisions in the evolving fintech landscape.",
    date: "April 2024",
    imgHeight: "h-[2300px]  ",
    techStack: ["HTML", "CSS", "Tailwind CSS ", "Chart.JS"],
  },
  // {
  //   imgUrl: "/projects-img/ghotion-thumbnail.png",
  //   liveUr: "https://ghotion.vercel.app/",
  //   githubUrl: "https://github.com/MrAbidAkash/ghotion",
  //   title: "Ghotion",
  //   description:
  //     "Ghotion is a social media platform that allows users to create and share posts, photos, and videos. It also has a messaging feature.",
  //   date: "string",
  // },
];

const Projects = () => {
  return (
    <div className="items-start justify-center flex flex-col space-y-10 mx-auto">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-[#147efb]">PORTFOLIO</h2>
        <h2 className="text-2xl font-bold">
          Each project is a unique piece of development 🧩
        </h2>
      </div>

      <div className="items-center justify-center mx-auto space-y-20">
        {projectDetails.map((data) => (
          <PortfolioSeeds
            key={data.title}
            imgUrl={data.imgUrl}
            liveUrl={data.liveUr}
            githubUrl={data.githubUrl}
            title={data.title}
            description={data.description}
            date={data.date}
            imgHeight={data.imgHeight}
            techStack={data.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

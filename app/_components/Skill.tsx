/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Skill = () => {
  return (
    <div className="max-md:space-y-10 md:flex items-center md:space-x-10">
      <h2 className="inline-block text-xl font-semibold max-md:border-b-[3px] md:border-r-[3px] max-md:pb-2 md:pr-5   border-[rgba(45,46,50,.5)]   ">
        Tech Stack
      </h2>
      <div className="skillIcon">
        <ul className="flex flex-wrap items-center justify-center  md:gap-y-7 gap-x-5">
          <li>
            <img
              className="animate-bounce "
              alt=""
              src="https://skillicons.dev/icons?i=html,css"
            ></img>
          </li>
          <li>
            <img
              className="animate-bounce"
              alt=""
              src="https://skillicons.dev/icons?i=js,ts"
            ></img>
          </li>
          <li>
            <img
              className="animate-bounce"
              alt=""
              src="https://skillicons.dev/icons?i=mongodb,nodejs"
            ></img>
          </li>
          <li>
            <img
              className="animate-bounce"
              alt=""
              src="https://skillicons.dev/icons?i=react,nextjs"
            ></img>
          </li>
          <li>
            <img
              className="animate-bounce"
              alt=""
              src="https://skillicons.dev/icons?i=tailwind,materialui"
            ></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;

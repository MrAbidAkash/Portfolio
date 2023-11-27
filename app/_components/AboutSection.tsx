import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="max-lg:items-center max-lg:text-center  max-lg:justify-center flex flex-col max-lg:space-y-14 max-lg:max-w-[540px] mx-auto lg:flex-row lg:text-start lg:space-x-20 ">
      <div className="md:flex-grow">
        <div className="relative ImageSec max-w-[450px] h-[380px]  ">
          <div className="rounded-2xl max-sm:w-[370px] w-[450px] h-[380px] overflow-hidden relative">
            <Image
              alt=""
              src="/aboutMe.jpg"
              quality={100}
              fill
              sizes=""
              className="object-cover object-right "
            />
          </div>
          <div className="absolute right-[-40px] md:right-[-90px] rounded-full bottom-[-40px]  bg-white p-14 w-[180px] h-[190px] hidden sm:inline ">
            <Image
              alt=""
              src="/Avery.png"
              fill
              sizes="w-full"
              className="animate-[spin_9s_linear_infinite] rounded-full p-1"
            />
            <span className="relative ">
              <Image
                alt=""
                src="/man-technologist.png"
                width={180}
                height={10}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3 lg:w-[42%] ">
        <h2 className="text-lg font-bold text-[#147efb]">ABOUT ME</h2>
        <h2 className="text-xl font-bold  maxtext-start ">
          A dedicated Full-Stack Web Developer based in Dhaka, Bangladesh 📍
        </h2>
        <p className="text-md  text-justify text-[#767676]">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;

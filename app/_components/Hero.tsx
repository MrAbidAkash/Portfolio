
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Hero = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return (
    <div className="items-center text-center  justify-center flex flex-col-reverse md:min-w-[500px] lg:flex-row  lg:text-start md:gap-x-20 max-lg:gap-y-20 max-sm:gap-y-10  ">
      <div className="space-y-5  md:flex-1">
        <h1 className="text-5xl transition-[all_ease-in-out] duration-1000 max-sm:text-3xl font-bold leading-snug space-x-5 ">
          <span>Full-Stack Web (MERN) Developer</span>
          <Image
            src="/handWave.png"
            alt=""
            width={500}
            height={500}
            className="inline-block mt-[-15px] w-[35px] sm:w-[50px] h-auto mb-[-6px] "
          />
        </h1>
        <p className="text-lg max-sm:text-base leading-relaxed">
          Hi, I&apos;m Abidur Rahman {}
          <span className="font-semibold">(Mr.AbidAkash)</span>. A passionate
          Full-Stack Web Developer based in Dhaka, Bangladesh. 📍
        </p>
        <div className="flex items-center  max-lg:justify-center lg:items-start space-x-3 ">
          <Link
            href="https://linkedin.com/in/mrabidakashofficial/"
            className="text"
          >
            <span
              className="
           text-[40px]"
            >
              <CiLinkedin />
            </span>
          </Link>
          <Link href="https://github.com/MrAbidAkash">
            <span
              className="
          text-[35px]"
            >
              <FiGithub />
            </span>
          </Link>
        </div>
      </div>
      <div className=" w-[350px] h-[350px] max-sm:w-[280px] max-sm:h-[280px] overflow-hidden bg-center bg- object-cover rounded-full ani relative transition-[all_ease-in-out] duration-1000 FloatingAnimation  ">
        <Image
          alt="profilePic"
          src="/goku.jpg"
          fill
          sizes="w-full"
          className="object-cover object-top"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;

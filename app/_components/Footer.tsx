import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
    return (
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-xl">Copyright © 2023. All rights are reserved</h2>
        <div className="flex items-center justify-center space-x-3 ">
          <span className="hover:animate-spin animate-bounce">
            <Link
              href="https://linkedin.com/in/mrabidakashofficial/"
              className="text"
            >
              <span className="">
                <CiLinkedin size={40} />
              </span>
            </Link>
          </span>
          <span className="hover:animate-spin animate-bounce">
            <Link href="https://github.com/MrAbidAkash">
              <FiGithub size={32} />
            </Link>
          </span>
        </div>
      </div>
    );
}

export default Footer;
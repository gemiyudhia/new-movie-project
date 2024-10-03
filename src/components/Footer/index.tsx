import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto py-7 mt-8">
      <div className="px-6 flex justify-center items-center flex-col pt-4">
        <div className="flex items-center mb-3 gap-x-3">
          <Link
            to="https://instagram.com/yuudhia"
            target="blank"
            className=" group"
          >
            <InstagramLogo
              size={40}
              weight="bold"
              className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 bg-white p-2 rounded-full"
            />
          </Link>
          <Link
            to="https://github.com/gemiyudhia"
            target="blank"
            className="group"
          >
            <GithubLogo size={40} weight="bold" className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 bg-white p-2 rounded-full" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gemiyudhia/"
            target="blank"
            className="group"
          >
            <LinkedinLogo size={40} weight="bold" className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300 bg-white p-2 rounded-full" />
          </Link>
        </div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Gemi Yudhia
        </p>
      </div>
    </footer>
  );
};

export default Footer;

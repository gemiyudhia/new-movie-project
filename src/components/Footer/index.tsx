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
            className="bg-white p-2 rounded-full"
          >
            <InstagramLogo size={28} weight="bold" />
          </Link>
          <Link
            to="https://github.com/gemiyudhia"
            target="blank"
            className="bg-white p-2 rounded-full"
          >
            <GithubLogo size={28} weight="bold" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gemiyudhia/"
            target="blank"
            className="bg-white p-2 rounded-full"
          >
            <LinkedinLogo size={28} weight="bold" />
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

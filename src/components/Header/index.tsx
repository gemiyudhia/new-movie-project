import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

const navMenu = () => {
  return [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Movies",
      link: "#",
    },
    {
      title: "Tv Series",
      link: "#",
    },
  ];
};

const Navbar = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)

return (
  <nav className="container mx-auto">
    <div className="flex justify-between items-center py-7 text-white px-6">
      <div className="flex items-center gap-x-5">
        <h1 className="font-bold text-2xl">My Movies </h1>
        <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 w-24 h-7 rounded-xl"></span>
      </div>

      <ul className="hidden">
        {navMenu().map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>

      {/* hamburger menu for mobile */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between gap-y-2"
        >
          <span
            className={`hamburger-line transition duration-300 ease-in-out origin-top-left  ${
              isOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line transition duration-300 ease-in-out  ${
              isOpen ? "scale-0" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left  ${
              isOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      <form action="" className="hidden">
        <MagnifyingGlass />
        <input type="text" placeholder="Search Movie..." />
      </form>
    </div>
  </nav>
);
};

export default Navbar;

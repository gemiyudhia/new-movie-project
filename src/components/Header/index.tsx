import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MenuMobile from "./MenuMobile";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="container mx-auto">
      <div className="flex justify-between items-center py-7 text-white px-6 relative">
        <div className="flex items-center gap-x-5">
          <h1 className="font-bold text-2xl">My Movies </h1>
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 w-24 h-7 rounded-xl"></span>
        </div>

        <ul className="hidden lg:flex items-center gap-x-5">
          {navMenu().map((item, index) => (
            <li key={index}>
              <a
                href=""
                className="hover:text-secondary-0 after:content-[''] after:block after:pb-2 after:border-b-2 after:border-secondary-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center transition-transform duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger menu for mobile */}
        <div className="lg:hidden">
          <HamburgerMenu
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Menu saat hamburger di klik */}
        <MenuMobile isOpen={isOpen} />

        <form action="" className="hidden lg:flex lg:relative">
          <MagnifyingGlass
            size={18}
            className="absolute top-2 left-2 text-white"
          />
          <input
            type="text"
            placeholder="Search Movie..."
            className="w-full py-2 pl-10 bg-transparent border-b text-white outline-none"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

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

        <ul className="hidden">
          {navMenu().map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>

        {/* hamburger menu for mobile */}
        <div>
          <HamburgerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>

        {/* Menu saat hamburger di klik */}
        <MenuMobile isOpen={isOpen} />

        <form action="" className="hidden">
          <MagnifyingGlass />
          <input type="text" placeholder="Search Movie..." />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

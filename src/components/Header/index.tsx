import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MenuMobile from "./MenuMobile";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

const navMenu = () => {
  return [
    {
      title: "Home",
      link: "home",
      submenu: [],
    },
    {
      title: "Movies",
      link: "#",
      submenu: [
        { name: "Now Playing", link: "/movies/now_playing" },
        { name: "Popular Movies", link: "/movies/popular_movies" },
        { name: "Upcoming Movies", link: "/movies/upcoming_movies" },
        { name: "Top Rated Movies", link: "/movies/top_rated_movies" },
      ],
    },
    {
      title: "Tv Series",
      link: "#",
      submenu: [
        { name: "Airing Today", link: "/tv/airing_today" },
        { name: "On The Air", link: "/tv/on_the_air" },
        { name: "Popular Series", link: "/tv/popular_series" },
        { name: "Top Rated Series", link: "/tv/top_rated_series" },
      ],
    },
  ];
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const scroll = () => {
    if (window.scrollY >= 45) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", scroll);

  return (
    <nav
      className={`container mx-auto fixed z-20 top-0 left-0 right-0 ${
        isScroll ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center py-7 text-white px-6 relative">
        <div className="flex items-center gap-x-5">
          <h1 className="font-bold text-2xl">My Movies </h1>
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 w-24 h-7 rounded-xl"></span>
        </div>
        <ul className="hidden lg:flex items-center gap-x-5">
          {navMenu().map((item, index) =>
            item.submenu.length > 0 ? (
              <Popover key={index} className="relative">
                <PopoverButton className="hover:text-secondary-0 after:content-[''] after:block after:pb-2 after:border-b-2 after:border-secondary-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center transition-transform duration-300 focus:outline-none focus:after:scale-x-100 focus:text-secondary-0">
                  {item.title}
                </PopoverButton>
                <PopoverPanel className="absolute z-10 bg-white text-slate-800 font-semibold p-4 mt-2 shadow-lg rounded-md">
                  <div className="flex flex-col w-36 gap-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="hover:underline mb-1 text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            ) : (
              // Jika tidak ada submenu, tampilkan item tanpa Popover
              <li key={index}>
                <Link
                  to={`/${item.link}`}
                  className="hover:text-secondary-0 after:content-[''] after:block after:pb-2 after:border-b-2 after:border-secondary-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center transition-transform duration-300 focus:outline-none focus:after:scale-x-100 focus:text-secondary-0"
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
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

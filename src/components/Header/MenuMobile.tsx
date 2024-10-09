import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import FormSearch from "./Form";

type MenuMobileProps = {
  isOpen: boolean;
  onSearch: () => void;
  isMobile: boolean;
};

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

const MenuMobile = ({ isOpen, onSearch }: MenuMobileProps) => {
  return (
    <div
      className={`absolute bg-secondary-0 w-[90%] md:w-[95%] top-24 py-4 px-3 rounded-lg transition-all duration-300 ease-in-out transform lg:hidden ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      {/* Form Search */}
      <FormSearch isMobile={true} onSearch={onSearch} />

      {/* Menampilkan ul sebagai block untuk tampilan mobile */}
      <ul className="block mt-4 space-y-3">
        {navMenu().map((item, index) =>
          item.submenu.length > 0 ? (
            <Popover key={index} className="relative">
              <PopoverButton className="hover:underline after:content-[''] after:block after:pb-2 after:border-b-2 after:border-secondary-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center transition-transform duration-300 focus:outline-none focus:after:scale-x-100 focus:underline">
                {item.title}
              </PopoverButton>
              <PopoverPanel className="absolute z-10 bg-white p-4 mt-2 shadow-lg rounded-md text-slate-800 font-semibold">
                <div className="flex flex-col w-36 gap-y-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="hover:underline mb-1 text-sm"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          ) : (
            // Jika tidak ada submenu, tampilkan item tanpa Popover
            <li key={index}>
              <Link
                to={`/${item.link}`}
                className="hover:underline after:content-[''] after:block after:pb-2 after:border-b-2 after:border-secondary-0 after:scale-x-0 hover:after:scale-x-100 after:origin-center transition-transform duration-300 focus:outline-none focus:after:scale-x-100 focus:underline"
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MenuMobile;

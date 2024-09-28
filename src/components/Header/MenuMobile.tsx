import { MagnifyingGlass } from "@phosphor-icons/react";

type MenuMobileProps = {
  isOpen: boolean;
};

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

const MenuMobile = ({ isOpen }: MenuMobileProps) => {
  return (
    <div
      className={`absolute bg-secondary-0 w-[90%] md:w-[95%] top-24 py-4 px-3 rounded-lg transition-all duration-300 ease-in-out transform ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <form action="" className="relative">
        <input
          type="text"
          placeholder="Search Movie..."
          className="w-full py-2 pl-10 rounded-md text-background-0 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <MagnifyingGlass
          size={18}
          className="absolute top-2 left-2 text-background-0"
        />
      </form>
      <ul className="mt-3">
        {navMenu().map((item, index) => (
          <div key={index} className="py-1">
            <li className="font-semibold hover:opacity-75">{item.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;

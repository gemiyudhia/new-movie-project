type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
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
  );
};

export default HamburgerMenu;

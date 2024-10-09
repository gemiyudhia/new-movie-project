import { useRef } from "react";
import { useSearchStore } from "../../../store/useSearchStore";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

type FormSearchProps = {
  isMobile?: boolean;
  onSearch: () => void
};

const FormSearch = ({ isMobile = false, onSearch }: FormSearchProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { fetchSearchResults } = useSearchStore();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const searchQuery = nameRef.current?.value.trim();

    if (!searchQuery) return;

    onSearch()

    fetchSearchResults(searchQuery);
    navigate(`/search?query=${searchQuery}`);

    // Clear input setelah search
    if (nameRef.current) {
      nameRef.current.value = "";
    }
  };

  return (
    <form
      action=""
      className={isMobile ? "relative lg:hidden" : "hidden lg:flex lg:relative"}
      onSubmit={handleSearch}
    >
      <MagnifyingGlass
        size={18}
        className={`absolute top-2 left-2 ${
          isMobile ? "text-background-0" : "text-white"
        }`}
      />
      <input
        type="text"
        placeholder="Search Movie..."
        ref={nameRef}
        className={`w-full py-2 pl-10 ${
          isMobile
            ? "rounded-md text-background-0 focus:ring-2 focus:ring-blue-500 shadow-sm"
            : "bg-transparent border-b text-white"
        } outline-none`}
      />
    </form>
  );
};

export default FormSearch;

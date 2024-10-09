import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchStore } from "../../store/useSearchStore";
import { SearchState } from "../../types";
import { Button } from "@headlessui/react";
import Modal from "../../components/Dialog";
import SkeletonComponent from "../../components/Skeleton";
import NotFoundSearch from "./notFoundSearch";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { searchResults, fetchSearchResults, isLoading } = useSearchStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SearchState | null>(null);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query);
    }
  }, [query, fetchSearchResults]);

  const handleOpenDetail = (item: SearchState) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section
        className={`container mx-auto mt-32 ${
          isOpen ? "brightness-50 blur-sm" : "brightness-100 blur-none"
        }`}
      >
        <div className="px-6 mt-8">
          <h1 className="text-white font-bold text-3xl pb-5">
            Search For: {query}
          </h1>
        </div>

        {/* Conditionally show skeletons, search results, or no results found */}
        {isLoading ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <SkeletonComponent key={index} />
            ))}
          </div>
        ) : searchResults.length === 0 ? (
          <div className="flex justify-center items-center min-h-[50vh] w-full">
            <NotFoundSearch query={query} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {searchResults.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img
                    className="w-full h-auto rounded-t-xl"
                    src={
                      item.poster_path &&
                      `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                        item.poster_path
                      }`
                    }
                    alt={item.title}
                  />
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                      Release Date: {item.release_date}
                    </p>
                    <Button
                      onClick={() => handleOpenDetail(item)}
                      className="rounded-lg bg-blue-500 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-blue-700 data-[active]:bg-sky-700"
                    >
                      Show Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Dialog */}
      {selectedItem && (
        <Modal
          selectedItem={selectedItem}
          isOpen={isOpen}
          handleCloseDetail={handleCloseDetail}
        />
      )}
    </>
  );
};

export default SearchPage;

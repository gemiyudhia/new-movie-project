import { useState } from "react";
import { Button } from "@headlessui/react";
import { Movie } from "../../../types";
import Modal from "../../Dialog";
import SkeletonComponent from "../../Skeleton";

type MovieListProps = {
  movies: Movie[];
  isLoading: boolean;
};

const MovieList = ({ movies, isLoading }: MovieListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Movie | null>(null);

  const handleOpenDetail = (item: Movie) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-3 ">
        <h1 className="font-bold text-3xl text-white px-3">Movies</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonComponent key={index} />
            ))
          : movies.map((movie) => (
              <div key={movie.id}>
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img
                    className="w-full h-auto rounded-t-xl"
                    src={
                      movie.poster_path &&
                      `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                        movie.poster_path
                      }`
                    }
                    alt={movie.title}
                  />
                  <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {movie.title}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                      Release Date : {movie.release_date}
                    </p>
                    <Button
                      onClick={() => handleOpenDetail(movie)}
                      className="rounded-lg bg-blue-500 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-blue-700 data-[active]:bg-sky-700"
                    >
                      Show Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Dialog */}
      <Modal
        isOpen={isOpen}
        selectedItem={selectedItem}
        handleCloseDetail={handleCloseDetail}
      />
    </>
  );
};

export default MovieList;

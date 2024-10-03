import { useEffect } from "react";
import { Link } from "react-router-dom";
import { movieStore, seriesStore } from "../../../store/index";

const HomeSection = () => {
  const { movies, fetchMovie } = movieStore();
  const { series, fetchSeries } = seriesStore();
  useEffect(() => {
    fetchMovie("popular", 6);
    fetchSeries("popular", 6);
  }, [fetchMovie, fetchSeries]);

  return (
    <section className="container mx-auto mt-8">
      {/* Movie List */}
      <div className="flex justify-between items-center mb-3 ">
        <h1 className="font-bold text-3xl text-white px-3">Movies</h1>
        <Link
          to="/"
          className="font-semibold text-sm text-blue-500 px-3 hover:text-white hover:underline"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {movies.map((movie) => (
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
                <a
                  className="mt-2 py-5 px-4 lg:py-2 md:px-3 lg:text-sm inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Show Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tv Series List */}
      <div className="flex justify-between items-center mb-3 mt-12 ">
        <h1 className="font-bold text-3xl text-white px-3">Tv Series</h1>
        <Link
          to="/"
          className="font-semibold text-sm text-blue-500 px-3 hover:text-white hover:underline"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
        {series.map((serie) => (
          <div key={serie.id}>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="w-full h-auto rounded-t-xl"
                src={
                  serie.poster_path &&
                  `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                    serie.poster_path
                  }`
                }
                alt={serie.name}
              />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {serie.name}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  First Air Date : {serie.first_air_date}
                </p>
                <a
                  className="mt-2 py-5 px-4 lg:py-2 md:px-3 lg:text-sm inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Show Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;

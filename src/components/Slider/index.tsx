import { useEffect, useState } from "react";
import { useMovieStore } from "../../store/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Button } from "@headlessui/react";
import Modal from "../Dialog";
import { Movie } from "../../types";
import SliderSkeleton from "../Skeleton/SliderSkeleton";

const Slider = () => {
  const { nowPlayingMovies, fetchNowPlayingMovies, isLoading } =
    useMovieStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Movie | null>(null);

  useEffect(() => {
    fetchNowPlayingMovies(8);
  }, [fetchNowPlayingMovies]);

  const handleOpenDetail = (item: Movie) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="px-6 mt-8">
          <h1 className="text-white font-bold text-3xl pb-5">
            Movie Now Playing🎬
          </h1>
        </div>

        {isLoading ? (
          <SliderSkeleton />
        ) : (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            spaceBetween={30}
            slidesPerView={1}
            loop={nowPlayingMovies.length > 1}
            className="md:rounded-lg h-[86vh] md:h-[75vh]"
          >
            {nowPlayingMovies.map((movie) => (
              <SwiperSlide key={movie.id} className="h-full md:rounded-lg">
                <img
                  src={
                    movie.backdrop_path &&
                    `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                      movie.backdrop_path
                    }`
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover md:rounded-lg brightness-50"
                />
                <div className="absolute bottom-14 left-10 lg:left-20 md:left-24 space-y-3 text-white">
                  <h1 className="line-clamp-2 text-3xl font-bold tracking-tight lg:text-4xl">
                    {movie.title}
                  </h1>
                  <p className="text-lg font-medium">{movie.release_date}</p>
                  <p className="text-sm text-slate-300 max-w-xl">
                    {movie.overview}
                  </p>
                  <div className="space-y-3">
                    <Button
                      onClick={() => handleOpenDetail(movie)}
                      className="rounded-lg bg-blue-500 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-blue-700 data-[active]:bg-sky-700"
                    >
                      Show Detail
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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

export default Slider;

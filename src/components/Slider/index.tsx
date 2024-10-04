import { useEffect } from "react";
import { useMovieStore } from "../../store/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Button } from "@headlessui/react";

const Slider = () => {
  const { nowPlayingMovies, fetchNowPlayingMovies } = useMovieStore();

  useEffect(() => {
    fetchNowPlayingMovies(8);
  }, [fetchNowPlayingMovies]);

  return (
    <>
      <div className="container mx-auto">
        <div className="px-6 mt-8">
          <h1 className="text-white font-bold text-3xl pb-5">Now Playing 🎬</h1>
        </div>
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
          onSlideChange={() => {}}
          onSwiper={() => {}}
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
              <div className="absolute bottom-20 left-10 space-y-3 text-white">
                <h1 className="line-clamp-2 text-3xl font-bold tracking-tight lg:text-4xl">
                  {movie.title}
                </h1>
                <p className="text-lg font-medium">{movie.release_date}</p>
                <p className="text-sm text-slate-300 max-w-xl">{movie.overview}</p>
                <div className="space-y-3">
                  <Button className="rounded-lg bg-sky-600 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Show Detail
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

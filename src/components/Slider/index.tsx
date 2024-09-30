import { useEffect, useCallback } from "react";
import { movieStore } from "../../store/movieStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Slider = () => {
  const { movies, fetchMovie } = movieStore();

  const fetchNowPlayingMovies = useCallback(() => {
    fetchMovie("now_playing", 10);
  }, [fetchMovie]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, [fetchNowPlayingMovies]);

  console.log("movies:", movies);

  return (
    <>
      <div className="container mx-auto">
        <div className="px-6 mt-8">
          <h1 className="text-white font-bold text-3xl pb-5">Now Playing</h1>
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
          loop={movies.length > 1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ height: "75vh" }}
          className="md:rounded-lg"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className="h-full md:rounded-lg">
              <img
                src={
                  movie.backdrop_path
                    ? `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                        movie.backdrop_path
                      }`
                    : "path-to-your-fallback-image.jpg" // Fallback image in case of no backdrop_path
                }
                alt={movie.title}
                className="w-full h-full object-cover md:rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

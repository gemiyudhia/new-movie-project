import { useEffect } from "react";
import { useMovieStore, useSeriesStore } from "../../../store/index";
import MovieList from "./MovieList";
import TvSeriesList from "./TvSeries";

const HomeSection = () => {
  const {popularSeries, fetchPopularSeries} = useSeriesStore();
  const { popularMovies, fetchPopularMovies } = useMovieStore();
  
  useEffect(() => {
    fetchPopularMovies(6);
    fetchPopularSeries(6);
  }, [fetchPopularMovies, fetchPopularSeries]);

  return (
    <section className="container mx-auto mt-8">
      {/* Movie List */}
      <MovieList movies={popularMovies} />

      {/* Tv Series List */}
      <TvSeriesList series={popularSeries} />
    </section>
  );
};

export default HomeSection;

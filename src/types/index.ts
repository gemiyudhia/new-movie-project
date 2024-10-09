export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  rating: number;
  poster_path: string;
  backdrop_path: string;
};

export type TvSeries = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path: string;
};

export type SearchState = {
  id: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path: string;
  release_date: string;
  title?: string;
  name?: string;
};

export type Content = Movie | TvSeries | SearchState;

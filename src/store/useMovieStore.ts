import { create } from "zustand";
import { Movie } from "../types/movie";
import axios from "axios";

type movieState = {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  upComingMovies: Movie[];
  topRatedMovies: Movie[];
  fetchNowPlayingMovies: (limit?: number) => void;
  fetchPopularMovies: (limit?: number) => void;
  fetchUpComingMovies: (limit?: number) => void;
  fetchTopRatedMovies: (limit?: number) => void;
};

export const useMovieStore = create<movieState>((set) => ({
  nowPlayingMovies: [],
  popularMovies: [],
  upComingMovies: [],
  topRatedMovies: [],

  fetchNowPlayingMovies: async (limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/movie/now_playing?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;
      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        nowPlayingMovies: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },

  fetchPopularMovies: async (limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/movie/popular?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;
      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        popularMovies: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },

  fetchUpComingMovies: async (limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/movie/upcoming?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;
      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        upComingMovies: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },

  fetchTopRatedMovies: async (limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/movie/top_rated?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;
      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        topRatedMovies: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));


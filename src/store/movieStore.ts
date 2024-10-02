import { create } from "zustand";
import { Movie } from "../types/movie";
import axios from "axios";

type movieState = {
  movies: Movie[];
  fetchMovie: (endpoint: string, limit?: number) => void;
};

export const movieStore = create<movieState>((set) => ({
  movies: [],
  fetchMovie: async (endpoint: string, limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/movie/${endpoint}?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;

      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        movies: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

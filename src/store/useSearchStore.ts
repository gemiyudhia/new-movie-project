import axios from "axios";
import { create } from "zustand";
import { SearchState } from "../types";

type searchResult = {
  searchResults: SearchState[],
  isLoading: boolean,
  fetchSearchResults: (query: string) => void
}

export const useSearchStore = create<searchResult>((set) => ({
  searchResults: [],
  isLoading: false,
  fetchSearchResults: async (query: string) => {
    set({isLoading: true})
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_BASE_URL
        }/search/movie?query=${query}&api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;
      set({
        searchResults: data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      set({isLoading: false})
    }
  },
}));

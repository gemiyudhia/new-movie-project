import { create } from "zustand";
import { TvSeries } from "../types/tvSeries";
import axios from "axios";

type tvSeriesState = {
  popularSeries: TvSeries[];
  airingTodaySeries: TvSeries[];
  fetchPopularSeries: (limit?: number) => void;
  // fetchAiringTodaySeries: (limit?: number) => void;
};

export const useSeriesStore = create<tvSeriesState>((set) => ({
  popularSeries: [],
  airingTodaySeries: [],

  fetchPopularSeries: async (limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/tv/popular?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;

      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        popularSeries: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },

  // fetchAiringTodaySeries: async (limit: number | null = null) => {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_REACT_BASE_URL}/tv/airing_today?api_key=${
  //         import.meta.env.VITE_REACT_API_KEY
  //       }`
  //     );

  //     const data = response.data.results;

  //     const slicedData = limit ? data.slice(0, limit) : data;

  //     set({
  //       popularSeries: slicedData,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
}));

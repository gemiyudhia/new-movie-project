import { create } from "zustand";
import { TvSeries } from "../types/tvSeries";
import axios from "axios";

type tvSeriesState = {
  series: TvSeries[];
  fetchSeries: (endpoint: string, limit?: number) => void;
};

export const seriesStore = create<tvSeriesState>((set) => ({
  series: [],
  fetchSeries: async (endpoint: string, limit: number | null = null) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/tv/${endpoint}?api_key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );

      const data = response.data.results;

      const slicedData = limit ? data.slice(0, limit) : data;

      set({
        series: slicedData,
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

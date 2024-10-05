import { Link } from "react-router-dom";
import { TvSeries } from "../../../types/tvSeries";
import { Button } from "@headlessui/react";

type TvSeriesProps = {
  series: TvSeries[]
}

const TvSeriesList = ({series}: TvSeriesProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-3 mt-12 ">
        <h1 className="font-bold text-3xl text-white px-3">Tv Series</h1>
        <Link
          to="/"
          className="font-semibold text-sm text-blue-500 px-3 hover:text-white hover:underline"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {series.map((serie) => (
          <div key={serie.id}>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="w-full h-auto rounded-t-xl"
                src={
                  serie.poster_path &&
                  `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                    serie.poster_path
                  }`
                }
                alt={serie.name}
              />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {serie.name}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  First Air Date : {serie.first_air_date}
                </p>
                <Button className="rounded-lg bg-blue-500 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-blue-700 data-[active]:bg-sky-700">
                  Show Detail
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TvSeriesList

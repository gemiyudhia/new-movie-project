import { useEffect } from "react";
import { useSeriesStore } from "../../store";
import { Button } from "@headlessui/react";

const PopularSeries = () => {
  const { popularSeries, fetchPopularSeries } = useSeriesStore();

  useEffect(() => {
    fetchPopularSeries();
  }, [fetchPopularSeries]);

  return (
    <section className="container mx-auto mt-32">
      <div className="px-6 mt-8">
        <h1 className="text-white font-bold text-3xl pb-5">
          Popular Series
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {popularSeries.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <img
                className="w-full h-auto rounded-t-xl"
                src={
                  item.poster_path &&
                  `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                    item.poster_path
                  }`
                }
                alt={item.name}
              />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  First Air Date : {item.first_air_date}
                </p>
                <Button className="rounded-lg bg-blue-500 mt-4 py-3 px-6 lg:py-2 lg:px-4 lg:text-sm text-white data-[hover]:bg-blue-700 data-[active]:bg-sky-700">
                  Show Detail
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSeries;

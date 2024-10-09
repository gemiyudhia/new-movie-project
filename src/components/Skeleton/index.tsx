import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComponent = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <Skeleton height={300} className="rounded-t-xl animate-shimmer" />{" "}
        <div className="p-4 md:p-5">
          <Skeleton height={24} count={2} className="mb-2" />
          <Skeleton height={30} width={'50%'} className="rounded-lg" />{" "}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonComponent;

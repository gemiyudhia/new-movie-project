import nothing from "../../assets/nothing.png";

type NotFoundSearchProps = {
  query: string | null;
};

const NotFoundSearch = ({ query }: NotFoundSearchProps) => {
  return (
    <div className="flex justify-center items-center flex-col text-center my-24">
      <img
        src={nothing}
        alt="not found search image"
        className="w-60 h-60 mb-7"
      />
      <h2 className="text-lg font-bold text-gray-800 dark:text-white">
        No results found for "{query}"
      </h2>
    </div>
  );
};

export default NotFoundSearch;

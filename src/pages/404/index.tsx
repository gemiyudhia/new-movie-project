import { WarningOctagon } from "@phosphor-icons/react";
import { useRouteError } from "react-router-dom";

type ErrorWithMessage = {
  statusText?: string;
  message?: string;
};
const NotFoundPage = () => {
  const error = useRouteError() as ErrorWithMessage;

  return (
    <div className="flex justify-center items-center min-h-screen text-white flex-col gap-y-3">
      <h1 className="font-bold text-4xl flex gap-x-2">
        Oops!
        <WarningOctagon size={32} />
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFoundPage;

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Movie } from "../../types/movie";

type ModalProps = {
  isOpen: boolean;
  handleCloseDetail: () => void;
  selectedMovie: Movie;
};

const Modal = ({ selectedMovie, isOpen, handleCloseDetail }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-30 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full md:flex md:max-w-lg lg:max-w-xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <DialogTitle className="text-base/7 font-medium text-white rounded-lg">
                <img
                  src={
                    selectedMovie.poster_path &&
                    `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                      selectedMovie.poster_path
                    }`
                  }
                  alt={selectedMovie.title}
                  className="h-auto w-full object-cover rounded-xl shadow-lg md:w-48"
                />
              </DialogTitle>
              <div className="md:mx-3">
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold text-white mt-3"
                >
                  {selectedMovie.title}
                </DialogTitle>
                <DialogTitle className="text-sm font-medium text-gray-300">
                  {selectedMovie.release_date}
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white/50 md:w-52 text-justify">
                  {selectedMovie.overview}
                </p>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-4 py-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-1 focus:outline-white"
                    onClick={() => handleCloseDetail()}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

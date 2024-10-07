import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Content } from "../../types";

type ModalProps = {
  isOpen: boolean;
  handleCloseDetail: () => void;
  selectedItem: Content | null;
};

const Modal = ({ selectedItem, isOpen, handleCloseDetail }: ModalProps) => {
  if (!selectedItem) return null;

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-30"
      onClose={handleCloseDetail} // Perbaiki referensi ke handleCloseDetail
    >
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full md:flex md:max-w-lg lg:max-w-xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl transform transition-all ease-out duration-300 scale-100">
            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Ganti img keluar dari DialogTitle */}
              <img
                src={
                  selectedItem.poster_path &&
                  `${import.meta.env.VITE_REACT_BASE_IMAGE_URL}/${
                    selectedItem.poster_path
                  }`
                }
                alt={
                  "title" in selectedItem
                    ? selectedItem.title
                    : selectedItem.name
                }
                className="h-auto w-full object-cover rounded-xl shadow-lg md:w-48"
              />

              <div className="md:mx-3">
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold text-white mt-3"
                >
                  {"title" in selectedItem
                    ? selectedItem.title
                    : selectedItem.name}
                </DialogTitle>
                <p className="text-sm font-medium text-gray-300">
                  {"release_date" in selectedItem
                    ? selectedItem.release_date
                    : selectedItem.first_air_date}
                </p>
                <p className="mt-2 text-sm text-white/50 md:w-52 text-justify">
                  {selectedItem.overview}
                </p>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 lg:py-1.5 lg:px-3 px-4 py-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                    onClick={handleCloseDetail} // Gunakan handleCloseDetail langsung
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

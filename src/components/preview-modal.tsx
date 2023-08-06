"use client";
import { usePreviewModal } from "@/hooks/usePreviewModal";

import Gallary from "./gallary";
import Info from "./info";
import Modal from "./ui/modal";

const PreviewModal = () => {
  const { product, closeModal, isModalOpen } = usePreviewModal();
  if (!product) return null;
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallary images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;

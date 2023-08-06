"use client";
import { createContext, useState } from "react";

import { Product } from "@/types";

type PerviewContextType = {
  isModalOpen: boolean;
  openModal: (product: Product) => void;
  closeModal: () => void;
  product: Product | null;
};

export const PreviewContext = createContext<PerviewContextType | undefined>(undefined);

export const PreviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setIsModalOpen(true);
    setProduct(product);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProduct(null);
  };

  return (
    <PreviewContext.Provider value={{ isModalOpen, openModal, closeModal, product }}>
      {children}
    </PreviewContext.Provider>
  );
};

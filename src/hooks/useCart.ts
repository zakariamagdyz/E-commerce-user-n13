"use client";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "@/types";

type CartStore = {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartStore>()(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const currentItems = get().items;
        const productExists = currentItems.find((item) => item.id === product.id);

        if (productExists) {
          return toast("item already added to cart");
        }

        set((state) => ({ items: [...state.items, product] }));
        toast.success("item added to cart");
      },
      removeFromCart: (productId) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== productId) }));
        toast.success("item removed from cart");
      },
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage", getStorage: () => localStorage }
  )
);

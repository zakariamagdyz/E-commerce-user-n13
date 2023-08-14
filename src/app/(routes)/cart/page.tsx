"use client";

import { Suspense } from "react";

import { useCart } from "@/hooks/useCart";
import useHasHydrated from "@/hooks/useHasHydrated";

import CartItem from "./components/card-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  const { hasHydrated } = useHasHydrated();

  return (
    <main className="container bg-white">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {hasHydrated && cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
            <ul>{hasHydrated && cart.items.map((item) => <CartItem key={item.id} data={item} />)}</ul>
          </div>
          {hasHydrated && (
            <Suspense fallback={<div>Loading.....</div>}>
              <Summary />
            </Suspense>
          )}
        </div>
      </section>
    </main>
  );
};

export default CartPage;

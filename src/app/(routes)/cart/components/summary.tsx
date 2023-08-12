"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { useCart } from "@/hooks/useCart";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    if (searchParams.get("orderId")) {
      toast.success("Payment completed.");
      clearCart();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, clearCart]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productIds: items.map((item) => item.id) }),
    });
    const data = await response.json();
    window.location = data.url;
  };

  return (
    <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <article className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </article>
      <Button disabled={items.length === 0} className="mt-6 w-full" onClick={onCheckout}>
        Checkout
      </Button>
    </section>
  );
};

export default Summary;

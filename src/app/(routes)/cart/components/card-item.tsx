"use client";
import { X } from "lucide-react";
import Image from "next/image";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeFromCart(data.id);
  };

  return (
    <li className="flex border-b py-6">
      <figure className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
          sizes="(min-width: 1480px) 280px, (min-width: 1040px) calc(21.43vw - 33px), (min-width: 780px) calc(33.33vw - 74px), (min-width: 640px) calc(50vw - 90px), calc(100vw - 90px)"
        />
      </figure>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;

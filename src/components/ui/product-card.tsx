"use client";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";

import Currency from "./currency";
import IconButton from "./icon-button";

type Props = {
  item: Product;
};

const ProductCard = ({ item }: Props) => {
  return (
    <Link className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3" href={`/products/${item.id}`}>
      {/* Image and actions */}
      <figure className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          priority
          src={item.images[0].url}
          alt={item.name}
          className="aspect-square rounded-md object-cover"
          sizes="(min-width: 1480px) 280px, (min-width: 1040px) calc(21.43vw - 33px), (min-width: 780px) calc(33.33vw - 74px), (min-width: 640px) calc(50vw - 90px), calc(100vw - 90px)"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={(e) => {
                e.stopPropagation();
                console.log("hola");
              }}
            />
            <IconButton icon={<ShoppingBag size={20} className="text-gray-600" />} />
          </div>
        </div>
      </figure>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={item.price} />
      </div>
    </Link>
  );
};

export default ProductCard;

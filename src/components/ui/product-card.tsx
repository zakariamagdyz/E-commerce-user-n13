"use client";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCart } from "@/hooks/useCart";
import { usePreviewModal } from "@/hooks/usePreviewModal";
import addBlurredDataUrls from "@/lib/getbase64";

import Currency from "./currency";
import IconButton from "./icon-button";

type Props = {
  item: Awaited<ReturnType<typeof addBlurredDataUrls>>[number];
};

const ProductCard = ({ item }: Props) => {
  const router = useRouter();
  const { openModal } = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/products/${item.id}`);
  };
  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openModal(item);
  };
  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addToCart(item);
  };

  return (
    // eslint-disable-next-line
    <div className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3" onClick={handleClick}>
      {/* Image and actions */}
      <figure className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          fill
          priority
          src={item.images[0].url}
          alt={item.name}
          placeholder="blur"
          blurDataURL={item.images[0].blurredDataUrl}
          className="aspect-square rounded-md object-cover"
          sizes="(min-width: 1480px) 280px, (min-width: 1040px) calc(21.43vw - 33px), (min-width: 780px) calc(33.33vw - 74px), (min-width: 640px) calc(50vw - 90px), calc(100vw - 90px)"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton icon={<Expand size={20} className="text-gray-600" />} onClick={onPreview} />
            <IconButton icon={<ShoppingBag size={20} className="text-gray-600" />} onClick={onAddToCart} />
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
    </div>
  );
};

export default ProductCard;

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import { Button } from "./ui/button";
import Currency from "./ui/currency";
import { Separator } from "./ui/separator";

type Props = {
  data: Product;
};

const Info = ({ data }: Props) => {
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <Separator className="my-4" />
      <dl className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <dt className="font-semibold text-black">Size:</dt>
          <dd>{data.size.name}</dd>
        </div>
        <div className="flex items-center gap-x-4">
          <dt className="font-semibold text-black">Color:</dt>
          <dd
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          ></dd>
        </div>
      </dl>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 rounded-full text-lg">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </article>
  );
};

export default Info;

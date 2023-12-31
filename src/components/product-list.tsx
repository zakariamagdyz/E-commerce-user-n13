import React from "react";

import addBlurredDataUrls from "@/lib/getbase64";
import { Product } from "@/types";

import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

type Props = { title: string; items: Product[] };

const ProductList = async ({ title, items }: Props) => {
  const productItemsWithImagesPlaceholders = await addBlurredDataUrls(items);
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold leading-tight">{title}</h3>
      {items?.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productItemsWithImagesPlaceholders?.map((item) => <ProductCard key={item.id} item={item} />)}
        </section>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default ProductList;

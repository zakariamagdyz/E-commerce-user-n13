import React from "react";

import ProductList from "@/components/product-list";
import { getProducts } from "@/services/get-products";

type Props = {
  params: { categoryId: string };
};

const Category = async ({ params }: Props) => {
  const categoryProducts = await getProducts({ categoryId: params.categoryId });
  return (
    <main className="container my-8">
      <ProductList title={`${categoryProducts[0].category.name} Category`} items={categoryProducts} />
    </main>
  );
};

export default Category;

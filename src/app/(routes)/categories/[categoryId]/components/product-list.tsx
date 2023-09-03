import React from "react";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import addBlurredDataUrls from "@/lib/getbase64";

const CategoryProductList = ({ products }: { products: Awaited<ReturnType<typeof addBlurredDataUrls>>[number][] }) => {
  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      {products.length === 0 && <NoResults />}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </section>
    </div>
  );
};

export default CategoryProductList;

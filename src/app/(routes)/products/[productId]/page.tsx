import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import Gallary from "@/components/gallary";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import { Separator } from "@/components/ui/separator";
import { getProduct } from "@/services/get-product";
import { getFeaturedProducts, getProducts } from "@/services/get-products";

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.productId);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: `${product.name} is a product in ${product.category.name} category`,
  };
}

const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.productId);
  if (!product) return notFound();

  const suggestedProducts = await getProducts(
    {
      categoryId: product.category.id,
    },
    300
  );
  const relatedProducts = suggestedProducts.filter((product) => product.id !== params.productId);
  return (
    <main className="container my-8 bg-white">
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Gallery */}
          <Gallary images={product.images} />
          {/* Info */}
          <Info data={product} />
        </div>
        <Separator className="my-4" />
        <ProductList title="Related Items" items={relatedProducts} />
      </section>
    </main>
  );
};

export default ProductPage;

export const generateStaticParams = async () => {
  const featuredProducts = await getFeaturedProducts();

  return featuredProducts.map((product) => ({
    productId: product.id,
  }));
};

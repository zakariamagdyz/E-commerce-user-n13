import { nanoid } from "nanoid";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Await from "@/components/await";
import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import MobileFilters from "@/components/mobile-filters";
import addBlurredDataUrls from "@/lib/getbase64";
import { getCategory } from "@/services/get-category";
import { getColors } from "@/services/get-colors";
import { getProducts } from "@/services/get-products";
import { getSizes } from "@/services/get-sizes";

import FilterSkeleton from "./components/filter-skeleton";
import CategoryProductList from "./components/product-list";
import ProductSkeleton from "./components/products-skeleton";

type Props = {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategory(params.categoryId);
  if (!category) return { title: "Category Not Found" };

  return {
    title: category.name,
    description: `All products in ${category.name} category `,
  };
}

const Category = async ({ params, searchParams }: Props) => {
  const category = await getCategory(params.categoryId);
  if (!category) return notFound();

  const [colors, sizes] = await Promise.all([getColors(), getSizes()]);

  const categoryProductsPromise = getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <main key={nanoid()} className="container my-8">
      <Billboard data={category.billboard} />
      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 ">
          <Suspense fallback={<FilterSkeleton />}>
            <MobileFilters colors={colors} sizes={sizes} />
          </Suspense>

          {/* Add mobile filters */}
          <Suspense fallback={<FilterSkeleton />}>
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Suspense>

          <Suspense fallback={<ProductSkeleton />}>
            <Await promise={categoryProductsPromise}>
              {(categoryProducts) => (
                <Await promise={addBlurredDataUrls(categoryProducts)}>
                  {(productItemsWithImagesPlaceholders) => (
                    <CategoryProductList products={productItemsWithImagesPlaceholders} />
                  )}
                </Await>
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Category;

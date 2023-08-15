import { Metadata } from "next";
import { notFound } from "next/navigation";

import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import MobileFilters from "@/components/mobile-filters";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import addBlurredDataUrls from "@/lib/getbase64";
import { getCategory } from "@/services/get-category";
import { getColors } from "@/services/get-colors";
import { getProducts } from "@/services/get-products";
import { getSizes } from "@/services/get-sizes";

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

  const [colors, sizes, categoryProducts] = await Promise.all([
    getColors(),
    getSizes(),
    getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
    }),
  ]);

  const productItemsWithImagesPlaceholders = await addBlurredDataUrls(categoryProducts);

  return (
    <main className="container my-8">
      <Billboard data={category.billboard} />
      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 ">
          <MobileFilters colors={colors} sizes={sizes} />
          {/* Add mobile filters */}
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {categoryProducts.length === 0 && <NoResults />}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {productItemsWithImagesPlaceholders.map((product) => (
                <ProductCard key={product.id} item={product} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;

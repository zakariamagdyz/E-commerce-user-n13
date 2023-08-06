import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import MobileFilters from "@/components/mobile-filters";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { getCategory } from "@/services/get-category";
import { getColors } from "@/services/get-colors";
import { getProducts } from "@/services/get-products";
import { getSizes } from "@/services/get-sizes";

type Props = {
  params: { categoryId: string };
  searchParams: { colorId: string; sizeId: string };
};

const Category = async ({ params, searchParams }: Props) => {
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  const categoryProducts = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
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
              {categoryProducts.map((product) => (
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

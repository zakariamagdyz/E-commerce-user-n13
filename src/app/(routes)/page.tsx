import { Suspense } from "react";

import Billboard from "@/components/billboard";
import FeaturedProductSkeleton from "@/components/featured-products-skeleton";
import ProductList from "@/components/product-list";
import { getBillboard } from "@/services/get-billboard";
import { getFeaturedProducts } from "@/services/get-products";

// Implement Sequential Data Fetching instead of Parallel Data Fetching
export default async function Home() {
  const billboard = await getBillboard("64c68411fd49e42abcf6d053");
  const productsPromise = getFeaturedProducts();

  // const [billboard, products] = await Promise.all([billboardPromise, productsPromise]);
  return (
    <main className="container">
      <Billboard data={billboard} />
      <Suspense fallback={<FeaturedProductSkeleton />}>
        <section className="my-8 flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList productsPromise={productsPromise} title="Featured Products" />
        </section>
      </Suspense>
    </main>
  );
}

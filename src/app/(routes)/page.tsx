import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import { getBillboard } from "@/services/get-billboard";
import { getProducts } from "@/services/get-products";

export default async function Home() {
  const billboard = await getBillboard("64c68411fd49e42abcf6d053");
  const products = await getProducts({ isFeatured: true });
  return (
    <main className="container">
      <Billboard data={billboard} />
      <section className="my-8 flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList items={products} title="Featured Products" />
      </section>
    </main>
  );
}

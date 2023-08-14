import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product | null> => {
  const response = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
  const data = await response.json();
  if (!response.ok) return null;
  return data;
};

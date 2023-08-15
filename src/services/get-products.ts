import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query, revalidate = 0): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url, { next: { revalidate } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: true,
    },
  });
  const response = await fetch(url, { next: { revalidate: 300 } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL, { next: { revalidate: 0 } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

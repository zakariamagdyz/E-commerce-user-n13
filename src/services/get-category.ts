import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

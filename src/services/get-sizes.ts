import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL, { next: { revalidate: 0 } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

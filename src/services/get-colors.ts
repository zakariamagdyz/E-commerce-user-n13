import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL, { next: { revalidate: 0 } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

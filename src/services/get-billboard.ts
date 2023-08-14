import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

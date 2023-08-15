import { getPlaiceholder } from "plaiceholder";

import { Product } from "@/types";

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(`base64: ${base64}`)

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(producs: Product[]) {
  // Make all requests at once instead of awaiting each one -- avoiding the waterfall effect
  const base64Promises = producs.map((product) => getBase64(product.images[0].url));
  // Resolve all requests in order
  const base64Results = await Promise.all(base64Promises);

  const productsWithBlurredDataUrls = producs.map((product, index) => {
    return {
      ...product,
      images: [
        {
          ...product.images[0],
          blurredDataUrl: base64Results[index],
        },
      ],
    };
  });

  return productsWithBlurredDataUrls;
}

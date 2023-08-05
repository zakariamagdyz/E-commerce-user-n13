import React from "react";

import { Billboard as BillboardType } from "@/types";

type Props = {
  data: BillboardType;
};
const Billboard = ({ data }: Props) => {
  return (
    <section className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8 ">
      <div
        className="relative aspect-square  overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <article className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <h2 className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">{data.label}</h2>
        </article>
      </div>
    </section>
  );
};

export default Billboard;

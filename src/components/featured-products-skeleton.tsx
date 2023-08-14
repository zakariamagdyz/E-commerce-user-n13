import React from "react";

import Skeleton from "./ui/skeleton";

const FeaturedProductSkeleton = () => {
  return (
    <section className="container">
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
        <li>
          <Skeleton className="aspect-square rounded-xl" />
        </li>
      </ul>
    </section>
  );
};

export default FeaturedProductSkeleton;

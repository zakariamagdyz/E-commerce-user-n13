import React from "react";

import Skeleton from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
        <Skeleton className="aspect-square rounded-xl" />
      </div>
    </div>
  );
};

export default ProductSkeleton;

import React from "react";

import Skeleton from "@/components/ui/skeleton";

const FilterSkeleton = () => {
  return (
    <div className="hidden lg:block">
      <Skeleton className="h-[500px] w-full rounded-xl" />
    </div>
  );
};

export default FilterSkeleton;

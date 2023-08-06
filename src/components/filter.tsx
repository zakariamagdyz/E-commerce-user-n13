"use client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React from "react";

import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Props = {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
};
const Filter = ({ data, name, valueKey }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = { ...current, [valueKey]: id };
    // remove current filter
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl({ url: window.location.href, query }, { skipNull: true });
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <Separator className="my-4" />
      <ul className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              variant="outline"
              className={cn("rounded-md text-sm text-gray-800 p-2 border bg-white border-gray-300", {
                "bg-gray-800 text-white": selectedValue === filter.id,
              })}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Filter;

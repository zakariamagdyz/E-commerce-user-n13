"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

type Props = {
  image: ImageType;
};
const GallaryTab = ({ image }: Props) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt={image.url}
              className=" object-cover object-center"
              sizes="(min-width: 1480px) 137px, (min-width: 1040px) calc(10.71vw - 19px), (min-width: 840px) 150px, calc(20vw - 14px)"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GallaryTab;

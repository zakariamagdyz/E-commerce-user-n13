"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

import { Image as ImageType } from "@/types";

import GallaryTab from "./gallary-tab";

type Props = {
  images: ImageType[];
};

const Gallary = ({ images }: Props) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GallaryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
              <Image priority fill src={image.url} alt="image" className="object-cover" />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallary;

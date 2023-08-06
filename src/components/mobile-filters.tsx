"use client";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React from "react";

import { Color, Size } from "@/types";

import Filter from "./filter";
import { Button } from "./ui/button";
import IconButton from "./ui/icon-button";

type Props = {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters = ({ colors, sizes }: Props) => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>
      <Dialog open={open} className="relative z-40 lg:hidden" as="div" onClose={onClose}>
        <div className="fixed inset-0 bg-black/25"></div>

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className={
              "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            }
          >
            {/* Close button */}

            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter name="Colors" valueKey="colorId" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;

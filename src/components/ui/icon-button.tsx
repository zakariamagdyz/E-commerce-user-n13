import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
  className?: string;
};

const IconButton = ({ icon, className, onClick }: Props) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center bg-white shadow-md p-2 border hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

type Props = {
  data: Category[];
};
const MainNav = ({ data }: Props) => {
  const pathname = usePathname();

  const routes = data.map((category) => ({
    href: `/categories/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
  }));

  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            `text-sm font-medium text-gray-900 hover:text-gray-700`,
            route.active ? "text-gray-900" : "text-gray-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;

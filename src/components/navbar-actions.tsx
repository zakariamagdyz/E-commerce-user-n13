"use client";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { useCart } from "@/hooks/useCart";
import useHasHydrated from "@/hooks/useHasHydrated";

import { Button } from "./ui/button";

const NavbarActions = () => {
  const { hasHydrated } = useHasHydrated();
  const router = useRouter();
  const cart = useCart();
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push("/cart")}>
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">{hasHydrated && cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;

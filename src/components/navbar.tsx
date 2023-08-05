import Link from "next/link";
import React from "react";

import { getCategories } from "@/services/get-categories";

import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header className="border-b">
      <section className="container flex min-h-[4rem] items-center">
        <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0 ">
          <p className=" text-xl font-bold">STORE</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </section>
    </header>
  );
};

export default Navbar;

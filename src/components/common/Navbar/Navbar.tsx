import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* left side small screens*/}
      {/* logo */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="uppercase text-2xl tracking-wider">
          lama
        </Link>
        <Menu />
      </div>

      {/* center md screens*/}
      {/* links */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <div className="flex items-center gap-1">
            <Image src="/cart.svg" alt="cart" width={40} height={40} />
            <Link href="/" className="uppercase text-2xl tracking-wider">
              lama
            </Link>
          </div>

          <ul className="hidden xl:flex items-center gap-4">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Shop</Link>
            </li>
            <li>
              <Link href="">Deals</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </div>

        {/* search + icons  */}
        <div className="w-2/3 xl:w-1/2 flex items-center gap-8">
          {/* search */}
          <SearchBar />
          {/* icons */}
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

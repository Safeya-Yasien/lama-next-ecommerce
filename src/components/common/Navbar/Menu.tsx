"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   hof => heigher order function
  const handleOnClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <button onClick={() => handleOnClickMenu()}>
        <IoMdMenu size={35} />
      </button>
      {isMenuOpen && (
        <div
          className="absolute left-0 top-20 h-[calc(100vh-80px)] w-full bg-black text-white
        flex flex-col justify-center items-center z-10"
        >
          <ul className="space-y-4">
            <li>
              <Link href="/">Home</Link>
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
      )}
    </div>
  );
};

export default Menu;

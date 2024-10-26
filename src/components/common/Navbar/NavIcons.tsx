"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handleProfileMenu = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    }
  };

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <button onClick={handleProfileMenu}>
        <FaRegUserCircle size={20} />
      </button>
      {/* profile menu */}
      {isProfileMenuOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-md p-4 rounded-md">
          <ul className="space-y-2 ">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      )}
      <button>
        <CiBellOn size={25} />
      </button>
      <button className="relative" onClick={handleCart}>
        <BsCart size={22} />
        <span className="w-5 h-5 bg-red-500 rounded-full text-white absolute -top-3 -right-3 text-sm flex items-center justify-center">
          2
        </span>
      </button>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;

import { Filter } from "@/components";
import Image from "next/image";
import React from "react";

const List = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* camping */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        {/* text */}
        <div className="w-2/3 flex items-center justify-center flex-col gap-8">
          <h1 className="text-4xl font-semibold text-gray-700">
            Grab up to 50% off on <br />
            Selected Products
          </h1>
          <button className="rounded-3xl bg-red-600 text-white  px-5 py-3 text-sm w-max">
            Buy Now
          </button>
        </div>
        {/* img */}
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="woman"
            fill
            sizes="25vm"
            className="object-contain"
          />
        </div>
      </div>

      {/* filter */}
      <div className="mt-12">
        <Filter />
      </div>

      {/* products */}
      <div className="mt-12">
        <h1 className="text-2xl">All Products For You!</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default List;

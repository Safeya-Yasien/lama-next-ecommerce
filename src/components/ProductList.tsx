import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-x-8 gap-y-12">
      <Link href="/test" className="flex flex-col gap-4">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="object-cover hover:opacity-0 absolute z-10 transition-opacity duration-500 rounded-md"
          />
          <Image
            src="https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">product name</span>
          <span className="font-semibold">$product price</span>
        </div>
        <div className="text-sm text-gray-500">Product Description</div>
        <button className="rounded-2xl ring-1 ring-teal-600 py-2 px-4 text-xs duration-300 hover:bg-teal-600  hover:text-white w-max">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;

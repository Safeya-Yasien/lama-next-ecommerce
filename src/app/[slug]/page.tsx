import {
  AddProductQuantity,
  CustomizeProducts,
  ProductImages,
} from "@/components";
import React from "react";

const Slug = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 justify-between  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* imgs */}
      <div className="w-full lg:w-1/2">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">product name</h1>
        <p className="text-gray-500">product description</p>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">old price</h3>
          <h2 className="font-medium text-2xl">new price</h2>
        </div>

        {/* colors & size*/}
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <AddProductQuantity />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">section title</h4>
          <p>section description</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">section title</h4>
          <p>section description</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">section title</h4>
          <p>section description</p>
        </div>
      </div>
    </div>
  );
};

export default Slug;

"use client";
import cn from "@/lib/utils";
import React, { useState } from "react";

const AddProductQuantity = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  const stock = 4;

  const handleProductQuantity = (type: "i" | "d") => {
    switch (type) {
      case "i":
        if (productQuantity < stock) {
          setProductQuantity(productQuantity + 1);
        }
        break;
      case "d":
        if (productQuantity > 1) {
          setProductQuantity(productQuantity - 1);
        }
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleProductQuantity("d")}
            >
              -
            </button>
            {productQuantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleProductQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only{" "}
            <span className="text-orange-500">
              {stock - productQuantity} items
            </span>{" "}
            left!
            <br /> {"Don't"} miss it
          </div>{" "}
        </div>
        {/* add to cart */}
        <button
          className={cn("w-36 text-sm rounded-3xl py-2 px-4 duration-300", {
            "bg-red-400 cursor-not-allowed": productQuantity > stock,
            "ring-1 ring-red-600 text-red-600 hover:bg-red-600 hover:text-white":
              productQuantity <= stock,
          })}
          disabled={productQuantity > stock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddProductQuantity;

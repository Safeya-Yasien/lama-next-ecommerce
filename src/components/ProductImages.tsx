"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div className="h-[500px] relative">
        <Image
          src={items[currentImageIndex].image?.url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, index: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;

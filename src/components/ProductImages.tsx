"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div className="relative w-full h-96">
        <Image
          src={items[currentImageIndex].image?.url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex gap-6 mt-12">
        {items.map((item: any, index: number) => (
          <div
            className="relative w-1/4 h-32 gap-4 mt-8 cursor-pointer"
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

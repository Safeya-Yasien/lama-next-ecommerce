import { wixClientServer } from "@/lib/wixClientServer";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PRODUCT_PRE_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit: number;
}) => {
  const wixClient = await wixClientServer();
  const response = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PRE_PAGE)
    .find();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-x-8 gap-y-12">
      {response.items.map((product) => (
        <Link
          href={"/" + product.slug}
          className="flex flex-col gap-4"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name || "Product Image"}
              fill
              sizes="25vm"
              className="object-cover hover:opacity-0 absolute z-10 transition-opacity duration-500 rounded-md"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1].image?.url || "/product.png"}
                alt={product.name || "Product Image"}
                fill
                sizes="25vm"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections?.find(
                    (section) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-teal-600 py-2 px-4 text-xs duration-300 hover:bg-teal-600  hover:text-white w-max">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;

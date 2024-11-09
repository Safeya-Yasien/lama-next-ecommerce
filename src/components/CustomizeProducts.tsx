"use client";
import React, { useState } from "react";
import { products } from "@wix/stores";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions({ ...selectedOptions, [optionType]: choice });
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return Object.entries(choices).every(
        ([key, value]) =>
          variantChoices[key] === value &&
          variant.stock?.inStock &&
          variant.stock?.quantity &&
          variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* colors */}
      {productOptions.map((option) => {
        return (
          <div className="flex flex-col gap-4" key={option.optionType}>
            <h4 className="font-medium">Choose a {option.name}</h4>
            <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name!]: choice.description!,
                });

                const selected =
                  selectedOptions[option.name!] === choice.description;

                const clickHandler = disabled
                  ? undefined
                  : () => handleOptionSelect(option.name!, choice.description!);

                return option.name === "Color" ? (
                  <li
                    className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                    style={{
                      backgroundColor: choice.value,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                    onClick={clickHandler}
                    key={choice.description}
                  >
                    {selected && (
                      <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    {disabled && (
                      <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </li>
                ) : (
                  <li
                    className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                    style={{
                      cursor: disabled ? "not-allowed" : "pointer",
                      backgroundColor: selected
                        ? "#f35c7a"
                        : disabled
                        ? "#FBCFE8"
                        : "white",
                      color: selected || disabled ? "white" : "#f35c7a",
                      boxShadow: disabled ? "none" : "",
                    }}
                    key={choice.description}
                    onClick={clickHandler}
                  >
                    {choice.description}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* colors */}
      {/* <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                return (
                  <>
                    <li
                      className="w-8 h-8 rounded-full bg-black cursor-pointer relative ring-1 ring-gray-300"
                      key={choice.description}
                    >
                      <div className="w-10 h-10 rounded-full ring-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </li>
                    <li className="w-8 h-8 rounded-full bg-red-600 cursor-pointer relative ring-1 ring-gray-300"></li>
                    <li className="w-8 h-8 rounded-full cursor-not-allowed relative ring-1 ring-gray-300">
                      <div className="w-10 h-[2px] rounded-full bg-red-600 rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </li>
                  </>
                );
              })}
            </ul> */}

      {/* sizes */}
      {/* <h4 className="font-medium">Choose a Size</h4> */}
      {/* <ul className="flex items-center gap-3">
        <li
          className="ring-1 ring-red-600 text-red-600 text-sm bg-white rounded-md  hover:bg-red-600 hover:text-white duration-300
        px-4 py-1 cursor-pointer"
        >
          Large
        </li>
        <li
          className="ring-1 ring-red-600  text-sm rounded-md bg-red-600 text-white
        px-4 py-1 cursor-pointer"
        >
          Medium
        </li>
        <li
          className="ring-1 ring-red-600  text-sm bg-red-400 rounded-md  text-white cursor-not-allowed
        px-4 py-1 "
        >
          Small
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;

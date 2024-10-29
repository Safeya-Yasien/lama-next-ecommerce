import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* colors */}
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full bg-black cursor-pointer relative ring-1 ring-gray-300">
          <div className="w-10 h-10 rounded-full ring-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full bg-red-600 cursor-pointer relative ring-1 ring-gray-300"></li>
        <li className="w-8 h-8 rounded-full cursor-not-allowed relative ring-1 ring-gray-300">
          <div className="w-10 h-[2px] rounded-full bg-red-600 rotate-45 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>

      {/* sizes */}
      <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
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
      </ul>
    </div>
  );
};

export default CustomizeProducts;

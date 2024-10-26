"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/list?name=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for products..."
        name="search"
        value={searchTerm}
        className="outline-none bg-transparent text-sm flex-1"
        onChange={handleChange}
      />
      <button type="submit">
        <FaMagnifyingGlass className="text-gray-400 transition-all duration-300 hover:text-black" />
      </button>
    </form>
  );
};

export default SearchBar;

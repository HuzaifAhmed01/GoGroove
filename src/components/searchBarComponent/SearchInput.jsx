import React, { useState } from "react";

const SearchInput = () => {
  const [searchProduct, setSearchProduct] = useState({
    keys: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchProduct({
      ...searchProduct,
      [name]: value,
    });
  };

  // Handle search action
  const handleSearch = () => {
    console.log("Search initiated for:", searchProduct.keys);
    // Add your search logic here
  };

  console.log(searchProduct);

  return (
    <div className="flex">
      <input
        type="search"
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
        name="keys"
        value={searchProduct.keys}
        onChange={handleChange} // Use onChange for input
      />
      <button
        onClick={handleSearch} // Handle search on button click
        className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;

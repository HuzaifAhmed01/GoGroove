import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const MenuForNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track if the menu is open

  const tokenRemove = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    alert("Logged out successfully!");
    setIsMenuOpen(false); // Close the menu after logout
  };

  const userName = Cookies.get("name");

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end sm:justify-center lg:justify-end ${isMenuOpen ? "" : "hidden"}`}>
      {/* Menu Container */}
      <div className="w-full sm:w-80 bg-white shadow-lg rounded-md relative p-5 overflow-y-auto max-h-screen">
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* User Info */}
        <div className="flex items-center justify-between pb-4 border-b">
          <div className="text-gray-800 font-semibold">Hello, {userName}</div>
        </div>

        {/* Menu List */}
        <ul className="mt-4 space-y-4">
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link to="/profile" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              My Account
            </Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link to="/categories" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link to="/orders" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              My Orders
            </Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link to="/offers" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              Offers
            </Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link to="/cart" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              Shopping Cart
            </Link>
          </li>
          <li
            onClick={tokenRemove} // Call tokenRemove directly
            className="cursor-pointer text-red-500 hover:text-red-700 flex items-center transition-all duration-200"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuForNavigation;

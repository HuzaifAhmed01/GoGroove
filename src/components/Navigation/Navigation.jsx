import React, { useState } from "react";
import logo from "../../assets/images/Home/QuickCart_navLogo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import MenuForNavigation from "../NavigationMenu/menuForNavigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const token = Cookies.get("token");
  const name = Cookies.get("name");

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="QuickCart Logo" className="h-[50px]" />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-grow mx-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Search
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link to="/categories" className="text-black hover:text-gray-700">
              Categories
            </Link>
            <Link to="/cart" className="flex items-center text-black hover:text-gray-700">
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l1 5m0 0h13l1-5m-15 5l1 9h10l1-9m-14 0h14M6 21h.01M18 21h.01"
                />
              </svg>
            </Link>
            {token && name ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="text-black hover:text-gray-700 bg-zinc-200 py-1 px-3 rounded flex items-center"
                >
                  {name} <i className="fa fa-user-o ml-2" aria-hidden="true"></i>
                </button>
                {isUserMenuOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
                    style={{ minWidth: "12rem" }}
                  >
                    <MenuForNavigation />
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-black hover:text-gray-700">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-300">
            <div className="py-4 space-y-2 px-4">
              <Link to="/categories" className="block text-black hover:text-gray-700">
                Categories
              </Link>
              <Link to="/cart" className="block text-black hover:text-gray-700">
                Cart
              </Link>
              {token && name ? (
                <>
                  <button
                    onClick={toggleUserMenu}
                    className="block w-full text-left text-black hover:text-gray-700"
                  >
                    {name}
                  </button>
                  {isUserMenuOpen && (
                    <div className="mt-2 border-t pt-2">
                      <MenuForNavigation />
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login" className="block text-black hover:text-gray-700">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Search Bar */}
      <div className="md:hidden bg-white p-2 border-t">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

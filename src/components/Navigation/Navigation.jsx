import React, { useState } from "react";
import logo from '../../assets/images/Home/QuickCart_navLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={logo} // Replace with your logo
              alt="GoGroove Logo"
              className="h-[50px]"
            />
          </a>

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
          <div className="hidden md:flex items-center space-x-6">
            <a href="/categories" className="text-black hover:text-gray-700">
              Categories
            </a>
            <a href="/login" className="text-black hover:text-gray-700">
              Login
            </a>
            <Link to="/cart" className="flex items-center text-black hover:text-gray-700">
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l1 5m0 0h13l1-5m-15 5l1 9h10l1-9m-14 0h14M6 21h.01M18 21h.01"
                />
              </svg>
            </Link>
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
              <a href="/categories" className="block text-black hover:text-gray-700">
                Categories
              </a>
              <a href="/login" className="block text-black hover:text-gray-700">
                Login
              </a>
              <a href="/cart" className="block text-black hover:text-gray-700">
                Cart
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

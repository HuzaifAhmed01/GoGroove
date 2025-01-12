import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<footer className="bg-black text-white py-8">

  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Logo and Description */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl font-semibold text-yellow-500">GoGroove</h1>
        <p className="text-sm mt-2">Your one-stop destination for all things electronic.</p>
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <Link to="/privacy-policy" className="text-white hover:text-yellow-500">Privacy Policy</Link>
        <Link to="/terms-and-Conditions" className="text-white hover:text-yellow-500">Terms & Conditions</Link>
        <Link to="/shipping-info" className="text-white hover:text-yellow-500">Shipping Info</Link>
        <Link to="/return-Exchange" className="text-white hover:text-yellow-500">Returns & Exchanges</Link>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="mt-6 flex justify-center space-x-4">
      <a href="https://facebook.com" className="text-white hover:text-yellow-500">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com" className="text-white hover:text-yellow-500">
      <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="https://instagram.com" className="text-white hover:text-yellow-500">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-yellow-500">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>

    {/* Footer Bottom */}
    <div className="mt-6 text-center text-sm text-gray-400">
      <p>&copy; 2024 GoGroove. All Rights Reserved.</p>
    </div>
  </div>
</footer>


      
    </div>
  )
}

export default Footer

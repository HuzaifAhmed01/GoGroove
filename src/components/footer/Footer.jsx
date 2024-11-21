import React from 'react'

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
        <a href="#privacy-policy" className="text-white hover:text-yellow-500">Privacy Policy</a>
        <a href="#terms" className="text-white hover:text-yellow-500">Terms & Conditions</a>
        <a href="#shipping" className="text-white hover:text-yellow-500">Shipping Info</a>
        <a href="#returns" className="text-white hover:text-yellow-500">Returns & Exchanges</a>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="mt-6 flex justify-center space-x-4">
      <a href="https://facebook.com" className="text-white hover:text-yellow-500">
        <i className="fab fa-facebook-f text-2xl"></i>
      </a>
      <a href="https://twitter.com" className="text-white hover:text-yellow-500">
        <i className="fab fa-twitter text-2xl"></i>
      </a>
      <a href="https://instagram.com" className="text-white hover:text-yellow-500">
        <i className="fab fa-instagram text-2xl"></i>
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-yellow-500">
        <i className="fab fa-linkedin-in text-2xl"></i>
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

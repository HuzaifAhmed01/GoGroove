import React from "react";
import img from '../../assets/images/ceo/jakob-owens-lkMJcGDZLVs-unsplash.jpg'

const BusinessQuote = () => {
  return (
    <div className="h-96 bg-gray-50 flex items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl">
        {/* Left: Image */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
          <img
            src={img} // Replace with the actual image URL
            alt="Jane Doe"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Quote and Name */}
        <div className="text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-800 italic font-medium">
            "Innovation distinguishes between a leader and a follower."
          </p>
          <p className="mt-4 text-gray-600 font-semibold text-sm md:text-base">
            - Jane Doe
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessQuote;

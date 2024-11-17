import React from "react";
import Home_banner from "../../assets/images/Home/Home_banner.jpg";

const HeroSection = () => {
  return (
    <div className="w-full p-1">
      <div className="w-full h-[87vh] relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={Home_banner}
          alt="Home Banner"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-zinc-900/70 flex flex-col justify-center items-start px-8 md:px-16 text-white">
          {/* Hero Text */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              NEW SEASON ARRIVALS
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light">
              CHECK OUT ALL TRENDS{" "}
              <span className="text-yellow-500 font-bold">MENS</span>_
            </h2>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 animate-fade-in">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white  px-6 py-3 rounded-lg text-sm md:text-lg transition duration-300">
              Shop Now
            </button>
            <button className="bg-zinc-50 hover:bg-zinc-300 text-black px-6 py-3 rounded-lg text-sm md:text-lg transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

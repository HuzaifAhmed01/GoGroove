import React from "react";
import Home_banner from "../../assets/images/Home/Home_banner.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="w-full p-1 ">
        <div className="w-full h-[87vh] relative rounded-lg overflow-hidden">
          <img
            src={Home_banner}
            alt=""
            className="w-full h-inherit object-cover object-center"
          />
          <div className="w-full h-full bg-zinc-900/70 absolute top-0">
            <div className="text-white h-full flex flex-col justify-center ml-10">
              <h1 className="text-7xl text-white ">NEW SESSION ARRIVALS</h1>
              <h1 className="text-6xl font-[200]">
                CHECK OUT ALL TRENDS <span className="text-red-600">MENS</span>_
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

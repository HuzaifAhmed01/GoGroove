import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpBanner = () => {

  let navigate = useNavigate();
  let NavigatingPage = (endpoint)=>{
    navigate(`/${endpoint}`);

  }

    return (
        <div className="flex flex-col items-center justify-center bg-white text-black py-12 px-6 sm:px-16 lg:px-32  shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
            Welcome to <span className="text-yellow-500">Gogroove</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-center text-zinc-900">
            Discover the ultimate shopping experience. Sign up now and enjoy exclusive benefits tailored just for you!
          </p>
          <button onClick={()=>NavigatingPage('sign-up')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            Sign Up Now
          </button>
        </div>
      );
};

export default SignUpBanner;

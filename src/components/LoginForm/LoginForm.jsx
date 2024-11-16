// import React, { useState } from "react";
import signUPBanner from "../../assets/images/SignUp/LoginBanner.jfif";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-full h-[100vh] py-40 bg-gradient-to-r  from-blue-400 to-black flex items-center justify-center">
      <div className="container mx-auto">
        <div className="h-[500px] flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative ">
            <img
              src={signUPBanner}
            
              className="w-full h-screen object-cover bg-center absolute -z-0"
            />
          </div>
          <div className="w-full h-screen flex flex-col justify-center gap-3 lg:w-1/2  px-8 ">
            <h2 className="text-3xl ">Log In </h2>
            <p>Welcome Back! Please Log In</p>
            <form action="#" className="flex flex-col  gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className=" text-right">
                <a href="#" className="text-blue-500  font-semibold ">
                  forget password
                </a>
              </div>

              <div>
                <button type="submit" className="w-full  bg-zinc-900 hover:bg-zinc-700 transition ease-linear font-bold py-3 text-center text-white">
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-blue-500  font-semibold">
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

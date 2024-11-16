import { useState } from "react";
import signUPBanner from "../../assets/images/SignUp/Sign_Up2.jfif";
import { Link } from "react-router-dom";
import { postUser } from "../Axios/Axios";

const SignUpForm = () => {
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    acceptTerms: false,
  });

  let handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    // Add validation or API call here
    const response = await postUser(...user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      console.log("user posted");
    } else {
      console.log("not post");
    }
  };

  return (
    <div className="w-full h-[100vh] py-40 bg-gradient-to-r from-blue-400 to-black flex items-center justify-center">
      <div className="container mx-auto">
        <div className="h-[530px] flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 hidden lg:flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center relative">
            <img
              src={signUPBanner}
              alt="Signup Banner"
              className="w-full h-full object-cover bg-center absolute -z-0"
            />
          </div>
          {/* Form Section */}
          <div className="w-full lg:w-1/2 py-4 px-8 flex flex-col justify-center">
            <h2 className="text-3xl mb-3">Sign Up</h2>
            <p className="mb-3">
              Create your account. It’s free and only takes a minute
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={user.firstName}
                  className="border border-gray-400 py-1 px-3"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={user.lastName}
                  className="border border-gray-400 py-1 px-3"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.confirmPassword}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={user.phone}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  onChange={handleChange}
                  checked={user.acceptTerms}
                  className="mr-2"
                />
                <span>
                  I accept the{" "}
                  <Link to="#" className="text-blue-500 font-semibold">
                    Terms of Use
                  </Link>{" "}
                  &{" "}
                  <Link to="#" className="text-blue-500 font-semibold">
                    Privacy Policy
                  </Link>
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-700 transition ease-linear font-bold py-3 text-white"
              >
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

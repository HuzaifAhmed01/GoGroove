import { useState } from "react";
import signUPBanner from "../../assets/images/SignUp/Sign_Up2.jfif";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../Axios/Axios";
import { signUpFormValidations } from "../userValidations/UserValidation";
import Cookies from "js-cookie";

const SignUpForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });

 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form inputs with Yup
      await signUpFormValidations.validate(user, { abortEarly: false });
      setErrors({}); // Clear any existing errors

      // API Call
      const response = await postUser(user);

      if (response.status === 201) {
        console.log(response);
        Cookies.set("token",response.data.token);
        Cookies.set("name",response.data.name);
     
       
        navigate("/"); 
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else if (err.response) {
        console.error("Server error:", err.response.data);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <div className="w-full min-h-screen  bg-gradient-to-r from-blue-400 to-black flex items-center justify-center">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
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
            <p className="mb-3">Create your account. It’s free and only takes a minute</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
              <div className="grid grid-cols-2 gap-2">
              
              <div>
              <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={user.firstName}
                  className="border border-gray-400 py-1 px-3 w-full"
                />
                {errors.firstName&& <p className="text-red-500 text-[12px]">{errors.firstName}</p>}
              </div>
               <div >
               <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={user.lastName}
                  className="border border-gray-400 py-1 px-3 w-full"
                />
              {errors.lastName && <p className="text-red-500 text-[12px]">{errors.lastName}</p>}
               </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              {errors.password && <p className="text-red-500 text-[12px]">{errors.password}</p>}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.confirmPassword}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-[12px]">{errors.confirmPassword}</p>
              )}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={user.phone}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  onChange={handleChange}
                  checked={user.acceptTerms}
                  className="mr-2"
                />
                <div className="w-full flex-col items-start "> 
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
                {errors.acceptTerms && <p className="text-red-500 text-[12px]">{errors.acceptTerms}</p>}

                </div>
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

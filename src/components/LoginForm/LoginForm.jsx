import { useState } from "react";
import signUPBanner from "../../assets/images/SignUp/LoginBanner.jfif";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Axios/Axios";
import Cookies from "js-cookie";
import { userLoginFormValidation } from "../userValidations/UserValidation";

const LoginForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //FOR form validation on login

      await userLoginFormValidation.validate(user, { abortEarly: false });
      setErrors({});

      // fetching data by loggin user

      let response = await userLogin(user);
      console.log(response);
      if (response.status == 201) {
        Cookies.set("token", response.data.token);
        Cookies.set("name", response.data.name);
        navigate("/");
      }
    } catch (err) {
      // console.log({ error: error });
      if (err.name === "ValidationError") {
        const validationErros = {};
        err.inner.forEach((singleErr) => {
          validationErros[singleErr.path] = singleErr.message;
          setErrors(validationErros);
          // console.log(errors);
        });
      } else if (err.response) {
        console.log("Server error:", err.response.data);
      } else {
        console.log("Unexpected error:", err);
      }
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
              alt="Login Banner"
              className="w-full h-full object-cover bg-center absolute -z-0"
            />
          </div>
          {/* Form Section */}
          <div className="w-full lg:w-1/2 py-4 px-8 flex flex-col justify-center">
            <h2 className="text-3xl mb-3">Log In</h2>
            <p className="mb-3">Welcome Back! Please Log In</p>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={user.email}
                  className="border border-gray-400 py-1 px-3 w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] ml-4">{errors.email}</p>
                )}
              </div>
           <div>
           <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                className="border border-gray-400 py-1 px-3 w-full"
              />
              {errors.password&&(
                 <p className="text-red-500 text-[12px] ml-4">{errors.password}</p>
              )}
           </div>
              <div className="text-right">
                <a href="#" className="text-blue-500 font-semibold">
                  Forget password
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-700 transition ease-linear font-bold py-3 text-white"
              >
                Login
              </button>
              <div className="mt-2 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-blue-500 font-semibold">
                    Sign up
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

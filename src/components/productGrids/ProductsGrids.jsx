import React, { useEffect, useState } from "react";
import * as api from "../Axios/Axios"; // Adjust import path for Axios API module
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const WelcomePage = () => {

    let navigate = useNavigate();
  
    let handleClickNavigate = (id) => {
      navigate(`/product/${id}`);
    };

  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await api.getData(); // Fetch data from the API
      if (response.status === 200 && Array.isArray(response.data.allProducts)) {
        // Assuming the API response contains "suggested" and "topRated" product categories
        setSuggestedProducts(response.data.allProducts.filter((prod) => prod.category === "Electronics").slice(0, 6));
        setTopRatedProducts(response.data.allProducts.filter((prod) => prod.category === "Men’s Clothing").slice(0, 6));
      } else {
        throw new Error("Invalid data format received from the server.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while fetching products.");
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
<div className="w-full h-[400px] flex items-center justify-center ">

  <Loader/>
</div>
     
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 bg-gray-100 flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-gray-100 flex flex-col items-center">
    <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
      Welcome to Our Store!
    </h1>
    <p className="text-gray-600 text-center mb-12">
      Discover top-rated products and personalized suggestions just for you.
    </p>
  
    <div className="w-full max-w-7xl px-4">
      {/* Suggested Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Suggested Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {suggestedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center group" // Added 'group' for nested hover effects
              onClick={() => handleClickNavigate(product._id)}
            >
             <div className="w-28 h-24 mb-3 ">
             <img
                src={product.images[0].url }
                alt={product.productName || "Product Image"}
                className="w-[100%] h-[100%] object-center  mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
             </div>
              <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
                {product.productName.slice(0,15)|| "Unnamed Product"}
              </h3>
              <p className="text-yellow-500 font-semibold text-sm">
                ${product.offerPrice|| "0.00"}
              </p>
            </div>
          ))}
        </div>
      </section>
  
      {/* Top Rated Products */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Rated Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {topRatedProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center group"
              onClick={() => handleClickNavigate(product._id)}
            >
              <img
                src={product.images[0].url || "https://via.placeholder.com/150"}
                alt={product.title || "Product Image"}
                className="w-26 h-28 object-center   mb-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
                {product.productName.slice(0,15) || "Unnamed Product"}
              </h3>
              <p className="text-yellow-500 font-semibold text-sm">
                ${product.offerPrice|| "0.00"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
  
  );
};

export default WelcomePage;

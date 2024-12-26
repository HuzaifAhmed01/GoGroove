import React, { useEffect, useState } from "react";
import * as api from "../Axios/Axios";

const ProductsGrids = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.getData();
      if (response.status === 200) {
        console.log("Fetched Data:", response.data);
        setProducts(response.data); // Ensure data is properly set
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (err) {
      setError("An error occurred while fetching products.");
      console.error("Fetch Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full py-12 bg-gray-100 flex justify-center items-center">
        <p className="text-gray-600">Loading products...</p>
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
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Featured Collections
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Browse our top products curated just for you.
      </p>

      {/* Main grid with two boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {products.length > 0 ? (
          products.slice(0, 2).map((parent, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
            >
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
                Collection {index + 1}
              </h3>

              {/* Grid for 5-6 products */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {parent.item.slice(0, 4).map((product) => (
                  <div
                    key={product.id} // Ensure unique key
                    className="bg-gray-50 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all p-4"
                  >
                    <img
                      src={product.image} // Fallback image
                      alt={product.title}
                      className="w-24 h-24 object-cover mb-2"
                    />
                    <p className="text-gray-800 text-sm font-medium text-center">
                      {product.title }
                    </p>
                    <p className="text-yellow-500 font-semibold">
                      ${product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsGrids;

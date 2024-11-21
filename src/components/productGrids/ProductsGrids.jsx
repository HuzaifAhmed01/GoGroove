import React from "react";

const ProductsGrids = ({ products }) => {
  return (
    <div className="w-full py-12 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Explore Our Exclusive Collections
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Discover a variety of high-quality products designed to meet your needs.
      </p>

      {/* Parent Grid for all boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Dynamically generated parent divs */}
        {products &&
          products.map((parent, index) => (
            <div
              key={index}
              className="w-400px h-400px bg-white shadow-lg rounded-lg overflow-hidden p-4"
            >
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
                Collection {index + 1}
              </h3>
              {/* Grid for 4 products */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {parent.items.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover mb-2"
                    />
                    <p className="text-gray-700 text-sm font-medium text-center">
                      {product.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsGrids;

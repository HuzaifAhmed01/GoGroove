

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddCart, DeleteCart } from '../../redux/action';

const Cart = () => {
  const cartItems = useSelector((state) => state.CartReducer || []); // Provide default empty array
  const dispatch = useDispatch();

  const handleButton = (product, actionType) => {
    if (actionType === 'increase') {
      dispatch(AddCart(product));
    } else if (actionType === 'decrease') {
      dispatch(DeleteCart(product));
    } else if (actionType === 'remove') {
      dispatch(DeleteCart(product));
    }
  };

  return (
    <div className="container mx-auto py-5 px-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        cartItems.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center md:items-start my-4 p-4 border rounded-lg shadow-sm"
          >
            <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-40 object-cover"
              />
            </div>
            <div className="w-full md:w-3/4 md:pl-4 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-medium mb-2">{product.title}</h3>
              <p className="text-lg font-semibold mb-4">
                {product.qty} x ${product.price} = ${product.qty * product.price}
              </p>
              <div className="flex space-x-3 mb-3">
                <button
                  className="btn btn-outline-dark me-2 px-4 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 disabled:opacity-50"
                  onClick={() => handleButton(product, 'decrease')}
                  disabled={product.qty <= 1}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark px-4 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
                  onClick={() => handleButton(product, 'increase')}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <button
                className="btn btn-outline-dark text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-50"
                onClick={() => handleButton(product, 'remove')}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;


const initialState = []; // Define the initial state of the cart

const CartReducer = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "AddCart": {
      // Check if the product already exists in the cart
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        // If it exists, increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // If it doesn't exist, add it to the cart with qty = 1
        return [
          ...state,
          {
            ...product,
            qty: 1, // Initialize quantity to 1
          },
        ];
      }
    }

    case "DeleteCart": {
      // Check if the product exists in the cart
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.qty === 1) {
          // If qty is 1, remove the product from the cart
          return state.filter((item) => item.id !== product.id);
        } else {
          // Decrease quantity if more than 1
          return state.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty - 1 } : item
          );
        }
      }
      return state; // Return the unchanged state if the product does not exist
    }

    default:
      return state; // Return the current state for any unrecognized action
  }
};

export default CartReducer;

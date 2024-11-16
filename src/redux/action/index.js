export let AddCart = (product) => {
  return {
    type: "AddCart",
    payload: product,
  };
};

export let DeleteCart = (product) => {
  return {
    type: "DeleteCart",
    payload: product,
  };
};

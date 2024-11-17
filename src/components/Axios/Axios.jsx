import axios from "axios";

let api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export let getData = () => {
  return api.get("/products");
};

export let getDataById = (id) => {
  return api.get(`/products/${id}`);
};

// For User
 let userAPi = axios.create({
  baseURL: "http://localhost:5800/user",
});

export let postUser = (user) => {
  return userAPi.post("/createUser", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

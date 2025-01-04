import axios from "axios";

let api = axios.create({
  baseURL: "http://localhost:5800/products",
});

export let getData = () => {
  return api.get("/allProducts");
};

export let getDataById = (id) => {
  return api.get(`/findProduct/${id}`);
};

// For User
let userAPi = axios.create({
  baseURL: "http://localhost:5800/user",
});

export let postUser = (user) => {
  return userAPi.post("/createUser", user);
};

export let userLogin = (user) => {
  return userAPi.post("/userLogin", user);
};

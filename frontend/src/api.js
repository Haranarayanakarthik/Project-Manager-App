import axios from "axios";

const API = axios.create({
  baseURL: "https://project-manager-app-g9bc.onrender.com/api",
});

API.interceptors.request.use((req) => {
  req.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return req;
});

export default API;

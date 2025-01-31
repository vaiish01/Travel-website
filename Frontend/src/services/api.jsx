import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure the correct port
});

export default api;

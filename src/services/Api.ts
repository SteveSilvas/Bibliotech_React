import axios from "axios";

const api = axios.create({
  baseURL: "https:localhost:4200/",
});

export default api;
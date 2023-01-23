import axios from "axios";


const serviceURL = process.env.REACT_APP_SERVICE_URL;
const localURL = "http://localhost:4200";

console.log(serviceURL+ "service");

const api = axios.create({
    baseURL: localURL});

export default api;
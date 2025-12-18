import axios from "axios";

const api = axios.create({
  baseURL: "https://agrovip-backend-production.up.railway.app/api",
  
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});


export default api;

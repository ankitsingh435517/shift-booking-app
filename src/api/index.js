import axios from "axios";

const createAPI = () => {
  const API_BASE_URL = "http://localhost:8080";
  const apiHeaders = {
    "Content-Type": "application/json",
  };

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: apiHeaders
  });

  return api;
};

export default createAPI();

import axios from "axios";
import { loaderErrorResponse, loaderRequest, loaderResponse } from "../../interceptors/loader.interceptor";

const instance = axios.create({
  baseURL: "https://microonetest.azurewebsites.net//",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.request.use(loaderRequest);
instance.interceptors.response.use(loaderResponse,loaderErrorResponse);




export default instance;

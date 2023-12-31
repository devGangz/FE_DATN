import axios from "axios";
import { clearStorage, getAccessToken } from "../utils/storage";
import { toast } from "sonner";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config: any) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      const accessHeaders = `Bearer ${accessToken}`;
      config.headers.Authorization = accessHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      toast.error("Your token has expired.");
      clearStorage();
      window.location.href = "/login";
    }
    return Promise.reject(error.response?.data?.error ?? error);
  }
);

export default axiosClient;

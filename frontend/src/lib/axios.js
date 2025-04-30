import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.NODE_ENV === "production"
      ? "http://backend:5001/api"
      : "http://localhost:5001/api",
  withCredentials: true,
});

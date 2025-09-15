// src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { token } = JSON.parse(storedUser);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      const message = error.response?.data?.message;
      if (message && message.includes("banned")) {
        localStorage.removeItem("user");

        window.dispatchEvent(
          new CustomEvent("userBanned", {
            detail: {
              message: message,
              banReason: error.response?.data?.banReason,
              bannedAt: error.response?.data?.bannedAt,
            },
          })
        );

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

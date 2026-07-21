import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // For cookie exchange if needed
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth tokens or custom headers here if needed in Phase 2
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global API error handling placeholder
    console.error('API Error Response:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;

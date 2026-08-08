import axios from 'axios';
import { TOKEN_KEY } from '../utils/constants';

// Create an Axios instance
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach JWT token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle global errors like 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired
      localStorage.removeItem(TOKEN_KEY);
      // We could trigger a global event here or redirect,
      // but typically we let AuthContext handle the state update.
      // E.g. window.dispatchEvent(new Event('auth-error'));
      // For now, reloading or letting the component catch the error is fine.
    }
    return Promise.reject(error);
  }
);

export default api;

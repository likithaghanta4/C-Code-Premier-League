import api from './api';

const authService = {
  /**
   * Register a new student
   * @param {Object} userData 
   */
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  /**
   * Login student
   * @param {Object} credentials - { email, password }
   */
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  /**
   * Get current user profile based on JWT token
   */
  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;

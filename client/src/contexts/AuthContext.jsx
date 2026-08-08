/**
 * CPL — Auth Context
 * Connects to Node.js backend using JWT authentication.
 */

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import authService from '../services/auth.service';
import { TOKEN_KEY, USER_KEY } from '../utils/constants';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || null);
  const [loading, setLoading] = useState(true); // Start as loading to check token
  const [error, setError] = useState(null);

  // Derived state
  const isAuthenticated = !!token && !!user;

  // Initial load: Verify token and fetch user profile
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem(TOKEN_KEY);

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        setToken(storedToken);
        const data = await authService.getMe();
        if (data.success) {
          setUser(data.user);
        } else {
          throw new Error('Authentication failed');
        }
      } catch (err) {
        console.error('Auth verification failed:', err);
        // Token might be expired or invalid, clear it
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Log the user in
   * @param {Object} credentials - { email, password }
   */
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(credentials);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem(TOKEN_KEY, data.token);
        toast.success(`Welcome back, ${data.user.fullName}!`);
        return true;
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed. Please try again.';
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Register a new user
   * @param {Object} userData 
   */
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.register(userData);

      if (data.success) {
        toast.success(data.message || 'Registration successful! Please log in.');
        return true;
      }
    } catch (err) {
      const message = err.response?.data?.error || err.response?.data?.message || 'Registration failed. Please try again.';
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Log the user out
   */
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY); // Just in case from old mock data
    toast.info('You have been logged out.');
  }, []);

  /**
   * Optimistically update the user state and push progress to backend
   */
  const updateUserProgress = useCallback(async (progressData) => {
    try {
      // Optimistic UI update
      setUser((prevUser) => {
        if (!prevUser) return prevUser;
        const updatedUser = { ...prevUser };
        if (progressData.completedTopicId && !updatedUser.completedTopics.includes(progressData.completedTopicId)) {
          updatedUser.completedTopics = [...updatedUser.completedTopics, progressData.completedTopicId];
        }
        if (progressData.completedPracticeId && !(updatedUser.completedPracticeTopics || []).includes(progressData.completedPracticeId)) {
          updatedUser.completedPracticeTopics = [...(updatedUser.completedPracticeTopics || []), progressData.completedPracticeId];
        }
        if (progressData.currentTopic) updatedUser.currentTopic = progressData.currentTopic;
        if (progressData.lastVisitedTopic) updatedUser.lastVisitedTopic = progressData.lastVisitedTopic;
        if (progressData.lastVisitedPractice) updatedUser.lastVisitedPractice = progressData.lastVisitedPractice;
        return updatedUser;
      });

      // Import inline to avoid circular deps if they exist, or just rely on global service import
      const { userService } = await import('../services/user.service');
      const response = await userService.updateProgress(progressData);

      if (response && response.success && response.data) {
        setUser((prevUser) => {
          if (!prevUser) return prevUser;
          return {
            ...prevUser,
            ...response.data
          };
        });
      }
    } catch (err) {
      console.error('Failed to update progress to server', err);
    }
  }, []);

  const updatePracticeProgress = useCallback(async (practiceProgressData) => {
    try {
      const { practiceService } = await import('../services/practice.service');
      const data = await practiceService.syncProgress(practiceProgressData);
      if (data.success && data.user) {
        setUser(data.user);
      }
    } catch (err) {
      console.error('Failed to sync practice progress', err);
    }
  }, []);

  const updateProfileData = useCallback(async (profileData) => {
    try {
      const { userService } = await import('../services/user.service');
      const data = await userService.updateProfile(profileData);
      if (data.success && data.user) {
        setUser(data.user);
        toast.success('Profile updated successfully!');
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update profile';
      toast.error(message);
      return { success: false, message };
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      token,
      loading,
      error,
      isAuthenticated,
      login,
      register,
      logout,
      updateUserProgress,
      updatePracticeProgress,
      updateProfileData,
    }),
    [user, token, loading, error, isAuthenticated, login, register, logout, updateUserProgress, updatePracticeProgress, updateProfileData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;

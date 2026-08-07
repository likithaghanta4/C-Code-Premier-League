/**
 * CPL — User Service
 * API calls for user progress and profile.
 */

import api from './api';

const updateProgress = async (progressData) => {
  const response = await api.put('/users/progress', progressData);
  return response.data;
};

const updateProfile = async (profileData) => {
  const response = await api.put('/users/profile', profileData);
  return response.data;
};

const updatePassword = async (passwordData) => {
  const response = await api.put('/users/password', passwordData);
  return response.data;
};

export const userService = {
  updateProgress,
  updateProfile,
  updatePassword,
};

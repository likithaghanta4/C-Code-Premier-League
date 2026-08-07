import api from './api';

export const practiceService = {
  syncProgress: async (progressData) => {
    const response = await api.post('/practice/sync', progressData);
    return response.data;
  }
};

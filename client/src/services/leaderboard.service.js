import api from './api';

const getLeaderboard = async (params) => {
  // params: { search, sortBy, page, limit }
  const response = await api.get('/leaderboard', { params });
  return response.data;
};

export const leaderboardService = {
  getLeaderboard,
};

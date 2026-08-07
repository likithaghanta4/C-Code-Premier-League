import api from './api';

export const certificateService = {
  getCertificateStatus: async (courseId = 'c-programming') => {
    const response = await api.get(`/users/certificates/status?courseId=${courseId}`);
    return response.data;
  }
};

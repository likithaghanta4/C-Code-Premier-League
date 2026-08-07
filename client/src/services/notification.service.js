import api from './api';

class NotificationService {
  async getNotifications() {
    try {
      const response = await api.get('/notifications');
      return response.data;
    } catch (error) {
      console.error('Failed to get notifications', error);
      throw error;
    }
  }

  async getUnreadCount() {
    try {
      const response = await api.get('/notifications/unread-count');
      return response.data;
    } catch (error) {
      console.error('Failed to get unread count', error);
      throw error;
    }
  }

  async markAsRead(id) {
    try {
      const response = await api.put(`/notifications/${id}/read`);
      return response.data;
    } catch (error) {
      console.error('Failed to mark notification as read', error);
      throw error;
    }
  }

  async markAllAsRead() {
    try {
      const response = await api.put('/notifications/read-all');
      return response.data;
    } catch (error) {
      console.error('Failed to mark all notifications as read', error);
      throw error;
    }
  }

  async deleteNotification(id) {
    try {
      const response = await api.delete(`/notifications/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to delete notification', error);
      throw error;
    }
  }

  async deleteAllNotifications() {
    try {
      const response = await api.delete('/notifications/all');
      return response.data;
    } catch (error) {
      console.error('Failed to delete all notifications', error);
      throw error;
    }
  }
}

export const notificationService = new NotificationService();

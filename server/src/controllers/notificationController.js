const notificationService = require('../services/notificationService');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await notificationService.getUserNotifications(req.user.id);
    const unreadCount = await notificationService.getUnreadCount(req.user.id);
    
    res.status(200).json({
      success: true,
      data: notifications,
      unreadCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch notifications' });
  }
};

exports.getUnreadCount = async (req, res) => {
  try {
    const unreadCount = await notificationService.getUnreadCount(req.user.id);
    res.status(200).json({
      success: true,
      unreadCount
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get unread count' });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const notification = await notificationService.markAsRead(req.params.id, req.user.id);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }
    res.status(200).json({ success: true, data: notification });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to mark as read' });
  }
};

exports.markAllAsRead = async (req, res) => {
  try {
    await notificationService.markAllAsRead(req.user.id);
    res.status(200).json({ success: true, message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to mark all as read' });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const notification = await notificationService.deleteNotification(req.params.id, req.user.id);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }
    res.status(200).json({ success: true, message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete notification' });
  }
};

exports.deleteAllNotifications = async (req, res) => {
  try {
    await notificationService.deleteAllNotifications(req.user.id);
    res.status(200).json({ success: true, message: 'All notifications deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete all notifications' });
  }
};

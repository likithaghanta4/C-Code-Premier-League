const Notification = require('../models/Notification');

/**
 * Creates a new notification for a specific user
 * @param {String} userId 
 * @param {String} title 
 * @param {String} description 
 * @param {String} category Enum ('Learning', 'Practice', 'Assessment', 'Certificates', 'Streak', 'Leaderboard', 'Rewards', 'System')
 * @returns {Object} The created notification
 */
exports.createNotification = async (userId, title, description, category = 'System') => {
  try {
    const notification = await Notification.create({
      user: userId,
      title,
      description,
      category
    });
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    return null;
  }
};

/**
 * Gets all notifications for a user, sorted newest first
 * @param {String} userId 
 */
exports.getUserNotifications = async (userId) => {
  try {
    return await Notification.find({ user: userId }).sort({ createdAt: -1 });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }
};

/**
 * Gets the count of unread notifications for a user
 * @param {String} userId 
 */
exports.getUnreadCount = async (userId) => {
  try {
    return await Notification.countDocuments({ user: userId, isRead: false });
  } catch (error) {
    console.error('Error counting unread notifications:', error);
    return 0;
  }
};

/**
 * Marks a specific notification as read
 */
exports.markAsRead = async (notificationId, userId) => {
  try {
    return await Notification.findOneAndUpdate(
      { _id: notificationId, user: userId },
      { isRead: true },
      { new: true }
    );
  } catch (error) {
    console.error('Error marking notification as read:', error);
    return null;
  }
};

/**
 * Marks all notifications for a user as read
 */
exports.markAllAsRead = async (userId) => {
  try {
    await Notification.updateMany(
      { user: userId, isRead: false },
      { isRead: true }
    );
    return true;
  } catch (error) {
    console.error('Error marking all as read:', error);
    return false;
  }
};

/**
 * Deletes a specific notification
 */
exports.deleteNotification = async (notificationId, userId) => {
  try {
    return await Notification.findOneAndDelete({ _id: notificationId, user: userId });
  } catch (error) {
    console.error('Error deleting notification:', error);
    return null;
  }
};

/**
 * Deletes all notifications for a user
 */
exports.deleteAllNotifications = async (userId) => {
  try {
    await Notification.deleteMany({ user: userId });
    return true;
  } catch (error) {
    console.error('Error deleting all notifications:', error);
    return false;
  }
};

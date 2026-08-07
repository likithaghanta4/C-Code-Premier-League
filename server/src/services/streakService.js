const User = require('../models/User');
const notificationService = require('./notificationService');

/**
 * Normalizes a date to YYYY-MM-DD local time string for easy comparison
 * @param {Date} date
 * @returns {String}
 */
const toDateString = (date) => {
  if (!date) return null;
  // Use local time offset for the day boundary
  const d = new Date(date);
  const offset = d.getTimezoneOffset() * 60000;
  const localISOTime = (new Date(d - offset)).toISOString().split('T')[0];
  return localISOTime;
};

/**
 * Calculates and updates the user's streak based on eligible activity.
 * Call this whenever a user completes a lesson, solves a problem, or takes an assessment.
 * @param {String} userId 
 */
exports.recordActivity = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return;

    const now = new Date();
    const todayStr = toDateString(now);

    // Initialize streak object if it doesn't exist
    if (!user.streak) {
      user.streak = { current: 0, longest: 0, activeDays: [] };
    }

    const lastUpdateStr = toDateString(user.streak.lastUpdateDate);

    // If activity was already recorded today, do nothing to the streak logic
    // but update lastActiveDate.
    if (lastUpdateStr === todayStr) {
      user.streak.lastActiveDate = now;
      await user.save();
      return;
    }

    let newCurrent = user.streak.current;
    
    if (!lastUpdateStr) {
      // First ever activity
      newCurrent = 1;
    } else {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = toDateString(yesterday);

      if (lastUpdateStr === yesterdayStr) {
        // Continuous streak
        newCurrent += 1;
      } else {
        // Streak broken
        newCurrent = 1;
      }
    }

    // Update streak data
    user.streak.current = newCurrent;
    user.streak.lastUpdateDate = now;
    user.streak.lastActiveDate = now;
    
    if (newCurrent > user.streak.longest) {
      user.streak.longest = newCurrent;
    }

    // Push today into activeDays and keep only the last 90 days to prevent array bloat
    if (!user.streak.activeDays.includes(todayStr)) {
      user.streak.activeDays.push(todayStr);
      if (user.streak.activeDays.length > 90) {
        user.streak.activeDays.shift();
      }
    }

    await user.save();
    
    // Notifications for Streak milestones
    if (newCurrent > 0) {
      const milestones = [3, 7, 15, 30, 60, 100];
      if (milestones.includes(newCurrent) && lastUpdateStr !== todayStr) {
        await notificationService.createNotification(
          user._id,
          'Streak Milestone!',
          `🔥 Your learning streak reached ${newCurrent} days. Keep it up!`,
          'Streak'
        );
      }
    }
    
  } catch (err) {
    console.error('Error updating streak:', err);
  }
};

/**
 * CPL — User Controller
 * Handles user-specific progress, dashboard updates, and profile data.
 */

const User = require('../models/User');
const certificateService = require('../services/certificateService');
const streakService = require('../services/streakService');
const notificationService = require('../services/notificationService');

/**
 * @desc    Update user learning progress
 * @route   PUT /api/users/progress
 * @access  Private
 */
exports.updateProgress = async (req, res) => {
  try {
    const { completedTopicId, currentTopic, lastVisitedTopic, completedPracticeId, lastVisitedPractice, difficulty } = req.body;
    
    // Find user
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Helper for Coin Rewards based on difficulty
    const getCoinReward = (diff) => {
      const lowerDiff = String(diff || '').toLowerCase();
      if (lowerDiff === 'easy') return 2;
      if (lowerDiff === 'medium') return 5;
      if (lowerDiff === 'hard') return 10;
      return 0; // default if missing or invalid
    };

    // Update completed topics (if provided and not already completed)
    if (completedTopicId && !user.completedTopics.includes(completedTopicId)) {
      user.completedTopics.push(completedTopicId);
      
      // Award Coins
      const reward = getCoinReward(difficulty);
      user.coins += reward;

      // Notifications
      await notificationService.createNotification(
        user._id,
        'Lesson Completed!',
        `Congratulations! You completed a lesson and earned ${reward} Coins.`,
        'Learning'
      );
    }

    // Update current topic if provided
    if (currentTopic) {
      user.currentTopic = currentTopic;
    }

    // Update last visited topic if provided
    if (lastVisitedTopic) {
      user.lastVisitedTopic = lastVisitedTopic;
    }

    // Update practice progress
    if (completedPracticeId && !user.completedPracticeTopics.includes(completedPracticeId)) {
      user.completedPracticeTopics.push(completedPracticeId);
    }
    
    // Update last visited practice
    if (lastVisitedPractice) {
      user.lastVisitedPractice = lastVisitedPractice;
    }

    // Automatically check and generate certificates if eligibility changed
    await certificateService.checkAndGenerateCertificates(user);

    await user.save();

    // Record Activity for Streak if a topic or practice lesson was actually completed in this request
    if (completedTopicId || completedPracticeId) {
      await streakService.recordActivity(user._id);
    }

    res.status(200).json({
      success: true,
      data: {
        completedTopics: user.completedTopics,
        currentTopic: user.currentTopic,
        lastVisitedTopic: user.lastVisitedTopic,
        completedPracticeTopics: user.completedPracticeTopics,
        lastVisitedPractice: user.lastVisitedPractice,
        coins: user.coins, // Return updated coins
      },
    });
  } catch (error) {
    console.error(`❌ Update Progress Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error updating progress', error: error.message });
  }
};

/**
 * @desc    Update user profile data
 * @route   PUT /api/users/profile
 * @access  Private
 */
exports.updateProfile = async (req, res) => {
  try {
    const { fullName, username, rollNumber, email, department, year, college, bio, profilePicture } = req.body;
    
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Update fields if provided
    if (fullName) user.fullName = fullName;
    if (rollNumber !== undefined) user.rollNumber = rollNumber;
    if (username !== undefined) {
      // Check if username is already taken by someone else
      if (username) {
        const existingUser = await User.findOne({ username });
        if (existingUser && existingUser.id !== user.id) {
          return res.status(400).json({ success: false, message: 'Username is already taken' });
        }
      }
      user.username = username;
    }
    if (email) user.email = email;
    if (department) user.department = department;
    if (year) user.year = year;
    if (college !== undefined) user.college = college;
    if (bio !== undefined) user.bio = bio;
    if (profilePicture !== undefined) user.profilePicture = profilePicture;

    await user.save();

    await notificationService.createNotification(
      user._id,
      'Profile Updated',
      'Your profile information has been updated successfully.',
      'System'
    );

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: user.toJSON() // Safe return without password
    });

  } catch (error) {
    console.error(`❌ Update Profile Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error updating profile', error: error.message });
  }
};

/**
 * @desc    Update user password
 * @route   PUT /api/users/password
 * @access  Private
 */
exports.updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, message: 'Please provide both current and new passwords' });
    }

    // Need to explicitly select password since it's set to select: false in schema
    const user = await User.findById(req.user.id).select('+password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if current password is correct
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect current password' });
    }

    // Set new password (the pre-save hook will hash it)
    user.password = newPassword;
    await user.save();

    await notificationService.createNotification(
      user._id,
      'Password Changed',
      'Your password has been changed successfully.',
      'System'
    );

    res.status(200).json({
      success: true,
      message: 'Password updated successfully'
    });

  } catch (error) {
    console.error(`❌ Update Password Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error updating password', error: error.message });
  }
};

/**
 * @desc    Get certificate status for user
 * @route   GET /api/users/certificates/status
 * @access  Private
 */
exports.getCertificateStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const courseId = req.query.courseId || 'c-programming';
    
    // Auto-check and generate if there are pending certificates (just in case)
    const generatedNew = await certificateService.checkAndGenerateCertificates(user, courseId);
    if (generatedNew) {
      // The user object was saved inside checkAndGenerateCertificates, but we might want fresh data?
      // user.save() was called, so user object is up to date in memory.
    }

    const status = certificateService.getCertificateStatus(user, courseId);
    
    res.status(200).json({
      success: true,
      data: status
    });
  } catch (error) {
    console.error(`❌ Get Certificate Status Error: ${error.message}`);
    res.status(500).json({ success: false, message: 'Server Error getting certificate status', error: error.message });
  }
};

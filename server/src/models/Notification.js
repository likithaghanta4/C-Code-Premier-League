const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Notification title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Notification description is required'],
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Learning', 'Practice', 'Assessment', 'Certificates', 'Streak', 'Leaderboard', 'Rewards', 'System'],
      default: 'System'
    },
    isRead: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Index for efficient querying by user, sorted by date
notificationSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);

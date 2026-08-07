/**
 * CPL — API Routes Index
 * Mounts all route modules.
 */

const express = require('express');
const router = express.Router();
const ApiResponse = require('../utils/ApiResponse');
const leaderboardRoutes = require('./leaderboardRoutes');
const notificationRoutes = require('./notificationRoutes');

/**
 * Health Check
 * GET /api/health
 */
router.get('/health', (req, res) => {
  ApiResponse.success(res, {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  }, 'CPL API is running');
});

// Route mounts
router.use('/auth', require('./authRoutes'));
// router.use('/topics', require('./topics'));
// router.use('/problems', require('./problems'));
// router.use('/quizzes', require('./quizzes'));
router.use('/leaderboard', leaderboardRoutes);
router.use('/users', require('./userRoutes'));
router.use('/practice', require('./practiceRoutes'));
router.use('/compiler', require('./compilerRoutes'));
router.use('/notifications', notificationRoutes);

module.exports = router;

const express = require('express');
const { updateProgress, updateProfile, updatePassword, getCertificateStatus } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Apply auth middleware to all routes
router.use(protect);

router.put('/progress', updateProgress);
router.put('/profile', updateProfile);
router.put('/password', updatePassword);
router.get('/certificates/status', getCertificateStatus);

module.exports = router;

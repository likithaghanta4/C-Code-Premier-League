const express = require('express');
const router = express.Router();
const compilerController = require('../controllers/compilerController');
const { protect } = require('../middleware/auth');

// Note: Using protect middleware to ensure only logged in users can execute code
// to prevent abuse.

router.post('/run', protect, compilerController.runCode);
router.post('/submit', protect, compilerController.submitCode);
router.post('/save', protect, compilerController.saveCode);
router.get('/history', protect, compilerController.getHistory);

module.exports = router;

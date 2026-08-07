const express = require('express');
const { protect } = require('../middleware/auth');
const { syncPracticeProgress, executeCode, evaluateCode } = require('../controllers/practiceController');

const router = express.Router();

router.post('/sync', protect, syncPracticeProgress);
router.post('/execute', protect, executeCode);
router.post('/evaluate', protect, evaluateCode);
module.exports = router;

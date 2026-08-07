const User = require('../models/User');
const CompilerService = require('../services/compilerService');
const certificateService = require('../services/certificateService');
const streakService = require('../services/streakService');
const notificationService = require('../services/notificationService');

exports.syncPracticeProgress = async (req, res) => {
  try {
    const { lessonProgress, solvedProblemId, difficulty, isLessonCompleted } = req.body;
    
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Helper for XP Rewards based on difficulty
    const getXpReward = (diff) => {
      const lowerDiff = String(diff || '').toLowerCase();
      if (lowerDiff === 'easy') return 2;
      if (lowerDiff === 'medium') return 5;
      if (lowerDiff === 'hard') return 10;
      return 0; // default if missing or invalid
    };

    // Update lesson specific tracking (legacy support & accuracy)
    if (lessonProgress) {
      const index = user.practiceProgress.findIndex(p => p.lessonId === lessonProgress.lessonId);
      if (index >= 0) {
        user.practiceProgress[index] = lessonProgress;
      } else {
        user.practiceProgress.push(lessonProgress);
      }
      user.lastVisitedPractice = lessonProgress.lessonId;
    }
    
    // Add XP strictly upon verified new problem solving
    if (solvedProblemId && !user.solvedProblems.includes(solvedProblemId)) {
      user.solvedProblems.push(solvedProblemId);
      
      const reward = getXpReward(difficulty);
      user.xp += reward;

      await notificationService.createNotification(
        user._id,
        'Problem Solved!',
        `Congratulations! You solved a programming problem and earned ${reward} XP.`,
        'Practice'
      );
    }
    
    // Mark global topic as completed if needed
    if (isLessonCompleted && lessonProgress && !user.completedPracticeTopics.includes(lessonProgress.lessonId)) {
      user.completedPracticeTopics.push(lessonProgress.lessonId);
      
      await notificationService.createNotification(
        user._id,
        'Practice Lesson Completed!',
        'You have successfully completed a practice lesson.',
        'Practice'
      );
    }
    
    // Automatically check and generate certificates if eligibility changed
    await certificateService.checkAndGenerateCertificates(user);

    await user.save();

    // Record streak activity if a problem was solved or lesson completed
    if (solvedProblemId || isLessonCompleted) {
      await streakService.recordActivity(user._id);
    }
    
    res.status(200).json({ 
      success: true, 
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        xp: user.xp,
        completedPracticeTopics: user.completedPracticeTopics,
        practiceProgress: user.practiceProgress,
        lastVisitedPractice: user.lastVisitedPractice,
        solvedProblems: user.solvedProblems
      } 
    });
  } catch (error) {
    console.error('Sync Practice Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.executeCode = async (req, res) => {
  try {
    const { code, input } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, message: 'Source code is required.' });
    }
    const result = await CompilerService.executeCode(code, input);
    res.status(200).json(result);
  } catch (error) {
    console.error('Execute Code Error:', error);
    res.status(500).json({ success: false, message: 'Server execution error' });
  }
};

exports.evaluateCode = async (req, res) => {
  try {
    const { code, testCases } = req.body;
    if (!code || !testCases || !Array.isArray(testCases)) {
      return res.status(400).json({ success: false, message: 'Source code and test cases array are required.' });
    }

    let passed = 0;
    let failed = 0;
    let finalVerdict = 'Accepted';
    let firstFailedResult = null;

    for (const tc of testCases) {
      const result = await CompilerService.executeCode(code, tc.input);
      
      if (!result.success) {
        // Compilation Error or Runtime Error
        failed++;
        if (!firstFailedResult) {
          firstFailedResult = result;
          if (result.compileError) finalVerdict = 'Compilation Error';
          else if (result.runtimeError && result.runtimeError.includes('Time Limit Exceeded')) finalVerdict = 'Time Limit Exceeded';
          else finalVerdict = 'Runtime Error';
        }
      } else {
        const expected = tc.expectedOutput.trim();
        const actual = result.output ? result.output.trim() : '';
        if (expected === actual) {
          passed++;
        } else {
          failed++;
          if (!firstFailedResult) {
            firstFailedResult = { ...result, actualOutput: actual, expectedOutput: expected };
            finalVerdict = 'Wrong Answer';
          }
        }
      }
    }

    res.status(200).json({
      success: finalVerdict === 'Accepted',
      passed,
      failed,
      total: testCases.length,
      verdict: finalVerdict,
      failedDetails: firstFailedResult
    });

  } catch (error) {
    console.error('Evaluate Code Error:', error);
    res.status(500).json({ success: false, message: 'Server evaluation error' });
  }
};

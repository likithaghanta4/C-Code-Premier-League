const OnlineCompilerService = require('../services/onlineCompilerService');
const notificationService = require('../services/notificationService');

/**
 * Controller for compiling and running raw C code in the standalone compiler.
 */
exports.runCode = async (req, res) => {
  try {
    const { code, input } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, message: 'Source code is required.' });
    }
    const result = await OnlineCompilerService.executeCode(code, input);
    res.status(200).json(result);
  } catch (error) {
    console.error('Compiler Run Code Error:', error);
    res.status(500).json({ success: false, message: 'Server execution error' });
  }
};

/**
 * Controller for evaluating C code against hidden test cases in Assessment Mode.
 * This does not update practice progress, ensuring separation from the Practice module.
 */
exports.submitCode = async (req, res) => {
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
      const result = await OnlineCompilerService.executeCode(code, tc.input);
      
      if (!result.success) {
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
    console.error('Compiler Evaluate Code Error:', error);
    res.status(500).json({ success: false, message: 'Server evaluation error' });
  }
};

/**
 * Stub for saving code to the database.
 * Currently handled in frontend localStorage, but endpoint prepared for future expansion.
 */
exports.saveCode = async (req, res) => {
  try {
    // In the future: save req.body.program to DB
    res.status(200).json({ success: true, message: 'Code saved successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save code.' });
  }
};

/**
 * Stub for fetching execution history from the database.
 * Currently handled in frontend localStorage.
 */
exports.getHistory = async (req, res) => {
  try {
    // In the future: fetch from DB
    res.status(200).json({ success: true, history: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch history.' });
  }
};

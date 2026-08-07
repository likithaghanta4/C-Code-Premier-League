const crypto = require('crypto');
const notificationService = require('./notificationService');

// Configuration for course requirements. This makes it future-ready for multiple courses.
const COURSE_REQUIREMENTS = {
  'c-programming': {
    name: 'C Programming',
    learnTarget: 24,
    practiceTarget: 17,
    assessmentTarget: 70
  }
};

/**
 * Generate a unique certificate ID
 */
const generateCertificateId = (coursePrefix) => {
  const year = new Date().getFullYear();
  const randomChars = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `CPL-${coursePrefix.toUpperCase()}-${year}-${randomChars}`;
};

/**
 * Check and generate certificates if eligible
 * @param {Object} user - The Mongoose User document
 * @param {String} courseId - The ID of the course to check
 * @returns {Boolean} true if a new certificate was generated
 */
exports.checkAndGenerateCertificates = async (user, courseId = 'c-programming') => {
  const reqs = COURSE_REQUIREMENTS[courseId];
  if (!reqs) return false;

  let hasNewCertificates = false;

  // Helpers to check existing certificates for this course
  const hasCert = (type) => user.certificates.some(c => c.courseId === courseId && c.type === type);

  // 1. Check Course Completion Eligibility
  if (!hasCert('course')) {
    // Only unlocked if ALL 4 conditions are met
    const learnCompleted = user.completedTopics.length >= reqs.learnTarget;
    const practiceCompleted = user.completedPracticeTopics.length >= reqs.practiceTarget;
    // For problems, use solvedProblems length
    const practiceProblemsCompleted = (user.solvedProblems ? user.solvedProblems.length : 0) >= 170;
    const assessmentPassed = (user.assessmentScore || 0) >= reqs.assessmentTarget;

    if (learnCompleted && practiceCompleted && practiceProblemsCompleted && assessmentPassed) {
      user.certificates.push({
        courseId,
        type: 'course',
        title: `Certificate of ${reqs.name} Course Completion`,
        certificateId: generateCertificateId('C'),
        issueDate: new Date()
      });
      hasNewCertificates = true;
      
      await notificationService.createNotification(
        user._id,
        'Certificate Generated!',
        `Congratulations! Your ${reqs.name} Certificate has been generated.`,
        'Certificates'
      );
    }
  }

  if (hasNewCertificates) {
    await user.save();
  }

  return hasNewCertificates;
};

/**
 * Get detailed certificate status for a user for a specific course
 * @param {Object} user - The Mongoose User document
 * @param {String} courseId - The ID of the course
 */
exports.getCertificateStatus = (user, courseId = 'c-programming') => {
  const reqs = COURSE_REQUIREMENTS[courseId];
  if (!reqs) return null;

  const getCert = (type) => user.certificates.find(c => c.courseId === courseId && c.type === type);

  const courseCert = getCert('course');

  const learnCompletedCount = user.completedTopics.length;
  const practiceCompletedCount = user.completedPracticeTopics.length;
  const practiceProblemsCount = user.solvedProblems ? user.solvedProblems.length : 0;
  const assessmentScore = user.assessmentScore || 0;

  // Course Status
  let courseStatus = 'Locked';
  if (courseCert) courseStatus = 'Generated';
  else if (learnCompletedCount > 0 || practiceCompletedCount > 0 || practiceProblemsCount > 0 || assessmentScore > 0) courseStatus = 'In Progress';

  return {
    courseId,
    courseName: reqs.name,
    course: {
      status: courseStatus,
      learnCompleted: learnCompletedCount,
      learnTarget: reqs.learnTarget,
      practiceCompleted: practiceCompletedCount,
      practiceTarget: reqs.practiceTarget,
      problemsCompleted: practiceProblemsCount,
      problemsTarget: 170, // Fixed target as per requirements
      assessmentScore: assessmentScore,
      assessmentTarget: reqs.assessmentTarget,
      certificate: courseCert || null
    },
    allCertificates: user.certificates.filter(c => c.courseId === courseId).sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))
  };
};

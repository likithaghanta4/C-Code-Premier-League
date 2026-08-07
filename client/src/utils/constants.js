/**
 * CPL — Application Constants
 * Centralized configuration values used across the app.
 */

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// App Metadata
export const APP_NAME = 'C Code Premier League';
export const APP_SHORT_NAME = 'CPL';
export const APP_TAGLINE = 'Master C Programming — From Zero to Hero';
export const APP_VERSION = '1.0.0';

// Theme
export const THEME_STORAGE_KEY = 'cpl-theme';

// Auth
export const TOKEN_KEY = 'cpl-token';
export const USER_KEY = 'cpl-user';

// XP & Gamification
export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  QUIZ_COMPLETE: 100,
  PROBLEM_EASY: 25,
  PROBLEM_MEDIUM: 50,
  PROBLEM_HARD: 100,
  DAILY_LOGIN: 10,
  CONTEST_WIN: 500,
};

// Difficulty Levels
export const DIFFICULTY = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};

export const DIFFICULTY_COLORS = {
  Easy: 'text-success-400',
  Medium: 'text-warning-400',
  Hard: 'text-error-400',
};

// Pagination
export const DEFAULT_PAGE_SIZE = 20;

// Leaderboard
export const LEADERBOARD_TYPES = {
  OVERALL: 'overall',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
};

// Badge IDs
export const BADGES = {
  FIRST_LOGIN: 'first_login',
  FIRST_LESSON: 'first_lesson',
  FIRST_QUIZ: 'first_quiz',
  PROBLEMS_10: 'problems_10',
  PROBLEMS_50: 'problems_50',
  PROBLEMS_100: 'problems_100',
  CONTEST_WINNER: 'contest_winner',
  MASTER_C: 'master_c',
};

// Navigation Routes
export const ROUTES = {
  // Public (Auth)
  LOGIN: '/',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Protected — Student Portal
  DASHBOARD: '/dashboard',
  LEARN: '/learn',
  TOPIC: '/learn/:topicId',
  PRACTICE: '/practice',
  PRACTICE_TOPIC: '/practice/:topicId',
  PROBLEM: '/practice/:problemId',
  COMPILER: '/compiler',
  QUIZZES: '/quizzes',
  QUIZ_ATTEMPT: '/quizzes/:quizId',
  LEADERBOARD: '/leaderboard',
  CERTIFICATES: '/certificates',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
};

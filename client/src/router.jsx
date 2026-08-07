/**
 * CPL — Centralized Router Configuration
 * All routes defined in one place with lazy loading.
 * Two layout groups: Public (PublicLayout) and Protected (AppLayout).
 */

import { lazy } from 'react';

// ----- Auth Pages -----
export const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
export const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'));
export const ForgotPasswordPage = lazy(() => import('./pages/auth/ForgotPasswordPage'));
export const ResetPasswordPage = lazy(() => import('./pages/auth/ResetPasswordPage'));

// ----- Protected Pages -----
export const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
export const LearnPage = lazy(() => import('./pages/learn/LearnPage'));
export const TopicPage = lazy(() => import('./pages/learn/TopicPage'));
export const PracticePage = lazy(() => import('./pages/practice/PracticePage'));
export const PracticeGatewayPage = lazy(() => import('./pages/practice/PracticeGatewayPage'));
export const PracticeQuestionPage = lazy(() => import('./pages/practice/PracticeQuestionPage'));
export const PracticeLessonCompletePage = lazy(() => import('./pages/practice/PracticeLessonCompletePage'));
export const CompilerPage = lazy(() => import('./pages/compiler/CompilerPage'));
export const QuizzesPage = lazy(() => import('./pages/quizzes/QuizzesPage'));
export const LeaderboardPage = lazy(() => import('./pages/leaderboard/LeaderboardPage'));
export const CertificatesPage = lazy(() => import('./pages/certificates/CertificatesPage'));
export const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
export const NotificationsPage = lazy(() => import('./pages/notifications/NotificationsPage'));

// ----- Error Pages -----
export const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// ----- Assessment Pages -----
export const AssessmentLandingPage = lazy(() => import('./pages/assessment/AssessmentLandingPage'));
export const AssessmentObjectivePage = lazy(() => import('./pages/assessment/AssessmentObjectivePage'));
export const AssessmentProgrammingPage = lazy(() => import('./pages/assessment/AssessmentProgrammingPage'));
export const AssessmentProjectPage = lazy(() => import('./pages/assessment/AssessmentProjectPage'));
export const AssessmentResultPage = lazy(() => import('./pages/assessment/AssessmentResultPage'));

/**
 * Public routes (Auth only for SRKR) — rendered standalone (full-screen)
 */
export const publicRoutes = [
  { path: '/', element: LoginPage, title: 'Log In' },
  { path: '/register', element: RegisterPage, title: 'Sign Up' },
  { path: '/forgot-password', element: ForgotPasswordPage, title: 'Forgot Password' },
  { path: '/reset-password', element: ResetPasswordPage, title: 'Reset Password' },
];

/**
 * Protected routes — rendered inside AppLayout (Sidebar + TopNavbar)
 * All require authentication.
 */
export const protectedRoutes = [
  { path: '/dashboard', element: DashboardPage, title: 'Dashboard' },
  { path: '/learn', element: LearnPage, title: 'Learn C' },
  { path: '/learn/:topicId', element: TopicPage, title: 'Learn C Lesson' },
  { path: '/practice', element: PracticePage, title: 'Practice' },
  { path: '/practice/:topicId', element: PracticeGatewayPage, title: 'Practice Gateway' },
  { path: '/practice/:topicId/completed', element: PracticeLessonCompletePage, title: 'Practice Completed' },
  { path: '/practice/:topicId/:questionId', element: PracticeQuestionPage, title: 'Practice Question' },
  { path: '/compiler', element: CompilerPage, title: 'Compiler' },
  { path: '/quizzes', element: QuizzesPage, title: 'Quizzes' },
  { path: '/leaderboard', element: LeaderboardPage, title: 'Leaderboard' },
  { path: '/certificates', element: CertificatesPage, title: 'Certificates' },
  { path: '/profile', element: ProfilePage, title: 'Profile' },
  { path: '/notifications', element: NotificationsPage, title: 'Notifications' },
  { path: '/assessment/24', element: AssessmentLandingPage, title: 'Final Assessment' },
  { path: '/assessment/24/objective', element: AssessmentObjectivePage, title: 'Objective Assessment' },
  { path: '/assessment/24/programming', element: AssessmentProgrammingPage, title: 'Programming Assessment' },
  { path: '/assessment/24/project', element: AssessmentProjectPage, title: 'Practical Project' },
  { path: '/assessment/24/result', element: AssessmentResultPage, title: 'Assessment Result' },
];

/**
 * CPL — Breadcrumb Component
 * Auto-generates breadcrumb from current route path.
 */

import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// Map route segments to display labels
const SEGMENT_LABELS = {
  dashboard: 'Dashboard',
  learn: 'Learn C',
  practice: 'Practice',
  compiler: 'Compiler',
  quizzes: 'Quizzes',
  leaderboard: 'Leaderboard',
  certificates: 'Certificates',
  profile: 'Profile',
  notifications: 'Notifications',
  features: 'Features',
  about: 'About',
  login: 'Login',
  register: 'Register',
  'forgot-password': 'Forgot Password',
  'reset-password': 'Reset Password',
};

export default function Breadcrumb({ items, className = '' }) {
  const location = useLocation();

  // Auto-generate from path if items not provided
  const crumbs = items || generateFromPath(location.pathname);

  if (crumbs.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm ${className}`}
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={crumb.path} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight size={14} className="text-dark-600" />
            )}

            {isLast ? (
              <span className="text-dark-300 font-medium">{crumb.label}</span>
            ) : (
              <Link
                to={crumb.path}
                className="text-dark-500 hover:text-primary-400 transition-colors"
              >
                {index === 0 ? (
                  <span className="flex items-center gap-1">
                    <Home size={14} />
                    <span className="hidden sm:inline">{crumb.label}</span>
                  </span>
                ) : (
                  crumb.label
                )}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

function generateFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'Home', path: '/dashboard' }];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = SEGMENT_LABELS[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label, path: currentPath });
  }

  return crumbs;
}

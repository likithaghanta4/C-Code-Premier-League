/**
 * CPL — ProtectedRoute Component
 * Wraps protected routes — redirects to /login if not authenticated.
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { PageLoader } from '../common';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Show loader while checking auth state
  if (loading) {
    return <PageLoader />;
  }

  // Redirect to login with return URL
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

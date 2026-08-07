/**
 * CPL — Root Application Component
 * Two-layout routing system:
 *   - Standalone: Auth pages (Login, Register)
 *   - AppLayout: Dashboard + all protected student pages (with Sidebar + TopNavbar)
 */

import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { PageLoader } from './components/common';
import AppLayout from './components/layout/AppLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { publicRoutes, protectedRoutes, NotFoundPage } from './router';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
      <AuthProvider>
        <Routes>
          {/* ===== Public Routes (Standalone Auth Pages) ===== */}
          {publicRoutes.map((route) => {
            const Element = route.element;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Element />
                  </Suspense>
                }
              />
            );
          })}

          {/* ===== Protected Routes (AppLayout: Sidebar + TopNavbar) ===== */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {protectedRoutes.map((route) => {
              const Element = route.element;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Suspense fallback={<PageLoader />}>
                      <Element />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>

          {/* ===== 404 ===== */}
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>

        {/* Global Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

/**
 * CPL — Sidebar Component
 * Professional collapsible sidebar with menu items, active highlight, and responsive behavior.
 */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  Terminal,
  HelpCircle,
  Trophy,
  Award,
  User,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES, APP_VERSION } from '../../utils/constants';
import Logo from '../common/Logo';

const menuItems = [
  { to: ROUTES.DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { to: ROUTES.LEARN, icon: BookOpen, label: 'Learn C' },
  { to: ROUTES.PRACTICE, icon: Code2, label: 'Practice' },
  { to: ROUTES.COMPILER, icon: Terminal, label: 'Compiler' },
  { to: ROUTES.QUIZZES, icon: HelpCircle, label: 'Quizzes' },
  { to: ROUTES.LEADERBOARD, icon: Trophy, label: 'Leaderboard' },
  { to: ROUTES.CERTIFICATES, icon: Award, label: 'Certificates' },
];

const bottomItems = [
  { to: ROUTES.PROFILE, icon: User, label: 'Profile' },
  { to: ROUTES.NOTIFICATIONS, icon: Bell, label: 'Notifications' },
];

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
    if (setMobileOpen) setMobileOpen(false);
  };

  const isActive = (path) => {
    if (path === ROUTES.DASHBOARD) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ item }) => {
    const active = isActive(item.to);
    return (
      <Link
        to={item.to}
        onClick={() => setMobileOpen && setMobileOpen(false)}
        title={collapsed ? item.label : undefined}
        className={`
          group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
          transition-all duration-200 relative
          ${
            active
              ? 'bg-primary-500/10 text-primary-400'
              : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
          }
        `}
      >
        {/* Active indicator */}
        {active && (
          <motion.div
            layoutId="sidebar-active"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-primary-500"
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        )}

        <item.icon
          size={20}
          className={`flex-shrink-0 ${
            active ? 'text-primary-400' : 'text-dark-500 group-hover:text-dark-300'
          }`}
        />

        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </Link>
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-dark-700/30">
        {!collapsed ? (
          <Logo size="sm" />
        ) : (
          <div className="mx-auto">
            <Logo size="sm" showText={false} />
          </div>
        )}

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex p-1.5 rounded-lg text-dark-500 hover:text-dark-300 hover:bg-dark-800/50 transition-all"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Close button (mobile only) */}
        {mobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-dark-500 hover:text-dark-300 hover:bg-dark-800/50 transition-all"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Main Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
      </nav>

      {/* Divider */}
      <div className="mx-4 border-t border-dark-700/30" />

      {/* Bottom Menu */}
      <nav className="px-3 py-3 space-y-1">
        {bottomItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          title={collapsed ? 'Logout' : undefined}
          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
            text-dark-400 hover:text-error-400 hover:bg-error-500/5 transition-all duration-200 w-full"
        >
          <LogOut
            size={20}
            className="flex-shrink-0 text-dark-500 group-hover:text-error-400"
          />
          {!collapsed && <span>Logout</span>}
        </button>
      </nav>

      {/* Version */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-dark-700/30">
          <p className="text-[10px] text-dark-600 font-mono">CPL v{APP_VERSION}</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 256 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="hidden lg:flex flex-col h-screen sticky top-0 glass-strong border-r border-dark-700/30 z-30 overflow-hidden"
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-[280px] glass-strong border-r border-dark-700/30 z-50 overflow-hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * CPL — TopNavbar Component
 * Dashboard top navigation bar with search, notifications, and profile menu.
 */

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import NotificationBell from '../common/NotificationBell';
import ProfileMenu from '../common/ProfileMenu';

export default function TopNavbar({ onMenuClick }) {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-20 glass-strong border-b border-dark-700/30"
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-dark-400 hover:text-dark-200 hover:bg-dark-800/50 transition-all"
            aria-label="Toggle sidebar"
          >
            <Menu size={22} />
          </button>

          {/* Search */}
          <SearchBar className="hidden sm:block" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Mobile Search (compact) */}
          <SearchBar className="sm:hidden" placeholder="Search..." />

          {/* Notifications */}
          <NotificationBell count={3} />

          {/* Profile */}
          <ProfileMenu />
        </div>
      </div>
    </motion.header>
  );
}

/**
 * CPL — ProfileMenu Component
 * Avatar with initials and dropdown menu (Profile, Settings, Certificates, Logout).
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Award,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';
import { getInitials } from '../../utils/helpers';

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    navigate('/');
  };

  const menuItems = [
    { to: ROUTES.PROFILE, icon: User, label: 'My Profile' },
    { to: ROUTES.CERTIFICATES, icon: Award, label: 'Certificates' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-dark-800/50 transition-all"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center shadow-md">
          <span className="text-xs font-bold text-white">
            {getInitials(user?.fullName)}
          </span>
        </div>

        {/* Name (hidden on small screens) */}
        <span className="hidden lg:block text-sm text-dark-300 max-w-[100px] truncate">
          {user?.fullName || 'Student'}
        </span>

        <ChevronDown
          size={14}
          className={`hidden lg:block text-dark-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 glass-strong rounded-xl shadow-elevated overflow-hidden z-50"
          >
            {/* User Info */}
            <div className="px-4 py-3 border-b border-dark-700/50">
              <p className="text-sm font-semibold text-dark-200 truncate">
                {user?.fullName || 'Student'}
              </p>
              <p className="text-xs text-dark-500 truncate mt-0.5">
                {user?.email || 'student@cpl.com'}
              </p>
            </div>

            {/* Menu Items */}
            <div className="py-1.5">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-dark-300 hover:text-dark-100 hover:bg-dark-800/30 transition-all"
                >
                  <item.icon size={16} className="text-dark-500" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Logout */}
            <div className="border-t border-dark-700/50 py-1.5">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-error-400 hover:bg-dark-800/30 transition-all w-full"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

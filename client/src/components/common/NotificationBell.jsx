/**
 * CPL — NotificationBell Component
 * Bell icon with badge count and dropdown preview (UI only).
 */

import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { notificationService } from '../../services/notification.service';
import { useLocation } from 'react-router-dom';

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [recentNotifications, setRecentNotifications] = useState([]);
  const dropdownRef = useRef(null);
  const location = useLocation();

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

  // Fetch data
  const fetchNotificationData = async () => {
    try {
      const data = await notificationService.getNotifications();
      if (data.success) {
        setUnreadCount(data.unreadCount || data.data.filter(n => !n.isRead).length);
        // Show up to 4 recent notifications in dropdown
        setRecentNotifications(data.data.slice(0, 4));
      }
    } catch (err) {
      console.error('Failed to fetch bell notifications:', err);
    }
  };

  useEffect(() => {
    fetchNotificationData();
  }, [location.pathname]); // Re-fetch on route change (e.g., when they mark read in the Notifications page)

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg text-dark-400 hover:text-dark-200 hover:bg-dark-800/50 transition-all"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center px-1 rounded-full bg-error-500 text-white text-[10px] font-bold"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.span>
        )}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-80 glass-strong rounded-xl shadow-elevated overflow-hidden z-50"
          >
                  <div className="flex justify-between items-center px-4 py-3 border-b border-dark-700/50 bg-dark-800/80">
                    <h3 className="text-sm font-bold text-dark-100">Notifications</h3>
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-bold bg-primary-900/40 text-primary-400 px-2 py-0.5 rounded-full">
                        {unreadCount} New
                      </span>
                    )}
                  </div>

                  {/* List */}
                  <div className="max-h-[300px] overflow-y-auto">
                    {recentNotifications.length > 0 ? (
                      recentNotifications.map((notif) => (
                        <Link
                          key={notif._id}
                          to="/notifications"
                          onClick={() => setIsOpen(false)}
                          className={`block p-4 border-b border-dark-700/50 hover:bg-dark-700/30 transition-colors ${
                            !notif.isRead ? 'bg-primary-900/10' : ''
                          }`}
                        >
                          <div className="flex gap-3">
                            <div className="mt-0.5 relative">
                              <Bell size={16} className={!notif.isRead ? 'text-primary-400' : 'text-dark-500'} />
                              {!notif.isRead && (
                                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-500 rounded-full border border-dark-800"></span>
                              )}
                            </div>
                            <div>
                              <p className={`text-sm mb-1 ${!notif.isRead ? 'text-dark-100 font-semibold' : 'text-dark-300'}`}>
                                {notif.title}
                              </p>
                              <p className="text-xs text-dark-400 line-clamp-1">{notif.description}</p>
                              <p className="text-[10px] text-dark-500 mt-2 font-medium">
                                {new Date(notif.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="py-8 text-center text-dark-400 text-sm">
                        No notifications yet
                      </div>
                    )}
                  </div>

                  {/* Footer */}
            <Link
              to={ROUTES.NOTIFICATIONS}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-center text-xs font-medium text-primary-400 hover:bg-dark-800/30 transition-colors border-t border-dark-700/50"
            >
              View All Notifications
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

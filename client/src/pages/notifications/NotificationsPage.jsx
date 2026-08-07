import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageWrapper, PageLoader } from '../../components/common';
import PageHeader from '../../components/common/PageHeader';
import { GlassCard } from '../../components/ui';
import { notificationService } from '../../services/notification.service';
import { 
  Bell, CheckCheck, Trash2, Search, Filter,
  BookOpen, Code2, GraduationCap, Award, Flame, Trophy, Coins, Settings,
  AlertCircle
} from 'lucide-react';
import { toast } from 'react-toastify';

const CATEGORY_ICONS = {
  Learning: BookOpen,
  Practice: Code2,
  Assessment: GraduationCap,
  Certificates: Award,
  Streak: Flame,
  Leaderboard: Trophy,
  Rewards: Coins,
  System: Settings
};

const CATEGORY_COLORS = {
  Learning: 'text-primary-400 bg-primary-900/20',
  Practice: 'text-secondary-400 bg-secondary-900/20',
  Assessment: 'text-accent-400 bg-accent-900/20',
  Certificates: 'text-warning-400 bg-warning-900/20',
  Streak: 'text-error-400 bg-error-900/20',
  Leaderboard: 'text-warning-500 bg-warning-900/20',
  Rewards: 'text-success-400 bg-success-900/20',
  System: 'text-dark-300 bg-dark-700'
};

const ALL_CATEGORIES = ['All', 'Learning', 'Practice', 'Assessment', 'Certificates', 'Streak', 'Leaderboard', 'Rewards', 'System'];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest First'); // Newest First, Oldest First, Unread First
  const [showConfirmDeleteAll, setShowConfirmDeleteAll] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await notificationService.getNotifications();
      if (data.success) {
        setNotifications(data.data);
      }
    } catch (err) {
      toast.error('Failed to load notifications');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await notificationService.markAsRead(id);
      setNotifications(prev => prev.map(n => n._id === id ? { ...n, isRead: true } : n));
    } catch (err) {
      toast.error('Failed to mark notification as read');
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      toast.success('All notifications marked as read');
    } catch (err) {
      toast.error('Failed to mark all as read');
    }
  };

  const handleDelete = async (id) => {
    try {
      await notificationService.deleteNotification(id);
      setNotifications(prev => prev.filter(n => n._id !== id));
      toast.success('Notification deleted');
    } catch (err) {
      toast.error('Failed to delete notification');
    }
  };

  const handleDeleteAll = async () => {
    try {
      await notificationService.deleteAllNotifications();
      setNotifications([]);
      setShowConfirmDeleteAll(false);
      toast.success('All notifications deleted');
    } catch (err) {
      toast.error('Failed to delete notifications');
    }
  };

  // Filter and Sort logic
  const filteredAndSortedNotifications = useMemo(() => {
    let result = [...notifications];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(n => 
        n.title.toLowerCase().includes(query) || 
        n.description.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(n => n.category === selectedCategory);
    }

    // Sort
    result.sort((a, b) => {
      if (sortOrder === 'Newest First') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOrder === 'Oldest First') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortOrder === 'Unread First') {
        if (a.isRead === b.isRead) {
          return new Date(b.createdAt) - new Date(a.createdAt); // Secondary sort newest
        }
        return a.isRead ? 1 : -1;
      }
      return 0;
    });

    return result;
  }, [notifications, searchQuery, selectedCategory, sortOrder]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (loading) return <PageLoader />;

  return (
    <PageWrapper>
      <PageHeader
        title="Notifications"
        description="Stay updated with your latest achievements and platform activity."
        icon={Bell}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar / Filters */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <GlassCard padding="p-5">
            <h3 className="text-sm font-bold text-dark-200 uppercase tracking-wider mb-4">Filters</h3>
            
            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-600 rounded-xl text-sm text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-400 mb-2">Sort By</label>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full px-4 py-2 bg-dark-800 border border-dark-600 rounded-xl text-sm text-dark-100 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer appearance-none"
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Oldest First">Oldest First</option>
                  <option value="Unread First">Unread First</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-dark-400 mb-2">Categories</label>
              <div className="flex flex-wrap gap-2">
                {ALL_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === cat 
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50' 
                        : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="p-5">
            <h3 className="text-sm font-bold text-dark-200 uppercase tracking-wider mb-4">Bulk Actions</h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleMarkAllAsRead}
                disabled={unreadCount === 0}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  unreadCount > 0 
                    ? 'bg-dark-700 text-dark-100 hover:bg-dark-600 hover:text-white' 
                    : 'bg-dark-800 text-dark-500 cursor-not-allowed'
                }`}
              >
                <CheckCheck size={16} /> Mark All as Read
              </button>
              
              {!showConfirmDeleteAll ? (
                <button 
                  onClick={() => setShowConfirmDeleteAll(true)}
                  disabled={notifications.length === 0}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    notifications.length > 0 
                      ? 'bg-error-900/20 text-error-400 hover:bg-error-900/40 hover:text-error-300' 
                      : 'bg-dark-800 text-dark-500 cursor-not-allowed'
                  }`}
                >
                  <Trash2 size={16} /> Delete All Notifications
                </button>
              ) : (
                <div className="p-3 bg-error-900/20 rounded-xl border border-error-500/30 flex flex-col gap-3">
                  <p className="text-xs text-error-400 text-center">Are you sure? This action cannot be undone.</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setShowConfirmDeleteAll(false)}
                      className="flex-1 py-1.5 bg-dark-700 rounded-lg text-xs font-medium text-dark-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleDeleteAll}
                      className="flex-1 py-1.5 bg-error-600 rounded-lg text-xs font-bold text-white hover:bg-error-500"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </GlassCard>
        </div>

        {/* Notifications List */}
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          
          <div className="flex justify-between items-center px-2">
            <h2 className="text-lg font-bold text-dark-100 flex items-center gap-2">
              Inbox
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-primary-600 text-white text-xs font-bold">
                  {unreadCount} Unread
                </span>
              )}
            </h2>
            <span className="text-sm text-dark-400">{filteredAndSortedNotifications.length} Results</span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredAndSortedNotifications.length > 0 ? (
              filteredAndSortedNotifications.map((notification, index) => {
                const Icon = CATEGORY_ICONS[notification.category] || Bell;
                const colors = CATEGORY_COLORS[notification.category] || CATEGORY_COLORS.System;
                
                return (
                  <motion.div
                    key={notification._id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index < 10 ? index * 0.05 : 0 }}
                  >
                    <GlassCard 
                      padding="p-0" 
                      className={`relative overflow-hidden transition-all duration-300 ${!notification.isRead ? 'border-primary-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-dark-700/50'}`}
                    >
                      {/* Unread Indicator Bar */}
                      {!notification.isRead && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500"></div>
                      )}
                      
                      <div className="p-5 flex flex-col sm:flex-row gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors}`}>
                          <Icon size={20} />
                        </div>
                        
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                            <h3 className={`text-base font-bold truncate ${!notification.isRead ? 'text-white' : 'text-dark-200'}`}>
                              {notification.title}
                            </h3>
                            <span className="text-xs font-medium text-dark-400 whitespace-nowrap">
                              {new Date(notification.createdAt).toLocaleString('en-IN', { 
                                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' 
                              })}
                            </span>
                          </div>
                          
                          <p className={`text-sm leading-relaxed mb-3 ${!notification.isRead ? 'text-dark-200' : 'text-dark-400'}`}>
                            {notification.description}
                          </p>
                          
                          <div className="flex items-center justify-between mt-auto">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${colors.replace('bg-', 'border-').replace('/20', '/30')}`}>
                              {notification.category}
                            </span>
                            
                            <div className="flex items-center gap-2">
                              {!notification.isRead && (
                                <button 
                                  onClick={() => handleMarkAsRead(notification._id)}
                                  className="text-xs font-medium text-primary-400 hover:text-primary-300 flex items-center gap-1"
                                >
                                  <CheckCheck size={14} /> Mark Read
                                </button>
                              )}
                              <button 
                                onClick={() => handleDelete(notification._id)}
                                className="p-1.5 text-dark-500 hover:text-error-400 bg-dark-800 hover:bg-error-900/20 rounded-md transition-colors ml-2"
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-dark-800/50 flex items-center justify-center mb-6 border border-dark-700">
                  <Bell size={40} className="text-dark-500" />
                </div>
                <h3 className="text-xl font-bold text-dark-200 mb-2">No notifications yet</h3>
                <p className="text-dark-400 max-w-sm">
                  {searchQuery || selectedCategory !== 'All' 
                    ? "We couldn't find any notifications matching your filters."
                    : "You're all caught up! When there's activity on your account, it will show up here."}
                </p>
                {(searchQuery || selectedCategory !== 'All') && (
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSortOrder('Newest First'); }}
                    className="mt-6 px-6 py-2 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-xl transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
}

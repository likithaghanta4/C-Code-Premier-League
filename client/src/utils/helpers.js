/**
 * CPL — Utility Helpers
 * Reusable formatting and helper functions.
 */

/**
 * Format a number with commas (e.g. 1000 → "1,000")
 */
export function formatNumber(num) {
  if (num == null) return '0';
  return num.toLocaleString('en-IN');
}

/**
 * Format XP display (e.g. 1500 → "1.5K XP")
 */
export function formatXP(xp) {
  if (xp == null) return '0 XP';
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1).replace(/\.0$/, '')}K XP`;
  }
  return `${xp} XP`;
}

/**
 * Get initials from a name (e.g. "John Doe" → "JD")
 */
export function getInitials(name) {
  if (!name) return '?';
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate a greeting based on time of day
 */
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

/**
 * Calculate percentage
 */
export function calcPercentage(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

/**
 * Debounce a function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Generate a random color from the CPL palette
 */
export function getRandomColor() {
  const colors = [
    'from-primary-500 to-primary-700',
    'from-secondary-500 to-secondary-700',
    'from-accent-500 to-accent-700',
    'from-primary-500 to-accent-500',
    'from-secondary-500 to-primary-500',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Sleep utility for animations
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format date relative (e.g. "2 hours ago")
 */
export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);

  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return past.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

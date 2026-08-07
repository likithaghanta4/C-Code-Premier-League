/**
 * CPL — ProgressBar Component
 * Animated progress bar with gradient fill and percentage label.
 */

import { motion } from 'framer-motion';

export default function ProgressBar({
  value = 0,
  max = 100,
  label,
  showPercent = true,
  size = 'md',
  gradient = 'from-primary-500 to-secondary-500',
  className = '',
}) {
  const percent = Math.min(Math.round((value / max) * 100), 100);

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label & Percentage */}
      {(label || showPercent) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-sm text-dark-300 font-medium">{label}</span>
          )}
          {showPercent && (
            <span className="text-sm text-dark-400 font-mono">{percent}%</span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        className={`w-full ${heights[size]} rounded-full bg-dark-800 overflow-hidden`}
      >
        {/* Fill */}
        <motion.div
          className={`${heights[size]} rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

/**
 * CPL — Loader Component
 * Full-page and inline loading spinners with CPL branding.
 */

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

/**
 * Full-page loader with animated logo
 */
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated Logo */}
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shadow-lg">
            <Code2 size={32} className="text-white" />
          </div>
          <div className="absolute inset-0 rounded-2xl gradient-hero blur-xl opacity-30" />
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-semibold gradient-text">Loading CPL</span>
          <LoadingDots />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Inline loader spinner
 */
export function Spinner({ size = 24, className = '' }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-primary-500"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-20"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Animated loading dots
 */
export function LoadingDots() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-primary-500"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Section loader (for lazy-loaded sections)
 */
export function SectionLoader({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <Spinner size={32} />
      <span className="text-sm text-dark-400">{text}</span>
    </div>
  );
}

export default PageLoader;

/**
 * CPL — PageWrapper Component
 * Provides consistent page layout with entrance/exit animations.
 */

import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
    },
  },
};

export default function PageWrapper({
  children,
  className = '',
  maxWidth = 'max-w-7xl',
  padding = 'px-4 sm:px-6 lg:px-8 py-8',
}) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${maxWidth} mx-auto w-full ${padding} ${className}`}
    >
      {children}
    </motion.main>
  );
}

/**
 * Animated child wrapper — use inside PageWrapper for staggered entrance
 */
export function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

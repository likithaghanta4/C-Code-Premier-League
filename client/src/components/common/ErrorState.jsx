/**
 * CPL — ErrorState Component
 * Reusable error display with retry button.
 */

import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from './Button';

export default function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  onRetry,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
    >
      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-error-500/10 border border-error-500/20 flex items-center justify-center mb-6">
        <AlertTriangle size={36} className="text-error-400" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-dark-300 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-dark-500 max-w-sm mb-6">{description}</p>

      {/* Retry Button */}
      {onRetry && (
        <Button variant="outline" size="sm" icon={RefreshCw} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </motion.div>
  );
}

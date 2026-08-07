/**
 * CPL — EmptyState Component
 * Reusable empty state with icon, title, description, and optional CTA.
 */

import { motion } from 'framer-motion';
import { Inbox } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Content will appear here once available.',
  actionLabel,
  onAction,
  actionIcon,
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
      <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6">
        <Icon size={36} className="text-dark-500" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-dark-300 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-dark-500 max-w-sm mb-6">{description}</p>

      {/* Optional Action */}
      {actionLabel && onAction && (
        <Button variant="outline" size="sm" icon={actionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}

/**
 * CPL — PageHeader Component
 * Consistent page header with title, description, breadcrumb, and optional action.
 */

import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

export default function PageHeader({
  title,
  description,
  icon: Icon,
  action,
  breadcrumbItems,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-8 ${className}`}
    >
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} className="mb-4" />

      {/* Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2.5 rounded-xl gradient-hero shadow-lg">
              <Icon size={24} className="text-white" />
            </div>
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-dark-100">
              {title}
            </h1>
            {description && (
              <p className="text-sm text-dark-400 mt-1">{description}</p>
            )}
          </div>
        </div>

        {/* Optional Action Button */}
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    </motion.div>
  );
}

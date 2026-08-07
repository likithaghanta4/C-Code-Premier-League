/**
 * CPL — Button Component
 * Premium button with multiple variants, sizes, loading state, and icons.
 */

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-primary-500/25',
  secondary:
    'bg-secondary-600 hover:bg-secondary-500 text-white shadow-lg hover:shadow-secondary-500/25',
  accent:
    'bg-accent-600 hover:bg-accent-500 text-white shadow-lg hover:shadow-accent-500/25',
  outline:
    'border border-dark-600 hover:border-primary-500 text-dark-200 hover:text-primary-400 bg-transparent hover:bg-primary-500/5',
  ghost:
    'text-dark-300 hover:text-dark-100 hover:bg-dark-800/50 bg-transparent',
  danger:
    'bg-error-600 hover:bg-error-500 text-white shadow-lg hover:shadow-error-500/25',
  gradient:
    'gradient-hero text-white shadow-lg hover:opacity-90',
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  sm: 'px-4 py-2 text-sm rounded-lg gap-2',
  md: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
  xl: 'px-8 py-4 text-lg rounded-xl gap-3',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`
        inline-flex items-center justify-center font-semibold
        transition-all duration-200 ease-out
        focus-ring cursor-pointer
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : Icon ? (
        <Icon size={16} />
      ) : null}

      {children}

      {IconRight && !loading && <IconRight size={16} />}
    </motion.button>
  );
}

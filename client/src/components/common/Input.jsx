/**
 * CPL — Input Component
 * Styled form input with label, error state, icon support, and animations.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  disabled = false,
  required = false,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`space-y-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-dark-300"
        >
          {label}
          {required && <span className="text-error-400 ml-1">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        {/* Left Icon */}
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500">
            <Icon size={18} />
          </div>
        )}

        {/* Input Field */}
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-2.5 rounded-lg text-sm
            bg-dark-800/80 text-dark-100 placeholder-dark-500
            border transition-all duration-200 outline-none
            ${Icon ? 'pl-10' : ''}
            ${isPassword ? 'pr-10' : ''}
            ${
              error
                ? 'border-error-500/50 focus:border-error-500 focus:ring-1 focus:ring-error-500/20'
                : isFocused
                  ? 'border-primary-500/50 ring-1 ring-primary-500/20'
                  : 'border-dark-600/50 hover:border-dark-500'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-300 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-xs text-error-400"
          >
            <AlertCircle size={14} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

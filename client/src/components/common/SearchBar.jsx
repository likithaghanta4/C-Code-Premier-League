/**
 * CPL — SearchBar Component
 * Glassmorphism search input (UI only — no logic).
 */

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar({ className = '', placeholder = 'Search CPL...' }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg text-sm
          transition-all duration-200
          ${
            isFocused
              ? 'glass border-primary-500/30 ring-1 ring-primary-500/20 w-64'
              : 'glass-light w-48 lg:w-56'
          }
        `}
      >
        <Search
          size={16}
          className={`flex-shrink-0 transition-colors ${
            isFocused ? 'text-primary-400' : 'text-dark-500'
          }`}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-dark-200 placeholder-dark-500 outline-none"
        />

        {/* Clear Button */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setQuery('')}
              className="flex-shrink-0 text-dark-500 hover:text-dark-300 transition-colors"
            >
              <X size={14} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Keyboard Shortcut Hint */}
        {!isFocused && !query && (
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] text-dark-600 bg-dark-800/60 border border-dark-700/50 font-mono">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}

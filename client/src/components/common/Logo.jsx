/**
 * CPL — Logo Component
 * Brand logo with animated gradient icon and text.
 */

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Logo({ size = 'md', showText = true, className = '' }) {
  const sizes = {
    sm: { icon: 20, text: 'text-lg', gap: 'gap-2' },
    md: { icon: 28, text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 36, text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 48, text: 'text-3xl', gap: 'gap-4' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <motion.div
      className={`flex items-center ${s.gap} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Icon */}
      <div className="relative">
        <div className="gradient-hero rounded-lg p-1.5 shadow-lg">
          <Code2 size={s.icon} className="text-white" strokeWidth={2.5} />
        </div>
        {/* Glow effect behind icon */}
        <div className="absolute inset-0 gradient-hero rounded-lg blur-md opacity-40 -z-10" />
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold ${s.text} gradient-text tracking-tight`}>
            CPL
          </span>
          <span className="text-[0.6rem] text-dark-400 tracking-widest uppercase font-medium">
            Code Premier League
          </span>
        </div>
      )}
    </motion.div>
  );
}

/**
 * CPL — GlassCard Component
 * Premium glassmorphism card with hover glow and animation.
 */

import { motion } from 'framer-motion';

const glowColors = {
  primary: 'hover:shadow-primary-500/10',
  secondary: 'hover:shadow-secondary-500/10',
  accent: 'hover:shadow-accent-500/10',
  none: '',
};

export default function GlassCard({
  children,
  className = '',
  glow = 'primary',
  hover = true,
  padding = 'p-6',
  animate = true,
  onClick,
  ...props
}) {
  const Component = animate ? motion.div : 'div';

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: 'easeOut' },
        ...(hover && !onClick
          ? {}
          : {}),
      }
    : {};

  const hoverProps = hover
    ? {
        whileHover: { y: -2, transition: { duration: 0.2 } },
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={`
        glass rounded-xl ${padding}
        shadow-card transition-all duration-300
        ${hover ? `hover:shadow-card-hover ${glowColors[glow] || ''}` : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...animationProps}
      {...(animate && hover ? hoverProps : {})}
      {...props}
    >
      {children}
    </Component>
  );
}

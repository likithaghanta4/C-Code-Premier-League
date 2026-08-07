/**
 * CPL — AnimatedCounter Component
 * Smoothly animates a number from 0 to the target value.
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({
  value = 0,
  duration = 1.5,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const startTime = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(eased * value);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isInView, value, duration]);

  const formatted = decimals
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString('en-IN');

  return (
    <motion.span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}

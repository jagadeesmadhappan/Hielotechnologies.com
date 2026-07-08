'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/variants';

/** Scroll-triggered fade-up wrapper (in-view once). */
export function Reveal({
  children, delay = 0, className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

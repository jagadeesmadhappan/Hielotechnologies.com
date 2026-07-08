import type { Variants } from 'framer-motion';

/** Reusable Framer Motion variants for scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

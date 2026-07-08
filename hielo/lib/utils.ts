import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind-aware className combiner. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/** Linear interpolation. */
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Clamp a value into [min,max]. */
export const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

/** Map x from one range to another. */
export const mapRange = (
  x: number, inMin: number, inMax: number, outMin: number, outMax: number,
) => outMin + ((x - inMin) * (outMax - outMin)) / (inMax - inMin);

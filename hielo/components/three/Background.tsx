'use client';
import dynamic from 'next/dynamic';

/**
 * Client-only loader for the WebGL field. `ssr:false` keeps Three.js out of
 * the server bundle and the initial HTML, so the page paints instantly and
 * the 3D scene hydrates behind the loading overlay.
 */
const FieldCanvas = dynamic(
  () => import('./FieldCanvas').then((m) => m.FieldCanvas),
  { ssr: false },
);

export function Background() {
  return <FieldCanvas />;
}

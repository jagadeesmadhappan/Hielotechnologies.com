'use client';
import { Canvas } from '@react-three/fiber';
import { ResearchField } from './scenes/ResearchField';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Full-viewport fixed WebGL background. Pointer events pass through so the
 * page stays interactive. dpr is capped and frameloop pauses under reduced
 * motion to protect performance and respect user preference.
 */
export function FieldCanvas() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.8]}
        camera={{ fov: 52, position: [0, 0, 14], near: 0.1, far: 100 }}
        frameloop={reduced ? 'demand' : 'always'}
      >
        <ResearchField />
      </Canvas>
    </div>
  );
}

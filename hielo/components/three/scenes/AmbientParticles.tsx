'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AMBIENT = 1800;

/** Dim, slowly rotating particle volume that gives the scene depth. */
export function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(AMBIENT * 3);
    for (let i = 0; i < AMBIENT; i++) {
      const r = 8 + Math.random() * 22;
      const t = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(t) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(ph);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = -clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#9fb4d6" size={0.03} transparent opacity={0.5}
        depthWrite={false} blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

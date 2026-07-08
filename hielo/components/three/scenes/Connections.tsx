'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Dynamic links between nearby core nodes. Opacity pulses over time so the
 * network reads as "thinking". Segment count is capped to protect frame-rate.
 */
export function Connections({ nodes }: { nodes: THREE.Vector3[] }) {
  const matRef = useRef<THREE.LineBasicMaterial>(null);

  const positions = useMemo(() => {
    const segs: number[] = [];
    const MAX = 560;
    outer: for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceToSquared(nodes[j]) < 2.1) {
          segs.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
          if (segs.length / 3 > MAX) break outer;
        }
      }
    }
    return new Float32Array(segs);
  }, [nodes]);

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.opacity = 0.06 + 0.08 * (0.5 + 0.5 * Math.sin(clock.elapsedTime * 0.8));
    }
  });

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial
        ref={matRef}
        color="#2E8BFF"
        transparent
        opacity={0.12}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

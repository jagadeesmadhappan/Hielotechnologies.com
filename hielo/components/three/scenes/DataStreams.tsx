'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const STREAMS = 5;
const PER_STREAM = 14;

/**
 * Moving "data streams": clusters of points that travel along closed
 * Catmull-Rom curves, alternating blue/gold. Reads as information in flight.
 */
export function DataStreams() {
  const refs = useRef<THREE.BufferAttribute[]>([]);

  const streams = useMemo(() => {
    return Array.from({ length: STREAMS }, (_, s) => {
      const pts = Array.from({ length: 5 }, () =>
        new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 16,
        ),
      );
      return {
        curve: new THREE.CatmullRomCurve3(pts, true),
        arr: new Float32Array(PER_STREAM * 3),
        off: Math.random(),
        speed: 0.0002 + Math.random() * 0.0003,
        color: s % 2 ? '#D9B872' : '#2E8BFF',
      };
    });
  }, []);

  useFrame(() => {
    streams.forEach((st, i) => {
      st.off = (st.off + st.speed) % 1;
      for (let k = 0; k < PER_STREAM; k++) {
        const p = st.curve.getPointAt((st.off + k / PER_STREAM) % 1);
        st.arr[k * 3] = p.x; st.arr[k * 3 + 1] = p.y; st.arr[k * 3 + 2] = p.z;
      }
      const attr = refs.current[i];
      if (attr) attr.needsUpdate = true;
    });
  });

  return (
    <>
      {streams.map((st, i) => (
        <points key={i}>
          <bufferGeometry>
            <bufferAttribute
              ref={(r) => { if (r) refs.current[i] = r; }}
              attach="attributes-position"
              args={[st.arr, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            color={st.color} size={0.09} transparent opacity={0.8}
            depthWrite={false} blending={THREE.AdditiveBlending}
          />
        </points>
      ))}
    </>
  );
}

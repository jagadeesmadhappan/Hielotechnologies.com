'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { coreVertex, coreFragment } from '../shaders/coreShader';
import { Connections } from './Connections';

const COUNT = 1300;
const RADIUS = 4.6;

/**
 * The brand signature: a breathing sphere of intelligence.
 * Points are laid out on a jittered fibonacci sphere so the distribution
 * feels organic rather than gridded. A subset seeds the Connections mesh.
 */
export function NeuralCore({ disperse }: { disperse: React.MutableRefObject<number> }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, phase, tone, nodes } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const phase = new Float32Array(COUNT);
    const tone = new Float32Array(COUNT);
    const nodes: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      const j = 0.86 + Math.random() * 0.3;
      const x = Math.cos(th) * r * j * RADIUS;
      const Y = y * j * RADIUS;
      const z = Math.sin(th) * r * j * RADIUS;
      positions.set([x, Y, z], i * 3);
      phase[i] = Math.random() * Math.PI * 2;
      tone[i] = Math.random() < 0.16 ? 1 : 0;
      if (i % 4 === 0) nodes.push(new THREE.Vector3(x, Y, z));
    }
    return { positions, phase, tone, nodes };
  }, []);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uSize: { value: 90 }, uDisperse: { value: 0 } }),
    [],
  );

  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.elapsedTime;
    matRef.current.uniforms.uDisperse.value = Math.sin(disperse.current * Math.PI) * 0.5;
  });

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aphase" args={[phase, 1]} />
          <bufferAttribute attach="attributes-atone" args={[tone, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={coreVertex}
          fragmentShader={coreFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <Connections nodes={nodes} />
    </group>
  );
}

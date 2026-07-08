'use client';
import { useRef } from 'react';
import * as THREE from 'three';
import { NeuralCore } from './NeuralCore';
import { AmbientParticles } from './AmbientParticles';
import { DataStreams } from './DataStreams';
import { CameraRig } from '../CameraRig';
import { useFrame } from '@react-three/fiber';
import { useMousePosition } from '@/hooks/useMousePosition';

/**
 * Composes the full scene: rotating core group + ambient volume + streams,
 * driven by the CameraRig. The whole group also drifts and responds to the
 * pointer for a sense of a living environment.
 */
export function ResearchField() {
  const disperse = useRef(0);
  const group = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = t * 0.04 + mouse.current.x * 0.6;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.08 + mouse.current.y * 0.4;
  });

  return (
    <>
      <fogExp2 attach="fog" args={['#05070A', 0.055]} />
      <CameraRig disperse={disperse} />
      <group ref={group}>
        <NeuralCore disperse={disperse} />
      </group>
      <AmbientParticles />
      <DataStreams />
    </>
  );
}

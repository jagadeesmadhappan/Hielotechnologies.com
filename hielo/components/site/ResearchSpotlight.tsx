'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { DataStreams } from '@/components/three/scenes/DataStreams';
import { AmbientParticles } from '@/components/three/scenes/AmbientParticles';
import { NeuralCore } from '@/components/three/scenes/NeuralCore';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function SpotlightScene() {
  const group = useRef<THREE.Group>(null);
  const disperse = useRef(0.18);

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.16;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.12;
  });

  return (
    <>
      <color attach="background" args={['#070b15']} />
      <fogExp2 attach="fog" args={['#070b15', 0.07]} />
      <ambientLight intensity={0.6} />
      <group ref={group}>
        <NeuralCore disperse={disperse} />
      </group>
      <AmbientParticles />
      <DataStreams />
    </>
  );
}

export function ResearchSpotlight() {
  const reduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#070b15] shadow-[0_40px_100px_rgba(11,18,36,0.28)]">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#90b6ff]">AI visualization</p>
            <h3 className="mt-5 max-w-sm text-3xl font-medium tracking-[-0.04em] text-white lg:text-4xl">
              A contained dark showcase for the research engine.
            </h3>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#aeb7c8]">
              The site stays light-first overall, while HQRP moments use darker surfaces to frame
              visual depth, data density, and product seriousness.
            </p>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-[#c7cfde] sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#7e92b8]">Signal</p>
              <p className="mt-2 text-lg text-white">Pattern discovery</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#7e92b8]">Control</p>
              <p className="mt-2 text-lg text-white">Validation first</p>
            </div>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,166,255,0.18),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(226,192,124,0.16),_transparent_34%)]" />
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 12], fov: 45, near: 0.1, far: 100 }}
            gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
            frameloop={reduced ? 'demand' : 'always'}
          >
            <SpotlightScene />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
'use client';
import { useFrame } from '@react-three/fiber';
import { lerp } from '@/lib/utils';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useRef } from 'react';

/**
 * Cinematic camera. Scroll progress dollies the camera through the field
 * while the pointer adds gentle parallax. All values are smoothed each frame
 * so movement feels weighted rather than snappy.
 *
 * `disperse` is shared with the NeuralCore so the core "opens" mid-journey.
 */
export function CameraRig({ disperse }: { disperse: React.MutableRefObject<number> }) {
  const scroll = useScrollProgress();
  const mouse = useMousePosition();
  const smooth = useRef({ s: 0, mx: 0, my: 0 });

  useFrame(({ camera }) => {
    const st = smooth.current;
    st.s = lerp(st.s, scroll.current, 0.06);
    st.mx = lerp(st.mx, mouse.current.x, 0.05);
    st.my = lerp(st.my, mouse.current.y, 0.05);
    disperse.current = st.s;

    camera.position.set(
      Math.sin(st.s * Math.PI * 1.2) * 2.6 + st.mx * 1.2,
      lerp(0, 1.4, st.s) - st.my * 1.0,
      lerp(14, 7.5, st.s),
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

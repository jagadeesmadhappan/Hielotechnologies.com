/**
 * GLSL for the neural core points.
 * - Per-point phase drives breathing + twinkle.
 * - `uDisperse` (scroll-driven) opens the core up as the camera travels.
 * - `atone` mixes each point between electric-blue and gold.
 */
export const coreVertex = /* glsl */ `
  attribute float aphase;
  attribute float atone;
  uniform float uTime;
  uniform float uSize;
  uniform float uDisperse;
  varying float vTone;
  varying float vTw;
  void main() {
    vTone = atone;
    vec3 p = position;
    float br = 1.0 + 0.05 * sin(uTime * 0.6 + aphase);
    p *= br * (1.0 + uDisperse * 0.6);
    p += normalize(p) * sin(uTime * 0.5 + aphase) * 0.12;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float tw = 0.55 + 0.45 * sin(uTime * 1.6 + aphase);
    vTw = tw;
    gl_PointSize = uSize * (0.5 + tw) * (1.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

export const coreFragment = /* glsl */ `
  precision mediump float;
  varying float vTone;
  varying float vTw;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    vec3 blue = vec3(0.18, 0.55, 1.0);
    vec3 gold = vec3(0.85, 0.72, 0.45);
    vec3 col = mix(blue, gold, vTone);
    gl_FragColor = vec4(col, a * vTw * 0.9);
  }
`;

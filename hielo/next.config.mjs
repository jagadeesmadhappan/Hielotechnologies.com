/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three / drei ship ESM that Next transpiles cleanly
  transpilePackages: ['three'],
  experimental: { optimizePackageImports: ['@react-three/drei', 'framer-motion'] },
};
export default nextConfig;

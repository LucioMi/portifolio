import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  turbopack: {
    // Define explicit root to silence workspace root inference warning
    root: __dirname,
  },
} satisfies NextConfig;

export default nextConfig;

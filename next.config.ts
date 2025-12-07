import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Modern image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dropithere.nishul.dev',
      },
      {
        protocol: 'https',
        hostname: 'www.nishul.dev',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Production optimizations
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;

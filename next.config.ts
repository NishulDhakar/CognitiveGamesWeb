import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Modern image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dropithere.nishul.dev",
      },
      {
        protocol: "https",
        hostname: "www.nishul.dev",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
          exclude: ["error", "warn"],
        }
        : false,
  },

  // Production optimizations
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-icons",
    ],
  },

  // ✅ 301 REDIRECTS — Preserve SEO juice from old URLs
  async redirects() {
    return [
      // Route casing fixes
      {
        source: "/Leaderboard",
        destination: "/leaderboard",
        permanent: true,
      },
      // SEO Keyword Cannibalization fixes
      {
        source: "/capgemini",
        destination: "/capgemini-games",
        permanent: true,
      },
      {
        source: "/capgemini-cognitive-ability-games",
        destination: "/capgemini-games",
        permanent: true,
      },
      // Play route casing fixes
      {
        source: "/play/Switchchallenge",
        destination: "/play/SwitchChallenge",
        permanent: true,
      },
      {
        source: "/play/Switchchallenge/:path*",
        destination: "/play/Switchchallenge/:path*",
        permanent: true,
      },
      {
        source: "/play/Gridchallenge",
        destination: "/play/Gridchallenge",
        permanent: true,
      },
      {
        source: "/play/Gridchallenge/:path*",
        destination: "/play/Gridchallenge/:path*",
        permanent: true,
      },
      {
        source: "/play/Digitchallenge",
        destination: "/play/Digitchallenge",
        permanent: true,
      },
      {
        source: "/play/Digitchallenge/:path*",
        destination: "/play/Digitchallenge/:path*",
        permanent: true,
      },
      {
        source: "/play/Motionchallenge",
        destination: "/play/Motionchallenge",
        permanent: true,
      },
      {
        source: "/play/Motionchallenge/:path*",
        destination: "/play/Motionchallenge/:path*",
        permanent: true,
      },
      {
        source: "/play/Inductivechallenge",
        destination: "/play/Inductivechallenge",
        permanent: true,
      },
      {
        source: "/play/Inductivechallenge/:path*",
        destination: "/play/Inductivechallenge/:path*",
        permanent: true,
      },
      {
        source: "/play/Deductivechallenge",
        destination: "/play/Deductivechallenge",
        permanent: true,
      },
      {
        source: "/play/Deductivechallenge/:path*",
        destination: "/play/Deductivechallenge/:path*",
        permanent: true,
      },
      // Rules route casing fixes
      {
        source: "/rules/Grid-Challenge",
        destination: "/rules/grid-challenge",
        permanent: true,
      },
      {
        source: "/rules/Swith-challenge",
        destination: "/rules/switch-challenge",
        permanent: true,
      },
      {
        source: "/rules/Inductive-Challenge",
        destination: "/rules/inductive-challenge",
        permanent: true,
      },
      {
        source: "/rules/Motion-Challenge",
        destination: "/rules/motion-challenge",
        permanent: true,
      },
      // Memory game route fixes
      {
        source: "/memory-game/:path*",
        destination: "/memory-games/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

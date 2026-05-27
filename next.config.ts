import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      // Force non-www → www (or inverse — adjust to your DNS setup)
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.karria.fr" }],
        destination: "https://karria.fr/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Security + SEO headers on all routes
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // HSTS — tells browsers to always use HTTPS for 2 years
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Long-lived cache for immutable Next.js static assets (_next/static)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache public images, fonts, icons for 30 days
        source: "/(favicon.*|logo.*|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp|.*\\.avif|.*\\.woff2?)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

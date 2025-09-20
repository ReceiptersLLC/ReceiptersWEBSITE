import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  
  // Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // i18n configuration for client-side routing
  async headers() {
    return [
      {
        source: '/locales/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle static assets serving for translations
  async rewrites() {
    return [
      {
        source: '/locales/:path*',
        destination: '/locales/:path*',
      },
    ];
  },

  // Ensure proper static file handling
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
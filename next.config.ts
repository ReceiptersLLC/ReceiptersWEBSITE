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

  // Legal page aliases. App Store Connect / Play Console and the mobile apps
  // link the canonical paths below; these catch the other names people use.
  async redirects() {
    return [
      { source: '/terms-of-use', destination: '/terms-and-conditions', permanent: true },
      { source: '/terms', destination: '/terms-and-conditions', permanent: true },
      { source: '/eula', destination: '/terms-and-conditions', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
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
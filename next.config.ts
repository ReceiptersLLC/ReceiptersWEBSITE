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
      // getstateproof.com: strict browser security. See the Security section of its cookie notice.
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?getstateproof\\.com' }],
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'" },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()' },
        ],
      },
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
      // Feature detail pages are for signed-in users: send visitors to sign-in.
      { source: '/features', destination: '/login', permanent: false },
      { source: '/features/:path*', destination: '/login', permanent: false },
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
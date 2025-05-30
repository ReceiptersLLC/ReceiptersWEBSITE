import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  i18n,
  experimental: {
  },
};

export default nextConfig;
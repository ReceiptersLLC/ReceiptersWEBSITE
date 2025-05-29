import type {NextConfig} from "next";

import { i18n } from './next-i18next.config';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
        port: '',
      }
    ],
  },
  i18n,
};

export default nextConfig;

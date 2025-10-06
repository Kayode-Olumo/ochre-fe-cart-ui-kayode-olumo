import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1rgjmn2wmqeif.cloudfront.net',
        port: '',
        pathname: '/r/l/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'biomedica.net.pl',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'daim124-ux.github.io',
        pathname: '/biomedica/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

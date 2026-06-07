import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizacao de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/projects/**',
      },
      {
        pathname: '/profile/**',
      },
      {
        pathname: '/art/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  // Compressao
  compress: true,
  // Headers de seguranca
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;

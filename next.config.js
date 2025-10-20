/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.zobrino.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.zobrino.com/:path*', // proxy al backend Flask
      },
    ];
  },
};

module.exports = nextConfig;

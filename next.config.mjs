/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  ...(process.env.NEXT_EXPORT === 'true' ? { output: 'export' } : {}),
};

export default nextConfig;

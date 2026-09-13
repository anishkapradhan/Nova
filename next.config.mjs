/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(process.env.NEXT_EXPORT === 'true' ? { output: 'export' } : {}),
};

export default nextConfig;

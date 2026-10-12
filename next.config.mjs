const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.BASE_PATH === '/Nova';
const basePath = isGithubPages ? '/Nova' : (process.env.BASE_PATH || '');

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;

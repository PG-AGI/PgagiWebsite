/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export const reactStrictMode = false;
export const webpack5 = true;

export function webpack(config) {
  config.resolve.fallback = { fs: false };
  return config;
}

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Match real viewport breakpoints so Next.js picks the right srcset candidate
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3200, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
{
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pgagi.in',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
  experimental: {
    //optimizeCss: true,
    // gsap removed — it's dynamically imported in useEffect, so static tree-shaking has no effect
    optimizePackageImports: [
      '@radix-ui/react-hover-card',
       'lucide-react',
       'gsap',
    ],
    // Keep the 366MB /public folder OUT of serverless function bundles.
    // src/services/imagePlaceholder.ts reads `path.join(process.cwd(), 'public', coverImage)`
    // with a runtime variable; @vercel/nft can't resolve it statically, so it defensively
    // traces ALL of /public into every route that imports it (via getRecentLaunchProjects /
    // getCaseStudies), pushing index.rsc to 401MB (> Vercel's 250MB limit).
    // This only affects what's COPIED into the function — build-time SSG still reads /public
    // off disk and bakes in the correct dominant-colour placeholders. On ISR revalidation the
    // read misses and coverPlaceholder's try/catch falls back to a neutral tint (graceful).
    outputFileTracingExcludes: {
      '*': ['public/**'],
    },
  },
  headers: async () => [
    // Security headers — all routes
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
      ],
    },
    // HSTS — production only
    {
      source: '/:path*',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      ],
      missing: [{ type: 'host', value: 'localhost' }],
    },
    // Immutable cache for Next.js static chunks (_next/static) — 1 year
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    // Long-lived cache for public assets (images, fonts, etc.) — 30 days
    {
      source: '/:path*.:ext(png|jpg|jpeg|webp|avif|svg|woff|woff2|ico)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
      ],
    },
  ],
};

export default nextConfig;

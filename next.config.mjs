const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export sadece production build'de aktif. Dev modda
  // Next.js'in metadata route'larında (sitemap.ts/robots.ts) ortaya
  // çıkan dev-only bug'ından kaçınmak için kapalı tutulur.
  // Cloudflare Pages build'i `npm run build` ile çalıştığından
  // otomatik olarak NODE_ENV=production ortamı geçerli olur.
  ...(isProd ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;

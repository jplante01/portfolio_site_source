/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This enables static site generation
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

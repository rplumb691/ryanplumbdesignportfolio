/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["clsx", "tailwind-merge"],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/thar-diary",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/thar-dairy/",
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["driveo.pk", "qih.driveo.pk"],

  },
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    }
  }
};

export default nextConfig;

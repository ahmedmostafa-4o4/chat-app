import type { NextConfig } from "next";

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["img.daisyui.com", "images.pexels.com"], // Add the domain for your images here
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "momentum.redberryinternship.ge",
      },
    ],
  },
};

export default nextConfig;

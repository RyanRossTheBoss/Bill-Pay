import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tonetechrec.com",
        pathname: "/unity-cell-phone-bill-pay/_assets/media/**",
      },
    ],
  },
};

export default nextConfig;

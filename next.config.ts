import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["stylemixthemes.com"], // Add the allowed external image hostname here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/plus/img/logos/**",
      },
    ],
  },
};

export default nextConfig;

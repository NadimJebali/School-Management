import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images:{
    remotePatterns:[
      {hostname:"images.pexels.com"}
    ]
  }
};

export default nextConfig;

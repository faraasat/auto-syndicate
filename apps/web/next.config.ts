import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  transpilePackages: ["@autosyndicate/database"],
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = '/c/acqua-term';

const nextConfig: NextConfig = {
  basePath: isProd ? basePath : '',
  output: 'export',
  env: {
    BASE_PATH: isProd ? basePath : '',
  },
};

export default nextConfig;

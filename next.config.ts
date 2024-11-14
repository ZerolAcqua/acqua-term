import type { NextConfig } from "next";

// for github action
const isGithubAction = process.env.GITHUB_ACTIONS === "true";
const isProd = process.env.NODE_ENV === 'production';
let basePath = "";

if (isGithubAction) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY!.replace(/.*?\//, '');
  basePath = `/${repo}`
} else if (isProd) {
  basePath = '/c/acqua-term';
}


const nextConfig: NextConfig = {
  basePath: basePath,
  output: 'export',
  env: {
    BASE_PATH: basePath,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  images: {
    domains: ["sumiseo.com"],
  },
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  // images: {
  //   unoptimized: true,
  // },
  images: {
    domains: ["sumiseo.com"],
  },
};

module.exports = nextConfig;

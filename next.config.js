/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  images: {
    domains: ["sumiseo.com"],
    formats: ["image/webp"],
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
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;

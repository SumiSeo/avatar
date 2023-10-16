/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

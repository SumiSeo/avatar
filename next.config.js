/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://sumiseo.com"],
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
    domains: ["https://sumiseo.com"],
  },
};

module.exports = nextConfig;

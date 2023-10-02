/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    path: "/",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["dtlbyhsvr7rjb.cloudfront.net"]
  },
}

module.exports = nextConfig

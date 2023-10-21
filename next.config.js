/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
    images: {
        remotePatterns: [
         
          {
            protocol: "https",
            hostname: "uploadthing.com",
          },
          // {
          //   protocol: "https",
          //   hostname: "utfs.io",
          // },
         
        ],
      },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/home',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'image.tmdb.org',
      'img.freepik.com',
      'previews.123rf.com'
    ],


  },

}

module.exports = nextConfig

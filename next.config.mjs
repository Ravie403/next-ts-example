/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Probably not needed
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error', 'warn'],
    }
  }
}

export default nextConfig

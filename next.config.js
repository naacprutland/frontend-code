require('dotenv').config()

module.exports = {
  env: {
    // GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    // REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    // BASE_BRANCH: process.env.BASE_BRANCH
    STRAPI_API_URL: process.env.STRAPI_API_URL
  },
  images: {
    domains: ['hartecode.nyc3.digitaloceanspaces.com'],
    deviceSizes: [320, 420, 540, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true
  }
}
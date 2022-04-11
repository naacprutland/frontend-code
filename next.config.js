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
  },
}
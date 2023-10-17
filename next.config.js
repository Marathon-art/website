/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    ALCHEMY_URL: process.env.ALCHEMY_URL,
  },
}
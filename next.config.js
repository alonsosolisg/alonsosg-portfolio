const dotenv = require("dotenv");
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLARITY_ID: process.env.CLARITY_ID,
  },
};

module.exports = nextConfig;

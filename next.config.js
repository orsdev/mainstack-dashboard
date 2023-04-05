/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "harde-business.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    HARDE_AUTH_COOKIE_NAME: process.env.HARDE_AUTH_COOKIE_NAME,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
    PAYSTACK_PUBLIC_SECRET_KEY: process.env.PAYSTACK_PUBLIC_SECRET_KEY,
    PAYSTACK_PAYMENT_URL: process.env.PAYSTACK_PAYMENT_URL,
    PAYSTACK_MERCHANT_EMAIL: process.env.PAYSTACK_MERCHANT_EMAIL,
    FLUTTERWAVE_PK: process.env.FLUTTERWAVE_PK,
    FLUTTERWAVE_SK: process.env.FLUTTERWAVE_SK,
    FLUTTERWAVE_EK: process.env.FLUTTERWAVE_EK,
    FLUTTERWAVE_WEBHOOK_SK: process.env.FLUTTERWAVE_WEBHOOK_SK,
  },
};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_BUCKET: process.env.GOOGLE_BUCKET,
  },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'storage.googleapis.com',
              port: '',
              pathname: '/image-bucket-da69b11e-4181-ab32-06fd-485e587ea59d/**',
            },
          ],
    }
}
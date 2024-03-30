/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RAPID_API: process.env.RAPID_API,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  },
  images: {
    remotePatterns: [{
      hostname: '**',
      protocol: 'https'
    }],
  }
};

export default nextConfig;
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withPayload } from '@payloadcms/next/withPayload';

// import './src/lib/Env';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer({
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
});

export default withPayload(nextConfig);

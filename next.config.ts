import withBundleAnalyzer from '@next/bundle-analyzer';
import { withPayload } from '@payloadcms/next/withPayload';
import { withSentryConfig } from '@sentry/nextjs';

import './src/lib/Env';

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
  unstable_sentryWebpackPluginOptions: {
    sourcemaps: {
      filesToDeleteAfterUpload: './.next/**/*.map',
    },
  },
});

const sentryWebpackPluginOptions = {
  org: 'freelance-1i0',
  project: 'lysyy',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  telemetry: false,
  sourceMaps: {
    disable: true,
  },
  disable: process.env.NODE_ENV === 'development',
};

// Make sure to pass the options as the second argument
export default withPayload(withSentryConfig(nextConfig, sentryWebpackPluginOptions));

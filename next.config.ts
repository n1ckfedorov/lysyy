import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

import './src/lib/Env';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer({
  // Your Next.js config options go here
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
};

// Make sure to pass the options as the second argument
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);

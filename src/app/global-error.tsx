'use client';

import { captureException } from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background flex items-center justify-center p-4">
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

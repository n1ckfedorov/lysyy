'use client';

import { Alert, AlertDescription, AlertTitle, Button } from '@/components/ui';
import { captureException } from '@sentry/nextjs';
import { AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <div className="max-w-md m-auto space-y-4 size-full flex flex-col items-center justify-center">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Critical error</AlertTitle>
        <AlertDescription className="mt-2">

          {error.message || 'A critical error occurred. Please refresh the page.'}
        </AlertDescription>
      </Alert>

      <div className="flex justify-center">
        <Button
          variant="default"
          onClick={() => window.location.reload()}
        >
          Refresh page
        </Button>
      </div>

    </div>

  );
}

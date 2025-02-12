'use client';

import type { Page } from '@/payload-types';
import type { ReactNode } from 'react';
import { useLivePreview } from '@payloadcms/live-preview-react';

type PagePreviewProps = {
  initialPage: Page;
  renderAction: (page: Page) => ReactNode;
};

export function PageProvider({ initialPage, renderAction }: PagePreviewProps) {
  const { data: page } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  });

  if (!page) {
    return null;
  }

  return (
    <>

      {renderAction(page)}
    </>
  );
}

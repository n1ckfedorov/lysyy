'use client';
import type { ReactNode } from 'react';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type GoogleCaptchaWrapperProps = {
  children: ReactNode;
};

export function GoogleCaptchaWrapper({ children }: GoogleCaptchaWrapperProps) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined');
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        id: 'recaptcha-script',
      }}
      container={{
        parameters: {
          badge: 'bottomright',
          theme: 'light',
        },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

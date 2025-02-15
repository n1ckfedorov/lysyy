/* eslint-disable react-refresh/only-export-components */
'use client';
import type { ReactNode } from 'react';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type ReCaptchaError = {
  code?: string;
  details?: string;
} & Error;

type GoogleCaptchaWrapperProps = {
  children: ReactNode;
};

export function isReCaptchaError(error: unknown): error is ReCaptchaError {
  return error instanceof Error && ('code' in error || 'details' in error);
}

export function handleReCaptchaError(error: unknown) {
  console.error('ReCAPTCHA error:', error);

  if (isReCaptchaError(error)) {
    switch (error.code) {
      case 'missing-input-secret':
        return 'The reCAPTCHA secret key is missing';
      case 'invalid-input-secret':
        return 'The reCAPTCHA secret key is invalid';
      case 'missing-input-response':
        return 'The reCAPTCHA response is missing';
      case 'invalid-input-response':
        return 'The reCAPTCHA response is invalid';
      case 'timeout-or-duplicate':
        return 'The reCAPTCHA response has expired, please try again';
      default:
        return error.message || 'Failed to verify reCAPTCHA';
    }
  }

  return 'An unexpected error occurred during verification';
};

export const GoogleCaptchaWrapper = ({ children }: GoogleCaptchaWrapperProps) => {
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
};

export async function verifyReCaptcha(
  executeRecaptcha: ((action?: string) => Promise<string>) | undefined,
  setCaptchaError: (error: string | null) => void,
) {
  if (!executeRecaptcha) {
    throw new Error('reCAPTCHA not initialized. Please refresh the page and try again.');
  }

  try {
    setCaptchaError(null);
    const token = await executeRecaptcha('enquiryFormSubmit');

    if (!token) {
      throw new Error('No reCAPTCHA token received. Please try again.');
    }

    return token;
  } catch (error) {
    const errorMessage = handleReCaptchaError(error);
    setCaptchaError(errorMessage);
    throw new Error(errorMessage);
  }
};

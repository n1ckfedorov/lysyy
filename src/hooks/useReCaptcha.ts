'use client';

import { handleReCaptchaError } from '@/utils/recaptcha';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function useReCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const verify = async (action = 'submit') => {
    if (!executeRecaptcha) {
      throw new Error('reCAPTCHA not initialized. Please refresh the page and try again.');
    }

    try {
      setIsVerifying(true);
      setError(null);

      const token = await executeRecaptcha(action);
      if (!token) {
        throw new Error('No reCAPTCHA token received. Please try again.');
      }

      return token;
    } catch (err) {
      const errorMessage = handleReCaptchaError(err);
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsVerifying(false);
    }
  };

  return {
    verify,
    error,
    setError,
    isVerifying,
  };
}

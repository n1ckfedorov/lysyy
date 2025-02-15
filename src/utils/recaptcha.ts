import type { ReCaptchaError } from '@/types/recaptcha';

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
}

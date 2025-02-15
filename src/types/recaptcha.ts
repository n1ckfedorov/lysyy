export type ReCaptchaError = {
  code?: string;
  details?: string;
} & Error;

export type ReCaptchaExecuteFunction = ((action?: string) => Promise<string>) | undefined;

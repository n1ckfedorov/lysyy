'use client';

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components';
import { useReCaptcha } from '@/hooks/useReCaptcha';
import sendRequest from '@/utils/Api';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const Contact = () => {
  const { verify, error: captchaError, isVerifying } = useReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const submitEnquiryForm = async (data: z.infer<typeof schema> & { gReCaptchaToken: string }) => {
    try {
      setIsSubmitting(true);
      const emailResponse = await sendRequest('/api/email', 'POST', {
        ...data,
        type: 'contact',
      });

      await sendRequest('/api/create-contact-form', 'POST', {
        ...data,
      });

      if (emailResponse.response?.data?.id) {
        toast.success('Contact form sent successfully');

        form.reset();
      }
    } catch (error) {
      console.error('There was a problem sending the email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitForm = async (data: z.infer<typeof schema>) => {
    try {
      setIsSubmitting(true);
      const token = await verify('contactFormSubmit');

      await submitEnquiryForm({ ...data, gReCaptchaToken: token });
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : 'Failed to send message. Please try again.';

      toast.error(errorMessage);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-1">
        <span className="font-bold flex  text-secondary">Contact</span>
        <div className="flex gap-2">
          <span className="text-2xl">email: </span>
          <Link href="mailto:sergiy.lysyy@gmail.com" className="text-2xl ">sergiy.lysyy@gmail.com</Link>
        </div>

      </div>
      <div className="flex justify-between flex-col lg:flex-row gap-10 mt-10">
        <div className="lg:max-w-xl w-full border-t pt-4 border-secondary/20 shrink-0 grow ">
          <span className="text-2xl my-4 flex text-center">Or fill the form below:</span>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                )}
              />

              {captchaError && (
                <div className="text-destructive text-sm mt-2">
                  {captchaError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full mt-4"
                disabled={isSubmitting || isVerifying || !!captchaError}
              >
                {isSubmitting || isVerifying ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </Form>
        </div>
        <div className="lg:max-w-1/3 xl:max-w-1/2 flex justify-center md:mx-0 mx-auto">
          <Image src="/assets/images/contact.jpg" alt="Contact" width={1000} height={1000} className="rounded-lg object-cover object-center" />
        </div>
      </div>
    </div>
  );
};

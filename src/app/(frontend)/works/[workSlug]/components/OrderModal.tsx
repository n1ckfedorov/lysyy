'use client';

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components';

import { useReCaptcha } from '@/hooks/useReCaptcha';
import sendRequest from '@/utils/Api';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, useState } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  work: z.object({
    id: z.number(),
  }),
});

type OrderModalProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  title: string;
  workId: number;
};

const OrderModal: FC<OrderModalProps> = ({ isDialogOpen, setIsDialogOpen, title, workId }) => {
  const { verify, error: captchaError, isVerifying } = useReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      work: { id: workId },
    },
  });

  const submitEnquiryForm = async (data: z.infer<typeof schema> & { gReCaptchaToken: string }) => {
    try {
      const emailResponse = await sendRequest('/api/email', 'POST', {
        ...data,
        productName: title,
        type: 'workshop',
      });

      await sendRequest('/api/create-work-order', 'POST', {
        ...data,
        work: { id: workId },
      });

      if (emailResponse.response.data.id) {
        toast.success('Order sent successfully');
        setIsDialogOpen(false);
        form.reset();
      }
    } catch (error) {
      console.error('There was a problem sending the email:', error);
    }
  };

  const handleSubmitForm = async (data: z.infer<typeof schema>) => {
    try {
      setIsSubmitting(true);
      const token = await verify('orderWorkFormSubmit');

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
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {title}
            {' '}
            <span className="text-sm text-gray-500 font-light">by Sergiy Lysyy</span>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitForm)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                    />
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
                    <Input
                      {...field}
                    />
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
                    <Textarea
                      {...field}
                    />
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
            <Button type="submit" variant="primary" className="w-full mt-4" disabled={isSubmitting || isVerifying || !!captchaError}>
              {
                isSubmitting || isVerifying ? 'Sending...' : 'Send'
              }
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { OrderModal };

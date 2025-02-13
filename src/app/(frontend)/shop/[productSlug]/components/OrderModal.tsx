'use client';

import type { FC } from 'react';

import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components';
import sendRequest from '@/utils/Api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  product: z.object({
    id: z.number(),
  }),
});

type OrderModalProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  title: string;
  productId: number;
};

const OrderModal: FC<OrderModalProps> = ({ isDialogOpen, setIsDialogOpen, title, productId }) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      product: { id: productId },
    },
  });

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const emailResponse = await sendRequest('/api/email', 'POST', data);

      await sendRequest('/api/create-product-order', 'POST', {
        ...data,
        product: { id: productId },
      });

      if (emailResponse.ok) {
        setIsDialogOpen(false);
        form.reset();
      }
    } catch (error) {
      console.error('There was a problem sending the email:', error);
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
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
            <Button type="submit" variant="primary" className="w-full mt-4">Send</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { OrderModal };

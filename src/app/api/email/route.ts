import type { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type Body = {
  name: string;
  email: string;
  message: string;
  productName?: string;
  type: 'order' | 'workshop' | 'contact';
};

const getSubject = (type: Body['type'], productName?: string) => {
  switch (type) {
    case 'order':
      return `New order for ${productName}`;
    case 'workshop':
      return `New workshop order for ${productName}`;
    case 'contact':
      return `New contact request`;
  }
};

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, message, email, productName, type } = body;

    const response = await resend.emails.send({
      to: 'sergiy.lysyy@gmail.com',
      from: 'Sergiy Lysyy <lysyy@sergiylysyy.com>',
      subject: getSubject(type, productName),
      react: EmailTemplate({ name, email, message, productName, type }),
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}

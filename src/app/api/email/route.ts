import type { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/EmailTemplate';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, message, email, workName } = body;

    const response = await resend.emails.send({
      to: 'nick.fedorov.dev@gmail.com',
      from: 'Sergiy Lysyy <lysyy@sergiylysyy.com>',
      subject: 'New order',
      react: EmailTemplate({ name, email, message, workName }),
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}

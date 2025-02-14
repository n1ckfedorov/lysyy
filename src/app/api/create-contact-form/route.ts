import { getPayloadInstance } from '@/services/payload';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  const payload = await getPayloadInstance();

  try {
    const contactForm = await payload.create({
      collection: 'contact-form',
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({ contactForm }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

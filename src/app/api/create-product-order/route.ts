import { getPayloadInstance } from '@/services/payload';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, product } = body;

  const payload = await getPayloadInstance();

  try {
    const productOrder = await payload.create({
      collection: 'product-orders',
      data: {
        name,
        email,
        message,
        product,
      },
    });

    return NextResponse.json({ productOrder }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

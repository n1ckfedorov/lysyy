import { getPayloadInstance } from '@/services/payload';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, work } = body;

  const payload = await getPayloadInstance();

  try {
    const workOrder = await payload.create({
      collection: 'work-orders',
      data: {
        name,
        email,
        message,
        work,
      },
    });

    return NextResponse.json({ workOrder }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

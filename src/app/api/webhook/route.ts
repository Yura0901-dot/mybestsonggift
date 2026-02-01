import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import Stripe from 'stripe';
import { AdminNewOrderEmail } from '@/app/ui/component/email/NewOrderEmail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const ADMIN_EMAIL = 'mybestsonggift@gmail.com'; 

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = await headers();
  const signature = headerPayload.get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const { 
        customer_name, 
        genre, 
        recipient, 
        occasion,
        lang,
        story_snippet 
    } = session.metadata || {};
    
    const customerEmail = session.customer_details?.email;
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0';

    if (customer_name && customerEmail) {
        await resend.emails.send({
          from: 'SongToGift Orders <orders@mybestsonggift.com>',
          to: ADMIN_EMAIL,
          subject: `💰 New Order: $${amountTotal} from ${customer_name}`,
          // @ts-ignore
          react: AdminNewOrderEmail({
            customerName: customer_name,
            customerEmail: customerEmail,
            genre: genre || 'Unknown',
            occasion: occasion || 'Unknown',
            recipient: recipient || 'Unknown',
            story: story_snippet || 'No story provided in metadata',
            orderId: session.id,
            amount: `$${amountTotal}`,
            lang: lang
          }),
        });
        console.log('Admin notification sent');
    }
  }

  return new NextResponse(null, { status: 200 });
}
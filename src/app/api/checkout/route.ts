import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover', 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { genre, recipient, occasion, story, email, name, lang } = body;

    const truncatedStory = story.length > 400 ? story.substring(0, 400) + '...' : story;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Custom Song: ${genre}`,
              description: `For: ${recipient}. Occasion: ${occasion}`,
            },
            unit_amount: 50, 
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
      customer_email: email,
      metadata: {
        customer_name: name,
        genre: genre,
        recipient: recipient,
        occasion: occasion,
        lang: lang,
        story_snippet: truncatedStory 
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
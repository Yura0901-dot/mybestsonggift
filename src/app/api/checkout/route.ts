import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover' as any,
});

const STRIPE_PRICE_ID = 'price_1SyBtRRoqULlAfmbZgyGucec';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { genre, recipient, occasion, story, email, name, lang, promoCode, referenceLink } = body;

    let stripePromoId = null;

    if (promoCode && promoCode.trim() !== "") {
      const promotionCodes = await stripe.promotionCodes.list({
        code: promoCode.trim(),
        active: true,
      });

      if (promotionCodes.data.length > 0) {
        stripePromoId = promotionCodes.data[0].id;
      } else {
        return NextResponse.json(
          { error: 'invalid_promo' },
          { status: 400 }
        );
      }
    }

    let metadata: any = {
      customer_name: name,
      genre: genre,
      recipient: recipient,
      occasion: occasion,
      referenceLink: referenceLink || 'Not provided',
      lang: lang,
    };

    const chunkSize = 500;
    for (let i = 0; i < story.length; i += chunkSize) {
      const chunk = story.substring(i, i + chunkSize);
      metadata[`story_chunk_${i / chunkSize}`] = chunk;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: STRIPE_PRICE_ID, 
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: metadata,
      
      discounts: stripePromoId ? [{ promotion_code: stripePromoId }] : [],
      allow_promotion_codes: stripePromoId ? false : true,

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
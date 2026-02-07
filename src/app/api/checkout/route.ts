import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('MISSING STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  typescript: true,
});

const STRIPE_PRICE_ID = 'price_1SyBtRRoqULlAfmbZgyGucec'; 
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { genre, recipient, occasion, story, email, name, lang, promoCode, referenceLink } = body;

    let stripePromoId = null;

    if (promoCode && typeof promoCode === 'string' && promoCode.trim() !== "") {
      const promotionCodes = await stripe.promotionCodes.list({
        code: promoCode.trim(),
        active: true,
        limit: 1,
      });

      if (promotionCodes.data.length > 0) {
        stripePromoId = promotionCodes.data[0].id;
      } else {
        return NextResponse.json({ error: 'invalid_promo' }, { status: 400 });
      }
    }

    let metadata: any = {
      customer_name: name || 'Unknown',
      genre: genre || 'Not selected',
      recipient: recipient || 'Not specified',
      occasion: occasion || 'Not specified',
      lang: lang || 'English',
      referenceLink: referenceLink || 'Not provided',
    };

    const safeStory = story || '';
    const chunkSize = 500;
    for (let i = 0; i < safeStory.length; i += chunkSize) {
      const chunk = safeStory.substring(i, i + chunkSize);
      metadata[`story_chunk_${i / chunkSize}`] = chunk;
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
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
      success_url: `${BASE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/order`,
    };

    if (stripePromoId) {
      sessionParams.discounts = [{ promotion_code: stripePromoId }];
    } else {
      sessionParams.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
    
  } catch (error: any) {
    console.error('STRIPE ERROR:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const SPANISH_SPEAKING_COUNTRIES = [
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'SV', 'GT', 
  'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'ES', 'UY', 'VE'
];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (
    !path.startsWith('/_next') &&
    !path.startsWith('/login') && 
    !path.includes('.')
  ) {
    return NextResponse.next()
  }

  const country = req.headers.get('x-vercel-ip-country') || 'US';
  const isSpanishSpeaker = SPANISH_SPEAKING_COUNTRIES.includes(country);

  req.headers.set('accept-language', isSpanishSpeaker ? 'es' : 'en');

  const response = handleI18nRouting(req);

  response.headers.set('x-user-country', country);

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (
    !path.startsWith('/_next') &&
    !path.startsWith('/login') && 
    !path.includes('.')
  ) {
    return handleI18nRouting(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
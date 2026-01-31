import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from "@/app/ui/layout/Header"
import Footer from '@/app/ui/layout/Footer';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}) {
  const messages = await getMessages();

  const {locale} = await params
  
  setRequestLocale(locale)

  return (
    <NextIntlClientProvider messages={messages}>
      
      <div className="flex min-h-screen flex-col pt-24">
        <Header /> 
        
        <main className="flex-1">
          {children}
        </main>

        <Footer/>
      </div>

    </NextIntlClientProvider>
  );
}
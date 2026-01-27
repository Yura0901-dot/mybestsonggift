import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from "@/app/ui/layout/Header"
import Footer from '@/app/ui/layout/Footer';


export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

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
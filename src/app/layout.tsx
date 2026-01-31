import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from 'next/font/google'
import "./globals.css";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni'
})

export const metadata: Metadata = {
  title: "SongToGift",
  description: "Custom songs for your loved ones",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{ locale: string }>
}>) {
  const {locale} = await params

  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body
        className={`${bodoni.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

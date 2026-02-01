import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from 'next/font/google'
import "./globals.css";
import Script from "next/script";

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


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${bodoni.variable} ${lato.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZGFJRKYFX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VZGFJRKYFX');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}

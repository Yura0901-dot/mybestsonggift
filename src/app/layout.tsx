import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from 'next/font/google'
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

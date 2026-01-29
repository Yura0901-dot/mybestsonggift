'use client'

import Link from "next/link"
import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import Logo from "../Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer')

  return (
    <footer className="bg-[#1A1918] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1 space-y-6">
            <Logo color="white"/>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('brand_desc')}
            </p>
            <div className="flex gap-4">
              <a href="mailto:mybestsonggift@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">{t('col_company')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href='/about-us' className="hover:text-[#D4AF37] transition-colors">{t('link_about')}</Link></li>
              <li><Link href="/how-it-work" className="hover:text-[#D4AF37] transition-colors">{t('link_how')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">{t('col_legal')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">{t('link_privacy')}</Link></li>
              <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors">{t('link_terms')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">{t('col_payment')}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {t('payment_desc')}
            </p>
            <div className="flex flex-wrap gap-2 opacity-70">
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">VISA</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">Mastercard</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">PayPal</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">Apple Pay</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} MyBestSongGift. {t('copyright')}</p>
        </div>

      </div>
    </footer>
  )
}
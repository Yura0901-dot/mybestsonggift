'use client'

import { Timer, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing' 
import { useTranslations } from 'next-intl'

export const TopBanner = () => {
  const t = useTranslations('Header.TopBanner')

  return (
    <div className="bg-[#2D2A26] text-white py-2 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        
        <div className="flex items-center gap-2 text-[#D4AF37] animate-pulse">
          <Timer className="w-4 h-4" />
          <span className="uppercase tracking-wider font-bold whitespace-nowrap">
            {t('limited_offer')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="opacity-80 hidden sm:inline">{t('text')}</span>
          <span className="opacity-80 sm:hidden">Only</span> 
          
          <div className="flex items-center gap-2 bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
            <span className="text-gray-300 font-medium line-through decoration-gray-400 text-xl">
              $100
            </span>
            
            <span className="text-[#D4AF37] font-black text-base leading-none">
              $49.99
            </span>
          </div>
        </div>

        <Link href="/order" className="hidden md:flex items-center gap-1 hover:text-[#D4AF37] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4 ml-2">
          {t('cta')} <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  )
}
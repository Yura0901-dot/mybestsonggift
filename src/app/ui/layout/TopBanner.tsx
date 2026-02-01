'use client'

import { Timer, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const TopBanner = () => {
  return (
    <div className="bg-[#2D2A26] text-white py-2 px-4 relative z-50">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium">
        
        {/* Иконка и текст */}
        <div className="flex items-center gap-2 text-[#D4AF37] animate-pulse">
          <Timer className="w-4 h-4" />
          <span className="uppercase tracking-wider font-bold">Limited Offer</span>
        </div>

        {/* Суть предложения */}
        <div className="flex items-center gap-1">
          <span className="opacity-80">Get your custom song for just</span>
          <span className="text-[#D4AF37] font-bold line-through opacity-60 ml-1">$79</span>
          <span className="text-white font-bold text-base ml-1">$49.99</span>
        </div>

        {/* Ссылка (опционально) */}
        <Link href="/order" className="hidden md:flex items-center gap-1 hover:text-[#D4AF37] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4">
          Claim Now <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  )
}
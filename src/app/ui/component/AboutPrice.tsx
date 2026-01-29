'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Music4, Zap, Mic2 } from "lucide-react"
import { useTranslations } from "next-intl"

const AboutPriceSection = () => {
  const t = useTranslations("Home.aboutPrice")

  return (
    <section className="py-24 bg-[#2D2A26] text-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-sm font-medium backdrop-blur-sm">
               <Music4 className="w-4 h-4" />
               <span>{t('badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1]">
              {t('titleMain')} <br />
              <span className="text-[#D4AF37] italic">{t('titleForever')}</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              {t('description')}
            </p>

            <div className="space-y-4 pt-4">
               {[
                 { icon: Mic2, text: t('features.vocals') },
                 { icon: Zap, text: t('features.delivery') },
                 { icon: CheckCircle2, text: t('features.ownership') }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#2D2A26]" />
                    </div>
                    <span className="font-medium text-lg font-sans">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95, x: 50 }}
             whileInView={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative flex justify-center lg:justify-end"
          >
             <div className="relative bg-[#D4AF37] text-[#2D2A26] p-8 md:p-12 rounded-[2rem] shadow-[0_0_60px_rgba(212,175,55,0.2)] w-full max-w-md text-center transform hover:-translate-y-2 transition-transform duration-500">
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2D2A26] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {t('card.popularTag')}
                </div>

                <div className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">{t('card.flatRate')}</p>
                    <div className="flex items-start justify-center gap-1 font-serif text-[#2D2A26]">
                        <span className="text-4xl font-bold mt-2">$</span>
                        <span className="text-8xl font-bold leading-none">{t('card.price')}</span>
                    </div>
                    <p className="text-sm font-medium opacity-80 mt-2">{t('card.noFees')}</p>
                </div>

                <div className="space-y-3 mb-8 text-left bg-black/5 p-6 rounded-xl">
                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="font-medium">{t('card.lyrics')}</span>
                        <span className="font-bold">{t('card.included')}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="font-medium">{t('card.recording')}</span>
                        <span className="font-bold">{t('card.included')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">{t('card.artistFee')}</span>
                        <span className="font-bold">{t('card.included')}</span>
                    </div>
                </div>

                <Link 
                  href='/order'
                  className="block w-full py-5 bg-[#2D2A26] text-white text-lg rounded-xl font-bold hover:bg-black transition-all shadow-xl hover:shadow-2xl"
                >
                  {t('card.button')}
                </Link>
                
                <p className="text-xs mt-4 opacity-70 font-sans">
                   {t('card.guarantee')}
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutPriceSection
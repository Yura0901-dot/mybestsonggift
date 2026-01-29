'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { faqData } from "./faq.data"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const t = useTranslations('Home.FAQ')

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-3 block">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26]">
            {t('title_part1')} <span className="italic text-[#D4AF37]">{t('title_part2')}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={faq.id} 
                className={`border border-gray-100 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-[#FDFBF7] shadow-sm' : 'bg-white hover:border-[#D4AF37]/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-serif font-bold transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-[#2D2A26]'}`}>
                    {t(faq.questionKey)}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed font-sans">
                        {t(faq.answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          {t('footer_text')} <Link href="mailto:mybestsonggift@gmail.com" className="text-[#D4AF37] hover:underline">{t('footer_link')}</Link>
        </div>

      </div>
    </section>
  )
}

export default FAQSection
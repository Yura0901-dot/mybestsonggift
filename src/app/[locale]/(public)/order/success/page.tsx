'use client'

import { motion } from "framer-motion"
import { Check, Music, Mail, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Success = () => {
  const t = useTranslations('Success')

  const steps = [
    {
      icon: FileText,
      title: t('step1_title'),
      desc: t('step1_desc'),
    },
    {
      icon: Music,
      title: t('step2_title'),
      desc: t('step2_desc'),
    },
    {
      icon: Mail,
      title: t('step3_title'),
      desc: t('step3_desc'),
    }
  ]

  return (
    <main className="pt-16 pb-24 bg-[#FDFBF7] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#D4AF37]/10 text-center relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FDFBF7] via-[#D4AF37] to-[#FDFBF7]" />

          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg relative"
            >
              <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#2D2A26] mb-4"
          >
            {t('title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mb-12 text-lg"
          >
            {t('subtitle')}
          </motion.p>

          <div className="space-y-8 text-left relative mb-12">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100" />
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.2) }}
                className="relative flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 z-10">
                  <step.icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2A26] text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-[#2D2A26] text-white px-10 py-4 rounded-full font-bold hover:bg-[#D4AF37] transition-all shadow-lg hover:-translate-y-1 w-full md:w-auto justify-center"
            >
              {t('button')} <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-6 text-xs text-gray-400">
              {t('note')}
            </p>
          </motion.div>

        </div>

      </div>
    </main>
  )
}

export default Success
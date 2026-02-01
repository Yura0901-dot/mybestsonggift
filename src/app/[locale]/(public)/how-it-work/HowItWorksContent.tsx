'use client'
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { getFeatures, getSteps } from "./how-work.data"
import BackButton from "@/app/ui/BackButton"

const HowItWorksContent = () => {
  const t = useTranslations('HowWork')

  const steps = getSteps(t)
  const features = getFeatures(t)

  return (
    <main className="pt-12 pb-24 bg-[#FDFBF7] min-h-screen overflow-hidden">
      
      <section className="container mx-auto px-4 md:px-6 mb-20">

        <BackButton/>

        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-[#2D2A26] mb-6 leading-tight"
          >
            {t('hero_title1')} <span className="italic text-[#D4AF37]">{t('hero_title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t('hero_desc')}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-24 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37]/20 -translate-x-1/2" />

        <div className="space-y-16 lg:space-y-24 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              <div className="flex-1 text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/20 shadow-sm ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                   <span className="text-[#D4AF37] font-bold">0{step.id}</span>
                   <span className="w-px h-4 bg-gray-200" />
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Step</span>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-[#2D2A26] mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {step.desc}
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.detail}
                </p>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white border-4 border-[#FDFBF7] shadow-[0_0_40px_rgba(212,175,55,0.15)] flex items-center justify-center relative z-10">
                   <step.icon className="w-16 h-16 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 bg-[#D4AF37] blur-[60px] opacity-20 rounded-full" />
              </div>

              <div className="flex-1 hidden lg:block" />

            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 border-y border-gray-100 mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto bg-[#FDFBF7] rounded-2xl flex items-center justify-center mb-6 text-[#D4AF37]">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2A26] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 text-center">
        <div className="bg-[#2D2A26] rounded-[2rem] p-10 md:p-16 relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    {t('cta_title')}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        href="/order" 
                        className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#B5952F] transition-all hover:scale-105"
                    >
                        {t('cta_btn')} <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
                <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" /> {t('cta_guarantee')}
                </p>
            </div>
        </div>
      </section>

    </main>
  )
}

export default HowItWorksContent
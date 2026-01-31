'use client'

import { motion } from "framer-motion"
import { Heart, Music, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"

const AboutUsContent = () => {
  const t = useTranslations('About')

  const stats = [
    { icon: Music, label: t('stat1_label'), value: "1000+" },
    { icon: Heart, label: t('stat2_label'), value: "100%" },
    { icon: Users, label: t('stat3_label'), value: "24/7" },
  ]

  return (
    <main className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen overflow-hidden">
      
      <section className="container mx-auto px-4 md:px-6 mb-24">
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
            className="text-4xl md:text-6xl font-serif font-bold text-[#2D2A26] mb-8 leading-tight"
          >
            {t('title1')} <span className="italic text-[#D4AF37]">{t('title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t('intro_desc')}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
                src='/about.png'
                alt="about-us"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw" 
            />
            
            <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2D2A26]">
              {t('story_title')}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
              <p>{t('story_p1')}</p>
              <p>{t('story_p2')}</p>
              <p>{t('story_p3')}</p>
            </div>
            
            <div className="pt-6">
                <div className="inline-block border-l-4 border-[#D4AF37] pl-6 italic text-gray-500">
                    "{t('quote')}"
                </div>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-[#FDFBF7] rounded-full flex items-center justify-center mb-4 text-[#D4AF37]">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-serif font-bold text-[#2D2A26] mb-2">{stat.value}</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-24 text-center">
        <div className="max-w-3xl mx-auto bg-[#2D2A26] rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37] rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    {t('cta_title')}
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                    {t('cta_desc')}
                </p>
                <Link 
                    href="/order" 
                    className="inline-block bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#B5952F] transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    {t('cta_button')}
                </Link>
            </div>
        </div>
      </section>

    </main>
  )
}

export default AboutUsContent
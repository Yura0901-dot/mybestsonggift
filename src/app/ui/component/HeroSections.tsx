'use client'

import Link from "next/link"
import { Play, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const HeroSection = () => {
  const t = useTranslations('Home.hero')

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById('video-reviews');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-vh flex items-center justify-center overflow-hidden py-5">
      
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/hero.mp4" 
        />

        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-transparent relative overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
            <span className="text-sm font-medium text-white">{`1.000+ ${t('customers')}`}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] drop-shadow-lg"
          >
            {t('title1')} <br />
            {t('title2')} <span className="text-[#D4AF37] italic">{t('title3')}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-md"
          >
            {t('desc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center pt-4"
          >
            <Link 
              href='/order'
              className="w-full sm:w-auto px-10 py-5 bg-[#D4AF37] hover:bg-[#B5952F] text-white text-lg rounded-full font-bold transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:-translate-y-1 text-center"
            >
              {t('order')}
            </Link>
            
            <Link 
              onClick={handleScroll}
              href="#video-reviews"
              className="group w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all hover:bg-white/20 flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#2D2A26] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              {t('listen')}
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 pt-2"
          >
             <div className="flex text-[#D4AF37]">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current drop-shadow-md" />)}
             </div>
             <span className="text-sm text-white/90 font-medium drop-shadow-md">{`4.9/5 ${t('reviews')}`}</span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
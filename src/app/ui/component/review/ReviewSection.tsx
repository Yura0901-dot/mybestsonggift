'use client'
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import VideoCard from "./VideoCard"
import { reviews } from './review.data'
import { useTranslations } from "next-intl"

const ReviewsSections = () => {
  const t = useTranslations("Home.review")
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" id="video-reviews">

      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D2A26] mb-6">
            {t('title1')} <span className="italic text-[#D4AF37]">{t('title2')}</span>
          </h2>
          <p className="text-gray-500 text-lg">
            {t('desc')}
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar lg:block lg:columns-3 lg:gap-6 lg:space-y-6 lg:overflow-visible">
          
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-[45vw] snap-center lg:min-w-full lg:break-inside-avoid"
            >

              {item.type === 'video' ? (
                <VideoCard item={item}/>
              ) : null}

              {item.type === 'text' && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-6">
                   <div className="flex gap-1 mb-4 text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                   </div>
                   <p className="text-[#2D2A26] text-lg leading-relaxed mb-6 font-sans">
                      "{item.content}"
                   </p>
                   <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                         {item.author && item.author.charAt(0)}
                      </div>
                      <div>
                         <div className="flex items-center gap-1">
                            <p className="font-bold text-sm text-[#2D2A26]">{item.author}</p>
                         </div>
                         {item.role && <p className="text-xs text-gray-400">{item.role}</p>}
                      </div>
                   </div>
                </div>
              )}

              {item.type === 'press' && (
                <div className="bg-[#2D2A26] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden mb-6 text-center">
                   <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-80" />
                   <p className="font-serif text-xl italic leading-relaxed mb-8 opacity-90">
                      "{item.content}"
                   </p>
                   <p className="text-sm tracking-widest uppercase font-bold text-[#D4AF37]">
                      {item.pressLogo}
                   </p>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ReviewsSections
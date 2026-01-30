'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react"
import VideoCard from "./VideoCard"
import { reviews } from './review.data'
import { useTranslations } from "next-intl"

const ReviewCardRenderer = ({ item }: { item: any }) => {
  if (item.type === 'video') {
    return <VideoCard item={item} />
  }

  if (item.type === 'text') {
    return (
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
    )
  }

  if (item.type === 'press') {
    return (
      <div className="bg-[#2D2A26] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden mb-6 text-center">
        <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-80" />
        <p className="font-serif text-xl italic leading-relaxed mb-8 opacity-90">
          "{item.content}"
        </p>
        <p className="text-sm tracking-widest uppercase font-bold text-[#D4AF37]">
          {item.pressLogo}
        </p>
      </div>
    )
  }

  return null
}

const ReviewsSections = () => {
  const t = useTranslations("Home.review")
  const [isExpanded, setIsExpanded] = useState(false)

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

        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] md:min-w-[45vw] snap-center"
            >
               <ReviewCardRenderer item={item} />
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative transition-all duration-700 ease-in-out">
          
          <div 
            className={`columns-3 gap-6 space-y-6 transition-all duration-1000 ease-in-out ${
              isExpanded ? 'max-h-full opacity-100' : 'max-h-[800px] overflow-hidden'
            }`}
          >
            {reviews.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                 <ReviewCardRenderer item={item} />
              </motion.div>
            ))}
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent flex items-end justify-center pb-0 z-10">
              <button 
                onClick={() => setIsExpanded(true)}
                className="group flex items-center gap-2 bg-white border border-[#D4AF37]/30 text-[#2D2A26] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all transform hover:-translate-y-1"
              >
                Load More Stories
                <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
              </button>
            </div>
          )}

          {isExpanded && (
            <div className="flex justify-center mt-12">
               <button 
                onClick={() => {
                  setIsExpanded(false)
                  const element = document.getElementById('video-reviews')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-400 hover:text-[#D4AF37] flex items-center gap-2 text-sm font-medium transition-colors"
              >
                Show Less <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}

export default ReviewsSections
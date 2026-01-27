'use client'

import { motion } from "framer-motion"
import { Star, Play, Quote, CheckCircle2 } from "lucide-react"
import Image from "next/image"

// Типы отзывов
type ReviewItem = {
  id: number
  type: 'video' | 'text' | 'press'
  author: string
  role?: string // e.g. "Husband", "Bride"
  content?: string
  videoSrc?: string
  imageSrc?: string
  songTitle?: string
  pressLogo?: string
  rating?: number
  verified?: boolean
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    type: 'video',
    imageSrc: '/main.jpeg', // Твое фото-заглушка
    videoSrc: '/video1.mp4', // Видео
    songTitle: "Our 10th Anniversary",
    author: "Michael T.",
    role: "Husband",
    verified: true
  },
  {
    id: 2,
    type: 'text',
    rating: 5,
    content: "I've never seen my dad cry before. Like, never. We played this song at his 60th birthday party and he just broke down in happy tears. Best $59 I've ever spent. Seriously.",
    author: "Sarah Jenkins",
    verified: true
  },
  {
    id: 3,
    type: 'press',
    content: "The most personal gift you can give when words just aren't enough.",
    pressLogo: "Brides.com", // Популярный в США свадебный журнал
    author: "Editorial Team"
  },
  {
    id: 4,
    type: 'video',
    imageSrc: '/poster2.jpg',
    videoSrc: '/video2.mp4',
    songTitle: "Forgive Me",
    author: "David R.",
    verified: true
  },
  {
    id: 5,
    type: 'text',
    rating: 5,
    content: "Ordering was super easy. I just filled out a quick form about how we met in college, and 3 days later I got a studio-quality track. My girlfriend thought I hired a famous producer! 😂",
    author: "Chris Evans",
    role: "Boyfriend",
    verified: true
  },
  {
    id: 6,
    type: 'text',
    rating: 5,
    content: "Absolute magic. Thank you for helping me propose!",
    author: "Jessica M.",
    verified: true
  }
]

export default function ExamplesSections() {
  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Wall of Love
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D2A26] mb-6">
            Stories that <span className="italic text-[#D4AF37]">matter</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Join 1,000+ happy customers who turned their memories into music.
          </p>
        </div>

        {/* === MASONRY GRID (Блоки разной высоты) === */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="break-inside-avoid" // Чтобы карточки не разрывались между колонками
            >
              
              {/* --- VIDEO CARD --- */}
              {item.type === 'video' && (
                <div className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-xl mb-6">
                   {/* Aspect Ratio разный для разнообразия высоты */}
                   <div className={`relative ${item.id === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'} w-full bg-black`}>
                      <Image 
                        src={item.imageSrc || '/placeholder.jpg'} 
                        alt={item.songTitle || 'Review'}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-white text-white ml-1" />
                         </div>
                      </div>

                      {/* Text content inside video */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                         <p className="font-serif text-2xl mb-1">{item.songTitle}</p>
                         <div className="flex items-center gap-2 text-sm opacity-90">
                            <span>by {item.author}</span>
                            {item.verified && <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />}
                         </div>
                      </div>
                   </div>
                </div>
              )}

              {/* --- TEXT CARD --- */}
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
                         {item.author.charAt(0)}
                      </div>
                      <div>
                         <div className="flex items-center gap-1">
                            <p className="font-bold text-sm text-[#2D2A26]">{item.author}</p>
                            {item.verified && (
                                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                                   Verified
                                </span>
                            )}
                         </div>
                         {item.role && <p className="text-xs text-gray-400">{item.role}</p>}
                      </div>
                   </div>
                </div>
              )}

              {/* --- PRESS QUOTE CARD --- */}
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
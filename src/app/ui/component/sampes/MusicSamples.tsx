'use client'

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Music } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { SAMPLES } from "./samples.data"

const MusicSamples = () => {
  const t = useTranslations('Home.samples')
  const [playingId, setPlayingId] = useState<string | null>(null)
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({})

  const togglePlay = (id: string) => {
    const currentAudio = audioRefs.current[id]
    
    if (playingId === id) {
      currentAudio?.pause()
      setPlayingId(null)
      return
    }

    if (playingId && audioRefs.current[playingId]) {
      const prevAudio = audioRefs.current[playingId]
      if (prevAudio) {
        prevAudio.pause()
        prevAudio.currentTime = 0
      }
    }

    if (currentAudio) {
      currentAudio.play()
      setPlayingId(id)
    }
  }

  const handleEnded = () => {
    setPlayingId(null)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
          >
            {t('subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-6"
          >
            {t('title_main')} <span className="italic text-[#D4AF37]">{t('title_accent')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLES.map((item, index) => {
            const isPlaying = playingId === item.id
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative p-5 rounded-2xl border transition-all duration-300
                  ${isPlaying 
                    ? 'border-[#D4AF37] bg-[#FDFBF7] shadow-xl scale-[1.02]' 
                    : 'border-gray-100 bg-white hover:border-[#D4AF37]/30 hover:shadow-lg'
                  }
                `}
              >
                <audio 
                  ref={(el) => { if (el) audioRefs.current[item.id] = el }}
                  src={item.src}
                  onEnded={handleEnded}
                />

                <div className="flex items-center gap-5">
                  <button
                    onClick={() => togglePlay(item.id)}
                    className={`
                      w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 shadow-md relative overflow-hidden
                      ${isPlaying 
                        ? 'bg-[#D4AF37] text-white' 
                        : 'bg-[#2D2A26] text-white group-hover:bg-[#D4AF37]'
                      }
                    `}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current relative z-10" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1 relative z-10" />
                    )}
                  </button>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                       <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isPlaying ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-gray-100 text-gray-500'}`}>
                         {t(`items.${item.id}.genre`)}
                       </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2D2A26] truncate leading-tight mb-1">
                      {t(`items.${item.id}.title`)}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
                      <item.icon className="w-3 h-3" /> {t(`items.${item.id}.occasion`)}
                    </p>
                  </div>
                </div>

                {isPlaying && (
                   <div className="absolute bottom-5 right-5 flex gap-1 items-end h-6">
                      <motion.div animate={{ height: [4, 16, 4] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-1 bg-[#D4AF37] rounded-full" />
                      <motion.div animate={{ height: [8, 24, 8] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} className="w-1 bg-[#D4AF37] rounded-full" />
                      <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.3, delay: 0.2 }} className="w-1 bg-[#D4AF37] rounded-full" />
                      <motion.div animate={{ height: [6, 20, 6] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-[#D4AF37] rounded-full" />
                   </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-16">
            <Link 
                href="/order"
                className="inline-flex items-center gap-2 bg-[#2D2A26] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] transition-all hover:scale-105 shadow-xl"
            >
                <Music className="w-5 h-5" />
                {t('cta_button')}
            </Link>
            <p className="mt-4 text-sm text-gray-400">
                {t('cta_sub')}
            </p>
        </div>

      </div>
    </section>
  )
}

export default MusicSamples
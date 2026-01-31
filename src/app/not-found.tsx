'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Disc, Music } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FDFBF7] relative overflow-hidden px-4 text-center">
      
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <Music className="absolute top-20 left-[10%] w-24 h-24 text-[#2D2A26] -rotate-12" />
        <Music className="absolute bottom-32 right-[10%] w-32 h-32 text-[#D4AF37] rotate-12" />
        <Disc className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-[#D4AF37] opacity-10" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 font-serif font-bold text-[#2D2A26] text-[8rem] md:text-[12rem] leading-none select-none">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            4
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" } 
            }}
            className="relative w-[1em] h-[1em]"
          >
             <div className="w-full h-full rounded-full bg-[#2D2A26] border-[12px] md:border-[20px] border-[#1a1918] flex items-center justify-center relative shadow-xl">
                <div className="w-1/3 h-1/3 bg-[#D4AF37] rounded-full flex items-center justify-center">
                   <div className="w-2 h-2 bg-black rounded-full" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/5 pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
             </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            4
          </motion.span>
        </div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#2D2A26] mb-4"
        >
          Oops! Wrong Note
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          It looks like the track you are looking for hasn't been recorded yet. Or maybe it was a limited edition?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#B5952F] transition-all hover:scale-105 shadow-lg group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  )
}

export default NotFound
'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, CreditCard, Gift, ArrowRight } from "lucide-react"

const steps = [
  {
    id: 1,
    icon: FileText,
    title: "1. Tell Us Your Story",
    desc: "Fill out a quick form. Share names, memories, inside jokes, and the mood you want. It takes 5 minutes.",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "2. Secure Payment",
    desc: "Complete your order with a flat fee of $59. No hidden costs. We accept Apple Pay, PayPal, and cards.",
  },
  {
    id: 3,
    icon: Gift,
    title: "3. Get Your Hit",
    desc: "In 3-5 days, receive your custom studio-quality song in your email. Get tissues ready for the reaction!",
  }
]

export default function StepsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Заголовок */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26]">
            From memory to <span className="italic text-[#D4AF37]">melody</span> in 3 steps
          </h2>
        </div>

        {/* Шаги */}
        <div className="relative grid md:grid-cols-3 gap-12">
          
          {/* Декоративная линия (только на десктопе) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Иконка в круге */}
              <div className="w-24 h-24 rounded-full bg-[#FDFBF7] border border-[#D4AF37]/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 bg-white">
                <step.icon className="w-10 h-10 text-[#2D2A26] group-hover:text-[#D4AF37] transition-colors" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#2D2A26] mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed font-sans max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Кнопка действия */}
        <div className="mt-16 text-center">
          <Link 
            href='/order'
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#D4AF37] text-white rounded-full font-bold text-lg hover:bg-[#B5952F] transition-all shadow-xl hover:-translate-y-1"
          >
            Create My Song Now <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            No musical knowledge required.
          </p>
        </div>

      </div>
    </section>
  )
}
'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Can I choose the genre and mood?",
    answer: "Absolutely! Whether you want a tear-jerking acoustic ballad, an upbeat pop hit, or a classic country song, you call the shots. You'll select your preferred style in the order form."
  },
  {
    question: "How long does it take to get my song?",
    answer: "Our standard delivery time is 3-5 days. We also offer a 'Rush Delivery' option (24 hours) at checkout if you need a last-minute gift."
  },
  {
    question: "What exactly do I receive?",
    answer: "You will receive a high-quality studio MP3 file of your custom song, ready to be played on any device. We also include a PDF file with the lyrics so you can sing along."
  },
  {
    question: "Is it really only $59? Are there hidden fees?",
    answer: "Yes, it is a one-time flat fee of $59. You get full ownership of the song for personal use. No subscriptions, no royalties, no hidden costs."
  },
  {
    question: "What if I don't like the song?",
    answer: "Your satisfaction is our priority. If there is a mistake in the lyrics or names, we will fix it for free. We strive to make every song a hit that you'll cherish forever."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-3 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26]">
            Everything you need to <span className="italic text-[#D4AF37]">know</span>
          </h2>
        </div>

        {/* Аккордеон */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className={`border border-gray-100 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-[#FDFBF7] shadow-sm' : 'bg-white hover:border-[#D4AF37]/30'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-serif font-bold transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-[#2D2A26]'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Доп. контакт */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          Still have questions? <a href="#" className="text-[#D4AF37] hover:underline">Chat with us</a> or email support.
        </div>

      </div>
    </section>
  )
}
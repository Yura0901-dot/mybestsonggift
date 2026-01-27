'use client'

import Link from "next/link"
import { Instagram, Facebook, Mail, Music4, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1918] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. БРЕНД И МИССИЯ */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-bold">
              <Music4 className="w-6 h-6 text-[#D4AF37]" />
              <span>SongToGift</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We turn your favorite memories into custom studio-quality songs. The perfect gift for weddings, anniversaries, and birthdays.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:support@songtogift.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. НАВИГАЦИЯ */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href='/order' className="hover:text-[#D4AF37] transition-colors">Create a Song</Link></li>
              <li><Link href="#examples" className="hover:text-[#D4AF37] transition-colors">Examples</Link></li>
              <li><Link href="#reviews" className="hover:text-[#D4AF37] transition-colors">Reviews</Link></li>
              <li><Link href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* 3. ЮРИДИЧЕСКАЯ ИНФА (ОБЯЗАТЕЛЬНО) */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-[#D4AF37] transition-colors">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4. ОПЛАТА И ДОВЕРИЕ */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Secure Payment</h4>
            <p className="text-gray-400 text-sm mb-4">
              We accept all major credit cards and PayPal. Encrypted by Stripe & Lemon Squeezy.
            </p>
            <div className="flex flex-wrap gap-2 opacity-70">
               {/* Простые текстовые заглушки или можно SVG иконки */}
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">VISA</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">Mastercard</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">PayPal</div>
               <div className="px-3 py-1 bg-white/10 rounded text-xs font-bold">Apple Pay</div>
            </div>
          </div>

        </div>

        {/* НИЖНЯЯ ПОЛОСКА */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} SongToGift. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>in Ukraine & USA</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
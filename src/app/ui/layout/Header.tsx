'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../Logo"
import { LanguageSwitcher } from "../LanguageSwitcher"
import { useTranslations } from "next-intl"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group py-2">
      <span className="relative z-10 text-sm font-medium text-[#2D2A26] transition-colors duration-300 group-hover:text-[#D4AF37]">
        {children}
      </span>
      
      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
      <span className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 bg-[#D4AF37]/20 blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
    </Link>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslations('Header')

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: 'howWork', href: "/how-it-works" },
    { name: "about-us", href: '/about-us'},
    { name: "FAQ", href: "/FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          <Logo/>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {t(link.name)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            
            <Link
              href='/order'
              className="relative overflow-hidden bg-[#D4AF37] text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-md group transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative">{t('order')}</span>
            </Link>
          </div>

          <button
            className="md:hidden text-[#2D2A26] p-1 hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden bg-[#FDFBF7] border-b border-[#D4AF37]/20 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-[#2D2A26] hover:text-[#D4AF37] transition-colors flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                      {t(link.name)}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="h-px bg-[#D4AF37]/20 w-full" />

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#86827E]">{`${t('language')}:`}</span>
                  <div className="bg-white px-4 py-1.5 rounded-full border border-[#D4AF37]/20 shadow-sm">
                    <LanguageSwitcher />
                  </div>
                </div>

                <Link
                  href='/order'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-[#D4AF37] hover:bg-[#B5952F] text-white py-3.5 rounded-lg font-bold shadow-md active:scale-95 transition-all"
                >
                  {t('order')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
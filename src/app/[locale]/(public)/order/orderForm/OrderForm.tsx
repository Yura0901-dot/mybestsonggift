'use client'

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Disc,
  CheckCircle, Loader2, AlertCircle,
  Globe, ChevronDown, Check, PenLine, Link
} from "lucide-react"
import { useTranslations } from "next-intl"
import { LANGUAGES } from './languages.data'
import { GENRES } from "./genres.data"

const OrderForm = () => {
  const t = useTranslations('OrderForm')
  const [loading, setLoading] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [promoError, setPromoError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const [formData, setFormData] = useState({
    genre: '',
    customGenre: '',
    referenceLink: '',
    lang: 'English',
    customLang: '',
    recipient: '',
    occasion: '',
    story: '',
    email: '',
    name: '',
    promoCode: ''
  })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleGenreSelect = (id: string) => {
    setFormData({ ...formData, genre: id })
  }

  const handleLanguageSelect = (langLabel: string) => {
    setFormData({ ...formData, lang: langLabel })
    setIsLangOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setPromoError(false);

    const finalGenre = formData.genre === 'other' ? formData.customGenre : formData.genre
    const finalLang = formData.lang === 'Other' ? formData.customLang : formData.lang

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
             ...formData, 
             genre: finalGenre,
             lang: finalLang 
        }),
      })

      const data = await response.json()

      if (response.status === 400 && data.error === 'invalid_promo') {
          setPromoError(true);
          setLoading(false);
          return;
        }

      if (data.url) window.location.href = data.url
      else setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const selectedLangObj = formData.lang === 'Other' 
    ? { label: t('lang_other'), flag: '🌍' } 
    : LANGUAGES.find(l => l.label === formData.lang) || LANGUAGES[0]

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      
      <section>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-serif font-bold text-[#2D2A26]">
              {t('step1_title')} <span className="text-red-400">*</span>
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                {t('most_important')}
            </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GENRES.map((item) => {
            const isSelected = formData.genre === item.id
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleGenreSelect(item.id)}
                className={`
                  relative cursor-pointer rounded-2xl p-4 border-2 flex flex-col items-center justify-center gap-2 text-center transition-all duration-300
                  ${isSelected 
                    ? 'border-[#D4AF37] bg-[#FDFBF7] shadow-lg' 
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
                  }
                `}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-colors
                  ${isSelected ? 'bg-[#D4AF37] text-white' : 'bg-gray-50 text-gray-400'}
                `}>
                  <item.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                
                <div>
                    <span className={`block font-bold text-sm leading-tight ${isSelected ? 'text-[#2D2A26]' : 'text-gray-600'}`}>
                    {t(`genres.${item.id}.label`)}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                        {t(`genres.${item.id}.desc`)}
                    </span>
                </div>
                
                {isSelected && (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute top-2 right-2 text-[#D4AF37]"
                  >
                    <CheckCircle className="w-5 h-5 fill-[#D4AF37] text-white" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => handleGenreSelect('other')}
            className={`
              cursor-pointer rounded-2xl p-4 border-2 flex flex-col items-center justify-center gap-2 transition-all
              ${formData.genre === 'other' ? 'border-[#D4AF37] bg-[#FDFBF7]' : 'border-gray-100 bg-white'}
            `}
          >
             <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                <Disc className="w-5 h-5" />
             </div>
             <span className="font-bold text-sm text-gray-600">{t('genre_other')}</span>
          </motion.div>
        </div>

        <AnimatePresence>
            {formData.genre === 'other' && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4"
                >
                    <input
                        type="text"
                        name="customGenre"
                        placeholder={t('genre_other_placeholder')}
                        value={formData.customGenre}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border-2 border-[#D4AF37]/30 bg-[#FDFBF7] focus:border-[#D4AF37] outline-none text-[#2D2A26]"
                    />
                </motion.div>
            )}
        </AnimatePresence>
      </section>

      <div className="mt-6">
        <label className="text-sm font-bold text-gray-700 ml-1 mb-2 flex items-center gap-2">
            <Link className="w-4 h-4 text-[#D4AF37]" /> {t('reference_label')} 
            <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {t('optional')}
            </span>
        </label>
        <input
            type="text"
            name="referenceLink"
            placeholder={t('reference_placeholder')}
            value={formData.referenceLink}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all placeholder:text-gray-300"
        />
    </div>

      <section>
        <div className="grid md:grid-cols-2 gap-6">
            
            <div className="space-y-2 relative" ref={dropdownRef}>
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#D4AF37]" /> {t('song_language')}
                </label>
                
                <div 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className={`
                        w-full px-5 py-3 rounded-xl border bg-white cursor-pointer flex items-center justify-between transition-all
                        ${isLangOpen ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/10' : 'border-gray-200 hover:border-gray-300'}
                    `}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-xl">{selectedLangObj.flag}</span>
                        <span className="font-medium text-[#2D2A26]">{selectedLangObj.label}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                    {isLangOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-50 top-[calc(100%+8px)] left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto py-2"
                        >
                            {LANGUAGES.map((lang) => (
                                <li 
                                    key={lang.id}
                                    onClick={() => handleLanguageSelect(lang.label)}
                                    className="px-5 py-3 hover:bg-[#FDFBF7] cursor-pointer flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className={`font-medium group-hover:text-[#D4AF37] ${formData.lang === lang.label ? 'text-[#D4AF37]' : 'text-gray-600'}`}>
                                            {lang.label}
                                        </span>
                                    </div>
                                    {formData.lang === lang.label && <Check className="w-4 h-4 text-[#D4AF37]" />}
                                </li>
                            ))}
                            <li 
                                key="other-lang"
                                onClick={() => handleLanguageSelect('Other')}
                                className="px-5 py-3 hover:bg-[#FDFBF7] cursor-pointer flex items-center justify-between group border-t border-gray-50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl flex items-center justify-center w-6"><PenLine className="w-4 h-4"/></span>
                                    <span className={`font-medium group-hover:text-[#D4AF37] ${formData.lang === 'Other' ? 'text-[#D4AF37]' : 'text-gray-600'}`}>
                                        {t('lang_other')}
                                    </span>
                                </div>
                                {formData.lang === 'Other' && <Check className="w-4 h-4 text-[#D4AF37]" />}
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {formData.lang === 'Other' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    name="customLang"
                                    placeholder={t('lang_other_placeholder')}
                                    value={formData.customLang}
                                    onChange={handleChange}
                                    maxLength={15} 
                                    className="w-full px-5 py-3 rounded-xl border-2 border-[#D4AF37]/30 bg-[#FDFBF7] focus:border-[#D4AF37] outline-none text-[#2D2A26] pr-12"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                    {formData.customLang.length}/15
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('recipient_label')}</label>
                <input
                    type="text"
                    name="recipient"
                    placeholder={t('recipient_placeholder')}
                    required
                    value={formData.recipient}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all"
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('occasion_label')}</label>
                <input
                    type="text"
                    name="occasion"
                    placeholder={t('occasion_placeholder')}
                    required
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all"
                />
            </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-serif font-bold text-[#2D2A26]">
            {t('step2_title')} <span className="text-red-400">*</span>
            </h3>
        </div>
        <div className="relative">
            <textarea
            name="story"
            rows={6}
            placeholder={t('story_placeholder')}
            required
            value={formData.story}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all resize-none text-lg leading-relaxed"
            />
            <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white px-2 py-1 rounded-md border">
                {t('min_chars')}
            </div>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
        <h3 className="text-lg font-bold text-[#2D2A26] mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" /> {t('contact_title')}
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
                type="text"
                name="name"
                placeholder={t('name_placeholder')}
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#D4AF37] outline-none"
            />
            <input
                type="email"
                name="email"
                placeholder={t('email_placeholder')}
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#D4AF37] outline-none"
            />
        </div>

       <div className="mt-8 mb-6 pt-6 border-t border-gray-100">
            <label className="text-sm font-bold text-gray-700 ml-1 mb-2 block flex items-center gap-2">
                <PenLine className="w-4 h-4 text-[#D4AF37]" /> {t('promo_label')}
            </label>
            <div className="relative max-w-sm">
                <input
                    type="text"
                    name="promoCode"
                    placeholder={t('promo_placeholder')}
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value.toUpperCase() })}
                    className={`w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all font-mono tracking-widest ${promoError ? 'border-red-500' : 'border-gray-200'}`}
                />
            </div>
            {promoError ? (
                <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-red-500 text-xs mt-1 font-bold"
                >
                    {t('invalid_promo_error') || 'Invalid promo code'}
                </motion.p>
            ) : (
                <p className="mt-2 ml-1 text-[10px] text-gray-400 font-medium">
                    {t('promo_applied_hint')}
                </p>
            )}
        </div>

        <button
            type="submit"
            disabled={loading || !formData.genre || formData.story.length < 10}
            className="w-full bg-[#2D2A26] text-white font-bold text-xl py-5 rounded-xl hover:bg-[#D4AF37] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl"
        >
            {loading ? (
                <>
                    <Loader2 className="animate-spin" /> {t('processing')}
                </>
            ) : (
                <>
                    {t('create_button')}
                </>
            )}
        </button>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <AlertCircle className="w-3 h-3" /> {t('secure_badge')}
        </div>
      </section>

    </form>
  )
}

export default OrderForm
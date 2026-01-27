'use client'
import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const activeLocale = pathname.split('/')[1] || 'es'

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ]

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center text-sm font-medium select-none">
        {languages.map((lang, index) => {
            const isActive = activeLocale === lang.code

            return (
                <div key={lang.code} className="flex items-center">
                    <button 
                        onClick={() => switchLanguage(lang.code)}
                        className={`transition-colors uppercase tracking-wide
                            ${isActive 
                                ? "text-[#D4AF37] cursor-default"
                                : "text-[#86827E] hover:text-[#2D2A26] cursor-pointer"
                            }
                        `}
                    >
                        {lang.label}
                    </button>

                    {index < languages.length - 1 && (
                        <span className="mx-2 text-[#D4AF37]/40">|</span>
                    )}
                </div>
            )
        })}
    </div>
  )
}
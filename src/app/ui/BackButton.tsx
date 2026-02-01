'use client';

import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function BackButton() {
  const t = useTranslations('Common');

  return (
    <div className="mb-6 md:mb-8">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors font-medium group"
      >
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
            <ArrowLeft className="w-4 h-4 text-gray-600 group-hover:text-[#D4AF37]" />
        </div>
        <span>{t('back_home')}</span>
      </Link>
    </div>
  );
}
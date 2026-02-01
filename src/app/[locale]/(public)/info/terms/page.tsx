import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import BackButton from '@/app/ui/BackButton';

export const metadata: Metadata = {
  title: "Terms of Service | SongToGift",
  description: "Review the Terms of Service for SongToGift. Understand the rules, rights, and responsibilities when using our custom song creation service."
}

const Terms = () => {
  const t = useTranslations('Terms');
  const currentDate = new Date().toLocaleDateString();

  return (
    <main className="pt-16 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        <BackButton/>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2D2A26] mb-6">
          {t('title')}
        </h1>
        
        <p className="text-gray-400 text-sm mb-12">
          {t('last_updated', { date: currentDate })}
        </p>

        <div className="space-y-8 text-[#2D2A26] leading-relaxed font-sans">
          <p className="text-lg">{t('intro')}</p>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#D4AF37]">{t('sec1_title')}</h2>
            <p>{t('sec1_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#D4AF37]">{t('sec2_title')}</h2>
            <p>{t('sec2_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#D4AF37]">{t('sec3_title')}</h2>
            <p>{t('sec3_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#D4AF37]">{t('sec4_title')}</h2>
            <p>{t('sec4_desc')}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#D4AF37]">{t('sec5_title')}</h2>
            <p>{t('sec5_desc')}</p>
          </section>

          <div className="border-t border-gray-100 pt-8 mt-12">
            <h3 className="font-bold text-lg mb-2">{t('contact_title')}</h3>
            <p>{t('contact_desc')}</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Terms
'use client';

import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-deepSlate via-medicalTeal to-deepSlate text-white py-6 border-y border-goldPrimary/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-goldPrimary/20 border border-goldPrimary/40 flex items-center justify-center text-goldLight text-xl">
              <i className="fa-solid fa-phone-flip"></i>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-goldLight font-bold">
                {siteConfig.clinic.name}
              </div>
              <div className="text-lg font-bold text-white font-serif">
                {t('contact_strip_help')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a href={`tel:${siteConfig.clinic.phone}`} className="btn-gold text-sm px-6 py-2.5">
              <i className="fa-solid fa-phone"></i>
              <span>{siteConfig.clinic.phoneDisplay}</span>
              <bdi dir="ltr" className="inline-block [direction:ltr] [unicode-bidi:isolate]">
                {siteConfig.clinic.phoneDisplay}
              </bdi>
            </a>
            <a
              href={siteConfig.clinic.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>{t('contact_strip_whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

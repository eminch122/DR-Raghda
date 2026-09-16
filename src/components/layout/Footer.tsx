'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-deepSlate text-slate-300 pt-16 pb-12 border-t border-goldPrimary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-[58px] w-[200px]">
                <Image
                  src="/media/clinic-logo.png"
                  alt="Logo Cabinet Dentaire Dr Raghda Zribi"
                  fill
                  sizes="200px"
                  className="clinic-logo-footer object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer_bio')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-goldPrimary hover:text-deepSlate transition-all"
                title="Facebook Cabinet dentaire Dr Zribi Raghda"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                href={siteConfig.clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-xs"></i>
              </a>
              <a
                href={siteConfig.social.email}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-goldPrimary hover:text-deepSlate transition-all"
                title="Email"
                aria-label="Email"
              >
                <i className="fa-regular fa-envelope text-xs"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">{t('footer_nav_title')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-goldLight transition-colors">
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('nav_services')}
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-goldLight transition-colors">
                  {t('nav_tech')}
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-goldLight transition-colors">
                  {t('nav_cases')}
                </a>
              </li>
              <li>
                <a href="#cabinet" className="hover:text-goldLight transition-colors">
                  {t('nav_cabinet_dropdown')}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-goldLight transition-colors">
                  {t('nav_reviews')} ({siteConfig.google.totalReviewsCount})
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-goldLight transition-colors">
                  {t('nav_location')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-goldLight transition-colors">
                  {t('nav_contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">{t('footer_specialties_title')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('service_2_title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('service_3_title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('service_1_title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('service_4_title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-goldLight transition-colors">
                  {t('service_5_title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Cabinet Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">{t('footer_cabinet_title')}</h4>
            <p className="text-xs text-slate-400">
              Résidence Cordoba, App. A2.4<br />
              Rue de la Feuille d&apos;Érable, Cité les Pins<br />
              Les Berges du Lac 2, Tunis 1053
            </p>
            <div className="pt-2 text-xs">
              <span className="text-goldLight font-bold block">{t('contact_info_phone_title')} :</span>
              <a
                href={`tel:${siteConfig.clinic.phone}`}
                className="text-white font-bold hover:text-goldLight text-sm block mt-0.5"
              >
                {siteConfig.clinic.phoneDisplay}
                <bdi dir="ltr" className="inline-block [direction:ltr] [unicode-bidi:isolate]">
                  {siteConfig.clinic.phoneDisplay}
                </bdi>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {t('footer_rights')} ({siteConfig.google.overallRating} ★ • {siteConfig.google.totalReviewsCount} avis).
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer_declared')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import Reveal from '@/components/ui/Reveal';

export default function InternationalSection() {
  const { t } = useLanguage();

  const internationalWhatsAppUrl = `https://wa.me/${siteConfig.clinic.whatsappNumber}?text=Bonjour%20Dr%20Zribi,%20je%20r%C3%A9side%20%C3%A0%20l'%C3%A9tranger%20et%20je%20souhaite%20des%20renseignements%20pour%20des%20soins%20lors%20de%20mon%20passage%20%C3%A0%20Tunis.`;
  const emailUrl = `mailto:${siteConfig.clinic.email}?subject=Renseignements%20Soins%20Dentaires%20-%20Patient%20International`;

  return (
    <section id="international" className="py-20 md:py-28 bg-deepSlate text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="tourism-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-goldPrimary/20 text-goldLight border border-goldPrimary/30 text-xs font-bold uppercase tracking-wider">
                {t('tourism_badge')}
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                {t('tourism_title')}
              </h2>

              <p className="text-slate-300 leading-relaxed">{t('tourism_subtitle')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-goldPrimary/40 hover:-translate-y-0.5">
                  <div className="text-goldPrimary font-serif text-2xl font-bold mb-1">{t('tourism_h1_val')}</div>
                  <div className="text-xs text-slate-300">
                    {t('tourism_h1_lbl')}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-goldPrimary/40 hover:-translate-y-0.5">
                  <div className="text-goldPrimary font-serif text-2xl font-bold mb-1">{t('tourism_h2_val')}</div>
                  <div className="text-xs text-slate-300">
                    {t('tourism_h2_lbl')}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-goldPrimary/40 hover:-translate-y-0.5">
                  <div className="text-goldPrimary font-serif text-2xl font-bold mb-1">{t('tourism_h3_val')}</div>
                  <div className="text-xs text-slate-300">
                    {t('tourism_h3_lbl')}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={internationalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{t('tourism_cta_whatsapp')}</span>
                </a>
                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white border-2 border-white hover:bg-white hover:text-deepSlate transition-all cursor-pointer shadow-sm"
                >
                  <i className="fa-regular fa-envelope"></i>
                  <span>{siteConfig.clinic.email}</span>
                </a>
              </div>
            </div>

            {/* Right: Useful Info */}
            <div className="lg:col-span-5 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-serif font-bold text-xl text-goldLight">
                {t('tourism_org_title')}
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-emerald-400"></i>
                  <span>{t('tourism_org_p1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-emerald-400"></i>
                  <span>{t('tourism_org_p2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-emerald-400"></i>
                  <span>{t('tourism_org_p3')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check text-emerald-400"></i>
                  <span>{t('tourism_org_p4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

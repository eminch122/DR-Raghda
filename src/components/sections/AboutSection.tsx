'use client';

import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Real Timelapse Video of Doctor Working */}
          <Reveal direction="right" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="video-frame-luxury aspect-[3/4] relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/media/cabinet-doctor-office.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/media/doctor-timelapse.mp4" type="video/mp4" />
                </video>

                {/* Clean Video Bottom Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-12">
                  <div className="text-white">
                    <div className="text-[0.72rem] uppercase tracking-wider text-goldLight font-bold">
                      {t('about_video_badge')}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg mt-0.5">
                      {t('about_video_title')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Tag */}
              <div className="absolute -top-4 -right-4 bg-deepSlate text-white p-3.5 rounded-2xl border border-goldPrimary/40 shadow-xl max-w-xs hidden sm:block z-10">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-teeth-open text-goldPrimary text-xl"></i>
                  <div className="text-xs">
                    <span className="font-bold text-goldLight block">{t('doctor_title')}</span>
                    {t('doctor_role')}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Bio & Practical Information */}
          <Reveal direction="left" delay={100} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-goldLight/20 text-goldDark text-xs font-bold uppercase tracking-wider">
              {t('about_badge')}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-deepSlate">
              {t('doctor_title')}
            </h2>
            <div className="text-sm font-semibold text-medicalTeal uppercase tracking-wide">
              {t('doctor_role')}
            </div>

            <p className="text-slate-600 leading-relaxed">
              {t('doctor_bio_1')}
            </p>

            <p className="text-slate-600 leading-relaxed">
              {t('doctor_bio_2')}
            </p>

            {/* 4 Verified Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-porcelain border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="w-10 h-10 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-cube"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-deepSlate">{t('about_p1_title')}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('about_p1_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-porcelain border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="w-10 h-10 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-deepSlate">{t('about_p2_title')}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('about_p2_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-porcelain border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="w-10 h-10 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-tooth"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-deepSlate">{t('about_p3_title')}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('about_p3_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-porcelain border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="w-10 h-10 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-lg">
                  <i className="fa-solid fa-pump-medical"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-deepSlate">{t('about_p4_title')}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('about_p4_desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                <i className="fa-regular fa-calendar-check text-goldPrimary"></i>
                <span>{t('about_cta')}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

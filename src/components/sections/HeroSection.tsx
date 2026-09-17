'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useVideoModal } from '@/context/VideoModalContext';
import Reveal from '@/components/ui/Reveal';
import { videoUrl } from '@/lib/media';

export default function HeroSection() {
  const { t } = useLanguage();
  const { openModal } = useVideoModal();

  return (
    <section id="hero" className="relative pt-10 pb-20 md:py-24 overflow-hidden pattern-dots">
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(197,168,128,0.15) 0%, rgba(197,168,128,0) 70%)' }}
      ></div>
      <div
        className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(17,66,70,0.10) 0%, rgba(17,66,70,0) 70%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Quality Badge */}
            <Reveal className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-goldPrimary/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-goldDark"></span>
              <span className="text-xs sm:text-sm font-semibold text-deepSlate">
                {t('hero_badge')}
              </span>
            </Reveal>

            {/* Main Headline */}
            <Reveal delay={100} as="span" className="block">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-deepSlate leading-[1.15] tracking-tight">
                {t('hero_title')}
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={200} as="span" className="block">
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t('hero_subtitle')}
              </p>
            </Reveal>

            {/* Dual Action Buttons */}
            <Reveal delay={300} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#contact" className="btn-primary text-base px-8 py-4 shadow-xl">
                <i className="fa-regular fa-calendar-check text-goldPrimary"></i>
                <span>{t('hero_cta_book')}</span>
              </a>

              <button
                type="button"
                onClick={() => openModal(videoUrl('cabinet-tour.mp4'))}
                className="btn-outline text-base px-7 py-3.5 group cursor-pointer"
              >
                <i className="fa-solid fa-play text-goldDark group-hover:scale-110 transition-transform"></i>
                <span>{t('hero_cta_tour')}</span>
              </button>
            </Reveal>

            {/* Verified Clinical Highlights Strip */}
            <Reveal delay={400} className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-8 border-t border-slate-200/80">
              <div className="p-3.5 bg-white/80 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl text-deepSlate leading-none">
                  <i className="fa-solid fa-cube text-medicalTeal text-base w-5 text-center flex-shrink-0"></i>
                  <span>{t('hero_highlight_scan')}</span>
                </div>
                <div className="text-[0.72rem] text-slate-500 font-medium mt-1.5 pl-7">
                  {t('hero_highlight_scan_desc')}
                </div>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl text-medicalTeal leading-none">
                  <i className="fa-solid fa-wand-magic-sparkles text-goldDark text-base w-5 text-center flex-shrink-0"></i>
                  <span>{t('hero_highlight_flash')}</span>
                </div>
                <div className="text-[0.72rem] text-slate-500 font-medium mt-1.5 pl-7">
                  {t('hero_highlight_flash_desc')}
                </div>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl text-deepSlate leading-none">
                  <i className="fa-solid fa-teeth text-medicalTeal text-base w-5 text-center flex-shrink-0"></i>
                  <span>{t('hero_highlight_aligners')}</span>
                </div>
                <div className="text-[0.72rem] text-slate-500 font-medium mt-1.5 pl-7">
                  {t('hero_highlight_aligners_desc')}
                </div>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
                <div className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl text-goldDark leading-none">
                  <i className="fa-solid fa-tooth text-rose-500 text-base w-5 text-center flex-shrink-0"></i>
                  <span>{t('hero_highlight_implants')}</span>
                </div>
                <div className="text-[0.72rem] text-slate-500 font-medium mt-1.5 pl-7">
                  {t('hero_highlight_implants_desc')}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hero Video Portrait Frame */}
          <Reveal direction="left" delay={200} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Gold Outer Border Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-goldPrimary via-medicalTeal to-goldPrimary rounded-3xl opacity-30 blur-lg animate-pulse"></div>

              {/* Video Container */}
              <div className="video-frame-luxury aspect-[4/5] relative">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={videoUrl('doctor-photoshoot.mp4')} type="video/mp4" />
                </video>

                {/* Floating Practitioner Overlay Badge */}
                <div className="video-overlay-badge">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                        {t('doctor_title')}
                      </h3>
                      <p className="text-xs text-goldLight">
                        {t('doctor_role')}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-goldPrimary/30 border border-goldPrimary/60 flex items-center justify-center text-goldLight">
                      <i className="fa-solid fa-stethoscope"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge Top Right */}
              <div className="absolute -top-4 -right-4 bg-white/95 px-4 py-2.5 rounded-2xl border border-goldPrimary/40 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-deepSlate">{t('hero_verified_badge')}</div>
                  <div className="text-[0.68rem] text-slate-500">Tunis Médicale &amp; Med.tn</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

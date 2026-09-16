'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { techItems } from '@/data/techShowcase';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TechShowcase() {
  const { t } = useLanguage();
  const [activeKey, setActiveKey] = useState('scanner');

  const currentTech = techItems.find((item) => item.key === activeKey) || techItems[0];

  const currentIndex = techItems.findIndex((item) => item.key === activeKey);
  const currentNum = currentIndex >= 0 ? currentIndex + 1 : 1;
  const currentBadge = t(`tech_${currentNum}_badge`) || currentTech.badge;
  const currentTitle = t(`tech_${currentNum}_title`) || currentTech.title;
  const currentDesc = t(`tech_${currentNum}_desc`) || currentTech.description;
  const currentFeatures = [
    t(`tech_${currentNum}_f1`) || currentTech.features[0],
    t(`tech_${currentNum}_f2`) || currentTech.features[1],
    t(`tech_${currentNum}_f3`) || currentTech.features[2],
  ];

  return (
    <section id="tech" className="py-20 md:py-28 bg-deepSlate text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={t('tech_badge')}
          title={t('tech_title')}
          subtitle={t('tech_subtitle')}
          dark
        />

        {/* Tech Interactive Tabs Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {techItems.map((tech, index) => {
            const isActive = tech.key === activeKey;
            const num = index + 1;
            const badge = t(`tech_${num}_badge`) || tech.badge;
            const label = t(`tech_${num}_label`) || tech.techLabel;
            const summary = t(`tech_${num}_summary`);

            return (
              <div
                key={tech.key}
                onClick={() => setActiveKey(tech.key)}
                className={`tech-card-item ${isActive ? 'active' : ''}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center text-lg">
                    <i className={`fa-solid fa-${tech.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-xs text-goldLight font-bold uppercase">{label}</div>
                    <h4 className="font-bold text-white text-sm">{badge}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  {summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Large HD Video & Detail Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-goldPrimary/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Left: Expanded HD Video Player */}
          <div className="lg:col-span-7">
            <div className="tech-hero-container relative">
              <video
                key={currentTech.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={currentTech.videoSrc} type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 right-4 bg-deepSlate/90 backdrop-blur-md p-3.5 rounded-xl border border-goldPrimary/30 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-2">
                  <span className="pulse-dot"></span>
                  <span>{currentBadge}</span>
                </span>
                <span className="text-goldLight font-mono">{t('tech_digital')}</span>
              </div>
            </div>
          </div>

          {/* Right: Information & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-goldLight font-bold block mb-1">
                {t('doctor_title')}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentTitle}
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentDesc}
            </p>

            <ul className="space-y-3 pt-2">
              {currentFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <i className="fa-solid fa-check text-emerald-400 mt-1 flex-shrink-0"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a href="#contact" className="btn-gold">
                <i className="fa-regular fa-calendar-check text-slate-900"></i>
                <span>{t('tech_cta')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

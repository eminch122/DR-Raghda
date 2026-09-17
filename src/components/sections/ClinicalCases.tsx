'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { clinicalCases } from '@/data/cases';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function ClinicalCases() {
  const { t } = useLanguage();
  const [activeCaseId, setActiveCaseId] = useState('facette');
  const [sliderPos, setSliderPos] = useState(50); // percentage (0 - 100)
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = clinicalCases.find((c) => c.id === activeCaseId) || clinicalCases[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [updatePosition]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const activeIndex = clinicalCases.findIndex((c) => c.id === activeCaseId);
  const currentCaseNum = activeIndex >= 0 ? activeIndex + 1 : 1;
  const currentTitle = t(`case_${currentCaseNum}_title`) || activeCase.title;
  const currentDesc = t(`case_${currentCaseNum}_desc`) || activeCase.description;

  return (
    <section id="cases" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('cases_badge')}
          title={t('cases_title')}
          subtitle={t('cases_subtitle')}
        />

        {/* Case Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {clinicalCases.map((c, index) => {
            const isActive = c.id === activeCaseId;
            const tabLabel = t(`case_${index + 1}_tab`) || c.tabLabel;
            return (
              <Reveal key={c.id} delay={Math.min(index * 60, 300)}>
                <button
                  type="button"
                  onClick={() => setActiveCaseId(c.id)}
                  className={`case-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <i className={`fa-solid fa-${c.icon} text-xs`}></i>
                  <span>{tabLabel}</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Interactive Split Slider Container */}
        <Reveal className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            id="comparisonContainer"
            className="comparison-slider-container"
            onClick={handleContainerClick}
          >
            {/* Before Layer (Underneath - Full Width) */}
            <div id="comparisonBefore" className="comparison-before">
              {activeCase.beforeType === 'image' ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={activeCase.beforeSrc}
                  alt={`${currentTitle} ${t('cases_before')}`}
                  className="w-full h-full object-contain bg-[#071719]"
                />
              ) : (
                <video
                  key={activeCase.beforeSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={activeCase.beforeSrc} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="comparison-badge badge-before">{t('cases_before')}</div>

            {/* After Layer (Top Clipped) */}
            <div
              id="comparisonAfter"
              className="comparison-after"
              style={{ width: `${sliderPos}%` }}
            >
              <div id="comparisonAfterMedia" className="w-full h-full">
                {activeCase.afterType === 'image' ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={activeCase.afterSrc}
                    alt={`${currentTitle} ${t('cases_after')}`}
                    className="w-full h-full object-contain bg-[#071719]"
                  />
                ) : (
                  <video
                    key={activeCase.afterSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={activeCase.afterSrc} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
            <div className="comparison-badge badge-after">{t('cases_after')}</div>

            {/* Draggable Split Handle */}
            <div
              id="comparisonHandle"
              className="comparison-handle"
              style={{ left: `${sliderPos}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              title="Glisser pour comparer"
            >
              <i className="fa-solid fa-arrows-left-right text-base"></i>
            </div>
          </div>

          {/* Case Description & Notes */}
          <div className="mt-6 p-6 rounded-2xl bg-porcelain border border-goldPrimary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div key={activeCaseId} className="animate-in fade-in slide-in-from-bottom-1 duration-400">
              <h3 id="caseTitle" className="font-serif font-bold text-lg text-deepSlate">
                {currentTitle}
              </h3>
              <p id="caseDescription" className="text-sm text-slate-600 mt-1 max-w-2xl">
                {currentDesc}
              </p>
            </div>
            <a href="#contact" className="btn-primary text-xs whitespace-nowrap">
              <span>{t('cases_cta_book')}</span>
              <i className="fa-solid fa-chevron-right text-goldPrimary text-xs"></i>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { clinicPhotos } from '@/data/clinicGallery';
import { useLanguage } from '@/context/LanguageContext';
import { useVideoModal } from '@/context/VideoModalContext';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import LazyVideo from '@/components/ui/LazyVideo';

export default function CabinetShowcase() {
  const { t } = useLanguage();
  const [activePhotoKey, setActivePhotoKey] = useState('fauteuil');
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const { openModal } = useVideoModal();

  const currentIndex = clinicPhotos.findIndex((p) => p.key === activePhotoKey);
  const currentPhoto = clinicPhotos[currentIndex !== -1 ? currentIndex : 0];

  useEffect(() => {
    // Eagerly pre-warm browser cache for all 5 clinic photos immediately
    clinicPhotos.forEach((photo) => {
      const img = new window.Image();
      img.src = photo.src;
      img.onload = () => {
        setLoadedMap((prev) => ({ ...prev, [photo.key]: true }));
      };
    });
  }, []);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + clinicPhotos.length) % clinicPhotos.length;
    setActivePhotoKey(clinicPhotos[prevIdx].key);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % clinicPhotos.length;
    setActivePhotoKey(clinicPhotos[nextIdx].key);
  };

  const currentTitle = t(`cabinet_photo_${currentPhoto.key}_title`) || currentPhoto.title;
  const currentSubtitle = t(`cabinet_photo_${currentPhoto.key}_subtitle`) || currentPhoto.subtitle;

  return (
    <section id="cabinet" className="py-20 md:py-28 bg-porcelain border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('cabinet_badge')}
          title={t('cabinet_title')}
          subtitle={t('cabinet_subtitle')}
        />

        {/* ======================================================== */}
        {/* BLOCK 1: FULL-WIDTH INTERACTIVE HIGH-DEFINITION GALLERY */}
        {/* ======================================================== */}
        <Reveal className="mb-14 space-y-4">
          {/* Main Photo Cinema Stage */}
          <div className="relative group bg-[#0B2528] rounded-3xl overflow-hidden shadow-2xl border-2 border-goldPrimary/30 w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px]">
            {/* Shimmer skeleton placeholder when current photo is still loading */}
            {!loadedMap[currentPhoto.key] && (
              <div className="absolute inset-0 bg-[#0B2528] flex items-center justify-center animate-pulse z-0">
                <div className="flex flex-col items-center gap-3 text-goldLight/70">
                  <i className="fa-solid fa-camera text-2xl"></i>
                  <span className="text-xs uppercase tracking-wider font-semibold">{t('cabinet_loading')}</span>
                </div>
              </div>
            )}

            {/* Render all photos with unoptimized instant static delivery */}
            {clinicPhotos.map((photo) => {
              const isActive = photo.key === activePhotoKey;
              const altText = t(`cabinet_photo_${photo.key}_alt`) || photo.alt;
              return (
                <div
                  key={photo.key}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={altText}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    priority={true}
                    unoptimized
                    onLoad={() => setLoadedMap((prev) => ({ ...prev, [photo.key]: true }))}
                    className={`object-cover transition-opacity duration-300 ${
                      loadedMap[photo.key] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              );
            })}

            {/* Top Overlay Badges */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between z-20 pointer-events-none">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-deepSlate/85 backdrop-blur-md border border-goldPrimary/40 text-white text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t('cabinet_hd_visit')}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deepSlate/85 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-mono font-medium shadow-lg">
                <i className="fa-solid fa-camera text-goldLight text-[0.75rem]"></i>
                <span>{currentIndex + 1} / {clinicPhotos.length}</span>
              </span>
            </div>

            {/* Prev / Next Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t('cabinet_prev_photo')}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-deepSlate/75 hover:bg-deepSlate text-white border border-white/25 hover:border-goldPrimary flex items-center justify-center backdrop-blur-md transition-all z-20 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <i className="fa-solid fa-chevron-left text-sm sm:text-base"></i>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label={t('cabinet_next_photo')}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-deepSlate/75 hover:bg-deepSlate text-white border border-white/25 hover:border-goldPrimary flex items-center justify-center backdrop-blur-md transition-all z-20 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <i className="fa-solid fa-chevron-right text-sm sm:text-base"></i>
            </button>

            {/* Bottom Gradient Caption Bar */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/55 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 z-20">
              <div className="space-y-1 max-w-2xl">
                <span className="text-[0.72rem] text-goldLight uppercase tracking-wider font-bold block">
                  {t('cabinet_current_space')}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-2xl text-white drop-shadow-md">
                  {currentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 drop-shadow">
                  {currentSubtitle}
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-300 font-medium bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 self-start sm:self-auto">
                <i className="fa-solid fa-hand-pointer text-goldLight text-[0.75rem]"></i>
                <span>{t('cabinet_click_hint')}</span>
              </div>
            </div>
          </div>

          {/* 5 Interactive Space Selector Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-1">
            {clinicPhotos.map((photo) => {
              const isActive = photo.key === activePhotoKey;
              const thumbLabel = t(`cabinet_photo_${photo.key}_thumb`) || photo.thumbLabel;
              const altText = t(`cabinet_photo_${photo.key}_alt`) || photo.alt;
              return (
                <button
                  key={photo.key}
                  type="button"
                  onClick={() => setActivePhotoKey(photo.key)}
                  className={`group text-start rounded-2xl overflow-hidden transition-all duration-300 bg-white border-2 cursor-pointer ${
                    isActive
                      ? 'border-goldPrimary shadow-lg ring-2 ring-goldPrimary/40 -translate-y-1'
                      : 'border-slate-200/80 hover:border-goldPrimary/60 hover:shadow-md'
                  }`}
                >
                  <div className="relative h-20 sm:h-24 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={photo.src}
                      alt={altText}
                      fill
                      sizes="220px"
                      priority={true}
                      unoptimized
                      className={`object-cover transition-transform duration-500 ${
                        isActive ? 'scale-105 brightness-105' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute top-2 right-2 rtl:right-auto rtl:left-2 w-2.5 h-2.5 rounded-full bg-goldPrimary ring-2 ring-white"></span>
                    )}
                  </div>
                  <div className={`p-2.5 text-center transition-colors ${
                    isActive ? 'bg-medicalTeal/10' : 'bg-white'
                  }`}>
                    <span className={`text-xs font-bold block truncate ${
                      isActive ? 'text-medicalTeal' : 'text-slate-800'
                    }`}>
                      {thumbLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* BLOCK 2: DEDICATED IMMERSIVE VIDEO TOUR EXPERIENCE CARD */}
        {/* ======================================================== */}
        <Reveal className="mb-14 rounded-3xl bg-gradient-to-br from-[#0B2528] via-[#0E3337] to-[#071C1E] border-2 border-goldPrimary/35 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-white">
          {/* Decorative ambient background lights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-goldPrimary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-medicalTeal/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Smartphone Vertical Video Reel Mockup (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] rounded-[36px] overflow-hidden shadow-2xl border-4 border-goldPrimary/40 bg-black">
                <LazyVideo
                  src="/media/cabinet-tour.mp4"
                  poster="/media/cabinet-fauteuil-soins.jpg"
                  className="w-full h-full object-cover"
                />

                {/* Ambient Video Overlay & Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 flex flex-col justify-between p-5 pointer-events-none">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deepSlate/85 text-white text-[0.7rem] font-bold border border-goldPrimary/30 backdrop-blur-md">
                      <span className="pulse-dot"></span>
                      <span>{t('cabinet_video_badge')}</span>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
                      <i className="fa-solid fa-video text-xs"></i>
                    </span>
                  </div>

                  {/* Center Play Button for Fullscreen Lightbox */}
                  <div className="text-center pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => openModal('/media/cabinet-tour.mp4')}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-goldGradient text-deepSlate flex items-center justify-center shadow-gold mx-auto group-hover:scale-110 transition-transform cursor-pointer"
                      title={t('cabinet_video_play_title')}
                    >
                      <i className="fa-solid fa-play text-xl sm:text-2xl pl-1 rtl:pl-0 rtl:pr-1"></i>
                    </button>
                    <span className="text-xs text-white/95 font-medium block mt-2.5 drop-shadow">
                      {t('cabinet_video_play_hint')}
                    </span>
                  </div>

                  {/* Bottom Label */}
                  <div className="text-center">
                    <div className="font-serif font-bold text-sm text-goldLight">{t('cabinet_video_doctor')}</div>
                    <div className="text-[0.72rem] text-slate-300">{t('cabinet_video_location')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Context & Key Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-goldPrimary/40 text-goldLight text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <i className="fa-solid fa-vr-cardboard text-sm"></i>
                  <span>{t('cabinet_tour_badge')}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t('cabinet_tour_heading')}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {t('cabinet_tour_desc')}
                </p>
              </div>

              {/* 3 Detailed Clinic Pillars */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-goldPrimary/40 transition-colors flex items-start gap-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 text-lg">
                    <i className="fa-solid fa-microscope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t('cabinet_pillar_tech_title')}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {t('cabinet_pillar_tech_desc')}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-goldPrimary/40 transition-colors flex items-start gap-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 text-lg">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t('cabinet_pillar_hygiene_title')}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {t('cabinet_pillar_hygiene_desc')}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-goldPrimary/40 transition-colors flex items-start gap-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 text-lg">
                    <i className="fa-solid fa-couch"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t('cabinet_pillar_comfort_title')}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {t('cabinet_pillar_comfort_desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openModal('/media/cabinet-tour.mp4')}
                  className="btn-gold text-sm px-6 py-3 shadow-gold cursor-pointer"
                >
                  <i className="fa-solid fa-play text-xs rtl:rotate-180"></i>
                  <span>{t('cabinet_btn_fullscreen')}</span>
                </button>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white border-2 border-white/90 hover:border-white hover:bg-white/15 transition-all cursor-pointer shadow-sm"
                >
                  <i className="fa-regular fa-calendar-check text-goldLight"></i>
                  <span>{t('cabinet_btn_book')}</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ======================================================== */}
        {/* BLOCK 3: 4 PRACTICAL VISITING ACCESS PILLARS             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal delay={0}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
              <div className="w-11 h-11 rounded-xl bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-xl">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm text-deepSlate">{t('cabinet_p1_title')}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t('cabinet_p1_desc')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
              <div className="w-11 h-11 rounded-xl bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-xl">
                <i className="fa-solid fa-shield-virus"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm text-deepSlate">{t('cabinet_p2_title')}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t('cabinet_p2_desc')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
              <div className="w-11 h-11 rounded-xl bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-xl">
                <i className="fa-solid fa-square-parking"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm text-deepSlate">{t('cabinet_p3_title')}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t('cabinet_p3_desc')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium hover:border-goldPrimary/40">
              <div className="w-11 h-11 rounded-xl bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0 text-xl">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm text-deepSlate">{t('cabinet_p4_title')}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t('cabinet_p4_desc')}<br />
                  {t('cabinet_appointment_only')}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

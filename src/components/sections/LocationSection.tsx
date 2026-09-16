'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import SectionHeader from '@/components/ui/SectionHeader';

export default function LocationSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(siteConfig.clinic.address.full)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {
        alert(`Adresse : ${siteConfig.clinic.address.full}`);
      });
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-white border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('location_badge')}
          title={t('location_title')}
          subtitle={t('location_subtitle')}
        />

        {/* Google Maps & Directions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: High-End Interactive Map Container (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-goldPrimary/30 bg-slate-100 h-full min-h-[420px] sm:min-h-[480px] group">
              {/* Google Maps Embed */}
              <iframe
                id="googleMapsIframe"
                src={siteConfig.google.mapsEmbedUrl}
                title="Plan d'accès Google Maps Cabinet Dentaire Dr Raghda Zribi"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>

              {/* Floating Top Clinic Status Pill */}
              <div className="absolute top-4 left-4 z-10 bg-deepSlate/90 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl border border-goldPrimary/30 shadow-lg flex items-center gap-2.5 text-xs pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-goldLight">{siteConfig.clinic.name}</span>
                <span className="text-slate-300 hidden sm:inline">• Lac 2</span>
              </div>

              {/* Floating Bottom Quick Action */}
              <a
                href={siteConfig.google.businessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 z-10 bg-white/95 hover:bg-white text-deepSlate px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-slate-200/80 transition-all flex items-center gap-2 hover:scale-105"
              >
                <i className="fa-solid fa-map-location-dot text-medicalTeal"></i>
                <span>{t('location_enlarge_map')}</span>
              </a>
            </div>
          </div>

          {/* Right: Location Details & Route Actions Card (5 cols on lg, 4 on xl) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-porcelain border-2 border-goldPrimary/30 shadow-elevated space-y-6">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-medicalTeal to-deepSlate text-goldPrimary flex items-center justify-center flex-shrink-0 shadow-md border border-goldPrimary/30 text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-deepSlate leading-tight">
                    {siteConfig.clinic.name}
                  </h3>
                  <p className="text-xs text-goldDark font-bold tracking-wide mt-0.5">
                    Les Berges du Lac 2, Tunis
                  </p>
                </div>
              </div>

              {/* Precise Address Box */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm text-xs text-slate-700 space-y-2.5">
                <div className="flex items-start gap-2.5 font-bold text-deepSlate text-xs sm:text-sm">
                  <i className="fa-solid fa-building text-medicalTeal text-sm mt-0.5 flex-shrink-0"></i>
                  <span>{siteConfig.clinic.address.building}, {siteConfig.clinic.address.floor}</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600">
                  <i className="fa-solid fa-road text-goldDark text-xs mt-0.5 flex-shrink-0"></i>
                  <span>{siteConfig.clinic.address.street}</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-600">
                  <i className="fa-solid fa-city text-goldDark text-xs mt-0.5 flex-shrink-0"></i>
                  <span>{siteConfig.clinic.address.postalCode} {siteConfig.clinic.address.city}</span>
                </div>
              </div>

              {/* Convenience Highlights */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                  <div className="w-7 h-7 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-square-parking text-xs"></i>
                  </div>
                  <span className="font-medium">{t('location_parking')}</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                  <div className="w-7 h-7 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-plane-departure text-xs"></i>
                  </div>
                  <span className="font-medium">{t('location_airport')}</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/70 border border-slate-200/60">
                  <div className="w-7 h-7 rounded-lg bg-medicalTeal/10 text-medicalTeal flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-elevator text-xs"></i>
                  </div>
                  <span className="font-medium">{t('location_elevator')}</span>
                </div>
              </div>
            </div>

            {/* Route & Copy Actions */}
            <div className="space-y-3 pt-5 border-t border-slate-200/80">
              <button
                type="button"
                id="copyAddressBtn"
                onClick={handleCopy}
                className="w-full btn-outline text-xs py-2.5 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-[1.01] active:scale-98 transition-all"
              >
                {copied ? (
                  <>
                    <i className="fa-solid fa-check text-emerald-600 text-sm"></i>
                    <span className="font-bold text-emerald-700">{t('location_copied')}</span>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy text-goldDark"></i>
                    <span>{t('location_copy_btn')}</span>
                  </>
                )}
              </button>

              <a
                href={siteConfig.google.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold text-xs py-3 text-center flex items-center justify-center gap-2 shadow-gold hover:scale-[1.01] active:scale-98 transition-all font-bold"
              >
                <i className="fa-solid fa-diamond-turn-right text-deepSlate"></i>
                <span>{t('location_gmaps_btn')}</span>
              </a>

              <a
                href={`https://waze.com/ul?ll=${siteConfig.clinic.coordinates.lat},${siteConfig.clinic.coordinates.lng}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-google text-xs py-2.5 text-center flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98 transition-all font-semibold"
              >
                <i className="fa-brands fa-waze text-[#33CCFF] text-base"></i>
                <span>{t('location_waze_btn')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


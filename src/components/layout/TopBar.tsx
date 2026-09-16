'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import { Lang } from '@/types';

// Crisp vector SVG Flags for 100% cross-platform compatibility on Windows, Mac, mobile
function FlagFR() {
  return (
    <svg className="w-4 h-3 rounded-xs shadow-xs overflow-hidden flex-shrink-0" viewBox="0 0 3 2">
      <rect width="1" height="2" fill="#002395" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg className="w-4 h-3 rounded-xs shadow-xs overflow-hidden flex-shrink-0" viewBox="0 0 60 30">
      <clipPath id="flag-gb-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="flag-gb-cross">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#flag-gb-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-gb-cross)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagAR() {
  return (
    <svg className="w-4 h-3 rounded-xs shadow-xs overflow-hidden flex-shrink-0" viewBox="0 0 3 2">
      <rect width="3" height="2" fill="#E70013" />
      <circle cx="1.5" cy="1" r="0.6" fill="#FFFFFF" />
      <circle cx="1.5" cy="1" r="0.45" fill="#E70013" />
      <circle cx="1.62" cy="1" r="0.36" fill="#FFFFFF" />
      <polygon
        points="1.58,0.72 1.63,0.88 1.80,0.88 1.66,0.99 1.71,1.15 1.58,1.05 1.45,1.15 1.50,0.99 1.36,0.88 1.53,0.88"
        fill="#E70013"
      />
    </svg>
  );
}

const languages: { code: Lang; label: string; name: string; Flag: () => JSX.Element }[] = [
  { code: 'fr', label: 'FR', name: 'Français', Flag: FlagFR },
  { code: 'en', label: 'EN', name: 'English', Flag: FlagEN },
  { code: 'ar', label: 'AR', name: 'العربية', Flag: FlagAR },
];

export default function TopBar() {
  const { currentLang, setLanguage, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-deepSlate text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-goldPrimary/20 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: status + address */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="pulse-dot"></span>
            <span className="text-emerald-400 font-semibold tracking-wide">
              {t('topbar_status')}
            </span>
          </div>
          <span className="hidden md:block text-slate-500">|</span>
          <span className="hidden md:block text-slate-300 truncate font-medium">
            Résidence Cordoba, 2ème étage, App. A2.4 — Les Berges du Lac 2, Tunis
          </span>
        </div>

        {/* Right: phone + custom language switcher */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={`tel:${siteConfig.clinic.phone}`}
            className="btn-emergency text-white no-underline text-xs"
            aria-label={t('topbar_call')}
          >
            <i className="fa-solid fa-phone-volume text-xs"></i>
            <span>54 670 828</span>
            <bdi dir="ltr" className="inline-block [direction:ltr] [unicode-bidi:isolate]">
              {siteConfig.clinic.phoneDisplay}
            </bdi>
          </a>

          {/* Custom Language Dropdown with Real Vector SVG Flags */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-goldPrimary/30 rounded-full px-3 py-1 text-xs font-bold text-slate-200 cursor-pointer transition-all hover:border-goldPrimary/60"
              aria-expanded={dropdownOpen}
              aria-label="Changer de langue / Change language"
            >
              <currentLangObj.Flag />
              <span>{currentLangObj.label}</span>
              <i
                className={`fa-solid fa-chevron-down text-[0.6rem] text-goldLight transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              ></i>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-36 bg-[#0B2528]/95 backdrop-blur-xl border border-goldPrimary/35 rounded-2xl shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {languages.map(({ code, label, name, Flag }) => {
                  const isSelected = code === currentLang;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setLanguage(code);
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-goldPrimary/20 text-goldLight border border-goldPrimary/30 font-bold'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Flag />
                        <span>{name}</span>
                      </div>
                      {isSelected && <i className="fa-solid fa-check text-[0.65rem] text-goldPrimary"></i>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}


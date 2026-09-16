'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav
      id="mainNav"
      className={`sticky top-0 z-40 glass-header transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo with Official Image */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-[52px] sm:h-[58px] w-[160px] sm:w-[100px]">
              <Image
                src="/media/clinic-logo.png"
                alt="Logo Cabinet Dentaire Dr Raghda Zribi"
                fill
                sizes="(max-width: 640px) 160px, 190px"
                className="object-contain clinic-logo-header transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif font-bold text-lg sm:text-xl 2xl:text-2xl text-deepSlate tracking-tight leading-none group-hover:text-medicalTeal transition-colors">
                {siteConfig.doctor.name}
              </span>
              <span className="text-[0.68rem] 2xl:text-[0.72rem] uppercase tracking-wider text-goldDark font-bold block mt-1">
                {siteConfig.doctor.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Menu Links (Chronologically Ordered Dropdown & Streamlined Hierarchy) */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-2 min-[1360px]:mx-4 gap-1 min-[1150px]:gap-2">
            {/* 1. 'Le Cabinet' Dropdown */}
            <div className="nav-dropdown group">
              <button className="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fa-solid fa-hospital-user text-medicalTeal text-xs"></i>
                <span>{t('nav_cabinet_dropdown')}</span>
                <i className="fa-solid fa-chevron-down text-[0.65rem] text-slate-400 transition-transform duration-200 group-hover:rotate-180"></i>
              </button>
              <div className="nav-dropdown-menu">
                <a href="#about" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon">
                    <i className="fa-solid fa-user-doctor"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t('nav_about')}</div>
                    <div className="nav-dropdown-desc">{t('nav_about_desc')}</div>
                  </div>
                </a>
                <a href="#tech" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon">
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t('nav_tech')}</div>
                    <div className="nav-dropdown-desc">{t('nav_tech_desc')}</div>
                  </div>
                </a>
                <a href="#cabinet" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t('nav_cabinet_dropdown')}</div>
                    <div className="nav-dropdown-desc">{t('nav_cabinet_desc')}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* 2. Primary Item: Soins & Spécialités */}
            <a href="#services" className="nav-link-item">
              {t('nav_services')}
            </a>

            {/* 3. Primary Item: Cas Cliniques */}
            <a href="#cases" className="nav-link-item">
              {t('nav_cases')}
            </a>

            {/* 4. 'Avis & Bilan' Dropdown */}
            <div className="nav-dropdown group">
              <button className="nav-dropdown-btn" aria-haspopup="true" aria-expanded="false">
                <span className="text-amber-500">
                  <i className="fa-solid fa-star text-xs"></i>
                </span>
                <span>{t('nav_reviews_dropdown')}</span>
                <i className="fa-solid fa-chevron-down text-[0.65rem] text-slate-400 transition-transform duration-200 group-hover:rotate-180"></i>
              </button>
              <div className="nav-dropdown-menu">
                <a href="#reviews" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon text-amber-500">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">
                      {t('nav_reviews')} ({siteConfig.google.overallRating} ★)
                    </div>
                    <div className="nav-dropdown-desc">{t('nav_reviews_desc')}</div>
                  </div>
                </a>
                <a href="#simulator" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon text-goldDark">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t('nav_simulator')}</div>
                    <div className="nav-dropdown-desc">{t('nav_simulator_desc')}</div>
                  </div>
                </a>
                <a href="#international" className="nav-dropdown-item">
                  <div className="nav-dropdown-icon text-medicalTeal">
                    <i className="fa-solid fa-plane-departure"></i>
                  </div>
                  <div>
                    <div className="nav-dropdown-title">{t('nav_tourism')}</div>
                    <div className="nav-dropdown-desc">{t('nav_tourism_desc')}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* 5. Primary Item: Accès & Plan */}
            <a href="#location" className="nav-link-item">
              {t('nav_location')}
            </a>
          </div>

          {/* Desktop Action CTA (Visible only at >= 1360px; below 1360px it transitions to the floating action bubble) */}
          <div className="hidden min-[1360px]:flex items-center flex-shrink-0">
            <a href="#contact" className="btn-primary">
              <i className="fa-regular fa-calendar-check text-goldPrimary"></i>
              <span>{t('hero_cta_book')}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobileMenuToggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <i className="fa-solid fa-bars-staggered text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobileMenu"
          className="lg:hidden bg-white/98 border-b border-goldPrimary/20 px-6 py-6 space-y-4 shadow-xl backdrop-blur-lg"
        >
          <div className="space-y-1">
            <div className="text-[0.72rem] uppercase tracking-wider font-bold text-goldDark px-2 py-1">
              {t('nav_cabinet_dropdown')}
            </div>
            <a
              href="#about"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_about')}
            </a>
            <a
              href="#tech"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_tech')}
            </a>
            <a
              href="#cabinet"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('cabinet_title')}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="text-[0.72rem] uppercase tracking-wider font-bold text-goldDark px-2 py-1">
              {t('nav_services')}
            </div>
            <a
              href="#services"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_services')}
            </a>
            <a
              href="#cases"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_cases')}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="text-[0.72rem] uppercase tracking-wider font-bold text-goldDark px-2 py-1">
              {t('nav_reviews_dropdown')}
            </div>
            <a
              href="#reviews"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-2"
            >
              <i className="fa-solid fa-star text-amber-500 text-xs"></i>
              <span>
                {t('nav_reviews')} ({siteConfig.google.overallRating} ★)
              </span>
            </a>
            <a
              href="#simulator"
              onClick={closeMobile}
              className="block font-medium text-medicalTeal font-bold px-2 py-1.5 rounded-lg bg-medicalTeal/5"
            >
              {t('nav_simulator')}
            </a>
            <a
              href="#international"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_tourism')}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#location"
              onClick={closeMobile}
              className="block font-medium text-slate-800 hover:text-medicalTeal px-2 py-1.5 rounded-lg hover:bg-slate-50"
            >
              {t('nav_location')}
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a href="#contact" onClick={closeMobile} className="btn-primary w-full text-center">
              <i className="fa-regular fa-calendar-check text-goldPrimary"></i>
              <span>{t('hero_cta_book')}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

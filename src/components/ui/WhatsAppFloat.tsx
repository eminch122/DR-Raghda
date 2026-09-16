'use client';

import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <div className="floating-actions-container" aria-label="Actions rapides">
      {/* Appointment Floating Bubble - Visible under 1360px */}
      <a
        href="#contact"
        className="appointment-float"
        aria-label={t('hero_cta_book')}
      >
        <i className="fa-regular fa-calendar-check text-2xl text-goldPrimary"></i>
        <span className="floating-tooltip">{t('hero_cta_book')}</span>
      </a>

      {/* WhatsApp Floating Bubble */}
      <a
        href={siteConfig.clinic.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Dr Raghda Zribi"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
        <span className="floating-tooltip">Contacter le Dr. Zribi (WhatsApp)</span>
      </a>
    </div>
  );
}

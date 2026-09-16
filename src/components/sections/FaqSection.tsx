'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { faqItems } from '@/data/faq';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 md:py-28 bg-porcelain border-t border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('faq_badge')}
          title={t('faq_title')}
          subtitle={t('faq_subtitle')}
        />

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const question = t(`faq_q${index + 1}`) || item.question;
            const answer = t(`faq_a${index + 1}`) || item.answer;

            return (
              <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="faq-button"
                  aria-expanded={isOpen}
                >
                  <span>{question}</span>
                  <i
                    className={`fa-solid fa-chevron-down faq-icon text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-goldDark' : ''
                    }`}
                  ></i>
                </button>
                <div
                  className="faq-content transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    paddingBottom: isOpen ? '24px' : '0px',
                  }}
                >
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


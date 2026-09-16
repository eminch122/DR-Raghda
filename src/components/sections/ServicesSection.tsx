'use client';

import { useLanguage } from '@/context/LanguageContext';
import { services } from '@/data/services';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-porcelain border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('services_badge')}
          title={t('services_title')}
          subtitle={t('services_subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const num = index + 1;
            const title = t(`service_${num}_title`) || service.title;
            const description = t(`service_${num}_desc`) || service.description;
            const category = t(`service_${num}_cat`) || service.category;
            const cta = service.isEmergency ? service.ctaText : (t('services_cta') || service.ctaText);

            if (service.isEmergency) {
              return (
                <div key={index} className="service-card group border-rose-200 bg-rose-50/20">
                  <div className="service-icon-wrapper text-rose-600 bg-rose-100">
                    <i className="fa-solid fa-kit-medical"></i>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-deepSlate mb-2.5">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                    {description}
                  </p>
                  <div className="pt-4 border-t border-rose-200 flex items-center justify-between text-xs font-bold text-rose-600">
                    <span>{category}</span>
                    <a href={service.ctaHref} className="hover:underline flex items-center gap-1">
                      {cta} <i className="fa-solid fa-phone"></i>
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="service-card group">
                <div className="service-icon-wrapper">
                  <i className={`fa-solid fa-${service.icon}`}></i>
                </div>
                <h3 className="font-serif font-bold text-xl text-deepSlate mb-2.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-medicalTeal">
                  <span>{category}</span>
                  <a href={service.ctaHref} className="hover:text-goldDark flex items-center gap-1">
                    {cta} <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

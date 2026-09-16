'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import SectionHeader from '@/components/ui/SectionHeader';

const serviceOptions = [
  { key: 'consultation', labelKey: 'contact_service_consultation' },
  { key: 'veneers', labelKey: 'contact_service_veneers' },
  { key: 'aligners', labelKey: 'contact_service_aligners' },
  { key: 'implants', labelKey: 'contact_service_implants' },
  { key: 'whitening', labelKey: 'contact_service_whitening' },
  { key: 'prosthesis', labelKey: 'contact_service_prosthesis' },
  { key: 'care', labelKey: 'contact_service_care' },
  { key: 'emergency', labelKey: 'contact_service_emergency' },
];

const slotOptions = [
  { key: 'morning', labelKey: 'contact_slot_morning' },
  { key: 'afternoon', labelKey: 'contact_slot_afternoon' },
  { key: 'evening', labelKey: 'contact_slot_evening' },
  { key: 'first', labelKey: 'contact_slot_first' },
];

export default function ContactSection() {
  const { t, currentLang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceKey, setServiceKey] = useState('consultation');
  const [date, setDate] = useState('');
  const [slotKey, setSlotKey] = useState('morning');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert(t('contact_form_error_required'));
      return;
    }

    const serviceLabel = t(`contact_service_${serviceKey}`) || serviceKey;
    const slotLabel = t(`contact_slot_${slotKey}`) || slotKey;

    const isAr = currentLang === 'ar';
    const isEn = currentLang === 'en';

    const message = isAr
      ? `مرحباً دكتورة رغدة الزريبي،\n\nأود حجز موعد استشارة في عيادتكم بضفاف البحيرة 2.\n\n🗓️ *تفاصيل الموعد :*\n- المريض : ${name.trim()}\n- الهاتف : ${phone.trim()}\n- البريد الإلكتروني : ${email.trim() || 'غير محدد'}\n- سبب الاستشارة : ${serviceLabel}\n- التاريخ المفضل : ${date || 'في أقرب وقت'}\n- الفترة : ${slotLabel}\n- ملاحظات : ${notes.trim() || 'لا توجد ملاحظات'}\n\nشكراً لتأكيد توفر الموعد.`
      : isEn
      ? `Hello Dr. Raghda Zribi,\n\nI would like to request an appointment at your clinic in Les Berges du Lac 2.\n\n🗓️ *Appointment Details:*\n- Patient: ${name.trim()}\n- Phone: ${phone.trim()}\n- Email: ${email.trim() || 'Not specified'}\n- Reason: ${serviceLabel}\n- Preferred Date: ${date || 'As soon as possible'}\n- Preferred Slot: ${slotLabel}\n- Notes: ${notes.trim() || 'None'}\n\nThank you for confirming availability.`
      : `Bonjour Dr Raghda Zribi,\n\nJe souhaite réserver une consultation à votre cabinet des Berges du Lac 2.\n\n🗓️ *Détails du Rendez-vous :*\n- Patient : ${name.trim()}\n- Téléphone : ${phone.trim()}\n- Email : ${email.trim() || 'Non renseigné'}\n- Motif de consultation : ${serviceLabel}\n- Date souhaitée : ${date || 'Dès que possible'}\n- Créneau : ${slotLabel}\n- Remarques : ${notes.trim() || 'Aucune note particulière'}\n\nMerci de me confirmer la disponibilité du rendez-vous.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.clinic.whatsappNumber}?text=${encoded}`, '_blank');

    setShowSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setDate('');
    setNotes('');

    setTimeout(() => {
      setShowSuccess(false);
    }, 8000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('contact_badge')}
          title={t('contact_title')}
          subtitle={t('contact_subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Online Booking Form */}
          <div className="lg:col-span-7 bg-porcelain p-8 sm:p-10 rounded-3xl border border-goldPrimary/30 shadow-lg">
            {showSuccess && (
              <div
                id="bookingSuccess"
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3"
              >
                <i className="fa-solid fa-circle-check text-xl text-emerald-600"></i>
                <div>
                  <strong>{t('contact_form_success_title')}</strong> {t('contact_form_success_desc')}
                </div>
              </div>
            )}

            <form id="bookingForm" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_name')}
                  </label>
                  <input
                    type="text"
                    id="bookName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact_form_name_placeholder')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_phone')}
                  </label>
                  <input
                    type="tel"
                    id="bookPhone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('contact_form_phone_placeholder')}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white [direction:ltr]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_email')}
                  </label>
                  <input
                    type="email"
                    id="bookEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('contact_form_email_placeholder')}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white [direction:ltr]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_service')}
                  </label>
                  <select
                    id="bookService"
                    value={serviceKey}
                    onChange={(e) => setServiceKey(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.key} value={opt.key}>
                        {t(opt.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_date')}
                  </label>
                  <input
                    type="date"
                    id="bookDate"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t('contact_form_slot')}
                  </label>
                  <select
                    id="bookSlot"
                    value={slotKey}
                    onChange={(e) => setSlotKey(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  >
                    {slotOptions.map((opt) => (
                      <option key={opt.key} value={opt.key}>
                        {t(opt.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('contact_form_notes')}
                </label>
                <textarea
                  id="bookNotes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('contact_form_notes_placeholder')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-base py-4 shadow-xl cursor-pointer">
                <i className="fa-regular fa-paper-plane text-goldPrimary"></i>
                <span>{t('contact_form_submit')}</span>
              </button>
            </form>
          </div>

          {/* Right: Clinic Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-deepSlate text-white p-8 rounded-3xl border border-goldPrimary/30 space-y-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-32">
                  <Image
                    src="/media/clinic-logo.png"
                    alt="Logo"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-goldLight">
                    {siteConfig.doctor.name}
                  </h3>
                  <p className="text-xs text-slate-300">Les Berges du Lac 2, Tunis</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">{t('contact_info_address_title')}</div>
                    <div className="text-slate-300 text-xs mt-0.5">
                      {siteConfig.clinic.address.building}, {siteConfig.clinic.address.floor}
                      <br />
                      {siteConfig.clinic.address.street}
                      <br />
                      <span className="text-goldLight font-semibold">
                        {siteConfig.clinic.address.city}, {t('contact_info_country')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">{t('contact_info_phone_title')}</div>
                    <a
                      href={`tel:${siteConfig.clinic.phone}`}
                      className="text-goldLight text-base font-bold hover:underline block mt-0.5"
                    >
                      <bdi dir="ltr" className="inline-block [direction:ltr] [unicode-bidi:isolate]">
                        {siteConfig.clinic.phoneDisplay}
                      </bdi>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">{t('contact_info_email_title')}</div>
                    <a
                      href={siteConfig.social.email}
                      className="text-slate-300 text-xs hover:text-goldLight block mt-0.5"
                      dir="ltr"
                    >
                      {siteConfig.clinic.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-goldPrimary/20 text-goldLight flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">{t('contact_info_hours_title')}</div>
                    <div className="text-slate-300 text-xs mt-0.5">
                      {t('cabinet_p4_desc')}
                      <br />
                      {t('contact_info_hours_sub')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a href="#location" className="btn-gold text-xs px-5 py-2.5">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <span>{t('contact_btn_map')}</span>
                </a>
                <a
                  href={`https://waze.com/ul?ll=${siteConfig.clinic.coordinates.lat},${siteConfig.clinic.coordinates.lng}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-white border-white text-xs px-5 py-2.5"
                >
                  <i className="fa-brands fa-waze"></i>
                  <span>Waze</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

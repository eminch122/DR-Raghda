'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

export default function SimulatorSection() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [timeline, setTimeline] = useState('');
  const [hasRadio, setHasRadio] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');

  const selectGoal = (val: string) => {
    setGoal(val);
    setTimeout(() => setStep(2), 250);
  };

  const selectTimeline = (val: string) => {
    setTimeline(val);
    setTimeout(() => setStep(3), 250);
  };

  const selectRadio = (val: string) => {
    setHasRadio(val);
    setTimeout(() => setStep(4), 300);
  };

  const handleSendWhatsApp = () => {
    const nameStr = patientName.trim() || 'Patient(e)';
    const phoneStr = patientPhone.trim() || 'Non renseigné';

    const message = `Bonjour Dr Raghda Zribi,\n\nJe souhaite des renseignements pour des soins dentaires à votre cabinet des Berges du Lac 2.\n\n📋 *Détails de ma demande :*\n- Nom : ${nameStr}\n- Contact : ${phoneStr}\n- Motif principal : ${goal || 'Consultation bucco-dentaire'}\n- Délai souhaité : ${timeline || 'Selon disponibilités'}\n- Radiographie disponible : ${hasRadio || 'À voir au cabinet'}\n\nCabinet : Résidence Cordoba, Les Berges du Lac 2.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${siteConfig.clinic.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const progressPercent = (step / 4) * 100;

  return (
    <section id="simulator" className="py-20 md:py-28 bg-porcelain border-t border-slate-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-goldLight/30 text-goldDark text-xs font-bold uppercase tracking-wider">
            {t('sim_badge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepSlate">
            {t('sim_title')}
          </h2>
          <p className="text-slate-600 text-base">{t('sim_subtitle')}</p>
        </div>

        {/* Simulator Card */}
        <div className="bg-white border border-goldPrimary/30 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
            <div
              id="simulatorProgress"
              className="bg-goldGradient h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* STEP 1: Main Goal */}
          {step === 1 && (
            <div id="step1" className="simulator-step active space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-goldDark">{t('sim_step_1_of_3')}</span>
                <span className="text-xs font-semibold text-slate-500">{t('sim_step_1_label')}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-deepSlate">
                {t('sim_step_1_q')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => selectGoal(t('sim_g1_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    goal === t('sim_g1_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_g1_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_g1_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectGoal(t('sim_g2_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    goal === t('sim_g2_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-teeth"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_g2_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_g2_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectGoal(t('sim_g3_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    goal === t('sim_g3_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-tooth"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_g3_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_g3_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectGoal(t('sim_g4_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    goal === t('sim_g4_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-sun"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_g4_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_g4_desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Timeline */}
          {step === 2 && (
            <div id="step2" className="simulator-step active space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-goldDark">{t('sim_step_2_of_3')}</span>
                <span className="text-xs font-semibold text-slate-500">{t('sim_step_2_label')}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-deepSlate">
                {t('sim_step_2_q')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => selectTimeline(t('sim_t1_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    timeline === t('sim_t1_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-rose-500">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_t1_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_t1_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectTimeline(t('sim_t2_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    timeline === t('sim_t2_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-regular fa-calendar"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_t2_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_t2_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectTimeline(t('sim_t3_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    timeline === t('sim_t3_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-plane"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_t3_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_t3_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectTimeline(t('sim_t4_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    timeline === t('sim_t4_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-clipboard-question"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_t4_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_t4_desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Radio Panoramique */}
          {step === 3 && (
            <div id="step3" className="simulator-step active space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-goldDark">{t('sim_step_3_of_3')}</span>
                <span className="text-xs font-semibold text-slate-500">{t('sim_step_3_label')}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-deepSlate">
                {t('sim_step_3_q')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => selectRadio(t('sim_r1_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    hasRadio === t('sim_r1_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-emerald-600">
                    <i className="fa-solid fa-x-ray"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_r1_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_r1_desc')}</div>
                  </div>
                </div>

                <div
                  onClick={() => selectRadio(t('sim_r2_title'))}
                  className={`choice-card flex items-center gap-4 ${
                    hasRadio === t('sim_r2_title') ? 'selected' : ''
                  }`}
                >
                  <div className="text-2xl text-medicalTeal">
                    <i className="fa-solid fa-hospital-user"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t('sim_r2_title')}</div>
                    <div className="text-xs text-slate-500">{t('sim_r2_desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Summary & Instant Dispatch */}
          {step === 4 && (
            <div id="step4" className="simulator-step active space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-deepSlate">
                  {t('sim_summary_title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {t('sim_summary_desc')}
                </p>
              </div>

              <div className="bg-porcelain rounded-2xl p-5 border border-slate-200 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">{t('sim_step_1_label')} :</span>
                  <span id="resGoal" className="font-bold text-deepSlate">
                    {goal}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">{t('sim_step_2_label')} :</span>
                  <span id="resTimeline" className="font-bold text-deepSlate">
                    {timeline}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t('sim_step_3_label')} :</span>
                  <span id="resRadio" className="font-bold text-deepSlate">
                    {hasRadio}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('sim_label_name')}
                  </label>
                  <input
                    type="text"
                    id="simPatientName"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t('sim_placeholder_name')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('sim_label_phone')}
                  </label>
                  <input
                    type="tel"
                    id="simPatientPhone"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder={t('sim_placeholder_phone')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medicalTeal bg-white"
                  />
                </div>
              </div>

              <button
                id="sendSimWhatsApp"
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full btn-gold text-base py-3.5 shadow-lg"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>{t('sim_btn_send_whatsapp')} {siteConfig.clinic.phoneDisplay}</span>
                <span>
                  {t('sim_btn_send_whatsapp')}{' '}
                  <bdi dir="ltr" className="inline-block [direction:ltr] [unicode-bidi:isolate]">
                    {siteConfig.clinic.phoneDisplay}
                  </bdi>
                </span>
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-medicalTeal underline"
                >
                  {t('sim_restart')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

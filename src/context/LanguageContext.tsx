'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';
import { Lang, TranslationDictionary } from '@/types';

interface LanguageContextValue {
  currentLang: Lang;
  setLanguage: (lang: Lang) => void;
  t: (key: string) => string;
  dict: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'dr_zribi_lang';
const VALID_LANGS: Lang[] = ['fr', 'en', 'ar'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Lang>('fr');

  // Restore saved language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && VALID_LANGS.includes(saved)) {
        setCurrentLang(saved);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = saved;
          document.documentElement.setAttribute('dir', saved === 'ar' ? 'rtl' : 'ltr');
        }
      }
    } catch {
      // localStorage may fail in private mode or restricted iframe
    }
  }, []);

  const setLanguage = useCallback((lang: Lang) => {
    if (!VALID_LANGS.includes(lang)) return;
    setCurrentLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // ignore storage errors
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }
  }, []);

  const dict = translations[currentLang] || translations.fr;

  const t = useCallback(
    (key: string): string => {
      return dict[key] ?? translations.fr[key] ?? key;
    },
    [dict]
  );

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}

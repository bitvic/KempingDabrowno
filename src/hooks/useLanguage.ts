import { useState, useEffect } from 'react';
import { translations } from '../data/translations';
import type { Translation } from '../data/translations';

export type { Translation };
export type Language = 'pl' | 'en' | 'de';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pl');

  useEffect(() => {
    // Auto-detect browser language
    const browserLanguage = navigator.language.toLowerCase();
    
    if (browserLanguage.startsWith('en')) {
      setCurrentLanguage('en');
    } else if (browserLanguage.startsWith('de')) {
      setCurrentLanguage('de');
    } else {
      setCurrentLanguage('pl'); // Default fallback
    }
  }, []);

  const switchLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t: Translation = translations[currentLanguage];

  return {
    currentLanguage,
    switchLanguage,
    t
  };
};

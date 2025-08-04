import React, { useState } from 'react';
import { Language } from '../hooks/useLanguage';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pl' as Language, flag: '🇵🇱', name: 'Polski' },
    { code: 'en' as Language, flag: '🇬🇧', name: 'English' },
    { code: 'de' as Language, flag: '🇩🇪', name: 'Deutsch' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Current Language Button */}
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/20 text-white hover:bg-lime/30 transition-all duration-200 backdrop-blur-sm font-open-sans"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm">{currentLang?.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLang?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden transition-all duration-200 z-50 ${
          isOpen 
            ? 'opacity-100 visible transform translate-y-0' 
            : 'opacity-0 invisible transform -translate-y-2'
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              onLanguageChange(lang.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
              currentLanguage === lang.code
                ? 'bg-lime/10 text-lime font-medium'
                : 'text-black hover:bg-lime/5'
            }`}
            role="menuitem"
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-open-sans">{lang.name}</span>
            {currentLanguage === lang.code && (
              <svg className="w-4 h-4 ml-auto text-lime" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Language } from '../hooks/useLanguage';
import { Translation } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { smoothScrollTo } from '../utils/smoothScroll';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentLanguage: Language;
  switchLanguage: (lang: Language) => void;
  t: Translation;
}

export const Navigation: React.FC<NavigationProps> = ({ currentLanguage, switchLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.about, id: 'about' },
    { label: t.offer, id: 'offer' },
    { label: t.gallery, id: 'gallery' },
    { label: t.nav_reviews, id: 'reviews' },
    { label: t.contact, id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="Kemping Dąbrówno Logo" 
             className="h-20 w-auto transition-opacity duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-yellow-accent transition-colors font-open-sans ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher 
              currentLanguage={currentLanguage}
              onLanguageChange={switchLanguage}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-lime hover:text-white transition-colors font-open-sans rounded-xl mx-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-2 border-t border-gray-200">
                <p className="text-sm font-medium text-black mb-2 font-poppins">Language / Język / Sprache</p>
                <div className="flex space-x-2">
                  {['pl', 'en', 'de'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        switchLanguage(lang as any);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        currentLanguage === lang
                          ? 'bg-lime text-white'
                          : 'bg-gray-100 text-black hover:bg-warm-orange hover:text-white'
                      }`}
                    >
                      <span className="text-sm">
                        {lang === 'pl' ? '🇵🇱' : lang === 'en' ? '🇬🇧' : '🇩🇪'}
                      </span>
                      <span className="text-xs">
                        {lang === 'pl' ? 'PL' : lang === 'en' ? 'EN' : 'DE'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

import React from 'react';
import { Translation } from '../hooks/useLanguage';
import { smoothScrollTo } from '../utils/smoothScroll';

interface HeroProps {
  t: Translation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-poppins">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto font-open-sans leading-relaxed">
          {t.heroSubtitle}
        </p>
        <button
          onClick={() => smoothScrollTo('about')}
          className="bg-yellow-accent hover:bg-warm-orange text-black px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-card font-poppins animate-pulse hover:animate-none"
        >
          {t.learnMore}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => smoothScrollTo('about')}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
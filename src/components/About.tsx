import React from 'react';
import { Translation } from '../hooks/useLanguage';
import { Flame, Heart, Users } from 'lucide-react';

interface AboutProps {
  t: Translation;
}

export const About: React.FC<AboutProps> = ({ t }) => {

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            {t.aboutTitle}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-open-sans">
            {t.aboutDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-warm-orange/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Flame className="w-8 h-8 text-warm-orange" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 font-poppins">Codzienne Ogniska</h3>
            <p className="text-gray-700 font-open-sans leading-relaxed">Tradycyjne wieczorne spotkania przy ogniu, które łączą wszystkich gości</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-accent/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-yellow-accent" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 font-poppins">Rodzinna Atmosfera</h3>
            <p className="text-gray-700 font-open-sans leading-relaxed">Miejsce przyjazne dla całej rodziny z atrakcjami dla każdego wieku</p>
          </div>

          <div className="text-center">
            <div className="bg-lime/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-lime" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3 font-poppins">Wspólnota</h3>
            <p className="text-gray-700 font-open-sans leading-relaxed">Poznaj nowych przyjaciół i stwórz niezapomniane wspomnienia</p>
          </div>
        </div>
      </div>
    </section>
  );
};
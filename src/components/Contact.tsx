import React from 'react';
import { Translation } from '../hooks/useLanguage';
import { Phone, MapPin, Facebook } from 'lucide-react';

interface ContactProps {
  t: Translation;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {

  return (
    <section id="contact" className="py-20 bg-dark-green">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 font-open-sans max-w-2xl mx-auto">
            {t.reserveNow}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-accent hover:bg-warm-orange text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-card font-poppins">
              📞 {t.callNow}
            </button>
            <a href="http://www.fb.com/kemping.dabrowno" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-card font-poppins backdrop-blur-sm flex items-center justify-center gap-2">
              <Facebook className="w-6 h-6" /> {t.facebook}
            </a>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🏕️</div>
            <h4 className="text-white font-semibold mb-2 font-poppins">{t.season}</h4>
            <p className="text-white/80 font-open-sans text-sm">{t.seasonInfo}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🚗</div>
            <h4 className="text-white font-semibold mb-2 font-poppins">{t.parking}</h4>
            <p className="text-white/80 font-open-sans text-sm">{t.parkingInfo}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🐕</div>
            <h4 className="text-white font-semibold mb-2 font-poppins">{t.pets}</h4>
            <p className="text-white/80 font-open-sans text-sm">{t.petsInfo}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">📹</div>
            <h4 className="text-white font-semibold mb-2 font-poppins">{t.monitoring}</h4>
            <p className="text-white/80 font-open-sans text-sm">Całodobowo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-lime w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{t.phone}</h3>
            <p className="text-white/90 font-open-sans text-lg">+48 506 991 411</p>
            <p className="text-white/70 font-open-sans text-sm mt-1">{t.dailyHours}</p>
          </div>

          <div className="text-center">
            <div className="bg-lime w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 font-poppins">{t.address}</h3>
            <p className="text-white/90 font-open-sans text-lg">Lidzbarska 3a</p>
            <p className="text-white/90 font-open-sans">14-120 Dąbrówno</p>
            <p className="text-white/70 font-open-sans text-sm mt-1">Warmińsko-Mazurskie</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white/10 rounded-2xl h-80 flex flex-col items-center justify-center backdrop-blur-sm border border-white/20">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-white/90 text-xl font-poppins mb-2">{t.mapTitle}</p>
          <p className="text-white/70 text-sm font-open-sans text-center max-w-md">
            {t.mapDescription}
          </p>
          <a
            href="https://maps.app.goo.gl/xbV1CB5YsnaVponcA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-lime hover:bg-yellow-accent text-white hover:text-black px-6 py-2 rounded-xl font-semibold transition-all duration-300 font-open-sans"
          >
            {t.openInMaps}
          </a>
        </div>
      </div>
    </section>
  );
};

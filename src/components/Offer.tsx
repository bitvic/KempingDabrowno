import React from 'react';
import { Translation } from '../hooks/useLanguage';
import { Waves, Baby, Car, Music, Utensils, Wine } from 'lucide-react';

interface OfferProps {
  t: Translation;
}

export const Offer: React.FC<OfferProps> = ({ t }) => {

  const features = [
    {
      icon: Waves,
      title: t.waterEquipmentTitle,
      description: t.waterEquipmentDescription,
      color: 'bg-light-blue'
    },
    {
      icon: Baby,
      title: t.attractionsTitle,
      description: t.attractionsDescription,
      color: 'bg-subtle-purple'
    },
    {
      icon: Car,
      title: t.landActivitiesTitle,
      description: t.landActivitiesDescription,
      color: 'bg-lime'
    },
    {
      icon: Music,
      title: t.eventsTitle,
      description: t.eventsDescription,
      color: 'bg-warm-orange'
    },
    {
      icon: Utensils,
      title: t.foodTitle,
      description: t.foodDescription,
      color: 'bg-yellow-accent'
    },
    {
      icon: Wine,
      title: t.barTitle,
      description: t.barDescription,
      color: 'bg-dark-green'
    }
  ];

  return (
    <section id="offer" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            {t.offerTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-lime/30"
            >
              <div className={`${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4 font-poppins group-hover:text-lime transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-open-sans text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Translation } from '../hooks/useLanguage';
import { Star } from 'lucide-react';

interface ReviewsProps {
  t: Translation;
}

export const Reviews: React.FC<ReviewsProps> = ({ t }) => {

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-poppins">
            {t.reviewsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-lime/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic font-open-sans text-lg">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-lime font-poppins">
                  — {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6 font-open-sans">{t.joinHappyGuests}</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-accent hover:bg-warm-orange text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-card font-poppins"
          >
            {t.bookYourStay}
          </button>
        </div>
      </div>
    </section>
  );
};